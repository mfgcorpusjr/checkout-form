import React from "react";
import { Stack } from "expo-router";

import CheckoutFormProvider from "@/providers/CheckoutFormProvider";

import StepIndicator from "@/components/StepIndicator";

const steps = [
  { key: "personal", label: "Personal" },
  { key: "payment", label: "Payment" },
  { key: "confirm", label: "Confirm" },
];

export default function CheckoutLayout() {
  return (
    <>
      <StepIndicator steps={steps} />

      <CheckoutFormProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </CheckoutFormProvider>
    </>
  );
}
