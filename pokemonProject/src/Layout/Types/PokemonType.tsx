export type PokeProps = {
  name?: string;
  base_experience?: number;
  stats?: { base_stat: number }[];
  sprites?: {
    other?: {
      dream_world?: {
        front_default?: string;
      };
    };
  };
};
