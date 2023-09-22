import { EditRegular, DeleteRegular } from '@fluentui/react-icons';
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
  Button,
  useArrowNavigationGroup,
  useFocusableGroup,
} from '@fluentui/react-components';

const items = [
  {
    name: { label: 'Meeting notes' },
    description: { label: 'Max Mustermann', status: 'available' },
    tags: { label: '7h ago', timestamp: 1 },
    lastUpdate: {
      label: 'You edited this',
    },
  },
  {
    name: { label: 'Thursday presentation' },
    description: { label: 'Erika Mustermann', status: 'busy' },
    tags: { label: 'Yesterday at 1:45 PM', timestamp: 2 },
    lastUpdate: {
      label: 'You recently opened this',
    },
  },
  {
    name: { label: 'Training recording' },
    description: { label: 'John Doe', status: 'away' },
    tags: { label: 'Yesterday at 1:45 PM', timestamp: 2 },
    lastUpdate: {
      label: 'You recently opened this',
    },
  },
  {
    name: { label: 'Purchase order' },
    description: { label: 'Jane Doe', status: 'offline' },
    tags: { label: 'Tue at 9:30 AM', timestamp: 3 },
    lastUpdate: {
      label: 'You shared this in a Teams chat',
    },
  },
];

const columns = [
  { columnKey: 'name', label: 'Name' },
  { columnKey: 'description', label: 'Description' },
  { columnKey: 'tags', label: 'Last updated' },
  { columnKey: 'actions', label: 'Actions' },
];

export const DataTable = () => {
  const keyboardNavAttr = useArrowNavigationGroup({ axis: 'grid' });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: 'limited-trap-focus',
  });

  return (
    <Table
      {...keyboardNavAttr}
      role="grid"
      aria-label="Table with grid keyboard navigation"
    >
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey}>
              {column.label}
            </TableHeaderCell>
          ))}
          <TableHeaderCell />
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name.label}>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout>{item.name.label}</TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout
                media={
                  <Avatar
                    aria-label={item.description.label}
                    name={item.description.label}
                    badge={{
                      status: item.description.status as PresenceBadgeStatus,
                    }}
                  />
                }
              >
                {item.description.label}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              {item.tags.label}
            </TableCell>
            <TableCell role="gridcell" tabIndex={0} {...focusableGroupAttr}>
              <TableCellLayout>
                <Button icon={<EditRegular />} aria-label="Edit" />
                <Button icon={<DeleteRegular />} aria-label="Delete" />
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
