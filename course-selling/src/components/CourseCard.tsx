import { Button } from '@mui/material'
import React from 'react'

const CourseCard = () => {
  return (
    <div className=' w-full h-full flex flex-row flex-wrap px-4 '>
    <div className='w-[400px] h-[450px]   shadow-md rounded-lg'>
        <div className=' h-1/2'>
            <img src="https://images.pexels.com/photos/17445669/pexels-photo-17445669/free-photo-of-city-landscape-fashion-man.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photo 1" className='w-[400px] h-[300px] mb -3' />
        </div>
        <div className='flex  justify-center items-center  h-1/2 mt-10 rounded-lg'>
            <Button variant='contained' size='large' >Edit </Button>
        </div>
        
    </div>
</div>
  )
}

export default CourseCard