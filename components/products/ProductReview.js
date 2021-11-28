const ProductReview = () => {
  return ( 
    <>
          <div className="max-w-6xl mx-auto my-5 bg-white shadow-md rounded-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="inline-block relative">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://cms.spfcentaur.pl/uploads/photo_2021_07_12_22_36_12_b61bbd43ed.jpg" alt="Profile picture" />
                    <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <p className="flex items-baseline">
                  <span className="text-gray-600 font-bold">Wojciech K.</span>
                  <span className="ml-2 text-green-600 text-xs">Zweryfikowany Kupujący</span>
                </p>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-3">
                  <span className="font-bold">Wkońcu mogę grać z prawdziwym podręcznikiem!</span>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                  <div className="flex items-center">
                    <span>Czy ta opinia była pomocna?</span>
                    <button className="flex items-center ml-6 hover:text-red-500">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
                      <span className="ml-2">56</span>
                    </button>
                    <button className="flex items-center ml-4 hover:text-red-500">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                      <span className="ml-2">10</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
 
export default ProductReview;