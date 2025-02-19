import { useLoaderData, useNavigate } from "react-router-dom";
import type { Program } from "../main";

export default function ProgramEdit() {
  const program = useLoaderData() as Program;
  const navigate = useNavigate();

  async function handleClickUpdateButton() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/programs/${program.id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(program),
      },
    );

    if (response.status === 204) {
      navigate(`/programs/${program.id}`);
    }
  }

  return (
    <>
      <h1>in program edit</h1>
      <button type="button" onClick={handleClickUpdateButton}>
        update
      </button>
    </>
  );
}
