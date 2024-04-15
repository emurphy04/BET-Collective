import items from '../components/ProductCard/products.json'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import { Link } from 'react-router-dom'
import search from '../searchQuery.json'


function Results (){
    var query = search.search[0].query
    var searchList = []
    for (let i = 0; i<items.length; i++){
        if (items[i].name.toLowerCase().includes(query.toLowerCase())){
            searchList.push(items[i])
        }
    }

    if (query == ''){
        query = 'All'
    }

    if (searchList.length > 0){
        return(
            <>
                <Header></Header>
                <div className='resultsBox'>
                    <div className='resultsTxt'>
                        <p>Showing results for <span className='resultsQuery'>{query}</span></p>
                    </div>
                    <div className='cardBox'>
                        <ul>
                        {searchList.map((item, index) =>
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
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <Footer></Footer>
            </>
        )
    } else {
        return(
            <>
                <Header></Header>
                    <div className='noResults'>
                        <p>There were no search results for <span className='noResultsQuery'>{query}</span> :(</p>
                    </div>
                <Footer></Footer>
            </>
        )
    }

    
}

export default Results