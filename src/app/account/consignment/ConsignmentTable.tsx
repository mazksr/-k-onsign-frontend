import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ConsignmentOptions from "@/app/account/consignment/ConsignmentOptions"

import React, {Suspense} from 'react';
import {cookies} from "next/headers";
import Loading from "@/app/components/Loading/loading";

interface Products {
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "stock": number,
    "condition": string
}

const TransactionTable = async({search}) => {
    const url = search ? `http://localhost:4000/product/current?search=${search}` : "http://localhost:4000/product/current";
    const post = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })
    const products: Products[] = await post.json();

    return (
        <Table className="table-auto mt-5 w-full">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead className="w-3/5">Product Name</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="text-center">Stock</TableHead>
                    <TableHead className="text-center"></TableHead>
                </TableRow>
            </TableHeader>
            <Suspense fallback={<Loading/>}>
                <TableBody>
                    {products ?
                        products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell className="text-center">${product.price}</TableCell>
                                <TableCell className="text-center">{product.stock}</TableCell>
                                <TableCell className="text-center">
                                    <ConsignmentOptions product={product}/>
                                </TableCell>
                            </TableRow>
                        )) : <TableRow/>}
                </TableBody>
            </Suspense>

        </Table>

    );
};

export default TransactionTable;
