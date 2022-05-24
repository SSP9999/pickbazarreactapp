import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/products";
import "../styles/products.scss";
import {getCategories} from "../redux/categories"

function ProductsRender(){
    const [active,setActive]= useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
        dispatch(getCategories());
    },[])
    const products=useSelector((state)=>state.product.value);
    const categories = useSelector((state)=>state.category.value);

    return(
        <div className="App">

            <div className="productDiv">
                <div className="categorySection">
                    <ul className="categorieslist">
                        {categories.data&& categories.data.map((c)=>{
                            return (
                                <li className="menu" key={c.slug} onClick={()=>setActive(c.id)}>
                                    {c.name}
                                    {c.children&&<ul className={`submenu ${active ==c.id && 'asubmenu'}`}>
                                        {c.children.map((child)=>{
                                            return(
                                                <li className="child">
                                                    {child.name}
                                                </li>
                                            )
                                        }
                                        )}
                                        </ul>}

                                </li>
                            )
                        })}
                    </ul>

                </div>
                <div className="productsSection">
                    {products.data&&products.data.map((p)=>{
                        return(
                            <div className="itemCard" key={p.id}>
                                <img src={p.image.thumbnail} alt=''/>
                                <p className="item_name">
                                    {p.name}
                                </p>
                                <p className="priceTag">
                                   ${p.max_price}-${p.min_price}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}
export default ProductsRender;