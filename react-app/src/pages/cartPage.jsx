import Header from "../components/Header/header.jsx"
import Footer from "../components/Footer/footer.jsx"
import ShoppingCart from "../components/ShoppingCart/shoppingCart"
import cart from "../searchQuery.json"
import { Link } from "react-router-dom"
import Featured from "../components/Featured/featured.jsx"

function Cart(){
    if (cart.cart.length == 0){
        var cartFull = false
    } else {
        cartFull = true
    }
    console.log(cartFull)

    if (cartFull == true){
        return(
            <>
                <Header></Header>
                <ShoppingCart></ShoppingCart>
                <Footer></Footer>
            </>
        )
    } else {
        return(
            <>
                <Header></Header>
                <div className="cartEmptyBox">
                    <h1 className="cartEmpty">Looks like your cart is empty! <br />Shop around on our site and come back once you've found something you like!</h1>
                    <Link to={'/products/all'}><button className="shopAll">Shop All</button></Link>
                </div>
                <Footer></Footer>
            </>
        )
    }
    
}

export default Cart
