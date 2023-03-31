import {useEffect, useState} from 'react';
import {DevSettings} from 'react-native';

const addMenuItem = (title: string, handler: () => void) => {
  if (__DEV__) {
    DevSettings.addMenuItem(title, handler);
  }
};

export const useDevtool = () => {
  const [showStorybook, setStorybook] = useState(false);

  useEffect(() => {
    addMenuItem('Open Storybook', () => {
      setStorybook(true);
    });
  }, []);

  return showStorybook;
};
