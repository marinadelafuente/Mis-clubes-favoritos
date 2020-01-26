import React from 'react';
import Club from './Club';
import '../stylesheets/ClubList.css';

function ClubList(props) {
    console.log(props.clubs)
    return (
        <div>
            <h1 className="title">Club List</h1>
            <ul className="list">
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
