import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        currentSection: null
    }

    handleClick = (index) => {
        this.setState ({
            currentSection: index
        })
    }

    renderListItems () {
        return this.props.sections.map((section, i) => (
            <li key={i}>
                <button type='button' onClick={()=>this.handleClick(i)}>
                    {section.title}
                </button>
                {this.state.currentSection === i && this.renderContent()}
            </li>
        ))
    }

    renderContent(){
        const newP = this.props.sections[this.state.currentSection]
        return (
            <p className='content'>{newP.content}</p>
        )
    }


    render(){
        return(
            <ul>
              {this.renderListItems()}  
            </ul>
        )
    }
}


export default Accordion