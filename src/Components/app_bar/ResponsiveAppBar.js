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
import { SvgIcon, useScrollTrigger, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { RefreshSharp } from '@mui/icons-material';
import { ReactComponent as Logo } from '../../logo.svg';

const pages = ['About', 'Projects', 'Contact'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    //target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'primary' : 'transparent',
  });
}

const ResponsiveAppBar = (props) => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleToggleDarkMode = () => {
    props.setDarkMode(!props.darkMode);
  }

  const handleMobileNavClick = async (e) => {
    await handleCloseNavMenu();
    props.handlePageChange(e);
  }

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <ElevationScroll>
      <AppBar color='transparent'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SvgIcon
              // variant="h6"
              // id={0}
              // noWrap
              // component="div"
              id='0'
              fontSize='large'
              component={Logo}
              viewBox="75 80 100 100"
              onClick={props.handlePageChange}
              sx={{  mr: 1, display: { xs: 'none', md: 'flex' }, width: '80px', "&:hover": {cursor: 'pointer'} }}
            />
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                //color="inherit"
              >
                <MenuIcon />
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
              >
                {pages.map((page, i) => (
                  <MenuItem key={page} onClick={handleMobileNavClick}>
                    <Typography id={i+1} textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <SvgIcon
              // variant="h6"
              // id={0}
              // noWrap
              // component="div"
              id='0'
              fontSize='large'
              component={Logo}
              viewBox="110 80 100 100"
              onClick={props.handlePageChange}
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, i) => (
                <Button
                  id={i+1}
                  key={page}
                  onClick={props.handlePageChange}
                  sx={{ my: 2, color: theme.palette.mode === 'dark' ? props.activePage === i+1 ? theme.palette.primary : 'white' : 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings"> */}
                <IconButton disabled onClick={handleToggleDarkMode} sx={{ p: 0, visibility:'hidden' }}>
                  {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              {/* </Tooltip> */}
              {/* <Menu
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
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};
export default ResponsiveAppBar;