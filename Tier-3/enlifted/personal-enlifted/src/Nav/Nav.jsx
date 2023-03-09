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


function Nav() {
    const user = useSelector((store) => store.user);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="nav">
            <Link to="/home">
                <img
                    className="nav-logo"
                    src="/enlightedLogo/footer-logo.png"
                    alt="Logo"
                    style={{ width: '175px', height: '87px' }}
                />
            </Link>
{/* ///////////////////conditionally render buttons//////////////// */}
            {/* {props.showButtons && 
                <Box sx={{ flexGrow: 1 }}>
                    <Button
                        size="medium"
                        color="secondary"
                        variant="contained"
                        style={{ marginRight: 10 }}
                    >
                        Save
                    </Button>
                    <Button
                        size="medium"
                        color="secondary"
                        variant="contained"
                    >
                        Publish
                    </Button>
                </Box>
            } */}
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
                        to="/home"
                        className="navLink"
                        style={{ color: 'black', width:80, maxWidth: '100%'  }}
                    >
                        Home
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <AnnouncementIcon sx={{ mr: 1 }} />
                    <Link
                        to="/info"
                        className="navLink"
                        style={{ color: 'black', width:80, maxWidth: '100%' }}
                    >
                        Info Page
                    </Link>
                </MenuItem>
                {user.id ? (
                    <>
                        <MenuItem onClick={handleClose}>
                        <LogoutIcon sx={{ mr: 1,}} />
                            <LogOutButton
                                className="navLink"
                                style={{ color: 'black', width:80, maxWidth: '100%', }}
                            />
                        </MenuItem>
                    </>
                ) : (
                    <>
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
                    </>
                )}
                <MenuItem onClick={handleClose}>
                <HelpOutlineIcon sx={{ mr: 1 }} />
                    <Link
                        to="/about"
                        className="navLink"
                        style={{ color: 'black', width:80, maxWidth: '100%' }}
                    >
                        About
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Nav;