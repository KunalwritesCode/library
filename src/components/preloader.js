import React,{useEffect}from 'react'

import { preLoaderAnim } from '../animation'
import './preloader.css'

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

  return (
    <div className='preloader'>
      <div className='text-container'>
        <span>Gathering</span>
        <span>Your</span>
        <span>Books.....</span>

      </div>
      
    </div>
  )
}

export default Preloader;
