import GitHubIcon from "@mui/icons-material/GitHub";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import "./main.css";
import { BoxComponent } from "../../../Components";

const FooterComponent = () => {
  return (
    <footer>
      <BoxComponent className="divFooterIcons">
        <a href="https://pokeapi.co/api/v2/pokemon">
          <CatchingPokemonIcon />
        </a>
        <a href="https://github.com/">
          <GitHubIcon />
        </a>
      </BoxComponent>
      <BoxComponent>
        <p className="footerkeyword">Copyrigth @jaao21</p>
      </BoxComponent>
    </footer>
  );
};

export default FooterComponent;
