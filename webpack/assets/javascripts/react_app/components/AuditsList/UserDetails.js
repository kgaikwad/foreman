import React from 'react';

class UserDetails extends React.Component {
  render() {
    const {
      isAuditLogin,
      userInfo,
      remoteAddress,
    } = this.props;

    const {
      search_path: searchPath,
      display_name: UserDisplayName,
      audit_path: auditPath,
    } = userInfo;

    const linkProps = {
      href: searchPath,
      title: __('Filter audits for this user only'),
      'data-toggle': 'tooltip',
      'data-placement': 'bottom',
      className: 'user-info',
    };

    if (isAuditLogin) {
      return (
        <div>
          <a { ...linkProps }>{UserDisplayName}</a>
          <a href={auditPath }>__('Logged-in')</a>
        </div>
      );
    }

    return (
      <div>
        <a { ...linkProps }>{UserDisplayName}</a>
        {remoteAddress ? (<p className='gray-text'>({remoteAddress})</p>) : null}
      </div>
    );
  }
}

export default UserDetails;
