// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap 14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='w-10' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium animi dolore alias! Suscipit totam illum culpa doloremque, maiores iste sunt? Placeat laudantium cupiditate vitae reiciendis eaque obcaecati dolor dolores.
            </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5 ">MY_STORE</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Store</li>
                <li>About Us</li>
                <li>Report A Proplem</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Contact us:0784351925</li>
                <li>email:DH52108695@student.stu.edu.vn</li>

            </ul>
        </div>
            
    
    </div>

  )
}

export default Footer