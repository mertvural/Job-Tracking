'use client';
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from '@mui/material';
import {useDispatch} from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import {searchName, searchPriority} from '@/stores/reducers/listReducer';


/**
 * Search Area returns
 * @return {React.Component} Search Area
 */
function Search() {
  const dispatch = useDispatch();

  const jobNameEvent = (event) => {
    dispatch(searchName(event.target.value));
  };

  const jobPriorityEvent = (event) => {
    dispatch(searchPriority(event.target.value));
  };

  return (
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
        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
          <TextField
            onKeyUp={jobNameEvent}
            className="input"
            id="input-with-icon-textfield"
            size='small'
            variant="outlined"
            fullWidth
            InputProps={{
              placeholder: 'Job Name',
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </FormControl>
      <FormControl fullWidth size='small'>
        <InputLabel id="job-priority-label">Priority (all)</InputLabel>
        <Select
          onChange={(event) => jobPriorityEvent(event)}
          className='input'
          fullWidth
          labelId="job-priority"
          id="job-priority"
          label="job-priority"
        >
          <MenuItem value={0} selected>Priority (all)</MenuItem>
          <MenuItem value={3}>Urgent</MenuItem>
          <MenuItem value={2}>Regular</MenuItem>
          <MenuItem value={1}>Trivial</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Search;
