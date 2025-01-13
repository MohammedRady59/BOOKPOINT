"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const pages = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/categories" },
  { name: "Authors", path: "/authors" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      location.replace("/signin");
    }
  };

  // الوصول إلى localStorage فقط في بيئة العميل
  const localData =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const userData = localData ? localData : null;

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            className="text-main text-2xl"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            NETH-BOOKPOINT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      textTransform: "capitalize",
                    }}
                  >
                    <Link href={page.path}>{page.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
              {userData ? (
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: "1",
                    gap: "5px",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Link href={"/favorite"}>
                    <FavoriteBorderIcon
                      sx={{ fontSize: "2rem", color: "#115e59" }}
                    />
                  </Link>
                  <Link href={"/cart"}>
                    <AddShoppingCartIcon
                      sx={{ fontSize: "2rem", color: "#115e59" }}
                    />
                  </Link>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px",
                    gap: "4px",
                  }}
                >
                  <Button
                    sx={{ bgcolor: "#115e59", color: "white" }}
                    endIcon={<PersonIcon />}
                  >
                    <Link href={"/signup"}> Sign Up</Link>
                  </Button>
                  <Button
                    className="bg-white text-main hover:bg-main hover:text-white"
                    sx={{
                      border: "1px solid #115e59",
                      bgcolor: "white",
                      color: "#115e59",
                    }}
                    endIcon={<LoginIcon />}
                  >
                    <Link href={"/signin"}> Log in</Link>
                  </Button>
                </Box>
              )}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className="text-main text-lg"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            NETH-BOOKPOINT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="text-background text-sm font-semibold group"
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  color: "black",
                  position: "relative",
                }}
              >
                {page.name == "Categories" ? (
                  <Typography
                    sx={{ fontWeight: "600", color: "black", fontSize: "14px" }}
                  >
                    Categories
                  </Typography>
                ) : (
                  <Link href={page.path}>{page.name}</Link>
                )}
                {page.name == "Categories" && (
                  <ul className="absolute bg-white text-black z-20 left-0 px-4 py-2 text-lg top-10 group-hover:block hidden text-start ">
                    <Link href={"/categories/1"}>
                      <li>Fiction</li>
                    </Link>
                    <Link href={"/categories/2"}>
                      <li>Children</li>
                    </Link>
                    <Link href={"/categories/3"}>
                      <li>Philosophy</li>
                    </Link>
                    <Link href={"/categories/4"}>
                      <li>Self-help</li>
                    </Link>
                    <Link href={"/categories/5"}>
                      <li>History</li>
                    </Link>
                  </ul>
                )}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              gap: {
                xs: "5px",
                sm: "10px",
              },
              alignItems: "center",
            }}
          >
            {userData ? (
              <>
                <Link href={"/favorite"}>
                  <FavoriteBorderIcon
                    sx={{ fontSize: "2rem", color: "#115e59" }}
                  />
                </Link>
                <Link href={"/cart"}>
                  <AddShoppingCartIcon
                    sx={{ fontSize: "2rem", color: "#115e59" }}
                  />
                </Link>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ bgcolor: "#115e59", color: "white" }}
                  >
                    My Account
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>My Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              </>
            ) : (
              <>
                <Button
                  sx={{ bgcolor: "#115e59", color: "white" }}
                  endIcon={<PersonIcon />}
                >
                  <Link href={"/signup"}> Sign Up</Link>
                </Button>
                <Button
                  className="bg-white text-main hover:bg-main hover:text-white"
                  sx={{
                    border: "1px solid #115e59",
                    color: "#115e59",
                    bgcolor: "white",
                  }}
                  endIcon={<LoginIcon />}
                >
                  <Link href={"/signin"}> Log in</Link>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
