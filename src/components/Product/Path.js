import React from 'react';
import { RiHomeLine } from "react-icons/ri";
import './ProductPath.scss'

const ProductPath = () => {
    return (  
        <div className="product-path">
            <ul>
                <li><a href="/">
                    <div className="h-full flex items-center">
                        <RiHomeLine />
                    </div>
                </a></li>
                <li><a href="/">...</a></li>
                <li><a href="/">Matériel Vidéo</a></li>
                <li><a href="/">Caméras vidéo</a></li>
                <li><a href="/">Caméras</a></li>
                <li><a href="/">Blackmagic Design</a></li>
                <li><span>Pocket Cinema Camera 6K Pro</span></li>
            </ul>
        </div>
    );
}
 
export default ProductPath;
