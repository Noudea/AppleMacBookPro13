import ButtonBorder from "./ButtonBorder"

const CardImgRight = (props) => {
    return (
        <>
            <style jsx>{`
                article {
                    background: linear-gradient(
                        to right bottom,
                        #071931 0%,
                        #33274f 50%,
                        #661e43 100%
                    );
                    width: 100%;
                    border-radius: 20px;
                    overflow: hidden;
                }
                .header {
                    font-size: 19px;
                    line-height: 1.21053;
                    font-weight: 600;
                    letter-spacing: 0.012em;
                }

                .header2 {
                    font-size: 50px;
                    line-height: 1.08349;
                    font-weight: 700;
                    letter-spacing: -0.003em;
                    color: #8679cb;
                    margin: 0px;
                }

                h2 {
                    font-size: 50px;
                    line-height: 1.08349;
                    font-weight: 700;
                    letter-spacing: -0.003em;
                    color: white;
                    margin: 0px;
                }
                .contentContainer {
                    padding: var(--tile-padding);
                }
                .textContent {
                    font-size: 21px;
                    line-height: 1.4211;
                    font-weight: 600;
                    letter-spacing: 0.012em;
                }
                img {
                    width: 100%;
                    position: absolute;
                    right: -40px;
                    bottom: 0px;
                    width: 400px;
                    height: 315px;
                    margin-bottom: 45px;
                }
                .imgContainer {
                    width: 100%;
                    position: relative;
                    height: 350px;
                }
            `}</style>
            <article>
                <div className="contentContainer">
                    <p className="header">{props.header}</p>
                    <p className="header2">{props.header2}</p>
                    <h2>{props.h2}</h2>
                    <p className="textContent">{props.textContent}</p>
                    <ButtonBorder textContent = {props.buttonTextContent}></ButtonBorder>
                </div>
                <div className="imgContainer">
                    <img src={props.imgSrc}></img>
                </div>
            </article>
        </>
    )
}

export default CardImgRight
