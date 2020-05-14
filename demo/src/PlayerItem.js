import React from 'react';
import './playerItem.css';

class PlayerItem extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <span>{this.props.name}</span> 
                <span>{this.props.team}</span>
                <button onClick={() => this.props.onDelete(this.props.name)}>Supprimer</button>
            </div>
        )
    }
}

export default PlayerItem;