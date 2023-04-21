import {fireEvent, render, screen} from '@laundry-app/shared/utils/testUtils';
import React from 'react';

import DashboardEmpty from './DashboardEmpty';
import DashboardHeader from './DashboardHeader';

describe('<DashboardEmpty />', () => {
  it('should display no transactions', async () => {
    render(<DashboardEmpty />);

    expect(await screen.findByText('No Transactions Yet')).toBeTruthy();
  });
});

describe('<DashboardHeader />', () => {
  it('should display loading when basket is pressed', () => {
    render(<DashboardHeader />);

    const basketButton = screen.getByRole('button');

    fireEvent.press(basketButton);

    expect(screen.findByTestId('DashboardHeaderLoading')).toBeTruthy();
    expect(screen.queryByTestId('DashboardHeaderBasketIcon')).toBeFalsy();
  });
});
