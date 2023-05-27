import { Link } from 'react-router-dom';
import styles from './Informacoes.module.css';
import voluntariado from './voluntariado.jpg'
import caridade from './caridade.jpg'

export default function Informacoes() {
    return(
        <section className={styles.container}>
                <h1>Apoie-nos</h1>
                <div>
                    <img src={caridade} alt='Arrecadação de fundos' />
                    <h2>Arrecadação de fundos</h2>
                    <p>Estamos sempre buscando melhorar a qualidade de vida das famílias 
                        assistidas. Seja um apoiador dessa causa, são diversas famílias que 
                        precisam da sua ajuda. Aceitamos dinheiro, mantimentos, roupas, 
                        brinquedos, utensílios de cozinha e qualquer outra coisa que possa 
                        não ter mais utilidade para você.
                    </p>
                    <Link to='/contato'>Saiba mais</Link>
                </div>

                <div>
                    <img src={voluntariado} alt='Seja um voluntário' />
                    <h2>Voluntariado</h2>
                    <p>Você pode ajudar sendo um voluntário, doando seu tempo, trabalho, amor 
                        e carinho a quem mais precisa. Estamos sempre precisando de novos 
                        voluntários para nos ajudar, tanto nas tarefas do dia a dia, quanto nos
                        nossos eventos.
                    </p>
                    <Link to='/contato' className={styles.btn}>Fale conosco</Link>
                </div>
            </section>
    )
}