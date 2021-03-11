import Head from 'next/head'
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
                <Video src='/video/small_2x.mp4'></Video>
                <section className="section">
                    <FadeInSection></FadeInSection>
                </section>
                    <SectionWithTitle></SectionWithTitle>
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
