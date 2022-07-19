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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2
  }
}));

const Navbar = () => {
  
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [user, setUser] = React.useState({})
  
  

React.useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)   
        //     if (currentUser !== null) {
        // }
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
                color="inherit"
              >
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
                        <Box sx={{ mr: 8 }}>
                          <Link
                            style={{ color: "Blue", textDecoration: "none" }}
                            to="/home"
                          >
                            Home
                          </Link>
                        </Box>
                        <Box sx={{ mr: 8, pt: 2 }}>
                          <Link
                            style={{ color: "Blue", textDecoration: "none" }}
                            to="./About"
                          >
                            About
                        </Link>
                        
                      </Box>
                      <Box sx={{ mr: 8, pt: 2 }}>
                        {!user &&
                          <Link
                            style={{ color: "Blue", textDecoration: "none" }}
                            to="./login"
                          >
                            Login
                          </Link>}
                         {user && <NavLink style={{ color: "white", textDecoration: "none" }} to='/admin/dashboard'>Dashboard</NavLink>}

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
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="./Home"
                >
                  Home
                </Link>
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="./About"
              >
          
                  About
                </Link>
            </Button>
            

  <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
               
{!user && 
             

              <NavLink
                  style={{ color: "white", textDecoration: "none" }}
                  to="./login"
                >
                  Login
                </NavLink>
              }
              {user && <NavLink style={{ color: "white", textDecoration: "none" }} to='/admin/dashboard'>Dashboard</NavLink>}
            </Button>





            </Box>   <SignoutButton/>

            <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip> */}
           
              <IconButton>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/cart"
                >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={7} color="primary">
                      <ShoppingCartIcon>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>Accordion 1</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {/* <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse malesuada lacus ex, sit amet
                              blandit leo lobortis eget.
                            </Typography> */}
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography>Accordion 2</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>blandit leo lobortis eget.</Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion disabled>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                          >
                            <Typography>Disabled Accordion</Typography>
                          </AccordionSummary>
                        </Accordion>
                      </ShoppingCartIcon>
                    </StyledBadge>
                  </IconButton>
                </Link>
      
              </IconButton>
            {/* </Tooltip> */}
          
          </Box>
                   {/* <MaterialUISwitch
                  sx={{ m: 1, pl:1}}
                  defaultChecked
                  // onClick={(e) => handleTheme()}
                ></MaterialUISwitch> */}
        </Toolbar>
         
      </Container>         
            
      </AppBar>
    );
};
export default Navbar;
