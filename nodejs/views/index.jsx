const React = require('react');
const GeneralLayout = require('./layouts/GeneralLayout');

// function HelloMessage(props) {
//     return <div>Hello {props.name}</div>;
// }

function HelloMessage(props) {
    return (
        <GeneralLayout>
            <div>Hello {props.name}</div>
        </GeneralLayout>
    );
}

module.exports = HelloMessage;