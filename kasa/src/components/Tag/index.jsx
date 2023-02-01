import React from "react";
import './style.scss';

function Tag(tagLogement) {
    return (
        <ul className="container__tag">
            {tagLogement.dataTag.map((element) => {
                return (
                    <li className="tag__logement" key={element}>{element}</li>
                )})
            }
        </ul>
    )
}

export default Tag;