import {render, screen} from '@laundry-app/shared/utils/testUtils';
import React from 'react';

import Item, {ItemProps} from '.';

const props: ItemProps = {
  name: 'Tide',
  quantity: 2,
  itemPrice: 25,
};

describe('<Item />', () => {
  beforeEach(() => {
    render(<Item {...props} />);
  });

  it('should display correct info', () => {
    expect(screen.getByTestId('ItemIcon')).toBeTruthy();
    expect(screen.getByText(props.name)).toBeTruthy();
    expect(screen.getByText(`Quantity: ${props.quantity}`)).toBeTruthy();
    expect(
      screen.getByText(`+ ${props.quantity * props.itemPrice} PHP`),
    ).toBeTruthy();
  });
});
