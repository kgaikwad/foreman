import React from 'react';
import { ListView, Row } from 'patternfly-react';
import SearchLink from './SearchLink';
import ShowOrgsLocs from './ShowOrgsLocs';
import ActionLinks from './ActionLinks';
import ExpansiveView from './ExpansiveView';
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

const style = { color: '#999' };

const userDetails = (audit) => {
  const userInfo = audit.user_info;
  const linkProps = {
    href: userInfo.search_path,
    title: 'Filter audits for this user only',
    'data-toggle': 'tooltip',
    'data-placement': 'bottom',
    className: 'user-info',
  };
  if (isAuditLogin(audit)) {
    return (
      <div>
        <a { ...linkProps }>{userInfo.display_name}</a>
        <a href={userInfo.audit_path }>__('Logged-in')</a>
      </div>
    );
  }

  return (
    <div>
      <a { ...linkProps }>{userInfo.display_name}</a>
      {audit.remote_address ? (<p style={style}>({audit.remote_address})</p>) : null}
    </div>
  );
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
  <span title={timeObject.title} style={style}>{timeObject.value}</span>;

const renderResourceLink = (audit) => {
  if (audit.audit_title_url) {
    return (
     <SearchLink url={audit.audit_title_url} textValue={audit.audit_title}
              title='Filter audits for this resource only' id={audit.id}></SearchLink>
    );
  }
  return audit.audit_title;
};

export default ({ data: { audits, isOrgEnabled, isLocEnabled } }) => (
  <ListView>
    {audits.map((audit, index) => (
      <ListView.Item id={audit.id} key={audit.id}
        actions={renderActions(audit.creation_time)}
        additionalInfo={
          renderAdditionalInfoItems([
            audit.audited_type_name.toUpperCase(), renderResourceLink(audit)])
        }
        heading={userDetails(audit)}
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
