import './App.css';
import {InputformElement} from './FormElements';
import {TextField} from '@mui/material';
import {Grid, Card, CardContent, Typography, Button} from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
// import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import  Reducer from './Reducers';

function App() {
  const dispatch = useDispatch();
  const response = useSelector(state=>state);
  const columns = [
    { field: 'albumId', headerName: 'AlbumID' },
    { field: 'id', headerName: 'ID'},
    { field: 'title', headerName: 'title',width:300},
    { field: 'url', headerName: 'url'},
    { field: 'thumbnailUrl', headerName: 'thumbnail'}
    ]
  console.log(response.data)
  return (
    <div className="App">
      <Grid style={{padding:"50px 5px 0 5px"}}>
      <Card style={{maxWidth:800,margin:"0 auto"}}>
      <CardContent>
        <Typography variant='h2' color='red'>Photo Album</Typography>
        <Typography variant='subtitle' color="secondary">Enter UserId</Typography>
        <form>
        <Grid container spacing={1}>
        {
          InputformElement.map(input=><Grid xs={12} sm={6} item>
            <TextField key={input.name} {...input}/>
            </Grid>)
        }
        <Grid item xs={12}>
          <Button onClick={GetallData} variant='filled' color='green'>Get All Album Data</Button><br />
          <Button onClick={Get} variant='filled' color='secendory'>Get</Button><br />
          <Button onClick={Delete} variant='filled' colour='Primary'>Delete a Record</Button><br/>
          <Button onClick={Update} variant='filled'>Update Album Title</Button><br/>
          <Button onClick={Add} variant='filled'>Add New Album</Button><br/>
        </Grid>
        </Grid>
        </form>
      </CardContent>
      </Card>
      </Grid>
      <div style={{ height: 700, width: '100%' }}>
      <DataGrid
      rows={response}
      columns={columns}
      pageSize={12}/>
      </div>
    </div>
  );

function GetallData()
{
  dispatch({
    type: 'GetallalbumData'
  })
  
}

function Get()
{
  dispatch({
    type: 'GetData'
  })
}

function Delete()
{
  dispatch({
    type: 'DeleteData'
  })
}

function Update()
{
  dispatch({
    type: 'UpdateData'
  })
}

function Add()
{
  dispatch({
    type: 'AddData'
  })
}
}

export default App;

  
