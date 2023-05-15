import SearchIcon from "@mui/icons-material/Search";
import { SearchField, SearchIconWrapper, StyledInputBase } from "./Styles";

const Search = () => {
  return (
    <SearchField>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchField>
  );
};

export default Search;
