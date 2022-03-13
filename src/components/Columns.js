import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'Batch',
        accessor: 'batch',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Stock',
        accessor: 'stock',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Deal',
        accessor: 'deal',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Free',
        accessor: 'free',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'MRP',
        accessor: 'mrp',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Rate',
        accessor: 'rate',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Expires',
        accessor: 'exp',
        Filter: ColumnFilter,
        disableFilters: true,
    },
]