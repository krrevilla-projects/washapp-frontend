import { LaundryJobResponse } from "@laundry-app/shared/openapi";
import { Row, flexRender } from "@tanstack/react-table";
import React from "react";
import { StyleSheet } from "react-native";
import { borderRadius } from "@laundry-app/shared/style";
import { View } from "native-base";

interface RowCellProps {
  row: Row<LaundryJobResponse>;
}

const RowCell: React.FC<RowCellProps> = ({ row }) => {
  return (
    <tr style={styles.container} key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
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

export default React.memo(RowCell);
