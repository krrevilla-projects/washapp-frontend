import {formatDate} from '@laundry-app/shared';
import {getLaundryJobControllerFindOne200Response} from '@laundry-app/shared/mocks/api-mock';
import {LaundryJobStatus} from '@laundry-app/shared/openapi';
import {calculateTotalValue} from '@laundry-app/shared/utils/laundryJob';
import {cleanup, fireEvent, render, screen} from '@mobile/utils/testUtils';
import React from 'react';

import LaundryCard from '.';
import LaundryCardIcon from './LaundryCardIcon';

describe('<LaundryCard />', () => {
  const onPress = jest.fn();
  const laundryJob = getLaundryJobControllerFindOne200Response();

  afterAll(() => {
    cleanup();
  });

  beforeEach(() => {
    render(<LaundryCard data={laundryJob} onPress={onPress} />);
  });

  it('should display correct date format', () => {
    const date = formatDate(laundryJob.createdAt);

    expect(screen.getByText(date)).toBeTruthy();
  });

  it('should display correct totalValue', () => {
    const totalValue = calculateTotalValue(laundryJob.items);

    expect(screen.getByText(`Total: $${totalValue}`)).toBeTruthy();
  });

  it('should call onPress', () => {
    const button = screen.getByRole('button');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith(laundryJob);
  });
});

describe('<LaundyCardIcon />', () => {
  it('should display correct icon for cancelled status', () => {
    render(<LaundryCardIcon status={LaundryJobStatus.Cancelled} />);

    expect(screen.getByTestId('LaundryCardIcon-close')).toBeTruthy();
  });
  it('should display correct icon for paid status', () => {
    render(<LaundryCardIcon status={LaundryJobStatus.Paid} />);

    expect(screen.getByTestId('LaundryCardIcon-check')).toBeTruthy();
  });
  it('should display correct icon for finished status', () => {
    render(<LaundryCardIcon status={LaundryJobStatus.Finished} />);

    expect(screen.getByTestId('LaundryCardIcon-check')).toBeTruthy();
  });
  it('should display correct icon for pending status', () => {
    render(<LaundryCardIcon status={LaundryJobStatus.Pending} />);

    expect(screen.getByTestId('LaundryCardIcon-shopping-basket')).toBeTruthy();
  });
  it('should display correct icon for in-progress status', () => {
    render(<LaundryCardIcon status={LaundryJobStatus.InProgress} />);

    expect(screen.getByTestId('LaundryCardIcon-shopping-basket')).toBeTruthy();
  });
});
