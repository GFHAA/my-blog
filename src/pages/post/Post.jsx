import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { Context } from '../../components/Context';
const Post = () => {
    const {token} =  useContext(Context)
    const params = useParams()
    console.log(token)
    return (
        <div className='index-div'>
            <h1>Hello world!</h1>
        </div>
    );
};

export default Post;