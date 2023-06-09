import styles from './Home.module.css';
import imgBanner from './banner-bg.png'
import Banner from './Banner';
import Summary from './Summary';
import News from './News';
import BannerCTA from './BannerCTA';

export default function Home() {
    return(
        <main className={styles.container}>
            <img className={styles.bannerImg} src={imgBanner} alt='banner' />
            <Banner />
            <Summary />
            <BannerCTA />
            <News />
        </main>
    )
}