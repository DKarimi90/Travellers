import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const TourDetails = () => {
    const {id} = useParams()

    const [tours, setTours] =useState([])

    useEffect(() => {
        fetch(` http://localhost:3001/tours/` + id)
        .then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(data => {
            console.log(data)
            setTours(data)
        })
    }, [])

  return (
    <div>
        <p className='text-7xl'>Trial</p>
    </div>
  )
}

export default TourDetails