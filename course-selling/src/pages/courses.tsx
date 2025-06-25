import CourseCard from '@/components/CourseCard'
import React from 'react'

export default function Courses() {
    return (
        <div className='flex flex-wrap gap-4 '>
            <div>
                <CourseCard />
            </div>
            <div>
                <CourseCard />
            </div>
            <div>
                <CourseCard />
            </div>
        </div>
    )
}
