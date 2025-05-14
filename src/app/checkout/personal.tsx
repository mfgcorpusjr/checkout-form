import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";

export default function PersonalScreen() {
  const handleNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <View style={styles.container}>
        <AppTextInput placeholder="John Doe" label="Full Name" />

        <AppTextInput placeholder="580 Whiff Oaf Lane" label="Address" />

        <View style={{ flexDirection: "row", gap: 12 }}>
          <AppTextInput
            containerStyle={{ flex: 1 }}
            placeholder="Sta. Rosa City"
            label="City"
          />
          <AppTextInput
            containerStyle={{ flex: 1 }}
            placeholder="4026"
            label="Postal Code"
          />
        </View>

        <AppTextInput placeholder="1234567890" label="Phone Number" />

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
