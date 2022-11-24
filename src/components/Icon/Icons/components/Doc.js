/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Doc = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.81934 9.8501C6.40512 9.8501 6.06934 10.1859 6.06934 10.6001 6.06934 11.0143 6.40512 11.3501 6.81934 11.3501H12.8413C13.2555 11.3501 13.5913 11.0143 13.5913 10.6001 13.5913 10.1859 13.2555 9.8501 12.8413 9.8501H6.81934zM6.81953 13.0501C6.40531 13.0501 6.06953 13.3859 6.06953 13.8001 6.06953 14.2143 6.40531 14.5501 6.81953 14.5501H10.6828C11.097 14.5501 11.4328 14.2143 11.4328 13.8001 11.4328 13.3859 11.097 13.0501 10.6828 13.0501H6.81953z"
      fill="currentColor" />
    <path d="M16.5561 7.56686C16.5561 7.58719 16.5553 7.60733 16.5537 7.62725V16.3269C16.5537 16.7839 16.3722 17.2223 16.049 17.5454C15.7258 17.8686 15.2874 18.0502 14.8304 18.0502H5.12372C4.66667 18.0502 4.22833 17.8686 3.90514 17.5454C3.58196 17.2223 3.40039 16.7839 3.40039 16.3269V3.67353C3.40039 3.21647 3.58196 2.77814 3.90514 2.45495C4.22833 2.13176 4.66667 1.9502 5.12372 1.9502H11.0208C11.4775 1.95029 11.9157 2.1317 12.2387 2.45456L16.0492 6.265C16.372 6.58807 16.5536 7.02626 16.5537 7.483V7.50648C16.5553 7.5264 16.5561 7.54653 16.5561 7.56686ZM5.12372 3.4502C5.06449 3.4502 5.00769 3.47372 4.9658 3.51561C4.92392 3.55749 4.90039 3.6143 4.90039 3.67353V16.3269C4.90039 16.3861 4.92392 16.4429 4.9658 16.4848C5.00769 16.5267 5.06449 16.5502 5.12372 16.5502H14.8304C14.8896 16.5502 14.9464 16.5267 14.9883 16.4848C15.0302 16.4429 15.0537 16.3861 15.0537 16.3269V8.31686H11.9128C11.4557 8.31686 11.0174 8.1353 10.6942 7.81211C10.371 7.48892 10.1895 7.05059 10.1895 6.59353V3.50488L5.12372 3.4502ZM14.4797 6.81686L11.6895 4.02658V6.59353C11.6895 6.65276 11.713 6.70956 11.7549 6.75145C11.7967 6.79333 11.8536 6.81686 11.9128 6.81686H14.4797Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Doc.displayName = 'Doc';
Doc.propTypes = {
  size: PropTypes.string
}
export default Doc;
/* tslint:enable */
/* eslint-enable */