import React from 'react';
import spinner from './Spin.gif';

const Spinner = ()=>{
    return(

            <>
                <img src={spinner} alt="Loading..." className="w-[100px] h-[auto] mx-auto my-[40px] bg-transparent"/>
            </>
        )
    }


export default Spinner;