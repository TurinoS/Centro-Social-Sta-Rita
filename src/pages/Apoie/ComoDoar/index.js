import { Link } from 'react-router-dom';
import styles from './ComoDoar.module.css';
import { IoIosPerson, IoIosCard } from 'react-icons/io'
import { MdPix, MdConnectWithoutContact } from 'react-icons/md'

export default function ComoDoar() {
    return(
        <section className={styles.container}>
            <h2>Como você pode doar</h2>

            <div className={styles.container_1}>
                <IoIosPerson className={styles.icone} />
                <h3>Pessoalmente</h3>
                <p>Venha até nosso endereço que estaremos prontos 
                    para te receber das 9h às 17h
                </p>
                <p className={styles.info}>Rua Prudente de Moraes, 
                    712 Vila Maristela, Pres. Prudente - SP CEP: 19020-370
                </p>
            </div>

            <div className={styles.container_2}>
                <MdPix className={styles.icone} />
                <h3>Pix</h3>
                <p>Abra a área pix no seu aplicativo do banco, acesse 
                    "Ler QR code" e escaneie o código abaixo</p>
                <img src='#' alt='código qr' />
            </div>

            <div className={styles.container_3}>
                <IoIosCard className={styles.icone} />
                <h3>Transferência bancária</h3>
                <p>Envie seu dinheiro para: 
                </p>
                <p className={styles.info}>Rua Prudente de Moraes, 
                    712 Vila Maristela, Pres. Prudente - SP CEP: 19020-370
                </p>
            </div>

            <div className={styles.container_4}>
                <MdConnectWithoutContact className={styles.icone} />
                <h3>Telefone ou e-mail</h3>
                <p>Se precisar de alguma ajuda ou mais informações, entre em contato conosco</p>
                <Link className={styles.btn} to='/contatos'>
                    Contatos</Link>
            </div>
        </section>
    )
}