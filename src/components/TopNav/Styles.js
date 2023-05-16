import theme from "../../theme";
import { createUseStyles } from "react-jss";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { Box, Menu } from "@mui/material";

const useStyles = createUseStyles({
    AppBar: {
      position: "static",
      backgroundColor: "white",
      padding: "0rem 8rem",
      [theme.breakpoints.down("lg")]: {
        padding: "0rem",
      },
      boxShadow: "none",
    },
    Pages: {
      marginRight: "2.5rem",
      color: "gray",
      fontFamily: theme.typography.fontFamily,
      textDecoration: "none",
    },
    Toolbar: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    Badge: {
      "& .MuiBadge-badge": {
        right: -3,
        top: 21,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        backgroundColor: "#ed3558",
        color: "white",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "30px",
      },
    },
    BurgerdIcon: {
      color: theme.palette.primary.main,
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "inline-flex",
      },
    },
    ActivePage: {
      marginRight: "2.5rem",
      color: "gray",
      fontFamily:theme.typography.fontFamily,
      textDecoration: "underline",
      fontWeight: 500,
    },
    SearchField: {
      display: "block",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    MenuItem: {
      padding: 0,
      "& .MuiList-root": {
        padding: 0,
        "&.MuiMenu-list": {
          padding: 0,
        },
      },
    },
  });

  export const SearchField = styled(Box)(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor:"white",
    "&:hover": {
      backgroundColor: "white",
    },
    marginRight: theme.spacing(2),
    marginLeft: "0.8rem",
    width: "100%",
  }));

  export const SearchIconWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  }));

  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "gray",
    width:"100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  }));

  export const SearchMenu = styled(Menu)(({ theme }) => ({
    "& .MuiMenu-list": {
      padding: 0,
    },
    "& .MuiPaper-root":{
      width:"100%"
    },
    "& .MuiBox-root": {
      margin:0,
    }
  }));

  export default useStyles