import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ModalType {
  Start = 'Start',
}

export interface ModalState {
  showModal: boolean;
  modalType?: ModalType;
}

const initialState: ModalState = {
  showModal: false,
  modalType: undefined,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    displayModal: (state, action: PayloadAction<ModalState>) => {
      state.modalType = action.payload.modalType;
      state.showModal = action.payload.showModal;
    },
  },
});

export const { displayModal } = modalSlice.actions;

export default modalSlice.reducer;
