const CartItem = ({ product }) => {
    return ( 
        <div className="flex items-center">
            <div>
                Zdjęcie
            </div>

            <div>
                {product.name}
            </div>
                {product.price}
            <div>

            </div>
        </div>
     );
}
 
export default CartItem;