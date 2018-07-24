import React from 'react';

class SearchLink extends React.Component {
  render() {
    const linkProps = {
      href: this.props.url,
      title: this.props.title,
      'data-toggle': 'tooltip',
      'data-placement': 'bottom',
      id: `#resource-link-${this.props.id}`,
    };

    return (
      <a { ...linkProps }>{this.props.textValue}</a>
    );
  }
}

export default SearchLink;
