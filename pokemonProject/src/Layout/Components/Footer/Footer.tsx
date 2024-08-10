import GitHubIcon from "@mui/icons-material/GitHub";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import "./main.css";
import { BoxComponent, TypographyComponent } from "../../../Components";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <BoxComponent className="divFooterIcons">
        <a href="https://pokeapi.co/api/v2/pokemon" className="footer-link">
          <CatchingPokemonIcon />
        </a>
        <a href="https://github.com/" className="footer-link">
          <GitHubIcon />
        </a>
      </BoxComponent>
      <BoxComponent>
        <TypographyComponent variant="body2" className="footer-text">
          Copyright &copy; 2024 @jaao21
        </TypographyComponent>
      </BoxComponent>
    </footer>
  );
};

export default FooterComponent;
