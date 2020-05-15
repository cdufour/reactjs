import React from 'react';
import LangContext from '../contexts/LangContext'


class LangSwitcher extends React.Component {
    static contextType = LangContext

    switchLang() {
        let newLang = (this.context.lang == 'fr') ? 'en' : 'fr';
        this.context.setLang(newLang);
    }

    render() {
        return(
            <button onClick={() => this.switchLang() }>{this.context.lang}</button>
        )
    }
}

export default LangSwitcher;
