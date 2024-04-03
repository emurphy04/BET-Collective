import { useState } from 'react'
import items from './products.json'

function Card(){
    let selItems = []
    const [val, setVal] = useState('')
    const change = event => {
        const searchQuery1 = event.target.value
        setVal(searchQuery1)
    }
    for (let i = 0; i<items.length; i++){
        if (items[i].name.toLowerCase().includes(val.toLowerCase())){
            selItems.push(items[i])
        }
    }
    return(
        <>
            <input type="text" className='searchBar' placeholder='Search...' value={val} onChange={change}/>
            <ul>
                {selItems.map((item,index) =>
                    <>
                        <div className='cardBackground'>
                            <img src={item.image} alt="Item Picture" width={250} />
                            <div className='cardTitle'><h4>{item.name}</h4></div>
                            <div className='rating'>{item.rating} out of 5</div>
                            <div className='price'><p>{item.price}</p></div>
                        </div>
                    </>
                )}
            </ul>
        </>
    )
}
    
export default Card