import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

const productList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
            <h1 className="pl-title">My Work </h1>
                        <p className="pl-desc">
                            
                        </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default productList