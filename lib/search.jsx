import React, {Component} from 'react';
import Field from './field';
import Button from './button';

module.exports = class Search extends Component {
    render() {
        return <div className="container">
            <div className="fields">
                <Field placeholder={this.props.placeholder}/>
                <Button content={this.props.button} />
            </div>
        </div>
    }
}