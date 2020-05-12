import React from 'react';
import { css } from '@emotion/core';
import PulseLoader from 'react-spinners/PulseLoader';

const override = css`
  display: block;
  margin: 0 auto;
  padding: 0;
`;

const Loader = ({ size, color }) => (
  <div className="sweet-loading">
    <PulseLoader
      css={override}
      size={size}
      color={color}
      loading
    />
  </div>
);

export default Loader;
