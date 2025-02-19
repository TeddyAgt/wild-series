import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProgramDelete() {
  const [id, setId] = useState<string | number>();
  const navigate = useNavigate();

  async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/programs/${id}`,
          {
            method: "delete",
          },
        );

        if (response.status === 204) {
          navigate("/programs");
        }
      } catch (error) {}
    }
  }

  return (
    <>
      <h1>in program delete</h1>
      <form method="delete" onSubmit={handleSubmitForm}>
        <input
          type="number"
          name=""
          id=""
          value={id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setId(e.target.value)
          }
        />
        <button type="submit">supprimer</button>
      </form>
    </>
  );
}
