import React from 'react';

function Club(props) {
    console.log(props);
    console.log(props.club.members);

    return (
        <li>
            <i className={props.club.fa}></i>
            <h2>{props.club.name}</h2>
            <p>Members</p>
            <ul>{props.club.members.map((member, i) => {
                return (
                    <li key={i}>{member};</li>
                )
            }
            )}</ul>
        </li>
    )
}

export default Club;

