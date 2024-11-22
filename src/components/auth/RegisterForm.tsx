import React from 'react';
import { Person, MarkunreadMailbox } from '@mui/icons-material';

const RegisterForm: React.FC = () => {
  return (
    <div className="container">
      <div className="page signup">
        <div className="input">
          <div className="title">
            <Person /> NAME
          </div>
          <input className="text" type="text" placeholder="" />
        </div>
        <div className="input">
          <div className="title">
            <MarkunreadMailbox /> EMAIL
          </div>
          <input className="text" type="text" placeholder="" />
        </div>
        <div className="input">
          <input type="submit" value="SIGN UP" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;