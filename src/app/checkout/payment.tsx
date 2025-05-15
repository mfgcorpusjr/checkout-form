import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  paymentDataScheme,
  PaymentData,
  useCheckoutFormContext,
} from "@/providers/CheckoutFormProvider";

import KeyboardAwareScrollView from "@/components/KeyboardAwareScrollView";
import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";

export default function PaymentScreen() {
  const { paymentData, setPaymentData } = useCheckoutFormContext();

  const form = useForm({
    defaultValues: paymentData,
    resolver: zodResolver(paymentDataScheme),
  });

  const handleNext = (data: PaymentData) => {
    setPaymentData(data);
    router.push("/checkout/confirm");
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <KeyboardAwareScrollView keyboardVerticalOffset={110}>
        <View style={styles.container}>
          <FormProvider {...form}>
            <AppTextInput
              name="cardNumber"
              placeholder="4242 4242 4242 4242"
              label="Card Number"
              required
            />

            <View style={{ flexDirection: "row", gap: 12 }}>
              <AppTextInput
                name="expirationDate"
                containerStyle={{ flex: 1 }}
                placeholder="MM/YY"
                label="Expiration Date"
                required
              />
              <AppTextInput
                name="cvv"
                containerStyle={{ flex: 1 }}
                placeholder="123"
                label="CVV"
                required
              />
            </View>

            <AppButton
              style={styles.nextButton}
              text="Next"
              onPress={form.handleSubmit(handleNext)}
            />
          </FormProvider>
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
  nextButton: {
    marginTop: "auto",
  },
});
