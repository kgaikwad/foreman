import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import React from 'react';
import ActionLinks from '../ActionLinks';

import { actionsList } from './AuditsList.fixtures';


describe('actions links', () => {
  it('should have an action links', () => {
    const wrapper = shallow(<ActionLinks allowedActions={ actionsList } />);
    expect(wrapper.find('a').length).toEqual(2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
