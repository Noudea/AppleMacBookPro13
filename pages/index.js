import Head from 'next/head'
import FadeInSection from '../components/FadeInSection'
import NavBar from '../components/navbar'
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
                <Video></Video>
                <section className="section">
                    <FadeInSection></FadeInSection>
                    <p>
                        Avec la puce Apple M1, le MacBook Pro 13 pouces atteint
                        une vitesse et une puissance sidérantes. Il offre des
                        performances de processeur jusqu’à 2,8 fois plus
                        élevées. Des performances graphiques jusqu’à 5 fois plus
                        rapides. Une vitesse d’apprentissage automatique jusqu’à
                        11 fois supérieure grâce à notre Neural Engine le plus
                        avancé. Et jusqu’à 20 heures d’autonomie, un record sur
                        Mac. C’est notre portable pro le plus apprécié, et il
                        n’a pas fini de vous étonner.
                    </p>
                    <p>
                        Avec la puce Apple M1, le MacBook Pro 13 pouces atteint
                        une vitesse et une puissance sidérantes. Il offre des
                        performances de processeur jusqu’à 2,8 fois plus
                        élevées. Des performances graphiques jusqu’à 5 fois plus
                        rapides. Une vitesse d’apprentissage automatique jusqu’à
                        11 fois supérieure grâce à notre Neural Engine le plus
                        avancé. Et jusqu’à 20 heures d’autonomie, un record sur
                        Mac. C’est notre portable pro le plus apprécié, et il
                        n’a pas fini de vous étonner.
                    </p>
                    <p>
                        Avec la puce Apple M1, le MacBook Pro 13 pouces atteint
                        une vitesse et une puissance sidérantes. Il offre des
                        performances de processeur jusqu’à 2,8 fois plus
                        élevées. Des performances graphiques jusqu’à 5 fois plus
                        rapides. Une vitesse d’apprentissage automatique jusqu’à
                        11 fois supérieure grâce à notre Neural Engine le plus
                        avancé. Et jusqu’à 20 heures d’autonomie, un record sur
                        Mac. C’est notre portable pro le plus apprécié, et il
                        n’a pas fini de vous étonner.
                    </p>
                    <p>
                        Avec la puce Apple M1, le MacBook Pro 13 pouces atteint
                        une vitesse et une puissance sidérantes. Il offre des
                        performances de processeur jusqu’à 2,8 fois plus
                        élevées. Des performances graphiques jusqu’à 5 fois plus
                        rapides. Une vitesse d’apprentissage automatique jusqu’à
                        11 fois supérieure grâce à notre Neural Engine le plus
                        avancé. Et jusqu’à 20 heures d’autonomie, un record sur
                        Mac. C’est notre portable pro le plus apprécié, et il
                        n’a pas fini de vous étonner.
                    </p>
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
