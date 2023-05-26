import styles from './Banner.module.css';

export default function Banner() {
    return(
        <section className={styles.banner}>
            <h1>Vida em comunidade!</h1>
            <h2>Há mais de 50 anos ajudando pessoas a se se sentirem parte da comunidade e 
                se tornarem protagonistas de sua própria história.
            </h2>
        </section>
    )
}