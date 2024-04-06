import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TypeSlices } from "@/src/utils/strings";

interface Pagination {
  pageSize?: number;
  pageNumber?: number;
  totalPage?: number;
}

interface SettingsState {
  pagination: Pagination;
  showDrawer: boolean;
}

const initialState: SettingsState = {
  pagination: {
    pageSize: 10,
    pageNumber: 1,
    totalPage: 0,
  },
  showDrawer: false,
};

const settingsSlice = createSlice({
  name: TypeSlices.Settings,
  initialState,
  reducers: {
    setPagination(state, action: PayloadAction<Pagination>) {
      state.pagination = {
        ...state.pagination,
        ...action.payload,
      };
    },
    setInitStatePagination(state) {
      state.pagination = {
        pageSize: 10,
        pageNumber: 1,
        totalPage: 0,
      };
    },
    changeShowDrawer(state) {
      state.showDrawer = !state.showDrawer;
    },
  },
});

export const { setPagination, setInitStatePagination, changeShowDrawer } =
  settingsSlice.actions;

export default settingsSlice.reducer;
