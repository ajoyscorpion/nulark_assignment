import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    studentDetails: {
      firstName: '',
      lastName: '',
      studentId: '',
      sessionYear: '',
      joiningDate: '',
      email: '',
    },
  },
  reducers: {
    setStudentDetails: (state, action) => {
      state.studentDetails = action.payload;
    },
  },
});

export const { setStudentDetails } = studentSlice.actions;

export default studentSlice.reducer;