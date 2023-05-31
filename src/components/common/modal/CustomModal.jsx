import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomModal(props) {

  return (
      <Dialog
      fullWidth={true}
      maxWidth={props?.maxWidth ||'sm'}
        open={props?.open}
        onClose={props?.onClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} >
        {props?.title}
      {props?.onClose ? (
        <IconButton
          aria-label="close"
          onClick={props?.onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>

        <DialogContent dividers={true}>
          {props?.bodyElement}
        </DialogContent>
        <DialogActions>
          {props?.actionElement}
        </DialogActions>
      </Dialog>
  
  );
}