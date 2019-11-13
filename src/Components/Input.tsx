import * as React from 'react';
import * as PropTypes from "prop-types";

export interface Props {
    type: string,
    name: string,
    value: string,
    placeholder: string
}

export default class Input extends React.Component<Props> {
    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired
    };

    render() {
        return(
            <input
                type={this.props.type}
                name={this.props.name}
                defaultValue={this.props.value}
                placeholder={this.props.placeholder}
                autoComplete="off"
            />
        );
    }
}