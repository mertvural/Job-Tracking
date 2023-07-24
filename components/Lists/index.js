'use client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useDispatch, useSelector} from 'react-redux';
import Modals from '../Modal';
import {load} from '@/stores/reducers/listReducer';
import axios from 'axios';
/**
 * Job list returns
 * @return {React.Component} The Job list.
 */
export default function Lists() {
  const lists = useSelector((state) => state.jobList.lists);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [status, setStatus] = useState();
  const [jobName, setJobName] = useState();
  const [priority, setPriority] = useState();

  const theme = createTheme({
    palette: {
      trivial: {
        main: '#2277e0',
        contrastText: '#fff',
      },
      regular: {
        main: '#f1a824',
        contrastText: '#fff',
      },
      urgent: {
        main: '#e83d6d',
        contrastText: '#fff',
      },
    },
  });

  const handleOpen = (id, status) => {
    console.log(id);
    setStatus(status);
    setOpen(true);
    setId(id);
    if (status === 'update') {
      const [editList] = lists.filter((item) => item.id === id);
      console.log(editList);
      setJobName(editList.name);
      setPriority(editList.priority.level);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/lists')
        .then(function(response) {
          dispatch(load(response.data));
        })
        .catch(function(error) {
          console.warn(error);
        });
  }, []);

  return (
    <>
      <TableContainer
        sx={{maxHeight: 440, borderRadius: '0'}} component={Paper}>
        <Table stickyHeader
          sx={{minWidth: 650, marginTop: '1px'}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: '700',
                  background: '#e4eafd',
                }}>Name
              </TableCell>
              <TableCell
                align='right'
                sx={{
                  fontWeight: '700',
                  background: '#e4eafd',
                }}>Priority
              </TableCell>
              <TableCell
                align='right'
                sx={{
                  fontWeight: '700',
                  background: '#e4eafd',
                }}>Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                style={
                  index % 2 ? {
                    background: '#f7f7f7',
                  } : {background: 'white'}
                }
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <ThemeProvider theme={theme}>
                    <Button data-test="asdsad"
                      sx={{minWidth: '110px'}}
                      variant="contained"
                      color={row.priority.text.toLowerCase()}>
                      {row.priority.text}
                    </Button>
                  </ThemeProvider>
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" justifyContent={'end'} spacing={1}>
                    <IconButton
                      data-test-id="button-update"
                      onClick={() => handleOpen(row.id, 'update')}
                      sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0',
                        backgroundColor: 'var(--secondary-color)',
                      }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      data-test-id="button-delete"
                      onClick={() => handleOpen(row.id, 'delete')}
                      sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0',
                        backgroundColor: 'var(--secondary-color)',
                      }}>
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modals
        setOpen={setOpen}
        open={open}
        status={status}
        id={id}
        jobName={jobName}
        priority={priority}
        setJobName = {setJobName}
        setPriority = {setPriority}
      />
    </>
  );
}


