import React, { useEffect, useRef, useState } from 'react'

const SliderButton = ({ Count ,arr }) => {
    const [ind, setInd] = useState(0);
    const decrementButton = useRef();
    const incrementButton = useRef();

    //Method-1
    // const handlePrevious = () => {
    //     if(ind>0){
    //         Count(ind - 1)
    //         setInd(ind - 1)
    //     }
    // }
    // const handleNext = () => {
    //     if(ind<arr.length-1){
    //         Count(ind + 1)
    //         setInd(ind + 1)
    //     }
    // }

    //Method-2
    useEffect(() => {
        if (ind >= 0 && ind < arr.length) {
            Count(ind);            
            (ind > 0) ? (decrementButton.current.disabled = false) : (decrementButton.current.disabled = true);
            (ind < arr.length-1) ? (incrementButton.current.disabled = false) : (incrementButton.current.disabled = true);
        }
    }, [ind]);
    const handlePrevious = () => (setInd(ind - 1))
    const handleNext = () => (setInd(ind + 1))

    return (
        <div>
            <button
                onClick={handlePrevious}
                ref={decrementButton}
            >Previous</button>
            <button
                onClick={handleNext}
                ref={incrementButton}
            >Next</button>
        </div>
    )
}

export default SliderButton