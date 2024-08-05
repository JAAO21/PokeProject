import React, { FC } from "react";
import { ElementType } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

import { ButtonComponent, CardComponent, BoxComponent } from "../index";
import { PokeProps } from "../../Layout/Types/PokemonType";
import "./main.css";

interface PokemonProps {
  data: PokeProps;
  btnData: {
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    Icon: ElementType<SvgIconProps>;
    buttonText: string;
    component: React.ElementType;
    to: string;
  };
}

const PokemonComponent: FC<PokemonProps> = ({ data, btnData }) => {
  const damage =
    data?.stats && data.stats.length > 0 ? data.stats[0].base_stat : 0;
  const image = data?.sprites?.other?.dream_world
    ? data.sprites.other.dream_world.front_default
    : "not img";
  return (
    <CardComponent>
      <BoxComponent
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "13px",
        }}
      >
        <BoxComponent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
          className="containerinfoPokemon"
        >
          <h1>{data?.name || "Not found"}</h1>
          <p>Experiencia {data?.base_experience || 0} </p>

          <p>Daño {damage || 0}</p>
        </BoxComponent>
        <BoxComponent
          sx={{
            flex: 1,
            filter: "drop-shadow(0 0 10px rgba(0,0,0,.8))",
            borderRadius: "0.6rem",
          }}
        >
          <img
            src={image}
            alt={data?.name || "Not found"}
            className="imgPokemon"
          />
        </BoxComponent>
        <BoxComponent
          sx={{
            flex: 1,
            margin: "5px",
          }}
        >
          <ButtonComponent
            component={btnData.component || "button"}
            type="submit"
            variant="contained"
            buttonText={btnData.buttonText}
            onclick={btnData.component ? undefined : btnData.handleClick}
            Icon={btnData.Icon}
            to={btnData.to ? btnData.to : ""}
          />
        </BoxComponent>
      </BoxComponent>
    </CardComponent>
  );
};

export default PokemonComponent;
