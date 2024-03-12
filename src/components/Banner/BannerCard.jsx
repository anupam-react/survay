import React from 'react'
import { useNavigate } from 'react-router-dom'

const BannerCard = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className='cursor-pointer' onClick={()=> navigate(`/banner/${data?._id}`)}>
      <img src={data?.image} alt="" className='w-80 h-48'/>
    </div>
  )
}

export default BannerCard
