import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const categorie = [
    "Guitares & Basses", "Batteries & Percussions", "Pianos & Claviers", "Studio & Enregistrement", "Logiciels Musicaux", "Sonorisation", "Lumière & Scène",
    "Matériel DJ", "Vidéo / Podcasting", "Microphones", "Effets & Périphériques", "Instruments à Vent", "Instruments Traditionnels", "Méthodes, Partitions, DVDs & Livres Spécialisés", "Housses, Etuis, Racks, Flight Cases",
    "Câbles & Connectique", "Accessoires pour Musiciens",
];

const Burger = ({ showMenu, setShowMenu }) => {


    return (
        <>
            <div className={`${showMenu === true ? "grey-bg grey-bg-show" : "grey-bg"}`}></div>
            <aside class={`${showMenu === true ? "aside-show" : ""}`}>
                <button onClick={() => setShowMenu(false)}>
                    <AiOutlineClose className="text-4xl mt-2 absolute top-10 right-10" />
                </button>
                <ul class="flex flex-none pb-10 pt-28 justify-center">
                    <li><a href="/" className="px-6 py-3 text-lg underline hover:text-purple-500">Produits </a></li>
                    <li><a href="/" className="px-6 py-3 text-lg underline hover:text-purple-500">Service </a></li>
                    <li><a href="/" className="px-6 py-3 text-lg underline hover:text-purple-500">A propos </a></li>
                </ul>
                <a href="/" className="block px-6 py-3 text-lg hover:text-purple-500 font-bold">Nos produits phares de la cyberweek</a>
                <hr class="w-20 border-black mx-6 my-2" />
                {categorie.map((c) => (
                    <a href="/" class="block nav-link px-6 py-3 text-lg hover:text-purple-500 font-bold">{c}</a>
                ))}


                <hr class="w-20 border-black mx-6 my-3" />

                <a href="/" className="block px-6 py-3 text-lg hover:text-purple-500 font-bold">Hot Deals </a>
                <a href="/" className="block px-6 py-3 text-lg hover:text-purple-500 font-bold">Nouveaux produits </a>
                <a href="/" className="block px-6 py-3 text-lg hover:text-purple-500 font-bold">Meilleures ventes </a>
                <a href="/" className="block px-6 py-3 text-lg hover:text-purple-500 font-bold">Promos </a>

                <hr class="w-20 border-black mx-6 my-3" />

                <a href="/" className="block px-6 py-3 mb-5 text-lg hover:text-purple-500 font-bold">Chèques Cadeaux  </a>
            </aside>
        </>
    );
}

export default Burger;