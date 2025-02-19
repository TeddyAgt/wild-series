import { useLoaderData } from "react-router-dom";
import type { Program } from "../main";

export default function ProgramDetails() {
  const program = useLoaderData() as Program;

  return <h1>program details: ${program.title}</h1>;
}
