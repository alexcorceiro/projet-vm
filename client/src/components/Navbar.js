import React from 'react';
import "./css/navbar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListMenu from './ListMenu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom"


function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    navigate("/")
  }

  const handleAj = () => {
    setAnchorEl(null)
    navigate("/register")
  }
  return (
    <div className='navbar'>
        <div className='navbody'>
          <div className='nav-champ1'>
            <ListMenu/>
          </div>
          <div className='nav-champ2'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <form className='nav-item-form'>
                        <input type="text" className='nav-item-input'/>
                        <button className='nav-item-btn'>
                            <SearchIcon/> </button>
                    </form>
                </li>
                <li className='nav-item'><SettingsIcon sx={{color: 'white', marginLeft: 10}}/></li>
                <li className='nav-item_cp'>
                <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><AccountCircleIcon sx={{ marginRight: 1}}/> Profile</MenuItem>
        <MenuItem onClick={handleAj}><PersonAddIcon sx={{ marginRight: 1}}/> ajouter</MenuItem>
        <MenuItem onClick={handleLogout}><LogoutIcon sx={{ marginRight: 1}}/>Logout</MenuItem>
      </Menu>
                </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
