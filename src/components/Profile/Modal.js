import * as React from 'react';

import { Dialog } from '@mui/material';

import Form from '../Onboard/Form';

export default function FormDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Form />
      </Dialog>
    </div>
  );
}
