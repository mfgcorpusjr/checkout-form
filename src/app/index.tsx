import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import AppButton from "@/components/ui/AppButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/checkout/personal" asChild>
        <AppButton text="Checkout" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
