import React from 'react';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import PlayerFilter from './PlayerFilter';

class PlayerManager extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { 
            players: [],
            playersFiltered: []
        }
    }

    onSave(playerData) {
        //console.log('onSave PlayerManager Component') 
        this.setState({
            players:[...this.state.players, playerData],
            playersFiltered:[...this.state.players, playerData],
        })
    }

    onDelete(playerName) {
        this.setState({
            players: this.state.players.filter(player => player.name != playerName),
            playersFiltered: this.state.players.filter(player => player.name != playerName)
        });
    }

    onFilter(e) {
        if (e.target.value) {
            this.setState({playersFiltered: this.state.players.filter(
                player => player.name.indexOf(e.target.value) != -1)});
        } else {
            this.setState({playersFiltered: this.state.players});
        }

    }

    render() {
        return (
            <>
                <PlayerForm onSave={playerData => this.onSave(playerData)} />

                <PlayerFilter onFilter={e => this.onFilter(e)} />    

                <PlayerList 
                    onDelete={playerName => this.onDelete(playerName)} 
                    players={this.state.playersFiltered} />
            </>
        )
    }
}

export default PlayerManager;