import Head from 'next/head'
import CardImgRight from '../components/CardImgRight'
import FadeInSection from '../components/FadeInSection'
import NavBar from '../components/navbar'
import SectionWithTitle from '../components/SectionWithTitle'
import Video from '../components/Video'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <style jsx>{`
                .section {
                    margin-left: auto;
                    margin-right: auto;
                    width: 87.5%;
                }
            `}</style>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/fonts/SF-Pro-Display-Regular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/SF-Pro-Display-Medium.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/SF-Pro-Display-Semibold.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <main>
                <NavBar></NavBar>
                <Video src="/video/small_2x.mp4"></Video>
                <section className="section">
                    <FadeInSection></FadeInSection>
                </section>
                <SectionWithTitle></SectionWithTitle>
                <section className="section">
                    <CardImgRight
                        header="CPU"
                        header2="CPU 8 cœurs"
                        h2="Une puce épous­touflante."
                        textContent="La puce M1 confère au MacBook Pro une vitesse et une puissance vertigineuses. Son processeur central huit cœurs s’acquitte facilement des flux de production complexes et des charges de travail les plus lourdes en affichant des performances de traitement jusqu’à 2,8 fois plus rapides que celles de la génération précédente"
                        imgSrc = '/images/processor__t4s51e0n7giy_small_2x.png'
                        buttonTextContent = 'Voir comment la puce M1 redéfinit la notion de vitesse'
                    ></CardImgRight>
                </section>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    )
}
