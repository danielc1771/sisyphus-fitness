import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  username: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
}

const initialState: UserState = {
  username: 'danielc1771',
  firstName: 'Daniel',
  lastName: 'Castro',
  profileImageUrl:
    'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/227521647_4428928193818531_9995968000195159_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QsmALoUYpFkAX-XlxOL&_nc_ht=scontent-sea1-1.xx&oh=00_AT-0vTbrzpktazU5AluwCVNnUCl9BSsYw5RE5xMEXKQZtg&oe=61D10B1F',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
