module.exports = {
    stories: ['../.storybook/stories/**/*.stories.?(ts|tsx|js|jsx)'],
    env: () => ({}),
    addons: ['@storybook/addon-essentials', '@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};