import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import React from 'react';
import AuditsList from '../../AuditsList';

import { AuditsProps } from './AuditsList.fixtures';

describe('show AuditsList', () => {
  it('should show list of audits', () => {
    const wrapper = shallow(<AuditsList data={ { ...AuditsProps } }/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
