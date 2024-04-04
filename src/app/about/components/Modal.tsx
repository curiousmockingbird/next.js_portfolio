import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        See full list
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
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          {/* <Typography
            component="h2"
            id="modal-title"
            level="h4"
            color="danger"
            fontWeight="lg"
            mb={1}
          >
            Technologies used:
          </Typography> */}
          <Typography id="modal-desc" color="success" mt={3}>
            <Typography level='h4'>Frontend--<br/> </Typography> 
            JavaScript (Advanced)<br/>
            TypeScript (Advanced)<br/>
            Tailwind CSS (Advanced)<br/>
            JSX (Experienced)
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>Backend--<br/></Typography> 
            Node.js (Experienced)
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>Database--<br/></Typography> 
            MongoDB (Advanced)<br/>
            MySQL (Intermediate)
          </Typography>
          <Typography id="modal-desc" color="success">
            <Typography level='h4'>Frameworks--<br/></Typography> 
            Next.js (Advanced)<br/>
            Remix (Intermediate)<br/>
            Gatsby (Intermediate)<br/>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}