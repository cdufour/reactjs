import React from 'react';

function PlayerFilter(props) {

    return(
        <div>
            <h2>Filter Component</h2>
            <input onChange={props.onFilter} type="text" />
        </div>
    )

}

export default PlayerFilter;