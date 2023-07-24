'use client';
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {add} from '@/stores/reducers/listReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
/**
 * Create New Job Component returns
 * @return {React.Component} Create New Job
 */
export default function Create() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.jobList.lists);

  const [jobName, setJobName] = useState('');
  const [level, setLevel] = useState('');

  const jobNameEvent = (event) => {
    setJobName(event.target.value);
  };

  const jobPriorityEvent = (event) => {
    setLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: lists.length,
      name: jobName,
      priority: {
        level: level,
        text: level === 1 ? 'Trivial' : level === 2 ? 'Regular' : 'Urgent',
      },
    };
    dispatch(add(data));
    setJobName('');
    setLevel(null);
  };

  return (
    <section>
      <h3>
        Create New Job
      </h3>
      <form onSubmit={handleSubmit}>
        <Box sx={
          {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            flexDirection: {
              md: 'row',
              xs: 'column',
            },
          }
        }>
          <FormControl fullWidth>
            <TextField
              data-test-id="input-job-name"
              onChange={jobNameEvent}
              value={jobName}
              required
              size='small'
              id="job-name"
              name="jobName"
              label="Job Name"
              variant="outlined"
              inputProps={{maxLength: 255}}
              fullWidth />
          </FormControl>
          <FormControl fullWidth size='small'>
            <InputLabel id="job-priority-label">Job Priority</InputLabel>
            <Select
              data-test-id="select-priority"
              onChange={jobPriorityEvent}
              value={level}
              required
              fullWidth
              labelId="job-priority"
              name="jobPriority"
              id="job-priority"
              label="job-priority"
            >
              <MenuItem value={3}>Urgent</MenuItem>
              <MenuItem value={2}>Regular</MenuItem>
              <MenuItem value={1}>Trivial</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{minWidth: '110px'}}>
            <Button
              type='submit'
              variant="contained"
              startIcon={<AddIcon />}
              data-test-id="button-create">
          Create
            </Button>
          </FormControl>
        </Box>
      </form>
    </section>
  );
};
