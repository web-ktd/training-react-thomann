import { GiHamburgerMenu } from "react-icons/gi";

const BurgerMenu = () => {
    return ( 
        <div class="header-mid-l flex flex-none items-center font-bold">
            <GiHamburgerMenu />
            <ul class="flex">
                <li class="px-4"><a href="/hotdeals">Hot Deals</a></li>
                <li class="px-4"><a href="/news">Nouveautés</a></li>
                <li class="px-4"><a href="/topseller">Top Seller</a></li>
                <li class="px-4"><a href="/proms">Promos</a></li>
            </ul>
        </div>
     );
}
 
export default BurgerMenu;