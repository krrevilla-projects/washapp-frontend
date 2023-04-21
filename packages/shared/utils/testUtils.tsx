import { reactQueryWrapper as ReactQueryWrapper } from "@laundry-app/shared/mocks/reactQuery";
import theme from "@laundry-app/shared/style/theme";
import { render, RenderOptions } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import React, { ReactElement } from "react";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const BaseProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryWrapper>
      <NativeBaseProvider initialWindowMetrics={inset} theme={theme}>
        {children}
      </NativeBaseProvider>
    </ReactQueryWrapper>
  );
};

const customRender = (component: ReactElement, options?: RenderOptions) => {
  render(component, {
    wrapper: BaseProviders,
    ...options,
  });
};

// re-export everything
export * from "@testing-library/react-native";
// override render method
export { customRender as render };
