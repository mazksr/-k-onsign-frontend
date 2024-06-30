import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {cookies} from "next/headers";
import TransactionOptions from "@/app/account/transaction/TransactionOptions";

const TransactionTable = async ({search}) => {
    const url = search ? `http://localhost:4000/transaction/current?search=${search}` : "http://localhost:4000/transaction/current";
    const post = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        },
    })
    const transactions = await post.json();

    return (
        <Table className="table-auto w-full">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead className="w-3/5">Item Name</TableHead>
                    <TableHead className="text-center">Amount</TableHead>
                    <TableHead className="text-center">Total Price</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center"></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {transactions.map(transcation => (
                    <TableRow key={transcation.id}>
                        <TableCell className="font-medium">{transcation.id}</TableCell>
                        <TableCell>{transcation.item_name}</TableCell>
                        <TableCell className="text-center">{transcation.amount}</TableCell>
                        <TableCell className="text-center">${transcation.total_price}</TableCell>
                        <TableCell className="text-center">{transcation.order_status}</TableCell>
                        <TableCell className="text-center">
                            <TransactionOptions transaction={transcation}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
};

export default TransactionTable;
