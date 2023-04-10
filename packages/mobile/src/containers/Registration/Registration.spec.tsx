import Navigation from '@mobile/containers/Navigation';
import {act, cleanup, fireEvent, render, screen} from '@mobile/utils/testUtils';
import React from 'react';

describe('<RegistrationContainer />', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(async () => {
    render(<Navigation />);

    const registerButton = await screen.getByTestId('OnboardingRegister');

    fireEvent.press(registerButton);
  });

  it('Should submit with error', async () => {
    const registrationButton = screen.getByTestId('RegistrationButton');

    await act(() => fireEvent.press(registrationButton));

    expect(screen.findByLabelText('RegistrationFirstNameError')).toBeTruthy();
    expect(screen.findByLabelText('RegistrationLastNameError')).toBeTruthy();
    expect(screen.findByLabelText('RegistrationEmailError')).toBeTruthy();
    expect(screen.findByLabelText('RegistrationContactError')).toBeTruthy();
    expect(screen.findByLabelText('RegistrationPasswordError')).toBeTruthy();
    expect(
      screen.findByLabelText('RegistrationConfirmPasswordError'),
    ).toBeTruthy();
  });

  //   it('Should change text input values', () => {
  //     const emailInput = screen.getByTestId('LoginEmail');
  //     const passwordInput = screen.getByTestId('LoginPassword');

  //     fireEvent.changeText(emailInput, 'testing@example.com');
  //     fireEvent.changeText(passwordInput, 'Test1234');

  //     expect(emailInput.props.value).toBe('testing@example.com');
  //     expect(passwordInput.props.value).toBe('Test1234');
  //   });

  //   it('Should redirect to Home Page when successful', async () => {
  //     const emailInput = screen.getByTestId('LoginEmail');
  //     const passwordInput = screen.getByTestId('LoginPassword');
  //     const loginButton = screen.getByTestId('LoginButton');

  //     fireEvent.changeText(emailInput, 'testing@example.com');
  //     fireEvent.changeText(passwordInput, 'Test1234');
  //     await act(() => fireEvent.press(loginButton));

  //     expect(screen.findByTestId('DashboardContainer')).toBeTruthy();
  //   });
});
