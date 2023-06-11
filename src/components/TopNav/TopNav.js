import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useState } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./Styles";
import { SearchMenu } from "./Styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
  Badge,
  Link,
  Stack,
  } from "@mui/material";
import { useNavigate } from "react-router";
import FavouriteContext from "../../contexts/FavouritesContext";
import CartContext from "../../contexts/CartContext";
  
const TopNav = () => {
  const favourite = useContext(FavouriteContext)
  const cart = useContext(CartContext)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activePage, setActivePage] = useState(window.location.pathname.substring(1));
  activePage === "" && setActivePage("Home")
  const navigate = useNavigate()
  const classes = useStyles();

  const pages = ["Home", "Men", "Women", "Kids", "Blogs"];

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
    <AppBar className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbar}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
              className={classes.burgerdIcon}
            >
              <MenuIcon  />
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
              className={classes.burgerdIcon}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    onClick={() => {
                      setActivePage(page)
                      page === 'Home' ? navigate('/') : navigate(`/${page}`)
                    }}
                    className={
                      activePage === page ? classes.activePage : classes.pages
                    }
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          <Box>
            <img src="/images/logo.jpg" alt="logo" />
          </Box>

          <Stack display={{ xs: "none", md: "block" }}>
            {pages.map((page) => (
              <Link
                variant="body1"
                className={
                  activePage === page ? classes.activePage : classes.pages
                }
                key={page}
                onClick={() => {
                  setActivePage(page)
                  page === 'Home' ? navigate('/') : navigate(`/${page}`)
                }}
              >
                {page}
              </Link>
            ))}
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <Stack spacing={2.5} direction="row">
              <Link onClick={()=> navigate('/favourite')}>
                <Badge
                  badgeContent={favourite.badgeNumber}
                  showZero
                  className={classes.badge}
                  max={99}
                >
                  <FavoriteOutlinedIcon />
                </Badge>
              </Link>
              <Link onClick={()=> navigate('/cart')}>
                <Badge
                  badgeContent={cart.badgeNumber}
                  showZero
                  className={classes.badge}
                  max={99}
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
              <Stack className={classes.burgerdIcon}>
                <IconButton onClick={handleClick}>
                  <SearchIcon
                    fontSize="large"
                    className={classes.burgerdIcon}
                  />
                </IconButton>
              </Stack>
              <SearchMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem className={classes.menuItem}>
                  <Search />
                </MenuItem>
              </SearchMenu>
            </Stack>
            <Stack className={classes.searchField}>
              <Search />
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;
