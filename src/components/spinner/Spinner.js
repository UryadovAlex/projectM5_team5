import React from "react";

class Spinner extends React.Component {
    static defaultProps = {
        message: 'Loading...'
    }

    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui text loader">{this.props.message}</div>
            </div>
        );
    }
}

export default Spinner;