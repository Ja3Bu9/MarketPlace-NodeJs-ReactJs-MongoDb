import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { detailsProduct } from '../actions/productsActions'
import { addToCart } from '../actions/cartActions'


export default function ProductScreen(props) {
    
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const {product, loading, error} = productDetails;

    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;

    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, []);

    const handleAddToCart = (productId,clientId,qty) => {
        
            dispatch(addToCart(productId,clientId,qty))
    }

    return (
        <div >
            <div className="back-to-result">
                <Link to="/" >Back to Result</Link>
            </div>
            {loading? <div>Loading ...</div>:
            error? <div>{error}</div>:
            (
                <div className="details">
                <div className="details-image">
                    <img src={"http://localhost:8080/imgs/"+product.photo} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h1>{product.nom}</h1>

                        </li>
                        <li>
                            <h4>Quantite: {product.quantite}</h4>
                        </li>
                        <li>
                        Price :<b> {product.prix} MAD</b>
                        </li>
                        <li>Description: 
                            <div>
                                { 
                                
                                product.description ? product.description :<> <br></br> <h5>No Details..</h5></>
                                
                                }
                                
                            </div></li>

                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.prix} MAD
                        </li>
                        <li>
                        Status : {product.quantite > 0? "In Stock" : "Out Of Stock" }
                        </li>
                        <li>
                            Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                {[...Array(product.quantite).keys()].map(x=> 
                                   <option key={x+1} value={x+1}>{x+1}</option> 
                                    )}
                                
                            </select>
                        </li>
                        <li>
                           {product.quantite > 0 && <button onClick={ () => {
                               if(userInfo == null){
                                window.location.href = '/signin';
                            }else{
                                handleAddToCart(product._id,userInfo.id,qty)}}} className="button primary">Add to Cart</button>} 
                        </li>
                    </ul>
                </div>
            </div>
            )
            }
           
        
        </div>
    )
}
