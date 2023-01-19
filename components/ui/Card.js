import { StyleSheet, Text, View } from "react-native";
// utils
import Colors from "../../constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 16,
    shadowOpacity: 0.25,
  },
});
