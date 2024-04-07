import { Link } from "react-router-dom"

function Hero(){
    return(
        <>
            <div className="policies">
                <div className="policyBox"><div className="policyImage1"></div><p className="policyTxt">FREE SHIPPING</p></div>
                <div className="policyBox"><div className="policyImage2"></div><p className="policyTxt">100% MONEY BACK</p></div>
                <div className="policyBox"><div className="policyImage3"></div><p className="policyTxt">SUPPORT 24/7</p></div>
            </div>
            <div className="hero">
                <div className="heroImgBox">
                    <img src=".\images\tech-travel\laptop.jpg" width={566} height={566}/>
                </div>
                <div className="heroTxtBox">
                    <p className="heroTxt">HOT DEALS THIS WEEK</p>
                    <p className="heroTxtLow">SALE UP TO 25% OFF <br />TECH + TRAVEL GEAR</p>
                </div>
                <Link to={'/products/tech-travel'}><button className="heroTxtButton">VIEW NOW</button></Link>
            </div>
        </>
    )
}

export default Hero