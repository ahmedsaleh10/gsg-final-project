import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link, Stack } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./Styles";
import { SearchMenu } from "./Styles";

const TopNav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activePage, setActivePage] = useState("Home");

  const classes = useStyles();

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
              <SearchMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem className={classes.MenuItem}>
                  <Search />
                </MenuItem>
              </SearchMenu>
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
