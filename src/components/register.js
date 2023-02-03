import React from 'react';
import { CookiesProvider } from 'react-cookie';

import CustomizedDialogs from './dialog';
import SignupForm from './form';
import WelcomeBack from './welcomeBack';

export function Register() {
  return (
    <div className="App">
      <CookiesProvider>
        <CustomizedDialogs>
          <SignupForm />
          <WelcomeBack />
        </CustomizedDialogs>
      </CookiesProvider>
    </div>
  );
}

export default Register;
