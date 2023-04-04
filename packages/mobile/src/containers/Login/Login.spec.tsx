import {reactQueryWrapper as ReactQueryWrapper} from '@laundry-app/shared/mocks/reactQuery';
import Routes from '@mobile/config/routes';
import {UnauthedStack} from '@mobile/containers/Navigation/UnauthedNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import React from 'react';

import LoginContainer from '.';

const Component = () => (
  <ReactQueryWrapper>
    <NavigationContainer>
      <UnauthedStack.Navigator>
        <UnauthedStack.Screen name={Routes.Login} component={LoginContainer} />
      </UnauthedStack.Navigator>
    </NavigationContainer>
  </ReactQueryWrapper>
);

describe('<LoginContainer />', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should submit with error', async () => {
    render(<Component />);

    const loginButton = screen.getByTestId('LoginButton');

    await act(() => fireEvent.press(loginButton));

    expect(screen.queryByLabelText('LoginEmailError')).toBeTruthy();
    expect(screen.queryByLabelText('LoginPasswordError')).toBeTruthy();
  });

  it('Should redirect to Home Page when successful', async () => {
    render(<Component />);

    const emailInput = screen.getByTestId('LoginEmail');
    const passwordInput = screen.getByTestId('LoginPassword');
    const loginButton = screen.getByTestId('LoginButton');

    fireEvent.changeText(emailInput, 'testing@example.com');
    fireEvent.changeText(passwordInput, 'Test1234');
    await act(() => fireEvent.press(loginButton));

    expect(await screen.getByTestId('LoginContainer')).toBeFalsy();
  });

  it('Should change text input values', () => {
    render(<Component />);

    const emailInput = screen.getByTestId('LoginEmail');
    const passwordInput = screen.getByTestId('LoginPassword');

    fireEvent.changeText(emailInput, 'testing@example.com');
    fireEvent.changeText(passwordInput, 'Test1234');

    expect(emailInput.props.value).toBe('testing@example.com');
    expect(passwordInput.props.value).toBe('Test1234');
  });
});
