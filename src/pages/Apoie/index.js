import { Link } from 'react-router-dom';
import styles from './Apoie.module.css';
import Informacoes from './Informacoes';
import ComoDoar from './ComoDoar';

export default function Apoie() {
    return(
        <main className={styles.apoie}>
            <Informacoes />
            <ComoDoar />
        </main>
    )
}