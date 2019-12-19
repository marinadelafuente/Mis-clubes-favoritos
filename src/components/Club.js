import React from 'react';

function Club(props) {
    console.log(props);
    console.log(props.club.members);

    return (
        <li className="border--medium">
            <i className={props.club.fa}></i>
            <h2>{props.club.name}</h2>
            <p>Members</p>
            <ul className="club__members">
                {props.club.members.map((member, i) => {
                    return (
                        <li
                            key={i}
                            className="club__member">
                            {member};</li>
                    )
                }
                )}</ul>
        </li>
    )
}

export default Club;

