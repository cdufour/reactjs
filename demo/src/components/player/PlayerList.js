import React from 'react';
import PlayerItem from './PlayerItem';
import LangContext from '../../contexts/LangContext'

class PlayerList extends React.Component
{
    static contextType = LangContext
    
    constructor(props) {
        super(props);
    }

    render() {

        let list = this.props.players.map(
            player => <PlayerItem 
                key={player.name} 
                name={player.name} 
                team={player.team}
                onDelete={playerName => this.props.onDelete(playerName)}
                />)

        return(
            <>
                <h2>List Component</h2>
                {list}
            </>
        )
    }
}

export default PlayerList;