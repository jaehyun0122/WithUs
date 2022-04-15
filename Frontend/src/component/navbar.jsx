import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu,AiOutlineHome } from "react-icons/ai"
import {BsPersonCircle} from "react-icons/bs"
import {GiMagnifyingGlass} from "react-icons/gi"

const NavBox = styled.div`
    width: 100%;
    height: 76px;
    background-color: #166678;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
`
const MenuBar = styled.div`
    margin: auto 20px auto 0;
`
const LogoBox = styled.div`
`

const LogoImg = styled.img`
    margin-top: 8px;
    margin-left: 20px;
    height: 60px;
`

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    let navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleHomeClick = () => {
        navigate('/')
        setAnchorEl(null);
    }
    const handleAboutClick = () => {
        navigate('/about')
        setAnchorEl(null);
    }
    return (
        <NavBox>
            <LogoBox>
                <LogoImg src='logo.png' onClick={handleHomeClick} />
            </LogoBox>
            <MenuBar>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <AiOutlineMenu size='40' color='white'/>
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
                    <MenuItem onClick={handleHomeClick}><AiOutlineHome size='20' />&nbsp;&nbsp;Home</MenuItem>
                    <MenuItem onClick={handleClose}><BsPersonCircle size='20'/>&nbsp;&nbsp;Login</MenuItem>
                    <MenuItem onClick={handleAboutClick}><GiMagnifyingGlass size='20'/>&nbsp;&nbsp;About</MenuItem>

                </Menu>
            </MenuBar>
        </NavBox>
    )
}
