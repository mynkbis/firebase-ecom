import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import SignoutButton from "./signOut"
import { NavLink } from 'react-router-dom'

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}));


const Navbar = () => {
const [user, setUser] = React.useState({})

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [anchorElUser, setAnchorElUser] = React.useState(null);  
  
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // eslint-disable-next-line no-unused-vars
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // eslint-disable-next-line no-unused-vars
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


React.useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)     
        })
  return () => unsubscribe();        
   },[])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
                }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {
                    <Box>
                      {/* <Box sx={{ mr: 8 }}>
                        <Link style={{ color: "Blue", textDecoration: "none" }} to="/home" >
                          Home
                          </Link>
                        </Box> */}
                      <Box sx={{ mr: 8, pt: 2 }}>
                        <Link style={{ color: "Blue", textDecoraton: "none" }} to="./About" >
                          About
                        </Link>
                      </Box>
                      <Box sx={{ mr: 8, pt: 2 }}>
                        {/* conditon for user to show screen if user is logged in or not */}
                        {!user && <Link style={{ color: "Blue", textDecoration: "none" }} to="./">
                          Login
                        </Link>
                        }
                        {user && <NavLink style={{ color: "Blue", textDecoration: "none" }}
                          to='../admin/dashboard'>Dashboard</NavLink>
                        }
                      </Box>
                    </Box>
                  }
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* <Button onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }} >
              <Link style={{ color: "white", textDecoration: "none" }} to="./Home">
                Home
              </Link>
            </Button> */}
            <Button onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="./About">
                About
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
                {/* conditon for user to show screen if user is logged in or not*/}
              {!user &&
                <NavLink style={{ color: "white", textDecoration: "none" }} to="./"
                >
                  Login
                </NavLink>
              } 
              {user && <NavLink style={{ color: "white", textDecoration: "none" }} to='../admin/dashboard'>Dashboard</NavLink>}
            </Button>
          </Box>
          <SignoutButton />
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip> */}
            {/* <IconButton>
              <Link style={{ color: "white", textDecoration: "none" }}
                to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={0} color="primary">
                      <ShoppingCartIcon/>
                     </StyledBadge>
                  </IconButton>
              </Link>
            </IconButton> */}
            {/* </Tooltip> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
