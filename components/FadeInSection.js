const FadeInSection = () => {
    return (
        <>
            <style jsx>{`
                .FadeInSectionContainer {
                    margin-top: 103px;
                }

                .h1,
                h2,
                .text {
                    margin: 0px;
                    opacity: 0;
                }
                .h1 {
                    animation: fade-in-hero 1.5s ease-out 0.5s 1 forwards;
                    color: #f5f5f7;
                    font-size: 24px;
                    line-height: 1.16667;
                    font-weight: 600;
                    letter-spacing: 0.009em;
                    text-align: center;
                }
                h2 {
                    animation: fade-in-hero 1.5s ease-out 0.7s 1 forwards;
                    font-size: 42px;
                    line-height: 1.08349;
                    letter-spacing: -.003em;
                    background: radial-gradient(#eff1ff, #000);
                    background-size: 100% 200%;
                    background-position: 50% 100%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-top: 16px;
                    padding-bottom: 12px;
                    text-align: center;
                }
                .text {
                    animation: fade-in-hero 1.5s ease-out 0.9s 1 forwards;
                    color: #a1a1a6;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    font-size: 23px;
                    line-height: 1.33341;
                    font-weight: 500;
                    letter-spacing: 0.009em;
                }

                .imageTextWrapper {
                    margin-top:38px;
                    animation : fade-in-hero 1.5s ease-out 1.1s 1 forwards;
                    font-size:23px;
                    display:flex;
                    align-items:center;
                    flex-direction: column;
                    text-align: center;
                }

                .imageTextWrapper img {
                    width:66px;
                    height:66px;
                }

                .imageTextWrapper p {
                    color: #a1a1a6;
                    margin:10px 0px;                }
                .callToActionWrapper {
                    animation : fade-in-hero 1.5s ease-out 1.3s 1 forwards;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    font-size: 21px;
                    color: #fff;
                }
                .callToActionWrapper p {
                    margin: 40px 0px 10px 0px;
                }
                @keyframes fade-in-hero {
                    to {
                        transform: translateY(-50px);
                        opacity: 1;
                    }
                }
            `}</style>
            <section className="FadeInSectionContainer">
                <h1 className="h1">MacBook Pro</h1>
                <h2>Profond??ment pro.</h2>
                <p className= 'text'>
                    Avec la puce Apple M1, le MacBook Pro 13 pouces atteint une
                    vitesse et une puissance sid??rantes. Il offre des
                    performances de processeur jusqu????? 2,8 fois plus ??lev??es.
                    Des performances graphiques jusqu????? 5 fois plus rapides. Une
                    vitesse d???apprentissage automatique jusqu????? 11 fois
                    sup??rieure gr??ce ?? notre Neural Engine le plus avanc??. Et
                    jusqu????? 20 heures d???autonomie, un record sur Mac. C???est
                    notre portable pro le plus appr??ci??, et il n???a pas fini de
                    vous ??tonner.
                </p>
                <div className='imageTextWrapper'>
                    <img className='icon'src = "images/hero_icon__gf2ry7i5mt6y_large_2x.jpg"></img>
                    <p>Avec la superpuissance de la puce Apple M1</p>
                </div>
                <div className='callToActionWrapper'>
                    <p>A partir de 1449???</p>
                    <a>Regarder l'??v??nement</a>
                </div>
            </section>
        </>
    )
}

export default FadeInSection
