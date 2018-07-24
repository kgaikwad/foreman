import $ from 'jquery';
import React from 'react';
import { Col } from 'patternfly-react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { notify } from '../../../foreman_toast_notifications';

const notifyOnError = (responseText) => {
  try {
    const response = JSON.parse(responseText);
    notify({ message: `<p>${response.message}</p>`, type: 'error' });
  } catch (ex) {
    notify({ message: `<p>${responseText}</p>`, type: 'error' });
  }
};

class ActionLinks extends React.Component {
  constructData(dataInfo) {
    const changedData = {};
    const auditedChanges = Object.entries(this.props.auditedChanges);
    if (auditedChanges.length) {
      auditedChanges.forEach(([key, value]) => {
        [changedData[key]] = value;
      });
    }
    if (dataInfo.id) {
      changedData.id = dataInfo.id;
    }
    return changedData;
  }

  handleClick(dataInfo, e) {
    if (!$.rails.confirm(__('Do you really want to revert these changes?'))) {
      return;
    }
    e.preventDefault();

    if (dataInfo.url) {
      $.ajax({
        url: dataInfo.url,
        data: JSON.stringify(this.constructData(dataInfo)),
        type: 'PUT',
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        success(response, textStatus, xhr) {
          notify({ message: `<p>${response.message}</p>`, type: 'success' });
          window.Turbolinks.visit(response.success_redirect);
        },
        error(xhr, textStatus, error) {
          notifyOnError(xhr.responseText);
        },
      });
    }
  }

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
              <a key={index} {...linkProp}
                 onClick={action.data ? this.handleClick.bind(this, action.data) : null}>
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
