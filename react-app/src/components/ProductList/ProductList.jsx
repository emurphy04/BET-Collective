import items from '../ProductCard/products.json'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/footer'

function ItemGrid(){
  var catList = []
  var cat = useLocation()
  cat = cat.pathname.split('/')[2]
  console.log(cat)
  if (cat != 'all'){
    for (let i = 0; i<items.length; i++){
      if (items[i].category == cat){
        catList.push(items[i])
      }
    }
  } else {
    for (let i = 0; i<items.length; i++){
      catList.push(items[i])
    }
  }
  
  cat = cat.replace('-',' + ')
  let catCap = cat.toUpperCase()
  console.log(cat)

  if (cat == 'fun + gifts'){
    catCap = 'Fun Gifts'
    cat = 'fun gifts'
  }
  return(
    <>
      <div className='catTitle'>
        <div className='catBox'>
        <p><Link to={'/'}><span className='prodCat'>Home</span></Link> / {cat}</p>
        </div>
        <div className='titleBox'>
          <p>{catCap}</p>
        </div>
      </div>
      <div className='cardBox'>
        <ul>
          {catList.map((item, index) =>
            <>
              <div className='cardBackground'>
                <div className='itemImg'>
                  <img src={item.image} width={240} />
                </div>
                <div className='itemTitle'>
                  <p>{item.name}</p>
                </div>
                <div className='itemPrice'>
                  <p>{item.price}</p>
                </div>
                <Link to={'/details/'+item.sku}><button className='viewBtn'>View</button></Link>
              </div>
            </>
          )}
        </ul>
      </div>
      <br />
      <Footer></Footer>
    </>
  )
}

export default ItemGrid