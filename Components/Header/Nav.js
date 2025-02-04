import Style from "@/styles/Navbar.module.css"
import Image from "next/image";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';


import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




export default function Nav(){

  const [value, setValue] = React.useState(0);


    return(
      <>
      <div className={Style.navbar}>
          <div className={Style.logo}>
                <Image src="/img/logo.png" alt="#" className={Style.heroImage} width={240} height={50}  />
          </div>
          <div className={Style.items}>
               <ul>
                <li className={Style.active}>
                <Image src="/img/menu-hover-icon.png" alt="#" className={Style.heroImage} width={28} height={28}  />&ensp;Home
                </li>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
               </ul>
          </div>
          <div className={Style.connexion}>
          <SearchIcon sx={{ color: 'rgb(29, 29, 29)',fontSize: "27px" }}/>
          <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
            <Badge color="warning" badgeContent={0} showZero 
            sx={{ "& .MuiBadge-badge": {backgroundColor: "#EB1551",fontWeight:"600",marginTop:"-0.2px" } }}>
              <ShoppingCartIcon sx={{ color: 'rgb(29, 29, 29)',fontSize: "27px" }}/>
            </Badge>
          </Stack>
            <button className={Style.button}>Enquire Now</button>
          </div>
      </div>






      <Box sx={{ width: "100%" }}>
      <BottomNavigation
        className={Style.bottom_nav}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className={Style.nav_action}
          label="Home"
          icon={<HomeIcon className={value === 0 ? Style.active2 : Style.inactive} />}
          value={0}
        />
        <BottomNavigationAction
          className={Style.nav_action}
          label="Item 1"
          icon={<FavoriteIcon className={value === 1 ? Style.active2 : Style.inactive} />}
          value={1}
        />
        <BottomNavigationAction
          className={Style.nav_action}
          label="Item 2"
          icon={<LocationOnIcon className={value === 2 ? Style.active2 : Style.inactive} />}
          value={2}
        />
        <BottomNavigationAction
          className={Style.nav_action}
          label="Item 3"
          icon={<ShoppingCartIcon className={value === 3 ? Style.active2 : Style.inactive} />}
          value={3}
        />
      </BottomNavigation>
    </Box>
      </>
    );
  }
