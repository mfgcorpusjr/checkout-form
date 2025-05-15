import { PropsWithChildren, createContext, useContext, useState } from "react";
import * as z from "zod";

import { luhnCheck, notInThePast } from "@/utils/validation";

type CheckoutForm = {
  personalData: PersonalData | undefined;
  setPersonalData: (data: PersonalData | undefined) => void;
  paymentData: PaymentData | undefined;
  setPaymentData: (data: PaymentData | undefined) => void;
};

const CheckoutFormContext = createContext<CheckoutForm>({
  personalData: undefined,
  setPersonalData: () => {},
  paymentData: undefined,
  setPaymentData: () => {},
});

export const personalDataScheme = z.object({
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

export type PersonalData = z.infer<typeof personalDataScheme>;

export const paymentDataScheme = z.object({
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
  saveCardInformation: z.boolean(),
});

export type PaymentData = z.infer<typeof paymentDataScheme>;

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalData, setPersonalData] = useState<PersonalData>();
  const [paymentData, setPaymentData] = useState<PaymentData>();

  return (
    <CheckoutFormContext.Provider
      value={{ personalData, setPersonalData, paymentData, setPaymentData }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutFormContext = () => useContext(CheckoutFormContext);
