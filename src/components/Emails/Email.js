import React from 'react';


const EmailView = ({ completed, text, onClick }) => (
  <div onClick={onClick}>
  {text}
  </div>
);

const Email = ({ id, text }) => (

      <EmailView
        text={text}
      />
    
);

export default Email;