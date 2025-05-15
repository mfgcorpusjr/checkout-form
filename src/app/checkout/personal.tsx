import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  personalDataScheme,
  PersonalData,
  useCheckoutFormContext,
} from "@/providers/CheckoutFormProvider";

import KeyboardAwareScrollView from "@/components/KeyboardAwareScrollView";
import AppTextInput from "@/components/ui/AppTextInput";
import AppButton from "@/components/ui/AppButton";

export default function PersonalScreen() {
  const { personalData, setPersonalData } = useCheckoutFormContext();

  const form = useForm({
    defaultValues: personalData,
    resolver: zodResolver(personalDataScheme),
  });

  const handleNext = (data: PersonalData) => {
    setPersonalData(data);
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
