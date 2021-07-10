import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface AuthState {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  access_token: "",
  expires_in: 0,
  refresh_token: "",
  scope: "",
  token_type: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addAuthData: (state, action: PayloadAction<AuthState>) => {
      state.access_token = action.payload.access_token;
      state.expires_in = action.payload.expires_in;
      state.refresh_token = action.payload.refresh_token;
      state.scope = action.payload.scope;
      state.token_type = action.payload.token_type;
    },
    removeAuthData: (state) => {
      state.access_token = "";
      state.expires_in = 0;
      state.refresh_token = "";
      state.scope = "";
      state.token_type = "";
    },
  },
});

export const { addAuthData, removeAuthData } = authSlice.actions;

export default authSlice.reducer;
