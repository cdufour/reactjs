const React = require('react');

function GeneralLayout(props) {
    var title = 'JSX DEMO';
    return(
        <html>
            <head>
                <title>{title}</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = GeneralLayout;