import {
  StyleSheet,
  Pressable,
  Text,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";

import colors from "@/constants/colors";

type AppButtonProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export default function AppButton({ text, style, ...rest }: AppButtonProps) {
  return (
    <Pressable {...rest} style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tint,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
