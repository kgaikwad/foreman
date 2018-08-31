import React from 'react';
import PropTypes from 'prop-types';
import { ListView, Row } from 'patternfly-react';
import SearchLink from './SearchLink';
import ShowOrgsLocs from './ShowOrgsLocs';
import ActionLinks from './ActionLinks';
import ExpansiveView from './ExpansiveView';
import UserDetails from './UserDetails';
import './audit.scss';

const isAuditLogin = (audit) => {
  let name;
  try {
    [name] = Object.keys(audit.audited_changes);
  } catch (e) {
    name = '';
  }
  return name === 'last_login_on';
};

const description = audit => (
  <ListView.Description>
    <ListView.DescriptionText>{audit.action_display_name}</ListView.DescriptionText>
  </ListView.Description>
);

const renderAdditionalInfoItems = items =>
  items &&
  items.map((item, index) => (
    <ListView.InfoItem key={index}>
      {item}
    </ListView.InfoItem>
  ));

const renderActions = timeObject =>
  <span title={timeObject.title} className='gray-text'>{timeObject.value}</span>;

const renderResourceLink = ({ audit_title: auditTitle, audit_title_url: auditTitleUrl, id }) => {
  if (auditTitleUrl) {
    return (
     <SearchLink url={auditTitleUrl} textValue={auditTitle}
              title={__('Filter audits for this resource only')} id={id}></SearchLink>
    );
  }
  return auditTitle;
};

const AuditsList = ({ data: { audits, isOrgEnabled, isLocEnabled } }) => (
  <ListView>
    {audits.map((audit, index) => (
      <ListView.Item id={audit.id} key={audit.id}
        actions={renderActions(audit.creation_time)}
        additionalInfo={
          renderAdditionalInfoItems([
            audit.audited_type_name.toUpperCase(), renderResourceLink(audit)])
        }
        heading={
          <UserDetails isAuditLogin={isAuditLogin(audit)}
            userInfo={audit.user_info} remoteAddress={audit.remote_address} />
        }
        description={description(audit)}
        stacked={false}
        hideCloseIcon={true}
      >
        <Row>
          <ShowOrgsLocs isOrgEnabled={isOrgEnabled} isLocEnabled={isLocEnabled}
            orgs={audit.affected_organizations} locs={audit.affected_locations} />
          <ActionLinks allowedActions={audit.allowed_actions}
                      auditedChanges={audit.audited_changes}/>
        </Row>

        <ExpansiveView audit={audit} />
      </ListView.Item>
    ))}
  </ListView>
);

AuditsList.propTypes = {
  data: PropTypes.shape({
    audits: PropTypes.array.isRequired,
    isOrgEnabled: PropTypes.bool,
    isLocEnabled: PropTypes.bool,
  }),
};

export default AuditsList;
