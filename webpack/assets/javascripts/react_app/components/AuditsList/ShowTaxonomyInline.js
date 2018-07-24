import React from 'react';
import { Row, Col } from 'patternfly-react';

const ShowTaxonomyInline = ({
  displayLabel = '',
  items = [],
}) => {
  const listItems = items.map((item, index) => (
    <a href={item.url} key={index} className="apply-comma {item.css_class}" disabled={item.disabled}>{item.name}</a>
  ));

  return (
    <Row>
      <span className="col-md-2">{displayLabel}</span>
      <Col sm={10}>
        <strong>
          {items && listItems}
        </strong>
      </Col>
    </Row>
  );
};

export default ShowTaxonomyInline;
