import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listInitial: [],
  lists: [],
};

export const jobListSlice = createSlice({
  name: 'jobList',
  initialState,
  reducers: {
    load: (state, {payload}) => {
      state.listInitial.push(...payload);
      state.lists.push(...payload);
    },
    add: (state, {payload}) => {
      console.log(payload);
      state.lists = state.listInitial;
      state.lists.push(payload);
      state.lists.sort((a, b) => {
        return b.priority.level - a.priority.level;
      });
    },
    searchName: (state, {payload}) => {
      state.lists = state.listInitial;
      state.lists = state.lists
          .filter((item) => item.name.toLowerCase().includes(payload));
    },
    searchPriority: (state, {payload}) => {
      state.lists = state.listInitial;
      state.lists = payload === 0 ? state.lists : state.lists
          .filter((item) => item.priority.level === payload);
    },
    deleteRowList: (state, {payload}) => {
      state.lists = state.lists.filter((item) => item.id !== payload);
      state.listInitial = state.listInitial
          .filter((item) => item.id !== payload);
    },
    updateRowList: (state, {payload}) => {
      state.lists = state.listInitial;
      state.lists.map((item) => {
        if (payload.id === item.id) {
          item.name = payload.jobName;
          item.priority.level = payload.priority;
          item.priority.text =
            payload.priority === 1 ?
              'Trivial' :
              payload.priority === 2 ?
                'Regular' :
                'Urgent';
        }
      });
      state.lists.sort((a, b) => {
        return b.priority.level - a.priority.level;
      });
    },
  },
});


export const {
  load,
  add,
  searchName,
  searchPriority,
  deleteRowList,
  updateRowList,
} = jobListSlice.actions;

export default jobListSlice.reducer;
