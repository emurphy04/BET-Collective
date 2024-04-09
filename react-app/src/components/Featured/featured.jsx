import items from '../ProductCard/products.json'
import { Link } from 'react-router-dom'


function Featured(){
    let isFeatured = []
    for (let i = 0; i<items.length; i++){
        if (items[i].featured == true){
            isFeatured.push(items[i])
        }
    }

    return(
        <>
            <div className='featuredBox'>
                <div className='featuredTitle'>
                    <p className='featuredTitleTxt'>BEST SELLERS</p>
                </div>
                <div className='featuredCardBox'>
                    <ul>
                        {isFeatured.map((item,index) =>
                            <>
                                <div className='featuredCard'>
                                    <img className='featuredImg' src={item.image} alt="Item Picture" width={291}/>
                                    <div className='featuredItemTitle'><h4>{item.name}</h4></div>
                                    <br /><br /><br /><br />
                                    <div className='featuredPrice'><p>{item.price}</p></div>
                                    <Link to={'/details/'+item.sku}><button className='viewButton'>View</button></Link>
                                </div>
                            </>
                        )}
                    </ul>
                </div>
                <div className='rectBox'>
                    <div className='blueRect'>
                        <div className='aboutTitle'>
                            <p>The BET Collective</p>
                        </div>
                        <div className='aboutText'>
                            <p>The BET Collective Team celebrates summer with our collection of favourites. We are a group of Softare Development students who love to create and design. We hope you enjoy our collection as much as we enjoy offering them to you.</p>
                            <button className='aboutBtn'>Learn more</button>
                        </div>
                    </div>
                    <div className='featuredRect'>
                        <div className='rectImg'><img src="/images/home-living/beachchair1.png"/></div>
                        <div className='rextText'><p className='rectText'>The BET Beach Towel <br /><span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span><br />$29.99</p><button className='viewButton'>View</button></div>
                    </div>
                    <div className='featuredRect'>
                        <div className='rectImg'><img src="/images/home-living/golfball1.png"/></div>
                        <div className='rextText'><p className='rectText'>The BET Golf Balls <br /><span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span><br />$9.99</p><button className='viewButton'>View</button></div>
                    </div>
                    <div className='featuredRect'>
                        <div className='rectImg'><img src="/images/home-living/carplate1.png"/></div>
                        <div className='rextText'><p className='rectText'>The BET Car Plate <br /><span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9734;</span><br />$19.99</p><button className='viewButton'>View</button></div>
                        </div>
                </div>
            </div>
        </>
    )
}


export default Featured