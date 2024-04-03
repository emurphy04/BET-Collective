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
                        <div className="title">The BET Collective</div>
                        <div className="navBox">
                            <p><a className="navText" href="">Shop All</a></p>
                            <p>&nbsp;|&nbsp;</p>
                            <p><a className="navText" href="">Clothing</a></p>
                            <p>&nbsp;|&nbsp;</p>
                            <p><a className="navText" href="">Accessories</a></p>
                            <p>&nbsp;|&nbsp;</p>
                            <p><a className="navText" href="">Home + Living</a></p>
                            <p>&nbsp;|&nbsp;</p>
                            <p><a className="navText" href="">Tech + Travel</a></p>
                            <p>&nbsp;|&nbsp;</p>
                            <p><a className="navText" href="">Fun Gifts</a></p>
                        </div>
                        <div className="loginBox">
                            <p className="loginText"><a className="loginText" href="">Login/Register</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x1F50E;&#xFE0E;</p>
                            
                        </div>
                    </div>
                    <div className="policies">
                        <div className="policyBox"><img className="policyImage" src="./images/vector/Vector.png" width={75}/><p className="policyTxt">FREE SHIPPING</p></div>
                        <div className="policyBox"><img className="policyImage" src="./images/vector/moneyback.png" width={75}/><p className="policyTxt">100% MONEY BACK</p></div>
                        <div className="policyBox"><img className="policyImage" src="./images/vector/support.png" width={75}/><p className="policyTxt">SUPPORT 24/7</p></div>
                    </div>
                </nav>
            </header>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Header