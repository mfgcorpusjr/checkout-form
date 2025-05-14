import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import ConfirmCard from "@/components/ConfirmCard";
import AppButton from "@/components/ui/AppButton";

const personalData = {
  fullName: "John Doe",
  address: "580 Whiff Oaf Lane",
  city: "Sta. Rosa City",
  postalCode: "4026",
  phoneNumber: "1234567890",
};

const paymentData = {
  cardNumber: "112233445566",
  expirationDate: "MM/YY",
  cvv: "123",
};

export default function ConfirmScreen() {
  const handleNext = () => {
    router.dismissAll();
    router.back();
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <View style={styles.container}>
        <ConfirmCard
          title="Personal"
          onEdit={() => router.dismissTo("/checkout/personal")}
        >
          {Object.entries(personalData).map(([key, value]) => {
            return (
              <Text key={key} style={styles.text}>
                {key}: {value}
              </Text>
            );
          })}
        </ConfirmCard>

        <ConfirmCard
          title="Payment"
          onEdit={() => router.dismissTo("/checkout/payment")}
        >
          {Object.entries(paymentData).map(([key, value]) => {
            return (
              <Text key={key} style={styles.text}>
                {key}: {value}
              </Text>
            );
          })}
        </ConfirmCard>

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
    gap: 12,
  },
  text: {
    fontSize: 16,
  },
  nextButton: {
    marginTop: "auto",
  },
});
