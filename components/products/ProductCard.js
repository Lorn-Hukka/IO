import Link from "next/link";
import { SearchIcon } from '@heroicons/react/outline'
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  

const handleClick = (toAdd, e) => {
    e.preventDefault();
    if (typeof window !== 'undefined')
    {
      let oldCart = JSON.parse(localStorage.getItem('Cart')) || [];
      oldCart.push(toAdd)
      localStorage.setItem('Cart', JSON.stringify(oldCart));
      
    }
}
  
  return (
    <>
      <Link href={"/products/" + product.slug}>
        <a>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url(https://cms.io.lorned.net/" + product.images[0].url + ")" }}>
              <button  className="p-2 rounded-full bg-red-600 text-white mx-1 -mb-4 hover:bg-red-500 focus:outline-none focus:bg-red-500">
                <SearchIcon className="h-5 w-5" aria-hidden="true" /></button>
                <button onClick={(e) => handleClick(product, e)} className="p-2 rounded-full bg-red-600 text-white  -mb-4 hover:bg-red-500 focus:outline-none focus:bg-red-500">
                {<svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>}
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">{product.title}</h3>
              {
                product.on_sale == false ? 
                  <span className="text-gray-500 mt-2">{product.price} zł</span>
                :
                <>
                  <span className="text-gray-500 mt-2 line-through">{product.price} zł </span> &nbsp;
                  <span className="text-gray-900 mt-2">{product.sale_price} zł</span>
                </>

          
              }
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default ProductCard;