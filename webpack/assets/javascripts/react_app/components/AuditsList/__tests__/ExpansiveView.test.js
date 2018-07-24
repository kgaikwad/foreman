import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import React from 'react';
import ExpansiveView from '../ExpansiveView';

import { AuditRecord } from './AuditsList.fixtures';

describe('display expansive view for audit record', () => {
  it('should show audit record changes', () => {
    const wrapper = shallow(<ExpansiveView audit={AuditRecord}/>);

    expect(wrapper.find('.editor_source.diffMode').length).toEqual(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
