import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_OSSC } from '../apollo/table';
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';

const columns = [
    {
        accessorKey: 'namejson',
        header: 'Name',
    },
    {
        accessorKey: 'region',
        header: 'Region',
    },
    {
        accessorKey: 'zone',
        header: 'Zone',
    },
    {
        accessorKey: 'date',
        header: 'Date',
        cell: info => info.getValue().toLocaleDateString()
    },
];

const Table = () => {

    const { loading, error, data } = useQuery(GET_OSSC);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // const [sorting, setSorting] = useState();

    const table = useReactTable({
        data: data?.base_ossc || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        // getSortedRowModel: getSortedRowModel(),
        // state: {
        //     sorting: sorting
        // },
        // onSortingChange: setSorting,
    });

    // console.log(table.getHeaderGroups())
    return (
        <div className="p-4">
            <table className="w-full text-white text-center">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="py-2 px-4 border-b border-b-1 border-b-border-1">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>

                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {
                                    row.getVisibleCells().map(cell => (
                                        <td td className="py-2 px-4 border-b border-b-1 border-b-border-1" key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    )
                                    )
                                }

                            </tr>
                        )

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Table;
