import { Link } from 'react-router-dom';
import Sobremesa from './sobremesa.jpg';
import styles from './News.module.css';
import Card from '../../../components/Card';

export default function News() {
    return(
        <section className={styles.container}>
            <h2>Eventos</h2>
            <div>
                <Card 
                    img={Sobremesa}
                    titulo='Venda de sobremesas' 
                    descricao='Venda desobremesas feitas durante as aulas de culinária da terceira idade'
                    data='Domingo de manhã - 28/05/2023' 
                />
            </div>
            <Link to='/events' className={styles.btn}>Conheça todas as nossas atividades</Link>
        </section>
    )
}