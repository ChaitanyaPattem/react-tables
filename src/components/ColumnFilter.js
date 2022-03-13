import React, {useState} from 'react'
import { useAsyncDebounce} from 'react-table'

export const ColumnFilter = ({ column }) => {
    const { filter, setFilter } = column
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce((value)=> {
        setFilter(value || undefined)
    })

  return (
        <span>
            Search: {' '}
            <input 
                value={value || ''} 
                onChange={(e)=>{ 
                    setValue(e.target.value)
                    onChange(e.target.value)
                }} 
            />
        </span>
    )
}
