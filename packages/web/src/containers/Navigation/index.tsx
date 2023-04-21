import { useUserStore } from "@laundry-app/shared/zustand/user";
import { NavigationContainer } from "@react-navigation/native";

import AuthedNavigation, {
  linkingOptions as authedLinkingOptions,
} from "./AuthedNavigation";
import { LoginContainer } from "@web/containers";

export type { AuthedStackParamList } from "./AuthedNavigation";
export type { UnauthedStackParamList } from "./UnauthedNavigation";

const Navigation = () => {
  const isAuthed = useUserStore((state) => state.isAuthed);

  if (!isAuthed) {
    return <LoginContainer />;
  }

  return (
    <NavigationContainer linking={authedLinkingOptions}>
      <AuthedNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
