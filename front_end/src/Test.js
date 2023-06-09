import React from 'react';
// toolkit test
import { useSelector, useDispatch } from 'react-redux';
import { addHeartColor, changeHeartColor } from './store/test';

export default function App() {

    /* toolkit test(1)
    const test = useSelector((state) => state.test);
    const test = useSelector((state) => {
        return state;
    });
    console.log(test);
    /**/

    //* toolkit test(2)
    const heart = useSelector((state) => state.heart);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(addHeartColor());
    }
      const onClick2 = () => {
        dispatch(changeHeartColor());
    }
    /**/

    return (
        <>
        <div>
        {heart && heart.length > 0 ? (
            heart.map((item, idx) => {
                return <span key={idx}>{item}</span>
            })
        ) : (
            <p>No data available.</p>
        )}
        <div>
            <button onClick={onClick}>테스트1</button>
            <button onClick={onClick2}>테스트2</button>
        </div>
        </div>
        </>
    );
};