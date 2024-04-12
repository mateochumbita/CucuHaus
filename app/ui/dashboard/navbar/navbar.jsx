"use client"
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import logo from '../../../../public/logocucuhaus.png'
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    
    MdSearch,
  } from "react-icons/md";
  import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';
  

const Navbar = ({ toggleSidebar }) => {



  const pathname = usePathname();

 

    
    return (
        <div className={styles.container}>
          <div className={styles.logo}>
          <Image src={logo} alt=""  className={styles.logo}/>
          </div>
          <div className={styles.menu}>
            <div className={styles.search}>
              <MdSearch />
              <input type="text" placeholder="Buscar..."  className={styles.input}/>
            </div>
            <div className={styles.icons}>
               
                
            </div>
          </div>
        </div>
    )
}
export default  Navbar