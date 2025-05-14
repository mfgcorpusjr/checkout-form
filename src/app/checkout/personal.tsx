import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import KeyboardAwareScrollView from "@/components/KeyboardAwareScrollView";
import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";

const personalDataScheme = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full Name is required" })
    .trim()
    .regex(/^[A-Za-z. ]+$/, {
      message: "Full name can only contain letters, periods, and spaces",
    }),
  address: z.string().min(1, { message: "Address is required" }).trim(),
  city: z.string().min(1, { message: "City is required" }).trim(),
  postalCode: z
    .string()
    .min(1, { message: "Postal code is required" })
    .trim()
    .regex(/^[A-Za-z0-9\s\-]+$/, {
      message: "Invalid",
    }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .trim()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message:
        "Phone number must be in international format, e.g., +1234567890",
    }),
});

export default function PersonalScreen() {
  const form = useForm({
    resolver: zodResolver(personalDataScheme),
  });

  const handleNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <SafeAreaView style={styles.screen} edges={["bottom"]}>
      <KeyboardAwareScrollView keyboardVerticalOffset={110}>
        <View style={styles.container}>
          <FormProvider {...form}>
            <AppTextInput
              name="fullName"
              placeholder="John Doe"
              label="Full Name"
              required
            />

            <AppTextInput
              name="address"
              placeholder="580 Whiff Oaf Lane"
              label="Address"
              required
            />

            <View style={{ flexDirection: "row", gap: 12 }}>
              <AppTextInput
                name="city"
                containerStyle={{ flex: 1 }}
                placeholder="Sta. Rosa City"
                label="City"
                required
              />
              <AppTextInput
                name="postalCode"
                containerStyle={{ flex: 1 }}
                placeholder="4026"
                label="Postal Code"
                required
              />
            </View>

            <AppTextInput
              name="phoneNumber"
              placeholder="+1234567890"
              label="Phone Number"
              required
              keyboardType="phone-pad"
            />

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
