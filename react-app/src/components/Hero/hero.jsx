function Hero(){
    return(
        <>
            <div className="policies">
                <div className="policyBox"><img className="policyImage" src="./images/vector/Vector.png" width={75}/><p className="policyTxt">FREE SHIPPING</p></div>
                <div className="policyBox"><img className="policyImage" src="./images/vector/moneyback.png" width={75}/><p className="policyTxt">100% MONEY BACK</p></div>
                <div className="policyBox"><img className="policyImage" src="./images/vector/support.png" width={75}/><p className="policyTxt">SUPPORT 24/7</p></div>
            </div>
            <div className="hero">
                <div className="heroImgBox">
                    <img src=".\images\tech-travel\laptop.jpg" width={575} height={566}/>
                </div>
                <div className="heroTxtBox">
                    <p className="heroTxt">HOT DEALS THIS WEEK</p>
                    <p className="heroTxtLow">SALE UP TO 25% OFF <br />TECH + TRAVEL GEAR</p>
                </div>
                <button className="heroTxtButton">VIEW NOW</button>
            </div>
        </>
    )
}

export default Hero