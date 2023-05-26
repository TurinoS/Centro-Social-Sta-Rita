import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ img, titulo, descricao, data }) {
    return(
        <Link to='/events' className={styles.card}>
            <img src={img} alt={titulo} />
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>{data}</p>
        </Link>
    )
}