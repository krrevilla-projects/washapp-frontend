import { colors, typography } from "@laundry-app/shared/style";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxWidth: 500,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 48,
  },
  login: {
    ...typography.header5,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  createAccount: {
    ...typography.header5,
    color: colors.secondary_pink,
    textDecorationLine: "underline",
  },
  input: {
    marginBottom: 20,
  },
});

export default styles;
