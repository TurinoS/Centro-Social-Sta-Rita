import styles from './Contatos.module.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router-dom';

export default function Contatos() {
    return(
        <main className={styles.container}>
            <h1>Entre em contato conosco</h1>

            <div className={styles.contato}>
                <h4>* Horário de atendimento de segunda a sexta das 9:00h às 17:00h *</h4>

                <p><FaPhoneAlt className={styles.icone} />+55 (18) 3221-7929</p>

                <p><IoLogoWhatsapp className={styles.icone} />+55 (18) 99610-8400</p>

                <p><MdEmail className={styles.icone} /><Link target='_blank' to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMhdWvqbJbBTDSVwMLzRVHwrMdPPtDJfxGzWlXCNwrlRVMHQlnjWDfjFGxQjbqxFCJDVKp'>
                    centrosocialstaritadecassia@hotmail.com</Link></p>

                <p><FaMapMarkerAlt className={styles.icone} />Rua Prudente de Moraes, 712 Jardin Aviação, Pres. Prudente - SP CEP: 19020-370</p>
            </div>

            <form className={styles.form}>
                <input placeholder='Nome' type='text' name='nome' id='nome' className={styles.nome} />
                <input placeholder='Sobrenome'  type='text' name='sobrenome' id='sobrenome' className={styles.sobrenome} />
                <input placeholder='Email' type='email' name='email' id='email' className={styles.email} />
                <input placeholder='Telefone' type='number' name='fone' id='fone' className={styles.fone} />
                <input placeholder='Assunto' type='text' name='assunto' id='assunto' className={styles.assunto} />
                <textarea placeholder='Digite aqui sua mensagem...' name='msg' className={styles.msg} cols={15} rows={6}/>
                <input type='submit' value='Enviar mensagem' className={styles.btn} />
            </form>

            <iframe title='mapa' className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14785.823557724269!2d-51.3883861!3d-22.1085873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f5cd3cd24c8f%3A0xd7e27b46b7ef8684!2sCentro%20Social%20Santa%20Rita%20de%20C%C3%A1ssia!5e0!3m2!1spt-BR!2sbr!4v1684948005555!5m2!1spt-BR!2sbr" />
        </main>
    )
}