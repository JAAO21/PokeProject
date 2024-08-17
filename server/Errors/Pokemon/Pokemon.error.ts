import AppError from "../AppError";

class PokemonsError extends AppError {
  constructor(message = "Pokemon not found in the database", status = 404) {
    super(message, status);
  }
}
export default PokemonsError;
