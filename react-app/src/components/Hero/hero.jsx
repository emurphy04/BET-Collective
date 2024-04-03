function Hero(){
    return(
        <>
            <div className="hero">
                <div className="heroImgBox">
                    <img src=".\images\travel-tech\laptop.jpg" width={575} height={566}/>
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