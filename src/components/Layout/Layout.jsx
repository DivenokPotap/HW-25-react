import { Link, NavLink, Outlet } from "react-router-dom";
import { Suspense } from 'react';
import styles from "./Layout.module.css"
 const Layout = () => {
return(
   <div>
    <header>
    <nav className={styles.nav}>
        <Link className={styles.logo} to="/">КіноПошук</Link>
            <NavLink className={({ isActive }) =>
                          isActive ? `${styles.Home} ${styles.HomeActive}` : ""
                        } to="/">Домашня сторінка</NavLink>
            <NavLink className={({ isActive }) =>
                          isActive ? `${styles.Movies} ${styles.MoviesActive}` : ""} to="/movies">Пошук</NavLink>
        </nav>
    </header>

   <Suspense fallback={<div>Loading...</div>}>
    <main>
       <Outlet/>
    </main> 
    </Suspense>
    
   </div>
)
}

export default Layout;