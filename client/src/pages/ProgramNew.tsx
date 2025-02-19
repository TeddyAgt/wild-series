import { useNavigate } from "react-router-dom";
import type { Program } from "../main";

export default function ProgramNew() {
  const navigate = useNavigate();
  const newProgram: Omit<Program, "id"> = {
    title: "Jojo's Bizarre Adventure",
    synopsis:
      "JoJo's Bizarre Adventure suit les aventures de la famille Joestar sur plusieurs générations, chaque génération ayant son « JoJo ».",
    poster:
      "https://adala-news.fr/wp-content/uploads/2012/07/Jojo-bizarre-adventure-visual-art.jpg",
    country: "Japon",
    year: 2012,
    category_id: 3,
  };

  async function handleClickAddButton() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/programs`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProgram),
      },
    );

    if (response.ok) {
      const data = await response.json();
      navigate(`/programs/${data.insertId}`);
    }
  }

  return (
    <>
      <h1>dans program new</h1>
      <button type="button" onClick={handleClickAddButton}>
        ajouter
      </button>
    </>
  );
}
