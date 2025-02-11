import { useLoaderData } from "react-router-dom";
import type { Course } from "../main";

export default function Programs() {
  const programs = useLoaderData() as Course[];

  return (
    <ul>
      {programs.map((program) => {
        return <li key={program.id}>{program.title}</li>;
      })}
    </ul>
  );
}
