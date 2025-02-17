import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

type Category = {
  id: number;
  name: string;
};

class CategoryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM category");
    return rows as Category[];
  }
}

export default new CategoryRepository();
