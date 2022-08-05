import './App.css';
import {InputformElement} from './FormElements';
import {TextField} from '@mui/material';
import {Grid, Card, CardContent, Typography, Button} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid style={{padding:"50px 5px 0 5px"}}>
      <Card style={{maxWidth:800,margin:"0 auto"}}>
      <CardContent>
        <Typography variant='h2' color='red'>Photo Album</Typography>
        <Typography variant='subtitle' color="secondary">Enter UserId</Typography>
        <form>
        <Grid container justifyContent={"center"} spacing={1}>
        {
          InputformElement.map(input=><Grid xs={12} sm={6} item>
            <TextField {...input}/>
            </Grid>)
        }
        <Grid item xs={12}>
          <Button type='submit' variant='outlined' colour='primary' fullWidth>Submit</Button>
        </Grid>
        </Grid>
        </form>
      </CardContent>
      </Card>
      </Grid>
    </div>
  );
}

export default App;
