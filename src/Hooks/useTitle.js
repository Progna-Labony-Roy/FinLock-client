import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
document.title=`${title} - Zaperon`;
    },[title])
    return (
        <div>
          
        </div>
    );
};

export default useTitle;