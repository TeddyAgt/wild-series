import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

export type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM program");
    return rows as Program[];
  }
}

export default new ProgramRepository();
