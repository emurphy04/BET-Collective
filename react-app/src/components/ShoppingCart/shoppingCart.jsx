import vars from '../../searchQuery.json'
import { Link } from 'react-router-dom'

import { useState } from 'react'

function ShoppingCart(){
    let priceTot = 0
    for (let i = 0; i<vars.cart.length; i++){
        priceTot = priceTot+vars.cart[i].price.split('$')[1]*vars.cart[i].quan
    }
    let items = vars.cart
    
    const del = (event) =>{
        fetch(`http://localhost:3000/cart/${event.target.id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
        })
    }

    

    priceTot = Math.round((priceTot + Number.EPSILON) * 100) / 100
    let priceTotDisc = Math.round(((priceTot*0.10) + Number.EPSILON) * 100) / 100
    let shipping = 0
    let HST = ((priceTot-priceTotDisc+shipping)*0.15)
    let priceTotHST = priceTot-priceTotDisc+HST+shipping
    var date1 = new Date()

    const checkout = () => {
        fetch(`http://localhost:3000/checkout/1653`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "priceTot":priceTot,
                    "priceTotDisc":priceTotDisc,
                    "shipping":shipping,
                    "HST":HST,
                    "priceTotHST":priceTotHST
                })
        })
    }

    return(
        <>
            <div className='cartBox'>
                <div className='cartItems'>
                    {items.map((item,index) =>
                        <>
                            <div className='cartItemContainer'>
                                <div className='cartItemImg'><img src={item.img} width={75} /></div>
                                <div className='cartItemTitle'>{item.name}</div>
                                <div onClick={del} className='cartItemPriceBox' id={item.id}>X</div>
                                <div className='cartItemPriceBox'>{item.price}</div>
                            </div>
                        </>
                    )}
                </div>
                     
                <div className='cartSummaryBox'>
                    <div className='orderSummary'>Order Summary</div>
                    <div className='priceSummaryBox'>
                        <div className='priceSummaryTitle'>Total Price</div>
                        <div className='priceSummaryPrice'>${priceTot}</div>
                    </div>
                    <div className='priceSummaryBox'>
                        <div className='priceSummaryTitle'>Discount</div>
                        <div className='priceSummaryPrice'>${priceTotDisc.toFixed(2)}</div>
                    </div>
                    <div className='priceSummaryBox'>
                        <div className='priceSummaryTitle'>HST</div>
                        <div className='priceSummaryPrice'>${HST.toFixed(2)}</div>
                    </div>
                    <hr />
                    <div className='priceSummaryBox'>
                        <div className='priceSummaryTitle'>Total</div>
                        <div className='priceSummaryPrice'>${priceTotHST.toFixed(2)}</div>
                    </div>
                    <div className='priceSummaryBox'>
                        <div className='priceSummaryTitle'>Estimated Delivery</div>
                        <div className='priceSummaryPrice'>Monday, May 6th </div>
                    </div>
                    <Link to={'/cart/checkout'}><button onClick={checkout} className='checkout'>Proceed to Checkout</button></Link>
                </div>
                </div>
            </> 
    )
}

export default ShoppingCart