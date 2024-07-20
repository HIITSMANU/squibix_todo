import React from 'react';

const SkeletonLoading = () => {
    return (
        <div className="animate-pulse flex justify-between  mt-2 px-2 py-2 border-2 border-gray-300">
            <div className="flex items-center mx-2">
                <button className='w-5 h-5 rounded flex items-center justify-center bg-gray-300'></button>
                <p className='w-20 h-3 px-2 items-center text-center justify-center mx-2  bg-gray-300'></p>
            </div>
            <div className="flex flex-row">
                <div className='mx-2 px-2 py-1 w-8 h-8  bg-gray-300'></div>
                <div className='mx-2 px-2 py-1 w-8 h-8  bg-gray-300'></div>
                <div className='mx-2 px-2 py-1 w-8 h-8  bg-gray-300'></div>
            </div>
        </div>
    );
};

export default SkeletonLoading;
