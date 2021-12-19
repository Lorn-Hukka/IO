import { TrashIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
const CartItem = ({ product }) => {
    return ( 
        <div className="flex items-center">
            <div>
                Zdjęcie
            </div>

            <div>
                {product.name}
            </div>
                
            <div>
                {product.price}
            </div>
            <HeartIcon className="h-5 w-5"/>
            <TrashIcon className="h-5 w-5"/>
            
        </div>
     );
}
 
export default CartItem;