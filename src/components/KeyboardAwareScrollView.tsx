import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function KeyboardAwareScrollView({
  children,
}: PropsWithChildren) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
