import {getLaundryJobControllerFindAll200Response} from '@laundry-app/shared/mocks/api-mock';

import LaundryCard from '.';

const laundryJobs = getLaundryJobControllerFindAll200Response();

const LaundryCardMeta = {
  title: 'Laundry Card',
  component: LaundryCard,
  args: {
    data: laundryJobs[0],
  },
  argTypes: {
    onPress: {action: 'clicked'},
  },
};

export default LaundryCardMeta;

export const Basic = {};
