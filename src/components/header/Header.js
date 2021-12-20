import  React,{useState} from 'react';
import "./Header.css";

import { Link } from 'react-router-dom';

import {AppBar,Toolbar,Typography,useMediaQuery,useTheme} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function Header() {


// code for dropdown
const [anchorEl,setAnchorEl]=useState(null);
const openMenu=Boolean(anchorEl);
const handleClick=(e)=>{
    setAnchorEl(e.currentTarget)
};

const handleClose=()=>{
    setAnchorEl(null);
};
// dropdown code ends


    return (
        <>
        <Link to="/"></Link>

                    <Typography
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true':undefined}
                            onClick={handleClick}
                            >SERVICES 
                            </Typography>
                            {/* dropdown items */}

                            <Menu id="basic-menu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose}>
                                <MenuItem onClick={handleClose}><Link to="/artproduction">Art Production</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/gamedevelopment">Game Development</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/qualityassurance">Quality Assurance</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/playersupport">Player Support</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/localization">Localization</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/localizationqa">Localization QA</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/voiceproduction">Voice Production</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/datacollection">Data Collection</Link></MenuItem>

                            </Menu>

                            {/* dropdown items ends */}


        <Link to="/news">NEWS & EVENTS</Link>
        <Link to="/careers">CAREERS</Link>
        <Link to="/lab">LAB</Link>
        <Link to="/contact">CONTACT & LOCATIONS</Link>
        <Link to="/about">ABOUT US</Link>


        </>
    )

}