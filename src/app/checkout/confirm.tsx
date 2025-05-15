import { StyleSheet, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { useCheckoutFormContext } from "@/providers/CheckoutFormProvider";

import KeyboardAwareScrollView from "@/components/KeyboardAwareScrollView";
import ConfirmCard from "@/components/ConfirmCard";
import AppButton from "@/components/ui/AppButton";

export default function ConfirmScreen() {
  const { personalData, setPersonalData, paymentData, setPaymentData } =
    useCheckoutFormContext();

  const handleSubmit = () => {
    Alert.alert("Thank you!", "Your payment has been processed successfully.", [
      {
        text: "Continue",
        onPress: () => {
          setPersonalData(undefined);
          setPaymentData(undefined);

          router.dismissAll();
          router.back();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <ConfirmCard
            title="Personal"
            onEdit={() => router.dismissTo("/checkout/personal")}
          >
            <Text style={styles.text}>Full Name: {personalData?.fullName}</Text>
            <Text style={styles.text}>Address: {personalData?.address}</Text>
            <Text style={styles.text}>City: {personalData?.city}</Text>
            <Text style={styles.text}>
              Postal Code: {personalData?.postalCode}
            </Text>
            <Text style={styles.text}>
              Phone Number: {personalData?.phoneNumber}
            </Text>
          </ConfirmCard>

          <ConfirmCard
            title="Payment"
            onEdit={() => router.dismissTo("/checkout/payment")}
          >
            <Text style={styles.text}>
              Card Number: {paymentData?.cardNumber}
            </Text>
            <Text style={styles.text}>
              Expiration Date: {paymentData?.expirationDate}
            </Text>
            <Text style={styles.text}>CVV: {paymentData?.cvv}</Text>
            <Text style={styles.text}>
              Save Card Information:
              {paymentData?.saveCardInformation ? "Yes" : "No"}
            </Text>
          </ConfirmCard>

          <AppButton
            style={styles.nextButton}
            text="Submit"
            onPress={handleSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
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
