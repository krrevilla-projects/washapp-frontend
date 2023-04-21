import { NativeBaseProvider } from "native-base";
import { QueryClientContainer } from "@laundry-app/shared/containers";

import Navigation from "./containers/Navigation";

function App() {
  return (
    <NativeBaseProvider>
      <QueryClientContainer>
        <Navigation />
      </QueryClientContainer>
    </NativeBaseProvider>
  );
}

export default App;
