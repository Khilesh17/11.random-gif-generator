import React, { useState } from 'react'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

export const Tag = () => {
  
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);
  
  //Gifs changing
  function clickHandler() {
    fetchData(tag); 
  }

  //changehandler
  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className='container tag'>
      <h2 >{tag} GIF</h2>

        {
          loading ? (<Spinner/>) : (<img src={gif} width='450' alt="gif" />)
        }
        
        <input
          type="text"
          placeholder='Enter GIF Type'
          onChange={changeHandler}
        />

        <button onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}
