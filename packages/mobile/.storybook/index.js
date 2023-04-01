import { getStorybookUI } from '@storybook/react-native';

import './storybook.requires';

const StorybookUIRoot = getStorybookUI({
    host: '0.0.0.0',
    port: 7007,
    asyncStorage: null
});

export default StorybookUIRoot;
