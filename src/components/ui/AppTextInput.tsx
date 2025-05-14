import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";

type AppTextInputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export default function AppTextInput({
  label,
  containerStyle,
  ...rest
}: AppTextInputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...rest} style={[styles.textInput, rest.style]} />
      <Text style={styles.errorMessage} numberOfLines={1}>
        {/* Error Message */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 12,
    borderRadius: 8,
  },
  errorInput: {
    borderColor: "crimson",
  },
  errorMessage: {
    color: "crimson",
    fontSize: 14,
    height: 16,
  },
});
