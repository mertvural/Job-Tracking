'use client';
import {
  Modal,
  Box,
  Button,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {useDispatch} from 'react-redux';
import {deleteRowList, updateRowList} from '@/stores/reducers/listReducer';
/**
 * mui material modals
 * @return {React.Component} return modals
 */
export default function Modals({open,
  setOpen,
  status,
  id,
  priority,
  jobName,
  setJobName,
  setPriority}) {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const deleteRow = (id) => {
    dispatch(deleteRowList(id));
    setOpen(false);
  };

  const btnSave = (id) => {
    const datas = {id, jobName, priority};
    dispatch(updateRowList(datas));
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style, width: 450}}>
          {
            status === 'delete' && (
              <>
                <h2 id="parent-modal-title" className='text-center'>
                  Are you sure you want to delete it?
                </h2>
                <p id="parent-modal-description">
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '15px',
                  }}>
                    <Button
                      variant="contained"
                      color='inherit'
                      fullWidth
                      onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color='error'
                      fullWidth
                      onClick={() => deleteRow(id)}>
                      Approve
                    </Button>
                  </Box>
                </p>
              </>
            )
          }
          {
            status === 'update' && (
              <>
                <h2 id="parent-modal-title" className='text-center'>
                  Job Edit
                </h2>

                <Box sx={{
                  display: 'flex', flexDirection: 'column', gap: '15px',
                }}>
                  <FormControl fullWidth>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                      <TextField
                        defaultValue={jobName}
                        onKeyUp={(event) => setJobName(event.target.value)}
                        className="input"
                        id="input-with-icon-textfield"
                        size='small'
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          placeholder: 'Job Name',
                        }}
                      />
                    </Box>
                  </FormControl>
                  <FormControl fullWidth size='small'>
                    <InputLabel id="job-priority-label">
                      Priority (all)
                    </InputLabel>
                    <Select
                      onChange={(event) => setPriority(event.target.value)}
                      defaultValue={priority}
                      className='input'
                      fullWidth
                      labelId="job-priority"
                      id="job-priority"
                      label="job-priority"
                    >
                      <MenuItem value={3}>Urgent</MenuItem>
                      <MenuItem value={2}>Regular</MenuItem>
                      <MenuItem value={1}>Trivial</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <p id="parent-modal-description">
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '15px',
                  }}>
                    <Button
                      variant="contained"
                      color='inherit'
                      fullWidth
                      onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color='error'
                      fullWidth
                      onClick={() => btnSave(id)}>
                      Save
                    </Button>
                  </Box>
                </p>
              </>
            )
          }

        </Box>


      </Modal>
    </>

  );
}
