import React from 'react'

const InputLoading = () => {
  return (
    <div className='animate-pulse  px-1 py-1'>
      <div className="flex flex-col sm:flex-row items-center my-5 gap-2">
                <input  className='flex-1 px-4 py-2 rounded border bg-gray-200' type="text" placeholder='' />
                <select className='flex-1 px-4 py-2 rounded border  bg-gray-200'>
                    <option value="" className=' bg-gray-200 '></option>
                    <option value="work"  className=' bg-gray-200'></option>
                    <option value="personal" className=' bg-gray-200'></option>
                    <option value="sports" className=' bg-gray-200'></option>
                </select>
                <button  className='w-14 h-11 flex items-center justify-center  bg-gray-200'>
                    <i className="fa-solid fa-plus mx-1  bg-gray-200"></i>
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <select  className='flex-1 px-4 py-2 rounded border bg-gray-200'>
                    <option value="all"  className=' bg-gray-200'></option>
                    <option value="uncompleted" className=' bg-gray-200'></option>
                    <option value="completed" className=' bg-gray-200'></option>
                </select>
                <select className='flex-1 px-4 py-2 rounded border bg-gray-200'>
                    <option value="all" className=' bg-gray-200'></option>
                    <option value="work" className=' bg-gray-200'></option>
                    <option value="personal" className=' bg-gray-200'></option>
                    <option value="sports" className=' bg-gray-200'></option>
                </select>
            </div>
    </div>
  )
}

export default InputLoading
