import { Link } from 'react-router-dom';
import Sobremesa from './img1.jpg';
import styles from './News.module.css';
import Card from '../../../components/Card';
import eventos from '../../../json/eventos.json'

export default function News({}) {
    return(
        <section className={styles.container}>
            <h2>Eventos</h2>
            <div className={styles.cards}>
                {eventos.map((e) => (
                    <Card
                        key={e.id}
                        src={Sobremesa}
                        titulo={e.titulo}
                        descricao={e.texto}
                        data={e.data}
                    />
                ))}
            </div>
            <Link to='/events' className={styles.btn}>Conheça todas as nossas atividades</Link>
        </section>
    )
}