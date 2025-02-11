import { useLoaderData } from "react-router-dom";
import type { Program } from "../main";

export default function Programs() {
  const programs = useLoaderData() as Program[];

  return (
    <ul>
      {programs.map((program) => {
        return <li key={program.id}>{program.title}</li>;
      })}
    </ul>
  );
}
