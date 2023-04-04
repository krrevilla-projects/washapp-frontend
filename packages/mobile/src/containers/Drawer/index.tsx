import {DrawerState, useDrawer} from '@laundry-app/shared';
import React, {ReactNode} from 'react';
import {Drawer as DrawerLayout} from 'react-native-drawer-layout';

import DrawerContent from './DrawerContent';

export interface DrawerProps {
  children: ReactNode;
}

const mapDrawerStore = (state: DrawerState) => state;
const renderDrawerContent = () => <DrawerContent />;

const Drawer: React.FC<DrawerProps> = ({children}) => {
  const {open, onOpen, onClose} = useDrawer(mapDrawerStore);

  return (
    <DrawerLayout
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      renderDrawerContent={renderDrawerContent}>
      {children}
    </DrawerLayout>
  );
};

export default React.memo(Drawer);
