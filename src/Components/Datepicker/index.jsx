import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = ({ value, onClick }) => (
    <button type="submit" className="btn btn-outline-secondary" onClick={onClick}>
      {value}
    </button>
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      // minTime={new Date()}
      // maxDate={addMonths(new Date(), 5)}
      disabled={false}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      placeholderText="Select Date to send sms"
      customInput={<ExampleCustomInput />}
    />
  );
};

export default Datepicker;
