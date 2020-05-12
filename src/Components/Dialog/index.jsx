import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormGroup from '../FormGroup';
import toast from '../Toast';
import { deleteAction } from '../../Store/actions/SentMessage';


function MyVerticallyCenteredModal(props) {
  console.log({ ...props });
  const { details } = props;
  // console.log(details);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered={props.centered}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" as="h6">
          {`${props.group}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: '5px', margin: '0' }}>
        <div style={{
          // display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        }}
        >
          {props.phonebook && (
            <Form className="w-100" onSubmit={props.onClick}>
              <FormGroup
                label="Contacts"
                classname="font-weight-bold"
                as="textarea"
                disabled
                rows={Math.floor(details.split(',').length / 3) + 1}
                value={details}
              />
            </Form>

          )}
          {props.message && (
          <Form className="w-100" onSubmit={props.onClick}>
            <FormGroup
              label="Sender ID"
              classname="font-weight-bold"
              name="to"
              disabled
              value={details.sender}
            />
            <FormGroup
              disabled
              label="Destination Numbers"
              classname="font-weight-bold"
              as="textarea"
              rows="2"
              value={details.recipient}
            />
            <FormGroup
              label="Message"
              classname="font-weight-bold"
              as="textarea"
              disabled
              rows="3"
              value={details.text}
            />
          </Form>
          )
}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button id="cancel" onClick={props.onHide}>Cancel</Button>
        <Button id="delete" variant="outline-danger" onClick={props.onSubmit}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Dialog = ({
  type,
  text,
  group,
  centered,
  details,
  button,
  varient,
  // submit,
  onDelete,
  // isLoading,
  error,
  isDelete,
  message,
  phone,
}) => {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log(isDelete);
    if (isDelete) setModalShow(false);
    if (error) toast(error, 'error');
  }, [isDelete]);

  return (
    <>
      <Button variant={varient} onClick={() => setModalShow(true)}>
        {text}
      </Button>

      <MyVerticallyCenteredModal
        onSubmit={() => onDelete(details.id)}
        show={modalShow}
        onHide={() => setModalShow(false)}
        group={group}
        centered={centered}
        details={details}
        but={button}
        type={type}
        phonebook={phone}
        message={message}
        // onSubmit={submit}
      />
    </>
  );
};

export const onDelete = id => deleteAction(id);

const mapStateToProps = state => ({
  isLoading: state.sent.isLoading,
  isDelete: state.sent.isDelete,
  error: state.sent.error,
});

export default connect(mapStateToProps, { onDelete })(Dialog);
