import React from 'react';
import { renderTemplatesDiff } from '../../../foreman_editor';

const showTemplateDiffIfAny = (auditTitle, template) => {
  if (template && template[0] !== template[1]) {
    const textareaProp = {
      label: __('Template diff'),
      'data-file-name': auditTitle,
      className: 'col-md-12 editor_source diffMode',
      type: 'text',
    };

    return (
      <div>
        <div className="editor-container">
          <textarea {...textareaProp} />
        </div>
        <input type="hidden" id="old" value={template[0]} />
        <input type="hidden" id="new" value={template[1]} />
      </div>
    );
  }
  return null;
};

const renderListItems = items =>
  items &&
  items.map((item, index) => (
    (item && typeof item === 'string' && item.length > 0) ? <li key={index}>{item}</li> : null
  ));

const renderCols = changeArr =>
  changeArr &&
  changeArr.map((change, index) => (
    <td key={index}><div className={change.css_class}><p>{change.id_to_label}</p></div></td>
  ));

const renderTableRows = changeEntries => (
  changeEntries &&
  changeEntries.map((propDetail, index) => (
    <tr key={index}>
      <td key={index}><div><p>{ propDetail.name }</p></div></td>
      { renderCols(propDetail.change) }
    </tr>
  )));

const showChangesDependingUponActions = (audit) => {
  if (['added', 'removed'].includes(audit.action_display_name)) {
    return (
      <div className={ `details-row change-list ${audit.action_display_name === 'added' ? 'show-new' : 'show-old'}` }>
        <ul>
          { renderListItems(audit.details) }
        </ul>
      </div>
    );
  }

  return (
    <table className="table-changes table table-bordered table-hover">
      <tbody>
        { renderTableRows(audit.audited_changes_with_id_to_label) }
      </tbody>
    </table>
  );
};

class ExpansiveView extends React.Component {
  componentDidMount() {
    renderTemplatesDiff(this.nv);
  }

  render() {
    const auditObj = this.props.audit;

    return (
      <div ref={(elem) => { this.nv = elem; }} className="grid-container">
        { showTemplateDiffIfAny(auditObj.audit_title, auditObj.audited_changes.template) }
        { showChangesDependingUponActions(auditObj) }
        {
          auditObj.comment &&
            <div className="details-row comment-section">
              <p className='comment-title'><strong>{ __('Comments') }</strong></p>
              <p className='comment-desc'>{ auditObj.comment }</p>
            </div>
        }
      </div>
    );
  }
}

export default ExpansiveView;
