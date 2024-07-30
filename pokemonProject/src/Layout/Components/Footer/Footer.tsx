import GitHubIcon from "@mui/icons-material/GitHub";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import "./main.css";

const FooterComponent = () => {
  return (
    <footer>
      <div className="divFooterIcons">
        <a href="https://pokeapi.co/api/v2/pokemon">
          <CatchingPokemonIcon />
        </a>
        <a href="https://github.com/">
          <GitHubIcon />
        </a>
      </div>
      <div>
        <p className="footerkeyword">Copyrigth @jaao21</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
