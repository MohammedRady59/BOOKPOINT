import { createSlice } from "@reduxjs/toolkit";
export interface IProps {
  id: string;
}

const initialState: IProps = {
  id: "",
};
export const Getid = createSlice({
  name: "getId",
  initialState,
  reducers: {
    addId: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const { addId } = Getid.actions;

export default Getid.reducer;
