import {
  BoxComponent,
  CardComponent,
  TypographyComponent,
} from "../../../Components";

const DashBoard = () => {
  return (
    <BoxComponent sx={{ display: "flex", gap: "15px" }}>
      <CardComponent>
        <BoxComponent>Grafico data de pokemons por tipo</BoxComponent>
      </CardComponent>
      <BoxComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          textAlign: "center",
        }}
      >
        <CardComponent
          sx={{ backgroundColor: "radial-gradient(#0000002b, transparent)" }}
        >
          <BoxComponent>
            <TypographyComponent variant="h5">
              Cantidad de pokemons
            </TypographyComponent>
            <TypographyComponent variant="h6">0</TypographyComponent>
          </BoxComponent>
        </CardComponent>
        <CardComponent>
          <BoxComponent>
            <TypographyComponent variant="h5">
              Tipos de pokemon
            </TypographyComponent>
            <TypographyComponent variant="h6">0</TypographyComponent>
          </BoxComponent>
        </CardComponent>
        <CardComponent>
          <BoxComponent>
            <TypographyComponent variant="h5">
              Pokemon con mas daño y vida
            </TypographyComponent>
            <TypographyComponent variant="h6">Charmander</TypographyComponent>
          </BoxComponent>
        </CardComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default DashBoard;
