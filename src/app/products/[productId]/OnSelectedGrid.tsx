import React from 'react';
import ProductItem from "@/app/components/ProductItem";

const OnSelectedGrid = async({p}) => {
    return (
        <div className="flex justify-center items-center">
            {p &&
                <div
                    className='grid min-w-[780px] grid-cols-2 3:grid-cols-3 4:grid-cols-4 max-w-screen-2xl h-fit px-10 mt-20'>
                    {p.map((product) => (
                        <ProductItem key={product.name} product={product}/>
                    ))}
                </div>
            }
        </div>
    );
};

export default OnSelectedGrid;