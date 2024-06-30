"use client"

import React, {createRef, useEffect, useState} from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {useFormState} from "react-dom";
import {addProduct, editProduct} from "@/app/admin/AdminActions";
import {useEdgeStore} from "@/app/account/consignment/EdgeStore";

const intialState = {
    message: ""
}

const NewProductDrawer = ({product}) => {
    const [state, formAction] = useFormState(editProduct, intialState);
    const [url, setUrl] = useState(product.url)
    const [file, setFile] = React.useState<File>();
    const { edgestore } = useEdgeStore();

    const [value, setValue] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    return (

        <Drawer onClose={() => {
            setUrl("")
            setValue(false)
            setUploaded(false)
        }}>
            <DrawerTrigger
                className="bt h-12 w-10/12">
                Edit
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className={"px-14"}>
                    <div className={"flex justify-center"}>
                        <DrawerTitle>Edit Product</DrawerTitle>
                        <DrawerClose className="w-28 fixed h-12 right-72 top-0">
                            <button className="bt w-full h-full mt-5">Close</button>
                        </DrawerClose>
                    </div>
                    <DrawerDescription className="text-xl pt-6 pb-16 px-56">
                        <form action={formAction}>
                            <div className="flex w-full items-center gap-1.5">
                                <div>
                                    <label
                                        className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Product
                                        Image</label>
                                    <input
                                        type="file"
                                        className="flex h-10 w-72 mb-5 rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 hover:cursor-pointer file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                                        onChange={(e) => {
                                            setFile(e.target.files?.[0]);
                                        }}
                                    />
                                </div>

                                <button onClick={async () => {
                                    if (file && !product.url) {
                                        const res = await edgestore.publicFiles.upload({
                                            file,
                                            onProgressChange: (progress) => {
                                                if (progress === 100) setUploaded(true);
                                            },
                                        });
                                        setUrl(res.url)
                                    } else if (file && product.url) {
                                        const rs = await edgestore.publicFiles.upload({
                                            file,
                                            options: {
                                                replaceTargetUrl: product.url,
                                            },
                                        });
                                        setUrl(product.url)
                                    }
                                }}
                                        className="relative py-2 px-8 ml-2 text-base font-bold nded-full overflow-hidden bg-black text-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                                >
                                    Upload
                                </button>
                                {uploaded && <p className="text-sm text-black">Upload Success!</p>}

                            </div>
                            <input type="text" className="invisible" name="image_url" defaultValue={url}/>
                            <input type="number" className="invisible" name="id" defaultValue={product.id}/>
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                            >Product Name</label>
                            <input
                                className="mb-4 items-start text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                type="text"
                                required={true}
                                placeholder="Product Name"
                                name={"name"}
                                defaultValue={product.name}
                            />
                            <div className="flex">
                                <div className="w-28 mr-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2"
                                    >Stock</label>
                                    <input
                                        className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                        type="number"
                                        name={"stock"}
                                        required={true}
                                        step="1" min="0"
                                        placeholder="Stock"
                                        defaultValue={product.stock}/>
                                </div>
                                <div className="w-28 ml-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2"
                                    >Price</label>
                                    <input
                                        className="mb-4 text-sm mr-2 custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                        type="number"
                                        required={true}
                                        placeholder="Price ($)"
                                        name={"price"}
                                        defaultValue={product.price}
                                    />
                                </div>
                            </div>

                            <label className="block text-gray-700 text-sm font-bold mb-2"
                            >Description</label>
                            <textarea
                                className="mb-4 h-24 resize-none text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"

                                rows={4}
                                style={{maxLines: 4}}
                                defaultValue={product.description}
                                placeholder="Product Description"
                                name={"description"}
                            />

                            <div className="radio-input">
                                <div className="info">
                                    <span
                                        className="question font-bold mt-5 text-gray-700">Kondisi</span>
                                </div>
                                <input type="radio" id="value-1" name="condition" value="baru"
                                       defaultChecked={product.condition === "baru"} required/>
                                <label htmlFor="value-1">Baru</label>
                                <input type="radio" id="value-2" name="condition" value="bekas"
                                       defaultChecked={product.condition === "bekas"} required/>
                                <label htmlFor="value-2">Bekas</label>
                            </div>

                            <div className="flex items-center font-mono mt-16">

                                <button className='butt max-w-48 mr-5' onClick={() => setValue(true)}>Submit</button>

                                {value && <p>{state.message}</p>}
                            </div>
                        </form>

                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
};

export default NewProductDrawer;