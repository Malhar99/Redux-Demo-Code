import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnresolvedBugs, loadBugs } from '../store/bugs';


const BugsList = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(getUnresolvedBugs)
    useEffect(() =>{
        dispatch(loadBugs());
    })
    return (
        <div>
            <ul>
                {bugs.map((bugs) => {
                    return <li key={bugs.id}>{bugs.description}</li>
                })}
            </ul>
        </div>
    );
};

export default BugsList;