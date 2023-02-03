import React from 'react';

// import Pagination from "@mui/material/Pagination"
// import PaginationItem from "@mui/material/PaginationItem"
import {
  DataGrid, // gridPageCountSelector,
  // gridPageSelector,
  // useGridApiContext,
  // useGridSelector
} from '@mui/x-data-grid';

export default function XDataGrid({
  paramRows,
  paramColumns,
  paramCheckboxSelection,
  paramDisableSelectionOnClick,
  paramAutoHeight,
}) {
  /* const [editRowsModel, setEditRowsModel] = React.useState({});

    const handleEditRowsModelChange = React.useCallback((model) => {
        setEditRowsModel(model);
    }, []); */

  return (
    <div
      style={{
        alignItems: 'center',
        marginLeft: '13%',
        marginRight: '13%',
      }}
    >
      <div style={{ alignSelf: 'center', height: 270, width: '100%' }}>
        <DataGrid
          checkboxSelection={paramCheckboxSelection}
          disableSelectionOnClick={paramDisableSelectionOnClick}
          autoHeight={paramAutoHeight}
          rows={paramRows}
          columns={paramColumns}
        />
      </div>
    </div>
  );
}
