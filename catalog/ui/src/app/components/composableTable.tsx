import * as React from 'react';

import {
  headerCol,
  Table,
  TableHeader,
  TableBody,
} from '@patternfly/react-table';

export interface ComposableTableProps {
  columns: Array<any>;
  rows: Array<any>;
}

const ComposableTable: React.FunctionComponent<ComposableTableProps> = ({
  columns,
  rows,
}) => {

  return (
    <Table
      aria-label="cadmin Table"
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
}

export { ComposableTable };
