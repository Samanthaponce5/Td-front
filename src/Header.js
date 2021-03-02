import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from"@material-ui/core/IconButton"
import tinderIcon from './img/6184865-this-post-is-a-part-of-tinder-logo-transparent-background-hd-tinder-logo-png-840_771.png'
import ForumIcon from '@material-ui/icons/Forum'
function Header(){

    return(
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>

            <img
                className='header_logo'
                src={tinderIcon}
                alt=''
            />
            <IconButton>
                 <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header 