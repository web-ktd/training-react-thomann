import React from 'react';
import HeaderTop from "./Header/HeaderTop";
import BurgerMenu from "./Header/BurgerMenu";
import Search from "./Header/Search";
import IconsAccount from "./Header/IconsAccount";

const categorie = [
    "Guit/Bass", "Batteries", "Clavier", "Studio", "Logiciels", "Sono", "Eclairage",
    "DJ", "Vidéo", "Micros", "Effets", "Vents", "Instr. Trad.", "Librairie", "Cases",
    "Câbles", "Accessoires",
];

const Navbar = () => {
    return (  
        <div className="header">
            <HeaderTop />
            <div className="header-mid flex items-center justify-between mx-10">
                <BurgerMenu />
                <Search />
                <IconsAccount />                
            </div>
            <div className="nav bg-black flex flex-none text-white justify-center mt-2 py-3">
                <ul class="flex">
                    {categorie.map((c) => (
                        <li className="nav-link px-4 py-2 text-lg rounded-lg hover:bg-purple-500"><a href="/">{ c }</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;
