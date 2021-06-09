import React, {Component} from 'react';
import axios from 'axios';

class ContainerPost extends Component{


    componentPost() {
        axios.get('https://jsonplaceholder.typicode.com/users/1/posts').then(res =>{console.log(res)}).catch(err =>{console.log(err)})
    }

    render(){
        return (
            <h2>POST</h2>
        );
    }
}

export default ContainerPost;