import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

type KeyboardAwareScrollViewProps = {
  keyboardVerticalOffset?: number;
};

export default function KeyboardAwareScrollView({
  keyboardVerticalOffset = 100,
  children,
}: PropsWithChildren<KeyboardAwareScrollViewProps>) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
