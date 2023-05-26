import { Link, useLocation } from 'react-router-dom';
import styles from './HeaderLink.module.css';

export default function HeaderLink({ to, children }) {

    const location = useLocation()

    return(
        <Link className={`${styles.a} ${location.pathname === to ? styles.link_destacado : ""}`} to={to}>{children}</Link>
    )
}