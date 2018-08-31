import toJson from 'enzyme-to-json';
import { shallowRenderComponentWithFixtures } from '../../../common/testHelpers';
import ExpansiveView from '../ExpansiveView';

import { AuditRecord } from './AuditsList.fixtures';

const auditFixtures = {
  'render audit record changes': { audit: AuditRecord },
};

describe('ExpansiveView', () => {
  describe('rendering', () => {
    const components = shallowRenderComponentWithFixtures(ExpansiveView, auditFixtures);
    components.forEach(({ description, component }) => {
      it(description, () => {
        expect(component.find('.editor_source.diffMode').length).toEqual(1);
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });
});
