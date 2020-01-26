import React from 'react';
import '../stylesheets/Club.css';

function Club(props) {
    console.log(props);
    console.log(props.club.members);

    return (
        <li className="border--medium list__item">
            <div className="club__title">
                <i className={props.club.fa}></i>
                <h2 className="subtitle">{props.club.name}</h2>
            </div>
            <p className="members__title">Members</p>
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

