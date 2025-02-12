import { useLoaderData } from "react-router-dom";
import ProgramCard from "../components/ProgramCard";
import "../css/Programs.css";
import type { Program } from "../main";

export default function Programs() {
  const programs = useLoaderData() as Program[];

  return (
    <section className="programs-section">
      <h1 className="main-title">Liste des séries</h1>
      <ul className="program-list">
        {programs.map((program) => {
          return (
            <li className="program-list__item" key={program.id}>
              <ProgramCard program={program} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
