import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { createUseStyles } from "react-jss";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link, Stack } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";

const TopNav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activePage, setActivePage] = useState("Home");

  const theme = useTheme();
  const styles = createUseStyles({
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
      fontFamily: theme.typography.fontFamily,
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
  const classes = styles();

  const pages = ["Home", "Mens", "Womens", "Kids", "Blogs"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.AppBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.Toolbar}>
          <Stack>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon className={classes.BurgerdIcon} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className={classes.BurgerdIcon}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    onClick={() => setActivePage(page)}
                    className={
                      activePage === page ? classes.ActivePage : classes.Pages
                    }
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
          <Box>
            <img src="/images/logo.jpg" alt="logo" />
          </Box>

          <Stack display={{ xs: "none", md: "block" }}>
            {pages.map((page) => (
              <Link
                variant="body"
                className={
                  activePage === page ? classes.ActivePage : classes.Pages
                }
                key={page}
                onClick={() => setActivePage(page)}
              >
                {page}
              </Link>
            ))}
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <Stack spacing={2.5} direction="row">
              <Link>
                <Badge
                  badgeContent={0}
                  showZero
                  className={classes.Badge}
                  max={99}
                >
                  <FavoriteOutlinedIcon />
                </Badge>
              </Link>
              <Link>
                <Badge
                  badgeContent={0}
                  showZero
                  className={classes.Badge}
                  max={99}
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
              <Stack className={classes.BurgerdIcon}>
                <IconButton onClick={handleClick}>
                  <SearchIcon
                    fontSize="large"
                    className={classes.BurgerdIcon}
                  />
                </IconButton>
              </Stack>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem className={classes.MenuItem}>
                  <Search />
                </MenuItem>
              </Menu>
            </Stack>
            <Stack className={classes.SearchField}>
              <Search />
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;
