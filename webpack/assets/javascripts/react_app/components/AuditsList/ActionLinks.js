import React from 'react';
import { Col } from 'patternfly-react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class ActionLinks extends React.Component {
  render() {
    return (
      <Col sm={2} className='actions-btns'>
        { this.props.allowedActions && this.props.allowedActions.map((action, index) => {
          const tooltip = <Tooltip id={index}>{action.title}</Tooltip>;

          const linkProp = {
            className: action.css_class,
            href: action.url,
            disabled: action.disabled,
          };

          return (
            <OverlayTrigger placement="top" id="notifications-toggle-icon"
              overlay={tooltip} key={index}>
              <a key={index} {...linkProp}>
                {action.name ? action.name : action.title}
              </a>
            </OverlayTrigger>
          );
        })}
      </Col>
    );
  }
}

export default ActionLinks;
