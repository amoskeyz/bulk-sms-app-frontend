import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Select from 'react-select';
import { connect } from 'react-redux';
import { csvFileAction, cleanUpMessage } from '../../Store/actions/Compose';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Options = ({
  user, csvNumbers, isCompleted, cleanUp,
}) => {
  const [labels, setLabels] = useState('');

  const [numbers, setNumbers] = useState(null);

  const handleChange = async (e) => {
    e.preventDefault();

    setLabels(e.target.files[0].name);

    const [csvFile] = e.target.files;
    const loadFilePath = async (file) => {
      const readPath = new FileReader();
      readPath.readAsText(file);
      readPath.onload = event => setNumbers(event.target.result);
      return numbers;
    };
    await loadFilePath(csvFile);

    e.target.value = '';
  };

  useEffect(() => {
    if (isCompleted) {
      setLabels('');
    }
    return (() => {
      cleanUp();
    });
  });

  csvNumbers(numbers);

  return (
    <div className="book m-auto h-50">
      <Alert variant="success">
        {/* <Alert.Heading>Phone Book</Alert.Heading> */}
        <div>
          <strong>Upload Contacts</strong>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" accept=".csv, .txt" onChange={handleChange} />
            <label className="custom-file-label" htmlFor="customFile">{ labels === '' ? 'Choose file' : labels }</label>
            {/* <hr /> */}
          </div>
          {/* <p className="mb-0" /> */}
          {/* <hr /> */}
        </div>
        <hr />
        <strong>Send to groups</strong>
        <Select options={options} isMulti placeholder="Select Groups..." />
        <hr />
        <p />
        <div>
          <strong>Save copy as draft</strong>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter draft title" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Save</button>
            </div>
          </div>
        </div>
        <hr />
        <p />
        <div>
          <strong>Save to phonebook</strong>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter a group name" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Save</button>
            </div>
          </div>
        </div>
        <p />
        <hr />
        <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
        </p>
      </Alert>
    </div>
  );
};

// export default Options;

// export const csvNumbers = details => csvFileAction(details);
export const cleanUp = () => cleanUpMessage();

const mapStateToProps = state => ({
  user: state.auth.user,
  isCompleted: state.message.isCompleted,
  isLoading: state.message.isLoading,
  error: state.message.error,
});

export default connect(mapStateToProps, { csvNumbers: csvFileAction, cleanUp })(Options);
