import React, { useState } from 'react';
import HeaderTop from "./HeaderTop";
import BurgerMenu from "./BurgerMenu";
import Search from "./Search";
import IconsAccount from "./IconsAccount";
import Burger from "./Burger";
import "./header.scss";

const categorie = [
    "Guit/Bass", "Batteries", "Clavier", "Studio", "Logiciels", "Sono", "Eclairage",
    "DJ", "Vidéo", "Micros", "Effets", "Vents", "Instr. Trad.", "Librairie", "Cases",
    "Câbles", "Accessoires",
];

const Header = () => {
    
    const [showMenu, setShowMenu] = useState(false);

    return (  
        <>
            <header>
                <HeaderTop />
                <div className="header-mid flex items-center justify-between mx-10">
                    <BurgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
                    <Search />
                    <IconsAccount />                
                </div>
                <div className="nav bg-black flex flex-none text-white justify-center mt-2 py-3">
                    <ul class="flex">
                        {categorie.map((c) => (
                            <li className="nav-link px-4 py-2 text-lg rounded-lg hover:bg-purple-500">
                                <a href="/">{ c }</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        </>
    );
}
 
export default Header;
