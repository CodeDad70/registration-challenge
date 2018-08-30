import React from 'react';

const PasswordView = ({ completed, text, onClick }) => (
  <div onClick={onClick}>
  {text}
  </div>
);

const Password = ({ id, text }) => (
  
      <PasswordView
        text={text}
      />
    
);

export default Password;