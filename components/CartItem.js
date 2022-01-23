import { TrashIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as SolidHeartIcon} from '@heroicons/react/solid'
import Image from 'next/dist/client/image';
const CartItem = ({ product }) => {

    class onState {
        constructor(player){
          this.player = player;
        }
  
        click() {
          console.log('click');
          this.player.changeState(new offState(this.player));
          document.getElementById('heart').classList.remove('hidden');
          document.getElementById('solidHeart').classList.add('hidden');
        }
      }
  
      class offState {
        constructor(player){
          this.player = player;
        }
  
        click() {
          console.log('click');
          this.player.changeState(new onState(this.player)); 
          document.getElementById('heart').classList.add('hidden');
          document.getElementById('solidHeart').classList.remove('hidden');
        }
      }
  
      class Heart {
        constructor(){
          this.state = new offState(this);
        }
  
        changeState(state) {
          this.state = state;
        }
  
        click() {
          this.state.click();
        }
      }
    
      let heart = new Heart();

    return ( 
        <div className="grid grid-cols-2 justify-items-center">
            <div className='flex items-center'>
                <div className='m-5'>
                    <Image src={"https://cms.io.lorned.net/" + product.images[0].url} alt="logo" width ={64} height={64} />
                </div>

                <span>
                    {product.title}
                </span>
            </div> 
            <div className='m-3'>
                {product.on_sale==true ? product.sale_price : product.price}
                <br/>
                <button onClick={() => heart.click()} id="heart" className=''><HeartIcon className="my-1 h-5 w-5 hover:cursor-pointer"/></button>
                <button onClick={() => heart.click()} id="solidHeart" className='hidden'><SolidHeartIcon className="my-1 h-5 w-5 hover:cursor-pointer "/></button>
                <TrashIcon className="my-1 h-5 w-5 hover:bg-gray-200 hover:cursor-pointer"/>
            </div>
            
        </div>
     );
}
 
export default CartItem;