import { StyleSheet, View, Text } from "react-native";
import { useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "@/constants/colors";

type StepIndicatorProps = {
  steps: { key: string; label: string }[];
};

export default function StepIndicator({ steps }: StepIndicatorProps) {
  const segments = useSegments();

  const currentStepKey = segments[segments.length - 1];
  const currentStepIndex = steps.findIndex(
    (step) => step.key === currentStepKey
  );

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styles.container}>
        {steps.map((step, index) => (
          <View
            key={step.key}
            style={[
              styles.stepContainer,
              index <= currentStepIndex && styles.activeStepContainer,
            ]}
          >
            <Text
              style={[
                styles.stepLabel,
                index <= currentStepIndex && styles.activeStepLabel,
              ]}
            >
              {step.label}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    padding: 12,
  },
  stepContainer: {
    flex: 1,
    borderBottomWidth: 4,
    borderBottomColor: "lightgrey",
    padding: 4,
  },
  activeStepContainer: {
    borderBottomColor: colors.tint,
  },
  stepLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "grey",
    textAlign: "center",
  },
  activeStepLabel: {
    color: colors.tint,
  },
});
