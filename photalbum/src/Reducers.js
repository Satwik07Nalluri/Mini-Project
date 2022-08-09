import axios from 'axios';
const Reducer = (state={},action)=>{
    switch(action.type)
    {
        case 'GetallalbumData':
            return axios.all([
                axios.get('http://jsonplaceholder.typicode.com/photos'),
                axios.get('http://jsonplaceholder.typicode.com/albums')
            ])
            .then(axios.spread((photos,albums)=>console.log(photos)))
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