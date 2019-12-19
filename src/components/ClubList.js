import React from 'react';
import Club from './Club';

function ClubList(props) {
    console.log(props.clubs)
    return (
        <div>
            <ul className='list'>
                {props.clubs.map((club, i) => {
                    return <Club
                        key={i}
                        club={club}
                    />
                })
                }
            </ul>
        </div>
    )
}
export default ClubList;
