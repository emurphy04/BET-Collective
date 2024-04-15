import items from '../components/ProductCard/products.json'
import Header from '../components/Header/header.jsx'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer/footer.jsx'
import { Link } from 'react-router-dom'

function Details(){
    let location = useLocation()
    location = location.pathname.split('/')
    location = location[2]
    for (let i = 0; i<items.length; i++){
        if (items[i].sku == location){
            console.log(true)
            var item = items[i]
        }
    }
    const addCart = () =>{
        fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "itemSku" : item.sku,
                    "quan" : 1,
                    "size" : "L",
                    "color" : "Black",
                    "price" : item.price,
                    "img" : item.image,
                    "name" : item.name
                }
            )
        })
    }
    return(
        <>
            <Header></Header>
            <div className='detailsBox'>
                <div className='prodCatBox'>
                    <p className='prodItemName'><Link to={'/products/'+item.category}><span className='prodCat'>{item.category}</span></Link> / {item.name}</p>
                    
                </div>
                        <div className='prodInfoBox'>
                            <p className='prodTitle'>{item.name}</p>
                            <div className='prodRatingBox'>
                                <p>{item.rating}/5</p>
                            </div>
                            <div className='prodSkuBox'>
                                <p>SKU: {item.sku}</p>
                            </div>
                            <div className='prodPriceBox'>
                                <p>{item.price}</p>
                            </div>
                            <div className='prodDescBox'>
                                <p>{item.desc}</p>
                            </div>
                            <button onClick={addCart} className='addToCart'>Add To Cart</button>
                        </div>

                        <div className='prodImgBox'>
                            <img src={item.image} alt="" width={600} height={600}/>
                        </div>
                </div>   
            
            <Footer></Footer>
        </>
    )
}

export default Details

