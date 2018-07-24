import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import React from 'react';
import SearchLink from '../SearchLink';

import { searchLinkProp } from './AuditsList.fixtures';

describe('render search link', () => {
  it('should have render a search link', () => {
    const wrapper = shallow(<SearchLink { ...searchLinkProp }/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
