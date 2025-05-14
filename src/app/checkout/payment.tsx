import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import KeyboardAwareScrollView from "@/components/KeyboardAwareScrollView";
import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";

import { luhnCheck, notInThePast } from "@/utils/validation";

const paymentDataScheme = z.object({
  cardNumber: z
    .string()
    .min(1, { message: "Card Number is required" })
    .trim()
    .regex(/^[0-9\s-]+$/, {
      message: "Card Number can only contain digits, spaces, or dashes",
    })
    .refine((val) => luhnCheck(val), {
      message: "Invalid Card Number",
    }),
  expirationDate: z
    .string()
    .min(1, { message: "Expiration Date is required" })
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Invalid",
    })
    .refine((val) => notInThePast(val), {
      message: "Invalid",
    }),
  cvv: z
    .string()
    .min(3, { message: "Invalid" })
    .max(4, { message: "Invalid" })
    .trim()
    .regex(/^\d{3,4}$/, {
      message: "Invalid",
    }),
});

export default function PaymentScreen() {
  const form = useForm({ resolver: zodResolver(paymentDataScheme) });

  const handleNext = () => {
    router.push("/checkout/confirm");
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <KeyboardAwareScrollView keyboardVerticalOffset={110}>
        <View style={styles.container}>
          <FormProvider {...form}>
            <AppTextInput
              name="cardNumber"
              placeholder="112233445566"
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
