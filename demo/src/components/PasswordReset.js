import React from 'react';

class PassworRest extends React.Component
{
    constructor(props) {
        super(props);
    }

    onKeyUp(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <input type="text" onKeyUp={(e) => this.onKeyUp(e)} />
        );
    }
}

export default PassworRest;