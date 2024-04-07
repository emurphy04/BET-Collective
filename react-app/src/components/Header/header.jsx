import { Link } from "react-router-dom";
import Landing from "../../pages/landing";

function Header(){
    return(
        <>
            <header>
                <nav className="headerContainer">
                    <div className="contactInfo">
                        <div className="contactBox">
                            <p>&#9743; (709)555-1234</p>
                        </div>
                        <div className="contactBoxEmail">
                            <p>&#9993; info@thebetcollective.com</p>
                        </div>
                        <div className="socialsBox">
                            Follow Us:
                        </div>
                    </div>
                    <div className="nav">
                        <Link to={'/'}><div className="title">The BET Collective</div></Link>
                        <div className="navBox">
                            <Link to={'/products/all'} className="navText"><p>Shop All</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/clothing'} className="navText"><p>Clothing</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/accessories'} className="navText"><p>Accessories</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/home-living'} className="navText"><p>Home + Living</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/tech-travel'} className="navText"><p>Tech + Travel</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/fun-gifts'} className="navText"><p>Fun Gifts</p></Link>
                        </div>
                        <div className="loginBox">
                            
                        </div>
                    </div>
                </nav>
            </header>
            
        </>
    );
}

export default Header