import { FaSearch, FaMicrophone } from "react-icons/fa";

const Search = () => {
    return ( 
        <div class="header-mid-m hover:shadow-md w-1/5 rounded-full flex-grow mx-20">
            <div>
                <div class="mx-auto rounded-lg overflow-hidden">
                    <div class="md:flex">
                        <div class="w-full p-3">
                            <div class="relative"> 
                                <FaSearch className="absolute fa fa-search text-gray-400 top-5 left-4"/>
                                <input type="text" class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer font-bold" name="search" placeholder="Rechercher"></input>
                                <span class="absolute top-4 right-5 border-l pl-4">
                                    <FaMicrophone className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"/>
                                    </span> 
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Search;