import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart= ()=>{
   
const cartItems = useSelector((store)=>store.cart.items);
const dispatch = useDispatch();
const handleclearCart = ()=>{
dispatch (clearCart());
}
return(
    <div className="text-center m-6 p-6">
        <h1 className="font-bold">
            cart page
        </h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 " onClick={handleclearCart}>clear cart</button>
            
            {cartItems.length ===0 && <h1>add items</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
)
}


export default Cart;