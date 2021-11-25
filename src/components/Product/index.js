import React from 'react';
import { FaStar } from 'react-icons/fa';
import ProductPath from './Path';
import ProductControls from './Controls';

const Product = () => {
    return (  
        <main className="mx-auto max-w-screen-xl py-4 px-8">
            <ProductPath />
            <div className="flex">
                <div className="flex-2 my-4">
                    <h1 className="text-4xl mb-2">
                        Blackmagic Design Pocket Cinema Camera 6K Pro
                    </h1>
                    <div className="flex items-center text-lg">
                        <span className="mr-0.5"><FaStar /></span>
                        <span className="mr-0.5"><FaStar /></span>
                        <span className="mr-0.5"><FaStar /></span>
                        <span className="mr-0.5"><FaStar /></span>
                        <span className="mr-0.5"><FaStar /></span>
                        <span className="ml-0.5">16</span>
                    </div>
                </div>
                <div class="flex-1">
                    <ProductControls />
                </div>
            </div>
        </main>
    );
}
 
export default Product;
