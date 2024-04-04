import items from '../components/ProductCard/products.json'
import Header from '../components/Header/header.jsx'
import { useLocation } from 'react-router-dom'

function Details(){
    let location = useLocation()
    location = location.pathname.split('/')
    location = location[2]
    console.log(location)
    for (let i = 0; i<items.length; i++){
        if (items[i].sku == location){
            console.log(true)
            var item = items[i]
        }
    }
    console.log(item)
    return(
        <>
            <Header></Header>
            <div className='detailsBox'>
                <div className='prodCatBox'>
                    <p className='prodItemName'><span className='prodCat'>{item.category}</span> / {item.name}</p>
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
                </div>
                <div className='prodImgBox'>
                    <img src={item.image} alt="" width={600} height={600}/>
                </div>
                <button className='addToCart'>Add to Cart</button>
            </div>
        </>
    )
}

export default Details