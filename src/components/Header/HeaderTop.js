import React from 'react';

const HeaderTop = () => {
    return ( 
        <div className="header-top flex flex-none justify-center items-center mt-5 mx-5">
            <div className="static-links">
                <ul class="flex">
                    <li><a href="/service" class="px-4">Service</a></li>
                    <li><a href="/contact" class="px-4">Nous contacter</a></li>
                    <li><a href="/about" class="px-4">A propos</a></li>
                </ul>
            </div>
            <a href="/" className="logo-link" class="flex flex-grow justify-center">
                <img src="https://im.static-thomann.de/pics//images/logos/thomann-cyan-black.svg" alt="" class="h-7 transition duration-200 ease-in transform hover:scale-105"/>
            </a>
            <ul class="flex">
                <li><a href="/garantie3" class="px-4">Garantie 3 ans</a></li>
                <li><a href="/garantie" class="px-4">Garantie 30 jours satisfait ou remboursé</a></li>
            </ul>
        </div>
     );
}
 
export default HeaderTop;