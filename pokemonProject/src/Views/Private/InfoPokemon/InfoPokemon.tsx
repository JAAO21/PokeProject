import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { ButtonComponent } from "../../../Components";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const InfoPokemon = () => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const pokemons = useSelector(
    (state: RootState) => state.pokemons.pokemonData
  );

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, row: any) => {
    e.preventDefault();
    console.log("Edit:", row);
    // Lógica para editar
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Tipo</StyledTableCell>
              <StyledTableCell align="right">Xp</StyledTableCell>
              <StyledTableCell align="right">Habilidad</StyledTableCell>
              <StyledTableCell align="right">Daño</StyledTableCell>
              <StyledTableCell align="right">Agregar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons?.map((row: any, index: number) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row?.name || "Not found"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.types[0].type.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.base_experience || 0}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.abilities[0].ability.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.stats[0].base_stat || 0}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <ButtonComponent
                    variant={"contained"}
                    onclick={(e) => handleEdit(e, row)}
                    sx={{ marginRight: "10px" }}
                    buttonText={"Agregar"}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InfoPokemon;
