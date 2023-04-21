import { LaundryJobResponse } from "@laundry-app/shared/openapi";
import { Header, flexRender } from "@tanstack/react-table";
import { Heading, Text } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";
import { borderRadius, colors } from "@laundry-app/shared/style";

interface HeaderCellProps {
  header: Header<LaundryJobResponse, unknown>;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ header }) => {
  const isFirstCell = header.index === 0;
  const isLastCell = header.index === header.headerGroup.headers.length - 1;

  return (
    <th key={header.id}>
      <View
        style={[
          styles.container,
          isFirstCell && styles.firstCell,
          isLastCell && styles.lastCell,
        ]}
      >
        <Text fontWeight="bold">
          {flexRender(header.column.columnDef.header, header.getContext())}
        </Text>
      </View>
    </th>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_5,
    padding: 5,
  },
  firstCell: {
    borderTopLeftRadius: borderRadius.small,
    borderBottomLeftRadius: 5,
  },
  lastCell: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default React.memo(HeaderCell);
