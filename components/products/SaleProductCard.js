import Link from "next/link";
import { SearchIcon } from '@heroicons/react/outline'

const SaleProductCard = ({ product }) => {
  return (
    <>
      <Link href={"/products/" + product.slug}>
        <a>
          <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url(" + product.thumbnail + ")" }}>
              <button className="p-2 rounded-full bg-red-600 text-white mx-5 -mb-4 hover:bg-red-500 focus:outline-none focus:bg-red-500">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">{product.name}</h3>
              <span className="text-gray-500 mt-2 line-through">{product.price}</span>  
              <br/>   
              <span className="text-gray-900 mt-2">{product.salePrice}</span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default SaleProductCard;