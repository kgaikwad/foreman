import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import React from 'react';
import ShowOrgsLocs from '../ShowOrgsLocs';

import { TaxonomyProps } from './AuditsList.fixtures';


describe('display links for organizations & locations', () => {
  it('should show organizations and locations', () => {
    const wrapper = shallow(<ShowOrgsLocs isOrgEnabled={TaxonomyProps.isOrgEnabled}
                              isLocEnabled={TaxonomyProps.isLocEnabled}
                              orgs={TaxonomyProps.orgs}
                              locs={TaxonomyProps.locs} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
