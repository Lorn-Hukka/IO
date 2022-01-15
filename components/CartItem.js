import { TrashIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/dist/client/image';
const CartItem = ({ product }) => {
    return ( 
        <div className="grid grid-cols-2 justify-items-center">
            <div className='flex items-center'>
                <div className='m-5'>
                    <Image src={"https://cms.io.lorned.net/" + product.images[0].url} alt="logo" width ={64} height={64} /> {/*placeholder*/}
                </div>

                <span>
                    {product.title}
                </span>
            </div> 
            <div className='m-3'>
                {product.on_sale==true ? product.sale_price : product.price}
            
                <HeartIcon className="my-1 h-5 w-5 hover:bg-gray-200 hover:cursor-pointer"/>
                <TrashIcon className="my-1 h-5 w-5 hover:bg-gray-200 hover:cursor-pointer"/>
            </div>
            
        </div>
     );
}
 
export default CartItem;