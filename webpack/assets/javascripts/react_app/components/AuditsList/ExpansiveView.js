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
      <div className="editor-section">
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
    (item && typeof item === 'string' && item.length > 0) ? <tr key={index}><td>{item}</td></tr> : null
  ));

const renderCols = changeArr =>
  changeArr &&
  changeArr.map((change, index) => (
    <td key={index} className={changeArr.length > 1 ? `col-6 col-md-4 ${change.css_class}` : `col-12 col-md-8 ${change.css_class}`}>
      <div className={change.css_class}><p>{change.id_to_label}</p></div>
    </td>
  ));

const renderTableRows = changeEntries => (
  changeEntries &&
  changeEntries.map((propDetail, index) => (
    <tr key={index}>
      <td key={index} className='col-6 col-md-4'><div>{ propDetail.name }</div></td>
      { renderCols(propDetail.change) }
    </tr>
  )));

const showChangesDependingUponActions = ({
  action_display_name: actionDisplayName,
  audited_changes_with_id_to_label: auditedChangesWithIdToLabel,
  details,
}) => {
  const tableClasses = 'table table-bordered table-hover';

  if (['added', 'removed'].includes(actionDisplayName) && details.length > 0) {
    return (
      <table className={`${tableClasses} details-row table-inline-changes ${actionDisplayName === 'added' ? 'show-new' : 'show-old'}`}>
        <tbody>
          { renderListItems(details) }
        </tbody>
      </table>
    );
  }

  if (auditedChangesWithIdToLabel.length > 0) {
    return (
      <table className={ `table-changes ${tableClasses}`}>
        <tbody>
          { renderTableRows(auditedChangesWithIdToLabel) }
        </tbody>
      </table>
    );
  }
  return null;
};

class ExpansiveView extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    renderTemplatesDiff(this.inputRef.current);
  }

  render() {
    const { audit } = this.props;
    const { audit_title: auditTitle, comment, audited_changes: auditedChanges } = audit;

    return (
      <div ref={this.inputRef} className="grid-container">
        { showTemplateDiffIfAny(auditTitle, auditedChanges.template) }
        { showChangesDependingUponActions(audit) }
        {
          comment &&
            <div className="details-row comment-section">
              <p className='comment-title'><strong>{ __('Comments') }</strong></p>
              <p className='comment-desc'>{ comment }</p>
            </div>
        }
      </div>
    );
  }
}

export default ExpansiveView;
