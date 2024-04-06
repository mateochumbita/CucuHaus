import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css'
import Image from 'next/image';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdBedroomParent,
    MdRoomService,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

  
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Panel",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Usuarios",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Habitaciones",
          path: "/dashboard/rooms",
          icon: < MdBedroomParent />,
        },
        {
          title: "Reservas",
          path: "/dashboard/reserves",
          icon: <MdRoomService />,
        },
      ],
    },
    {
      title: "Analiticas",
      list: [
        {
          title: "Ganancia",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reportes",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Clientes",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Configuraciones",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Ayuda",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
const Sidebar = () => {
    return (
        <div className={styles.container}>
          <div className={styles.user}>
            <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
            <div className={styles.userDetail}>
              <span className={styles.username}>Andrea</span>
              <span className={styles.userTitle}>Administrador</span>
            </div>
          </div>
           <ul>
            {menuItems.map(cat=>(
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item=>(
                        <MenuLink item={item} key={item.title}/>
                    ))}
                </li>
            ))}


           </ul>
           
           
           
           </div>
    )
}
export default Sidebar;