import React from 'react';

const Join = () => {
    return (
        <div className='bg-orange-300 my-8 py-8'>
            <div className='w-4/5 md:w-2/5 flex flex-col mx-auto'>
                <p className='text-2xl font-bold text-center mb-2'>Give us your feedback</p>
                <input placeholder='Your email' className='border-2 border-black mb-2 rounded-lg px-2 py-1' type="email" />
                <textarea className='border-black mb-2 rounded-lg p-2' placeholder='Your feedback...' name="" id="" cols="10" rows="5"></textarea>
                <button className='bg-red-500 w-2/5 md:w-1/5 mx-auto rounded-lg px-2 py-1' type='submit'>Submit</button>
            </div>
        </div>
    );
};

export default Join;