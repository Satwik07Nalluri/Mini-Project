import axios from 'axios';
const Reducer = (state={Data:[]},action)=>{
    debugger
    switch(action.type)
    {
        case 'GetallalbumData':
            return axios.all([
                axios.get('https://jsonplaceholder.typicode.com/photos')])
              .then(photos=>Object.assign({},state,photos))
              .catch(err=>{console.log(err)})
        case 'GetData':
            return axios.get('https://jsonplaceholder.typicode.com/photos/3')
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
        case 'DeleteData':
            return axios.delete('https://jsonplaceholder.typicode.com/photos/{id}')
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
        case 'UpdateData':
            return axios.patch('https://jsonplaceholder.typicode.com/photos/{id}',{
                data:{
                  title:'Test Patch'
                }
              }).then(res=>{console.log(res)})
              .catch(err=>{console.log(err)})
        case 'AddData':
            return axios.post('http://jsonplaceholder.typicode.com/photos',{
                body:{
                    albumId:101,
                    id:5001,
                    title:"Satwik's Album",
                    url:"https://via.placeholder.com/600/24f356",
                    thumbnailUrl:"https://via.placeholder.com/150/24f356"
                }
            }).then(res=>{console.log(res.data)})
            .catch(err=>{console.log(err.data)})
        default:
            return state;
    }
}

export default Reducer;