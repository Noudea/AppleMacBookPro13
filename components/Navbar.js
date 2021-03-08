import LinkButton from "./button"

const NavBar = () => {
    return (
        <>
            <style jsx>{`
                nav {
                }
                .topNav {
                    background-color:black;
                }
                .topNav,
                .bottomNav {
                    height: 48px;
                    width: 100%;
                }
                .bottomNav {
                    position: sticky;
                    position: -webkit-sticky;
                    top:0px;
                    left:0px;
                    background-color:rgba(29,29,31,0.72);
                    backdrop-filter: saturate(180%) blur(20px);
                    display:flex;
                    align-items: center;
                    margin:0px;
                    padding:0 16px;
                    justify-content : space-between;
                }
                .bottomNavTitle  {
                    color : #fff;
                    opacity : 0.92;
                    font-size: 19px;
                    font-weight: 600;
                    margin:0px;
                }
            `}</style>
            <nav>
                <div className="topNav"></div>
            </nav>
                <div className="bottomNav">
                    <div>
                        <p className='bottomNavTitle'>MacBook Pro 13 "</p>
                    </div>
                    <div><LinkButton></LinkButton></div>
                </div>
        </>
    )
}

export default NavBar
