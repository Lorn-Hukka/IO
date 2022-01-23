const Account = () => {
    return (  
        <div className="flex items-center my-5">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">E-mail:</label>
                    <input type="email" name="email" id="email" placeholder="jan.kowalski@gamil.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring
                             focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 
                             dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Hasło:</label>
                    <input type="password" name="password" id="password" placeholder="Hasło" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring
                             focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 
                             dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    <button className="flex items-center text-center rounded-full mt-3 ml-32 mx-3 py-2 px-3 uppercase text-xs font-bold tracking-wider cursor-pointer text-third border-third border-2 hover:bg-third hover:text-white transition ease-out duration-500">ZALOGUJ SIĘ</button>
                </div>
            </div>
        </div>
    );
}
 
export default Account;