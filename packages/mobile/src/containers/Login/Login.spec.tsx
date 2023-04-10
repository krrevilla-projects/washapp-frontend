import Navigation from '@mobile/containers/Navigation';
import {act, cleanup, fireEvent, render, screen} from '@mobile/utils/testUtils';
import React from 'react';

describe('<LoginContainer />', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(async () => {
    render(<Navigation />);

    const loginButton = await screen.getByTestId('OnboardingLogin');

    fireEvent.press(loginButton);
  });

  it('Should submit with error', async () => {
    const loginButton = screen.getByTestId('LoginButton');

    await act(() => fireEvent.press(loginButton));

    expect(screen.getAllByLabelText('LoginInputError')).toHaveLength(2);
  });

  it('Should change text input values', () => {
    const emailInput = screen.getByTestId('LoginEmail');
    const passwordInput = screen.getByTestId('LoginPassword');

    fireEvent.changeText(emailInput, 'testing@example.com');
    fireEvent.changeText(passwordInput, 'Test1234');

    expect(emailInput.props.value).toBe('testing@example.com');
    expect(passwordInput.props.value).toBe('Test1234');
  });

  it('Should redirect to registration when pressing Create Account', () => {
    const button = screen.getByTestId('LoginCreateAccount');

    fireEvent.press(button);

    expect(screen.getByTestId('RegistrationContainer')).toBeTruthy();
  });

  it('Should redirect to Home Page when successful', async () => {
    const emailInput = screen.getByTestId('LoginEmail');
    const passwordInput = screen.getByTestId('LoginPassword');
    const loginButton = screen.getByTestId('LoginButton');

    fireEvent.changeText(emailInput, 'testing@example.com');
    fireEvent.changeText(passwordInput, 'Test1234');
    await act(() => fireEvent.press(loginButton));

    expect(screen.findByTestId('DashboardContainer')).toBeTruthy();
  });
});
