import Navigation from '@mobile/containers/Navigation';
import {cleanup, fireEvent, render, screen} from '@mobile/utils/testUtils';
import React from 'react';

describe('<OnboardingContainer />', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    render(<Navigation />);
  });

  it('should display page', () => {
    expect(screen.getByTestId('OnboardingContainer')).toBeTruthy();
  });

  it('should navigate to login', async () => {
    const loginButton = await screen.getByTestId('OnboardingLogin');

    fireEvent.press(loginButton);

    expect(screen.getByTestId('LoginContainer')).toBeTruthy();
  });

  it('should navigate to register', async () => {
    const loginButton = await screen.getByTestId('OnboardingRegister');

    fireEvent.press(loginButton);

    expect(screen.getByTestId('RegistrationContainer')).toBeTruthy();
  });
});
