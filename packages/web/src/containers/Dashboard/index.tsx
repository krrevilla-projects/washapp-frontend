import { formatDate } from "@laundry-app/shared/utils/date";
import { useLaundryJobs } from "@laundry-app/shared/api/laundryJob";
import {
  LaundryJobResponse,
  LaundryJobStatus,
} from "@laundry-app/shared/openapi";
import Status from "@laundry-app/shared/components/Status";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { View, StyleSheet } from "react-native";
import { HeaderCell, RowCell } from "./TableCells";
import { colors } from "@laundry-app/shared/style";

const columnHelper = createColumnHelper<LaundryJobResponse>();
const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <Status status={info.getValue() as LaundryJobStatus} />,
  }),
  columnHelper.accessor("createdAt", {
    header: "Date Created",
    cell: (info) => formatDate(info.getValue()),
  }),
];

const DashboardContainer = () => {
  const { data } = useLaundryJobs();

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <View style={styles.container}>
      <table cellSpacing={0} cellPadding={0}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <HeaderCell key={header.id} header={header} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <RowCell row={row} />
          ))}
        </tbody>
      </table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    backgroundColor: colors.white,
  },
});

export default DashboardContainer;
