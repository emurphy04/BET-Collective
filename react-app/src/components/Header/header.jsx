import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons


function Header(){

    const [query, setQuery] = useState('') 

    const handleSearch = (event) =>{
        setQuery(event.target.value)
        console.log(query)
    }

    const submitSearch = () => {
        fetch("http://localhost:3000/search/ed1f", {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "query" : query,
                }
            )
        })
    }

    return(
        <>
            <header>
               
                <nav className="headerContainer">   
                    <div className="contactInfo">
                            <div className="contactBox">
                                <p>&#9743; (709) 555-1234</p>
                            </div>
                            <div className="contactBoxEmail">
                                <p>&#9993; info@thebetcollective.com</p>
                            </div>
                            <div className="socialsBox">
                                <Link to="//facebook.com" target="_blank" className="icon"><FaFacebookF className="move" /></Link>
                                <Link to="//twitter.com" target="_blank" className="icon"><FaTwitter className="move"/></Link>
                                <Link to="//instagram.com" target="_blank" className="icon"><FaInstagram className="move"/></Link>
                            </div>
                    </div>
                    <div className="nav">
                        <Link to={'/'}><div className="title">The BET Collective</div></Link>
                        <div className="navBox">
                            <Link to={'/products/all'} className="navText"><p>Shop All</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/clothing'} className="navText"><p>Clothing</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/accessories'} className="navText"><p>Accessories</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/home-living'} className="navText"><p>Home + Living</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/tech-travel'} className="navText"><p>Tech + Travel</p></Link>
                            <p>&nbsp;|&nbsp;</p>
                            <Link to={'/products/fun-gifts'} className="navText"><p>Fun Gifts</p></Link>
                        </div>
                        <div className="loginBox">
                            <input onChange={handleSearch} className="searchBox" type="text" placeholder="Search..."/>
                            <Link to={'/search'}><button onClick={submitSearch} className="searchButton">&#x1F50E;&#xFE0E;</button></Link>
                            <Link to={'/cart'}><button className="cartButton"><img src="../../public/images/vector/cart.png" width={15} /></button></Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header