import React from 'react';
import Card from 'react-bootstrap/Card';

const Board = ({ header, details, footer }) => (
  <Card className="w-25 card">
    <Card.Header style={{ color: 'purple' }} as="h6">{header}</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p className="text-center py-5">
          {' '}
          <strong>
            {details}
          </strong>
          {' '}
        </p>
        <footer className="blockquote-footer" style={{ color: 'purple' }}>
          {footer}
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
);

export default Board;
