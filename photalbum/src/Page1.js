import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
{ field: 'albumId', headerName: 'AlbumID' },
{ field: 'id', headerName: 'ID'},
{ field: 'title', headerName: 'title',width:300},
{ field: 'url', headerName: 'url'},
{ field: 'thumbnailUrl', headerName: 'thumbnail'}
]

const Alldata = () => {

const [tableData, setTableData] = useState([])

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/photos")
.then((data) => data.json())
.then((data) => setTableData(data))

}, [])

console.log(tableData)

return (
<div style={{ height: 700, width: '100%' }}>
<DataGrid
rows={tableData}
columns={columns}
pageSize={12}
/>
</div>
)
}

export default Alldata;
