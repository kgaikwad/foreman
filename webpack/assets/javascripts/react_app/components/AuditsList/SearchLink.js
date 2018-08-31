import React from 'react';

class SearchLink extends React.Component {
  render() {
    const {
      url,
      title,
      id,
      textValue,
    } = this.props;

    const linkProps = {
      href: url,
      title,
      'data-toggle': 'tooltip',
      'data-placement': 'bottom',
      id: `resource-link-${id}`,
    };

    return (
      <a { ...linkProps }>{textValue}</a>
    );
  }
}

export default SearchLink;
