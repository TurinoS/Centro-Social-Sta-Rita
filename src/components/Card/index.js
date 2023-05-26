import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ src, titulo, descricao, data }) {
    return(
        <Link to='/events' className={styles.card}>
            <img src={src} alt={titulo} />
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>{data}</p>
        </Link>
    )
}