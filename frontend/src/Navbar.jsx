import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Productos', 'Contactos', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);      //Acá le das el parent al menu
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);    //Acá le das el parent al userMenu
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor:'pink'}} >
      <Container maxWidth="xl" sx={{bgcolor:'pink', color:'black'}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> {/* Icono desktop*/}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="http://localhost:3000"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>       {/* Texto Logo desktop*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}> {/*Esto es del mobile*/}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"      
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >                           {/* arial-controls = id del menu */}
              <MenuIcon />              {/* Menu icon del mobile */}
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >                               {/*anchorOrigin: esquina del partent donde se origina el despliegue
                                            transformOrigin: esquina del menu box que va a estar en el anchorOrigin*/}

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>    {/*Items del menu en este caso los items de la pagina*/}
                  <a href={'http://localhost:3000/' + page.toLowerCase()}>{page}</a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> {/*Icono mobile*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="http://localhost:3000"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>             {/*Texto mobile*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> {/*Navegación desktop*/}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#f38d9f', // Cambia el color de fondo al hacer hover
                  color: 'white', // Cambia el color del texto al hacer hover
                }, }}
                href={'http://localhost:3000/' + page.toLowerCase()}
              >
                {page}
              </Button>
            ))}
          </Box>        

          <Box sx={{ flexGrow: 0 }}>          {/* esto es del icono de cuenta*/}
            <Tooltip title="Cuenta">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>        {/*Esto es de ayuda xd*/}
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>           {/*Menu que se abre al hacer click en el icono de tu cuenta*/}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveNavBar;