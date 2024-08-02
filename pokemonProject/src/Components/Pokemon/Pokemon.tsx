import React, { FC } from "react";
import { ElementType } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

import { ButtonComponent, CardComponent } from "../index";
import { PokeProps } from "../../Layout/Types/PokemonType";
import "./main.css";

interface PokemonProps {
  data: PokeProps;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  Icon: ElementType<SvgIconProps>;
  buttonText: string;
  component: React.ElementType;
  to: string;
}

const PokemonComponent: FC<PokemonProps> = ({
  data,
  handleClick,
  Icon,
  buttonText,
  component,
  to,
}) => {
  const damage =
    data?.stats && data.stats.length > 0 ? data.stats[0].base_stat : 0;
  const image = data?.sprites?.other?.dream_world
    ? data.sprites.other.dream_world.front_default
    : "not img";
  return (
    <CardComponent>
      <div className="containerPokemon">
        <div className="containerinfoPokemon">
          <h1>{data?.name || "Not found"}</h1>
          <p>Experiencia {data?.base_experience} </p>

          <p>Daño {damage}</p>
        </div>
        <div className="containerImgPokemon">
          <img
            src={image}
            alt={data?.name || "Not found"}
            className="imgPokemon"
          />
        </div>
        <div className="containerBtnPokemon">
          <ButtonComponent
            component={component || "button"}
            type="submit"
            variant="contained"
            buttonText={buttonText}
            onclick={component ? undefined : handleClick}
            Icon={Icon}
            to={to ? to : ""}
          />
        </div>
      </div>
    </CardComponent>
  );
};

export default PokemonComponent;
