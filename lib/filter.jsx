import React, {Component} from 'react';

export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedType: 'Title'
        };
    }

    onChangeFilter(event) {
        this.props.typeHandler(event.target.value);
    }

    render() {
        return <div className="filters">
            Search by
            {['Title', 'Genre'].map(type =>
                <div key={type}>
                    <input type="radio" id={type} name="type" checked={this.props.type === type} value={type} onChange={this.onChangeFilter.bind(this)} />
                    <label htmlFor={type}>{type}</label>
                </div>)}
        </div>
    }
}