import Header from "../components/Header/header";
import items from '../components/ProductCard/products.json'
import ItemGrid from "../components/ProductList/ProductList";
import Footer from "../components/Footer/footer";

function Products(){

    return(
        <>
            <Header></Header>
            <ItemGrid></ItemGrid>
        </>
    )
}

export default Products