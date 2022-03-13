import React, { useMemo } from 'react'
import { useTable, useFilters, usePagination } from 'react-table'
import { COLUMNS } from './Columns'

const Table = ({ info }) => {

  console.log(info)
  const columns = useMemo(()=> COLUMNS, [])

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page, 
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    prepareRow 
  } = useTable({
    columns,
    data: info
  },
    useFilters,
    usePagination
  )

  const { pageIndex, pageSize } = state

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup)=> {
            return (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column)=> {
              return (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              )
            })}
          </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell)=> {
              return (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              )
            })}
          </tr>
            )
          })}
        </tbody>
      </table>
          <br />
          <br />
      <div>
        <span><strong>Show : </strong>{' '}
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {[10,15,20].map((pageSize)=> {
            return(
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            )
          })}
        </select>
        </span>{' '}
      <button className='button button2' onClick={()=> previousPage()} disabled={!canPreviousPage} >Previous</button>
          <span>{' '}Page{' '}{pageIndex+1}/{pageOptions.length}{' '}</span>
      <button onClick={()=> nextPage()} disabled={!canNextPage} className="button button2" >Next</button>
      </div>
    </>
  )
}

export default Table;