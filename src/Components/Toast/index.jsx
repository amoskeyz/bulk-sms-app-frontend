import React from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/core';
// import { useToasts } from 'react-toast-notifications';
// import ButterToast, { Cinnamon } from 'butter-toast';
// import './react-toastify.css';

export const Coaster = ({ output }) => (<h6 className="p-2">{output}</h6>);

export default (output, type) => {
  toast[type](<Coaster output={output} />, {
    className: css({ fontFamily: 'Varela, cursive' }),
  });
};
