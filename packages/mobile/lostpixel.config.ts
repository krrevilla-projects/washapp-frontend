import type {CustomProjectConfig} from 'lost-pixel';

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: './packages/mobile/storybook-static',
  },
  imagePathBaseline: './packages/mobile/baseline-images',
  imagePathCurrent: './packages/mobile/current-images',
  imagePathDifference: './packages/mobile/difference-images',
  generateOnly: true,
  failOnDifference: true,
};
