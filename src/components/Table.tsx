import React from 'react';

type TableColumn<T> = {
    key: string;
    header: string;
    render: (item: T) => React.ReactNode;
};

type TableProps<T> = {
    data: T[];
    columns: TableColumn<T>[];
};

function Table<T>({ data, columns }: TableProps<T>) {
    return (
        <table>
        <thead>
            <tr>
            {columns.map((column:any) => (
                <th key={column.key}>{column.header}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item:any) => (
            <tr key={item.id}>
                {columns.map((column:any) => (
                        <td key={`${item.id}-${column.key}`}>{column.render(item)}</td>   
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    );
}
export default Table