/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Form = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.63889 3.5C3.60205 3.5 3.56673 3.51463 3.54068 3.54068C3.51463 3.56673 3.5 3.60205 3.5 3.63889V16.3056C3.5 16.3424 3.51463 16.3777 3.54068 16.4038C3.56673 16.4298 3.60205 16.4444 3.63889 16.4444H11.6389C11.6757 16.4444 11.711 16.4298 11.7371 16.4038C12.03 16.1109 12.5049 16.1109 12.7978 16.4038C13.0907 16.6967 13.0907 17.1715 12.7978 17.4644C12.4904 17.7718 12.0736 17.9444 11.6389 17.9444H3.63889C3.20423 17.9444 2.78737 17.7718 2.48002 17.4644C2.17267 17.1571 2 16.7402 2 16.3056V3.63889C2 3.20423 2.17267 2.78737 2.48002 2.48002C2.78737 2.17267 3.20423 2 3.63889 2H12.25C12.6642 2 13 2.33579 13 2.75C13 3.16421 12.6642 3.5 12.25 3.5H3.63889Z"
      fill="currentColor" />
    <path d="M14.4435 4.38852C14.8342 3.99781 15.3641 3.77832 15.9167 3.77832C16.4692 3.77832 16.9991 3.99781 17.3898 4.38852C17.7805 4.77922 18 5.30913 18 5.86166C18 6.4142 17.7805 6.94411 17.3898 7.33481L11.7329 12.9917C11.6182 13.1065 11.4693 13.1809 11.3086 13.2038L9.10889 13.5179C8.87521 13.5513 8.63946 13.4727 8.47255 13.3058C8.30564 13.1389 8.22705 12.9031 8.26041 12.6694L8.57448 10.4697C8.59742 10.3091 8.67186 10.1602 8.78662 10.0454L14.4435 4.38852ZM15.9167 5.27832C15.7619 5.27832 15.6136 5.33978 15.5042 5.44918L10.0241 10.9293L9.88668 11.8916L10.8491 11.7542L16.3291 6.27415C16.4385 6.16475 16.5 6.01637 16.5 5.86166C16.5 5.70695 16.4385 5.55857 16.3291 5.44918C16.2197 5.33978 16.0714 5.27832 15.9167 5.27832Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M5 6.68774C5 6.30791 5.30791 6 5.68774 6H9.35566C9.73549 6 10.0434 6.30791 10.0434 6.68774 10.0434 7.06756 9.73549 7.37547 9.35566 7.37547H5.68774C5.30791 7.37547 5 7.06756 5 6.68774zM5.68774 9C5.30791 9 5 9.30791 5 9.68774 5 10.0676 5.30791 10.3755 5.68774 10.3755H6.81226C7.19209 10.3755 7.5 10.0676 7.5 9.68774 7.5 9.30791 7.19209 9 6.81226 9H5.68774z"
      fill="currentColor" />
  </svg>
);
Form.displayName = 'Form';
Form.propTypes = {
  size: PropTypes.string
}
export default Form;
/* tslint:enable */
/* eslint-enable */
