import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Search from '../lib/search';

jest.mock('../lib/search', () => 'Search');

describe('App', () => {
    it('should render html structure', () => {
        const search = renderer.create(<Search />).toJSON();

        expect(search).toMatchSnapshot();
    });
});