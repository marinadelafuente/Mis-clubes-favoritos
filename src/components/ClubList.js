import React from 'react';

function ClubList(props) {
    console.log(props.clubs)
    return (
        <div>
            <ul className='list'>
                {props.children}
            </ul>
        </div>
    )
}

export default ClubList;