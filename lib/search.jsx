import React, {Component} from 'react';
import Field from './field';
import Button from './button';
import Results from './results';
import Filter from './filter';

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: 'Title'
        };
    }

    getType() {
        if(arguments.length <= 0) {
            return this.state.type || 'Title';
        }
    }

    setType(type) {
        this.setState({type: type});
    }

    setQuery(event) {
        this.setState({
            query: event.target.value
        });
    }

    onSearch() {
        console.log('search', this.state);
    }

    render() {
        console.log(arguments);
        return <Provider store={store}>
            <div className="container">
                <div className="fields">
                    <Field title={this.props.title} placeholder={this.props.placeholder}
                           change={this.setQuery.bind(this)}/>
                    <Button content={this.props.button} search={this.onSearch.bind(this)}/>
                    <Filter typeHandler={this.setType.bind(this)} type={this.getType()}/>
                </div>
                <Results/>
            </div>
        </Provider>;
    }
}