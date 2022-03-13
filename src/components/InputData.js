import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import Table from './Table';

export default function InputData() {

  const [info, setInfo] = useState([]);

    const handleChange = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data) 
        
        const workSheets = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(workSheets)
        console.log(jsonData)
        setInfo(jsonData)
    }

  return (
    <>
      <br />
      <input type="file" name="upload" onChange={handleChange}/>
      <br />  
      <hr />    
      <br />   
      <Table info={info} />
    </>
  )
}
