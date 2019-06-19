import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false
        }

    }
    handleClick = () => {
        this.setState({
            disabled: true
        })
        this.props.action()
    }

    render() {
        return (
            <div>
                <button
                    className="tautokoButton"
                    onClick={this.handleClick.bind(this)}
                    disabled={this.state.disabled}> {this.props.buttonTitle}</button>
            </div>
        )
    }
}


export default Button