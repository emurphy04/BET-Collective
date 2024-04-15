import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Total from "../searchQuery.json"
import { Link } from "react-router-dom"
import { useState } from "react"

function Checkout(){
    const [counter, setCounter] = useState(0)
    var totals = Total.checkout[0]
    const [name, setName] = useState('')
    const [addr, setAddr] = useState('')
    const [prov, setProv] = useState('')
    const [post, setPost] = useState('')
    const [country, setCountry] = useState('')
    const [cnumber, setCNumber] = useState('')
    const [ccv, setCCV] = useState('')
    const [date, setDate] = useState('')

    const handleName = (event) =>{
        setName(event.target.value)
        if (name.length > -1){
            if (name.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }
    const handleAddr = (event) =>{
        setAddr(event.target.value)
        if (addr.length > -1){
            if (addr.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }
    const handleProv = (event) =>{
        setProv(event.target.value)
        if (prov.length > -1){
            if (prov.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }
    const handlePost = (event) =>{
        setPost(event.target.value)
        if (post.length > -1){
            if (post.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }
    const handleCountry = (event) =>{
        setCountry(event.target.value)
        if (country.length > -1){
            if (country.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }
    const handleCNumber = (event) =>{
        setCNumber(event.target.value)
        console.log(cnumber)
        if (cnumber.length > -1){
            if (cnumber.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }
    const handleCCV = (event) =>{
        setCCV(event.target.value)
        if (ccv.length > -1){
            if (ccv.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }
    const handleDate = (event) =>{
        setDate(event.target.value)
        if (date.length > -1){
            if (date.length < 1){
                setCounter(counter+1)
            }
            
        }
        
    }

    


    const valid = () =>{
        alert('No field can be left blank')
        console.log(counter)
    }

    console.log(Number(ccv))

    if (counter >= 8){
        if (Number(ccv) == NaN){
            alert('CCV Must be a number')
            console.log(typeof(ccv))
        } else if (Number(cnumber) == NaN){
            alert('Card Number must be a number')
        } else {
            return(
                <>
                    <Header></Header>
                    <div className="checkoutBox">
                        <div className="infoScreenBox">
                                <p className="inputTitle">Customer Information:</p>
                                <label className="label" htmlFor="">Full Name </label>
                                <input onChange={handleName} className="inputBox" type="text" required/>
        
                                <label className="label" htmlFor="">Billing Address </label>
                                <input onChange={handleAddr} className="inputBox" type="text" required/>
        
                                <label className="label" htmlFor="">Province/State </label>
                                <input onChange={handleProv} className="inputBox" type="text" required/>
    
                                <label className="label" htmlFor="">Postal/Zip Code </label>
                                <input onChange={handlePost} className="inputBox" type="text" required/>
        
                                <label className="label" htmlFor="">Country </label>
                                <input onChange={handleCountry} className="inputBox" type="text" required/>
                                <br /><br />
                                <p className="inputTitle">Payment Information:</p>
                                <label className="label" htmlFor="">Card Number </label>
                                <input onChange={handleCNumber} className="inputBox" type="tel" placeholder="XXXX XXXX XXXX XXXX" max={12} required/>
        
                                <label className="label" htmlFor="">CCV </label>
                                <input onChange={handleCCV} className="inputBox" type="tel" placeholder="XXX" max={3} required/>
        
                                <label className="label" htmlFor="">Expiry Date </label>
                                <input onChange={handleDate} className="inputBox" type="date" required/>
                            </div>
                            <div className='cartSummaryBox'>
                                    <div className='orderSummary'>Order Summary</div>
                                    <div className='priceSummaryBox'>
                                        <div className='priceSummaryTitle'>Total Price</div>
                                        <div className='priceSummaryPrice'>${totals.priceTot}</div>
                                    </div>
                                    <div className='priceSummaryBox'>
                                        <div className='priceSummaryTitle'>Discount</div>
                                        <div className='priceSummaryPrice'>${totals.priceTotDisc}0</div>
                                    </div>
                                    <div className='priceSummaryBox'>
                                        <div className='priceSummaryTitle'>HST</div>
                                        <div className='priceSummaryPrice'>${totals.HST.toFixed(2)}</div>
                                    </div>
                                    <hr />
                                    <div className='priceSummaryBox'>
                                        <div className='priceSummaryTitle'>Total</div>
                                        <div className='priceSummaryPrice'>${totals.priceTotHST.toFixed(2)}</div>
                                    </div>
                                    <div className='priceSummaryBox'>
                                        <div className='priceSummaryTitle'>Estimated Delivery</div>
                                        <div className='priceSummaryPrice'>Monday, May 6th </div>
                                    </div>
                                    <Link to={'/cart/complete'}><button className='checkout'>Complete Order</button></Link>
                                </div>
                        
                    </div>
                    <Footer></Footer>
                </>
            )
        }
        
    } else {
        return(
            <>
                <Header></Header>
                <div className="checkoutBox">
                    <div className="infoScreenBox">
                            <p className="inputTitle">Customer Information:</p>
                            <label className="label" htmlFor="">Full Name </label>
                            <input onChange={handleName} className="inputBox" type="text" required/>
    
                            <label className="label" htmlFor="">Billing Address </label>
                            <input onChange={handleAddr} className="inputBox" type="text" required/>
    
                            <label className="label" htmlFor="">Province/State </label>
                            <input onChange={handleProv} className="inputBox" type="text" required/>
    
                            <label className="label" htmlFor="">Postal/Zip Code </label>
                            <input onChange={handlePost} className="inputBox" type="text" required/>

                            <label className="label" htmlFor="">Country </label>
                            <input onChange={handleCountry} className="inputBox" type="text" required/>
                            <br /><br />
                            <p className="inputTitle">Payment Information:</p>
                            <label className="label" htmlFor="">Card Number </label>
                            <input onChange={handleCNumber} className="inputBox" type="tel" placeholder="XXXX XXXX XXXX XXXX" max={12} required/>
    
                            <label className="label" htmlFor="">CCV </label>
                            <input onChange={handleCCV} className="inputBox" type="tel" placeholder="XXX" max={3} required/>
    
                            <label className="label" htmlFor="">Expiry Date </label>
                            <input onChange={handleDate} className="inputBox" type="date" required/>
                        </div>
                        <div className='cartSummaryBox'>
                                <div className='orderSummary'>Order Summary</div>
                                <div className='priceSummaryBox'>
                                    <div className='priceSummaryTitle'>Total Price</div>
                                    <div className='priceSummaryPrice'>${totals.priceTot}</div>
                                </div>
                                <div className='priceSummaryBox'>
                                    <div className='priceSummaryTitle'>Discount</div>
                                    <div className='priceSummaryPrice'>${totals.priceTotDisc}0</div>
                                </div>
                                <div className='priceSummaryBox'>
                                    <div className='priceSummaryTitle'>HST</div>
                                    <div className='priceSummaryPrice'>${totals.HST.toFixed(2)}</div>
                                </div>
                                <hr />
                                <div className='priceSummaryBox'>
                                    <div className='priceSummaryTitle'>Total</div>
                                    <div className='priceSummaryPrice'>${totals.priceTotHST.toFixed(2)}</div>
                                </div>
                                <div className='priceSummaryBox'>
                                    <div className='priceSummaryTitle'>Estimated Delivery</div>
                                    <div className='priceSummaryPrice'>Monday, May 6th </div>
                                </div>
                                <button onClick={valid} className='checkout'>Complete Order</button>
                            </div>
                    
                </div>
                <Footer></Footer>
            </>
        )
    }

    
}

export default Checkout