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
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import SignoutButton from "../signOut"
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";

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
const{cartTotalQuantity}=useSelector((state)=>state.cart)
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

  const isAdmin = JSON.parse(localStorage.getItem("Email"))
  

React.useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)     
        })
  return () => unsubscribe();        
   },[])

  return (
    <AppBar position="static">
      <Container maxWidth="xl" >
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
                <Typography textAlign="center" variant="div">
                  {
                    <Box>
                      <Box sx={{ mr: 8 }}>
                        <Link style={{ color: "Blue", textDecoration: "none" }} to="/home" >
                          Home
                          </Link>
                        </Box>
                      <Box sx={{ mr: 8, pt: 2 }}>
                        <Link style={{ color: "Blue", textDecoraton: "none" }} to="./About" >
                          About
                        </Link>
                      </Box>
                      <Box sx={{ mr: 8, pt: 2 }}>
                        <Link style={{ color: "Blue", textDecoraton: "none" }} to="./About" >
                          Products
                        </Link>
                      </Box>
                      <Box sx={{ mr: 8, pt: 2 }}>
                        {/* conditon for user to show screen if user is logged in or not */}
                        {!user && <Link style={{ color: "Blue", textDecoration: "none" }} to="./login">
                          Login
                        </Link>
                        }
                        {isAdmin === "suryabisht.softprodigy@gmail.com" && <NavLink style={{ color: "Blue", textDecoration: "none" }}
                          to='../admin/dashboard'>Dashboard</NavLink>}
                        {user && <NavLink style={{ color: "Blue", textDecoration: "none" }}
                          to='../profile'>Profile</NavLink>
                        }
                      </Box>
                       <Box sx={{ mr: 8, pt: 2 }}>
                        <Link style={{ color: "Blue", textDecoraton: "none" }} to="./About" >
                          ContactUs
                        </Link>
                      </Box>
                    </Box>
                  }
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

       

            <Typography variant="div" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }} >
              <Link style={{ color: "white", textDecoration: "none" }} to="./Home">
                Home
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="./About">
                About
              </Link>
            </Button>
              <Button onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="./products">
                Products
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
                {/* conditon for user to show screen if user is logged in or not*/}
              {!user &&
                <NavLink style={{ color: "white", textDecoration: "none" }} to="./login"
                >
                  Login
                </NavLink>
              } 
                {/* {isAdmin === "suryabisht.softprodigy@gmail.com" && <NavLink style={{ color: "Blue", textDecoration: "none" }}
                          to='../admin/dashboard'>Dashboard</NavLink>} */}
              {!isAdmin? user && <NavLink style={{ color: "white", textDecoration: "none" }} to='../profile'>Profile</NavLink> :
                 isAdmin === "suryabisht.softprodigy@gmail.com" && <NavLink style={{ color: "white", textDecoration: "none" }} to='../admin/dashboard'>Dashboard</NavLink>}
            </Button>
            <Button type="button" onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="./contactus">
                ContactUs
              </Link>
            </Button>
          </Typography>
         
          <Typography variant="div" sx={{ flexGrow: 0}}>
            {/* <Tooltip> */}
            {!isAdmin?           
              <Link style={{ color: "white", textDecoration: "none" }}
                to="/cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartTotalQuantity} color="primary">
                      <ShoppingCartIcon/>
                     </StyledBadge>
                  </IconButton>
              </Link>
            : <Typography sx={{ml:50}}> Hello Admin</Typography>}
            {/* </Tooltip> */}
          </Typography>
          <Typography>
             <SignoutButton />
</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
