import React, { Component } from 'react'

const LangContext = React.createContext()

class LangProvider extends Component {
    state = {
        lang: 'fr'
    }

    setLang = lang => {
        this.setState({lang})
    }

    render() {
        const { children } = this.props;
        const { lang } = this.state;
        const { setLang } = this;

        return(
            <LangContext.Provider value={{lang, setLang}}>
                {children}
            </LangContext.Provider>
        )
    }
}

export default LangContext;
export { LangProvider }

// export const LangProvider = LangContext.Provider
// export const LangConsumer = LangContext.Consumer

// export default LangContext