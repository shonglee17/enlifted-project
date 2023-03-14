import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';//
import './Nav.css';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
// MUI imports below
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
import AnnouncementIcon from '@mui/icons-material/Announcement';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
//menu drop down

export default function Nav() {
    // const user = useSelector((store) => store.user);
    // console.log(user);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //this is to make the save & publish button render
    //base off use is logged in or not. 
    //we will need to hook this up to the login component. 
    const isLoggedIn = false

    return (
        <div className="nav">
            <Link to="/">
                <img
                    className="nav-logo"
                    src="/enliftedLog/footer-logo.png"
                    alt="Logo"
                    style={{ width: '175px', height: '87px' }}
                />
            </Link>
{/* ///////////////////conditionally render buttons//////////////// */}
<Box sx={{ flexGrow: 1, marginRight: 'px'}}>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
    {
      isLoggedIn ? <button style={{ padding: '10px 20px', borderRadius: '20px', background: '#151d92', color: '#fff', border: 'none' }}>Save</button>
      :  <></>
    }
    {
      isLoggedIn ? <button style={{ padding: '10px 20px', borderRadius: '20px', background: '#008CBA', color: '#fff', border: 'none' }}>Publish</button>
      : <h3></h3>
    }
  </div>
</Box>

{/* ///////////////////conditionally render buttons//////////////// */}

            <Box sx={{ flexGrow: 1 }}></Box>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="dropdown-menu"
            >
                <MenuItem onClick={handleClose}>
                <HomeIcon sx={{ mr: 1 }} />
                    <Link
                        to="/"
                        className="navLink"
                        style={{ color: 'black', width:80, maxWidth: '100%'  }}
                    >
                        Home
                    </Link>
                </MenuItem>
                <MenuItem onClick={() => window.location.href='https://enlifted.me/contact/'}>
  <AnnouncementIcon sx={{ mr: 1 }} />
  Contact Us
</MenuItem>

                <MenuItem onClick={handleClose}>
                <HelpOutlineIcon sx={{ mr: 1 }} />
                    <Link
                        to='about'
                        className="navLink"
                        style={{ color: 'black', width:80, maxWidth: '100%' }}
                    >
                        About Us
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}






{/* <Box sx={{ flexGrow: 1 }}>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
    {
      isLoggedIn ? <button style={{ padding: '10px 20px', borderRadius: '20px', background: '#151d92', color: '#fff', border: 'none' }}>Save</button>
      :  <h3>No Access!</h3>
    }
    {
      isLoggedIn ? <button style={{ padding: '10px 20px', borderRadius: '20px', background: '#008CBA', color: '#fff', border: 'none' }}>Publish</button>
      : <h3>Login Please</h3>
    }
  </div>
</Box> */}


// marginLeft: '345px'

{/* //OLD */}
                {/* <MenuItem onClick={handleClose}>
                <AnnouncementIcon sx={{ mr: 1 }} />
                    <Link
                        to="/info"
                        className="navLink"
                        style={{ color: 'black', width:80, maxWidth: '100%' }}
                    >
                        Contact Us
                    </Link>
                </MenuItem> */}
                {/* { (
                    <>
                        <MenuItem onClick={handleClose}>
                        <LogoutIcon sx={{ mr: 1,}} />
                            <LogOutButton
                                className="navLink"
                                style={{ color: 'black', width:80, maxWidth: '100%', }}
                            />
                        </MenuItem>
                    </>
                )  */}
                    {/* <> we dont need?????!!!!!!!!!
                        <MenuItem onClick={handleClose}>
                            <Link
                                to="/login"
                                className="navLink"
                                style={{ color: 'black' }}
                            >
                                <AdbIcon sx={{ mr: 1 }} />
                                Login/Register
                            </Link>
                        </MenuItem>
                    </> */}