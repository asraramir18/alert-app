import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
  Divider,
  Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


const pages = [{
  value: '/Dashboard',
  label: 'Dashboard'
}, {
  value: '/Alerts',
  label: 'Alerts'
}];
const user = 'Admins';

const ResponsiveAppBar = () => {
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

  return (
    <AppBar position="static" sx={{ bgcolor: "white", borderBottom: 1, borderColor: '#72757A', boxShadow: 1  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              mr: 2
            }}
            alt="logo"
            src="/GroundUp.png"
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {pages.map((page) => (
                <MenuItem key={page.value} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#5F6368' }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                  key={page.value}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                  href={page.value} 
                  component={Link}
                >
                  {page.label}
                </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex'  }}>
            <Badge badgeContent={0} color="secondary">
              <SettingsOutlinedIcon sx={{ color: '#5F6368' }}/>
            </Badge>
            <Badge badgeContent={0} color="secondary">
              <PermIdentityOutlinedIcon sx={{ color: '#5F6368' }}/>
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <NotificationsOutlinedIcon sx={{ color: '#5F6368' }}/>
            </Badge>
            <Divider sx={{ mx: 2, borderColor: 'black' }} orientation="vertical"  />
            <Typography textAlign="center" sx={{ color: '#5F6368' }}>{`Welcome ${user}`}</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
