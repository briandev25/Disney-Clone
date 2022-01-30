import React from 'react';
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function Header() {
  return <Nav>
            <Logo src='https://download.logo.wine/logo/Disney%2B/Disney%2B-White-Logo.wine.png' />
            <NavMenu>
              <a>
                <HomeIcon />
              <span>HOME</span>
              </a>
              <a>
                <SearchIcon />
              <span>SEARCH</span>
              </a>
              <a>
                <AddIcon />
              <span>WATCHLIST</span>
              </a>
              <a>
                <StarIcon />
              <span>ORIGINALS</span>
              </a>
              <a>
                <LocalMoviesIcon />
              <span>MOVIES</span>
              </a>
              <a>
                <LiveTvIcon />
              <span>SERIES</span>
              </a>
            </NavMenu>
            <UserImage src='https://randomuser.me/api/portraits/lego/8.jpg' />
       </Nav>;
}

export default Header;

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow:hidden;
`
const Logo = styled.img`
   width:80px;
   color:#fff;
`
const NavMenu = styled.div`
   display:flex;
   align-items:center;
   flex:1;
   margin-left:25px;
   a{
    cursor:pointer;
     display:flex;
     align-tems:center;
     padding:0 12px;
     span{
       font-size:16px;
       margin-left:5px;
       line-spacing:1.42px;
       position:relative;
       &:after{
         content:'';
         height:2px;
         background:white;
         position:absolute;
         left:0;
         right:0;
         bottom:-6px;
         opacity:0;
         transform-origin:left center;
         transform:scaleX(0);
         transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
       } 
     }
     &:hover{
       span:after{
        transform:scaleX(1);
         opacity:1;
       }
     }
     
     
   }
  
`
const UserImage = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;
`
