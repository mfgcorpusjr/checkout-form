import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";
import Checkbox from "expo-checkbox";
import { useController } from "react-hook-form";

import colors from "@/constants/colors";

type AppCheckboxProps = {
  name: string;
  label?: string;
  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function AppCheckbox({
  name,
  label,
  containerStyle,
}: AppCheckboxProps) {
  const {
    field: { value, onChange },
  } = useController({ name });

  return (
    <View style={[styles.container, containerStyle]}>
      <Checkbox value={value} onValueChange={onChange} color={colors.tint} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 16,
  },
});
