import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";

export default function PaymentScreen() {
  const handleNext = () => {
    router.push("/checkout/confirm");
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <View style={styles.container}>
        <AppTextInput placeholder="112233445566" label="Card Number" />

        <View style={{ flexDirection: "row", gap: 12 }}>
          <AppTextInput
            containerStyle={{ flex: 1 }}
            placeholder="MM/YY"
            label="Expiration Date"
          />
          <AppTextInput
            containerStyle={{ flex: 1 }}
            placeholder="123"
            label="CVV"
          />
        </View>

        <AppButton style={styles.nextButton} text="Next" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 12,
    gap: 12,
  },
  nextButton: {
    marginTop: "auto",
  },
});
