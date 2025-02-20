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

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from category where id = ?",
      [id],
    );
  }

  async create(category: Omit<Category, "id">) {
    // Execute the SQL INSERT query to add a new category to the "category" table
    const [result] = await databaseClient.query<Result>(
      "insert into category (name) values (?)",
      [category.name],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async update(category: Category) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "update category set name = ? where id = ?",
      [category.name, category.id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new CategoryRepository();
