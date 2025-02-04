import Styles from "@/styles/Navi.module.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navi(){
    return(
      <>
      <div className={Styles.nav}>
           <div className={Styles.partie1}>
                <ul>
                  <li>
                    <LocalPhoneIcon sx={{ fontSize: "20px" }}/>&ensp;+216 - 92 031 108
                  </li>
                  <li>
                    <EmailIcon sx={{ fontSize: "20px" }}/>&ensp;info@example.com
                  </li>
                </ul>
           </div>
           <div className={Styles.partie2}>
            <ul>
              <li>Follow Us :</li>
              <li>
              <IconButton sx={{ backgroundColor: '#fff', color: 'white', 
                  width: 28,height: 28, borderRadius: '50%'}}>
              <FacebookIcon sx={{ fontSize: 19,color:'#EB1551' }} />
            </IconButton>
              </li>
              <li>
                <IconButton sx={{ backgroundColor: '#fff', color: 'white', 
                    width: 28,height: 28, borderRadius: '50%'}}>
                <TwitterIcon sx={{ fontSize: 19,color:'#EB1551' }} />
                </IconButton>
              </li>
              <li>
                <IconButton sx={{ backgroundColor: '#fff', color: 'white', 
                    width: 28,height: 28, borderRadius: '50%'}}>
                  <InstagramIcon sx={{ fontSize: 19,color:'#EB1551' }} />
                </IconButton>
              </li>
              <li>
                <IconButton sx={{ backgroundColor: '#fff', color: 'white', 
                    width: 28,height: 28, borderRadius: '50%'}}>
                  <LinkedInIcon sx={{ fontSize: 19,color:'#EB1551' }} />
                </IconButton>
              </li>
            </ul>
           </div>
      </div>
      </>
    );
  }