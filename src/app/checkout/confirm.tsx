import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import AppButton from "@/components/ui/AppButton";

export default function ConfirmScreen() {
  const handleNext = () => {
    router.dismissAll();
    router.back();
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <View style={styles.container}>
        <AppButton
          style={styles.nextButton}
          text="Submit"
          onPress={handleNext}
        />
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
  },
  nextButton: {
    marginTop: "auto",
  },
});
