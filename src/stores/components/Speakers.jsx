import React from 'react'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'

const speaker = () => {

    const firstFiveImages = speakerData.slice(0,5)

  return (
    <>
    <h2>Speakers</h2>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                        <Link to='/speakers'>
                         <img className='proImage' src={item.image} alt="" />
                        </Link>
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default speaker