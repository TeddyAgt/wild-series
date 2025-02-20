import joi from "joi";
import categoryRepository from "../category/categoryRepository";
import type { Program } from "./programRepository";
import programRepository from "./programRepository";

// const programs: Program[] = [
//   {
//     id: 1,
//     title: "The Good Place",
//     synopsis:
//       "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
//     poster:
//       "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
//     country: "USA",
//     year: 2016,
//   },
//   {
//     id: 2,
//     title: "Dark",
//     synopsis:
//       "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
//     poster:
//       "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
//     country: "Allemagne",
//     year: 2017,
//   },
// ];

// Declare the actions
import type { RequestHandler } from "express";

const programSchema = joi.object({
  id: joi.number().integer().positive(),
  title: joi.string().max(255).required(),
  synopsis: joi.string().required(),
  poster: joi.string().uri().required(),
  country: joi.string().max(50).required(),
  year: joi.number().integer().positive().required(),
  category_id: joi.number().integer().positive().required(),
});

const validate: RequestHandler = (req, res, next) => {
  const { error } = programSchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const browse: RequestHandler = async (req, res) => {
  const programsFromDB = await programRepository.readAll();

  if (req.query.q != null) {
    const filteredPrograms = programsFromDB.filter((program) =>
      program.synopsis.includes(req.query.q as string),
    );

    res.json(filteredPrograms);
  } else {
    res.json(programsFromDB);
  }
};

const read: RequestHandler = async (req, res, next) => {
  const id = Number.parseInt(req.params.id);
  const program = await programRepository.read(id);

  if (program) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const program = req.body;

    const affectedRows = await programRepository.update(program);

    if (affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {}
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = req.body;

    const insertId = await programRepository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (error) {
    console.error(error);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await programRepository.delete(id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
  }
};

// Export it to import it somewhere else

export default { browse, read, edit, add, destroy, validate };
