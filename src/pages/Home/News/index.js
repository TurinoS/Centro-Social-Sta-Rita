import { Link } from 'react-router-dom';
import styles from './News.module.css';

export default function News() {
    return(
        <section className={styles.container}>
            <h2>Eventos</h2>
            <div>
                <p>aqui virão os cards</p>
                {/* <Card img='' titulo='' data='' />
                <Card img='' titulo='' data='' />
                <Card img='' titulo='' data='' />   */}
            </div>
            <Link to='/events' >Conheça todas as nossas atividades</Link>
        </section>
    )
}