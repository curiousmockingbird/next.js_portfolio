import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
// import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import GithubStats from './../../components/GithubStats';

export default function BasicModal({
  width,
}: React.PropsWithChildren<{ width: number}>) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button
  variant="outlined"
  color="success"
  onClick={() => window.open('https://github.com/curiousmockingbird', '_blank')}
>
  Github account
</Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: {width},
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <GithubStats/>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}