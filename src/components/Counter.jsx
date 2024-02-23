import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    // if we want to pick the state for the display we use 'useSelector' hook
    // if we want to access states then use 'useSelector()' hook
    const count = useSelector((state) => state.counter.value);

    // if we want to call the actions in reducers such as increment and decrement then we have to use 'useDispatch()' hook
    // if we want to access the functions then use 'useDispatch()' hook
    const dispatch = useDispatch();

  return (
    <div className='rounded-md flex flex-col mt-[15%] p-10 mx-auto justify-center items-center bg-slate-500 h-[40vh] w-[25%]'>
        <button className='rounded-md bg-white p-1 font-bold w-2/5 hover:bg-rose-500' onClick={() => dispatch(increment())}>
            Increment
        </button>
        <br />
        <br />
        <div className='rounded-md bg-white font-bold w-2/5 text-center'>
            {count}
        </div>
        <br />
        <br />
        <button className='rounded-md bg-white p-1 font-bold w-2/5 hover:bg-rose-500' onClick={() => dispatch(decrement())}>
            Decrement
        </button> 
    </div>
  )
}

export default Counter;