import { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "@/constants/colors";

type ConfirmCardProps = {
  title: string;
  onEdit: () => void;
};

export default function ConfirmCard({
  title,
  onEdit,
  children,
}: PropsWithChildren<ConfirmCardProps>) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.editButton} onPress={onEdit}>
          Edit
        </Text>
      </View>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 12,
    borderRadius: 8,
    gap: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editButton: {
    color: colors.tint,
    fontSize: 16,
    fontWeight: "500",
  },
});
