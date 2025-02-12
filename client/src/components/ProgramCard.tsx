import type { Program } from "../main";

type ProgramCardProps = {
  program: Program;
};

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="program-card">
      <div className="program-card__picture-container">
        <img src={program.poster} alt="" className="program-card__picture" />
      </div>
    </article>
  );
}
