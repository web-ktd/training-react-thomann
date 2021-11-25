import { BsCart } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";

const IconsAccount = () => {
    return ( 
        <div class="header-mid-r flex flex-none items-center">
            <div class="language flex items-center px-4">
                <span class="language-name">
                    FR · €   
                </span>
                <div class="language-flag">
                    <img class="country-flag" src="https://img.icons8.com/color/48/000000/france.png" alt=""></img>
                </div>
            </div>
            <BiUserCircle />
            <FiHeart />
            <BsCart />
        </div>
    );
}
 
export default IconsAccount;