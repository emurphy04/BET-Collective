import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.png"; // Adjust the path as needed.


function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerBox logoBox">
        <img src="../../../public/images/logo.png" alt="The BET Collective Logo" />
      </div>

      <div className="footerBox companyInfo">
        <h2>Your Company Title</h2>
        <p>Your Slogan Goes Here</p>
        <address>
          123 Your Street, Your City, Your State, Your Country
        </address>
      </div>

      <div className="footerBox companyLinks">
        <Link to="/about">About</Link> |
        <Link to="/shipping">Shipping Policy</Link> |
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="footerBox shoppingNav">
        <ul>
          <li><Link to="/products/all">Shop All</Link></li>
          <li><Link to="/products/clothing">Clothing</Link></li>
          <li><Link to="/products/accessories">Accessories</Link></li>
          <li><Link to="/products/home-living">Home + Living</Link></li>
          <li><Link to="/products/tech-travel">Tech + Travel</Link></li>
          <li><Link to="/products/fun-gifts">Fun Gifts</Link></li>
        </ul>
      </div>
    </footer> // Corrected this line
  );
}

export default Footer;
