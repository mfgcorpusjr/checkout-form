import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useController } from "react-hook-form";

type AppTextInputProps = {
  name: string;
  label?: string;
  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export default function AppTextInput({
  name,
  label,
  required,
  containerStyle,
  ...rest
}: AppTextInputProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <TextInput
        {...rest}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={[styles.textInput, rest.style]}
      />
      <Text style={styles.errorMessage} numberOfLines={1}>
        {error?.message}
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
  required: {
    color: "crimson",
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
