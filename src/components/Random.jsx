import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Random = () => {

    const { gif, loading, fetchData } = useGif();

    return (
        <div className='container random'>
            <h2 >A Random GIF</h2>

            {
                loading ? (<Spinner/>) : (<img src={gif} width='450' alt="gif" />)
            }
            
            <button onClick={()=>fetchData()}>
                Generate
            </button>
        </div>
    )
}