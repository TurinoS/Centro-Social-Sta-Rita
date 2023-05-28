import styles from './About.module.css';
import imagem1 from './imagem1.jpg'

export default function About() {
    return(
        <main className={styles.container}>
            <h1>Centro Social Santa Rita de Cássia</h1>

            <h2>Nossa história</h2>

            <p>O Centro Social Santa Rita de Cássia, é uma Organização Social sem fins lucrativos, 
                foi fundada em 16/04/1968, na ocasião o Bispo era Dom José Aquino Pereira, e o Pároco 
                Pe. Jacó Cirelli, o trabalho iniciou nas normas da Conferência Nacional dos Bispos do 
                Brasil (CNBB) em 6 linhas: pelo qual a organização se encaixou na  Promoção Social e Humana, 
                vinculado à Paróquia Santa Rita de Cássia.
            </p>
                
            <p>No começo a organização funcionou com muita simplicidade em uma pequena edícula. 
                Depois em um galpão de madeira da Paróquia, e finalmente em 1972, com a compra do 
                terreno na Rua Prudente de Morais, 712 – Jardim Aviação aconteceu à construção da 
                sede oficial, que passou por várias reformas no decorrer desse tempo. 
                Para que essa aquisição do prédio fosse realizada a organização social realizou 
                várias promoções e também contando com uma verba da Secretaria de Assistência Social 
                na qual estava matriculada no período.
            </p>

            <p>Contudo a organização social foi criada com o objetivo de proporcionar assistência e 
                acolhimento às famílias necessitadas, um braço social no território da paróquia.
            </p>

            <img src={imagem1} alt='Pessoas trabalhando em união' />

            <h2>Quem somos</h2>

            <p>A organização social presta serviços socioassistenciais com a modalidade de atendimento: 
                Serviço de Convivência e Fortalecimento de Vínculos para as famílias, pessoas idosas, 
                gestantes e a comunidade em situação de vulnerabilidade e risco social, desenvolvendo 
                ações de caráter emancipatório, com intuito de promover o fortalecimento de vínculos 
                familiar e comunitário.
            </p>

            <h2>Objetivo</h2>

            <p>O objetivo do nosso trabalho é desenvolver a autonomia da pessoa como sujeito de direito, 
                resgatando a autoestima, com intuito de melhorar a qualidade de vida, enfrentamento de 
                ocorrências de vulnerabilidades sociais, com capacidade de se tornar protagonista de sua 
                própria história.
            </p>
        </main>
    )
}