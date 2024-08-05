interface ImportMetaEnv {
  readonly VITE_API_POKEAPI: string;
  readonly VITE_API_BACK: string;
  // otras variables de entorno que puedas tener...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
