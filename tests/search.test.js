import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import cy from 'cypress';

import Search from '../lib/search';

describe('Search component', () => {
    let search;

    beforeEach(() => {
        search = search = mount(<Search title="Test" placeholder="Test Placeholder" button="Test Button Content" />);
    });

    it('should render html structure', () => {
        expect(search).toMatchSnapshot();
    });

    it('should render input field', () => {
        const inputField = search.find('input[type="text"]');

        expect(inputField.props().placeholder).toEqual('Test Placeholder');
    });

    it('should render filters', () => {
        const eventMock = {
            target: {
                value: 'Test'
            }
        }

        search.find('input[type="radio"]').forEach(node => node.simulate('change', eventMock));
    });

    it('should render button', () => {
        expect(search.find('input[type="button"]').props().value).toEqual('Test Button Content');

        search.find('input[type="button"]').simulate('click', {});
    });
});