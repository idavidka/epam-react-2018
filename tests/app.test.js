import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Search from '../lib/search';

jest.mock('../lib/search.jsx', () => 'Search');

describe('App', () => {
    it('should render html structure', () => {
        const search = renderer.create(<Search title="Test" placeholder="Test" button="Button" />).toJSON();

        console.log(search);
        expect(search).toMatchSnapshot();
    });

    it('should do something', () => {
        const eventMock = {
            target: {
                value: {}
            }
        };

        const search = shallow(<Search title="Test" placeholder="Test" button="Button" />);

        console.log(search.debug());
        search.find('input').simulate('change', eventMock);
    });
});