import {getLaundryJobControllerFindOne200Response} from '@laundry-app/shared/mocks/api-mock';
import {calculateTotalValue} from '@laundry-app/shared/utils/laundryJob';
import {render, screen} from '@mobile/utils/testUtils';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import DetailsContainer from '.';

const mockLaundryJob = getLaundryJobControllerFindOne200Response();
const {Screen, Navigator} = createNativeStackNavigator();

describe('<Details />', () => {
  beforeEach(() => {
    render(
      <NavigationContainer>
        <Navigator>
          <Screen
            name="MockedScreen"
            component={DetailsContainer as any}
            initialParams={{id: mockLaundryJob.id, preData: mockLaundryJob}}
          />
        </Navigator>
      </NavigationContainer>,
    );
  });

  it('should display correct total value', async () => {
    const totalValue = calculateTotalValue(mockLaundryJob.items);

    const totalValueText = await screen.getByText(`${totalValue} PHP`);

    expect(totalValueText).toBeTruthy();
  });

  it('should display correct count of Items', async () => {
    const items = await screen.getAllByTestId('Item');

    expect(items).toHaveLength(mockLaundryJob.items.length);
  });

  it('should display  button', async () => {
    const button = await screen.getByTestId('DetailsButton');

    expect(button).toBeTruthy();
  });
});
