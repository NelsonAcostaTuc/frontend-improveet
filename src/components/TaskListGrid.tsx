import React, { useEffect, useState } from 'react';
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { fetchTaskLists } from '../services/api';

interface TaskList {
  id: string;
  name: string;
  // agrega más campos según sea necesario
}

const TaskListGrid: React.FC = () => {
  const [taskLists, setTaskLists] = useState<TaskList[]>([]);

  useEffect(() => {
    const getTaskLists = async () => {
      try {
        const data = await fetchTaskLists();
        setTaskLists(data);
      } catch (error) {
        console.error('Error fetching task lists:', error);
      }
    };

    getTaskLists();
  }, []);

  const columns: MRT_ColumnDef<TaskList>[] = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    // agrega más columnas según sea necesario
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={taskLists}
      enableColumnActions
      enableColumnFilters
      enableSorting
    />
  );
};

export default TaskListGrid;
