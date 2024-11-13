import {createSlice} from '@reduxjs/toolkit';
import {removeToken, setToken} from '../../helpers/AuthToken';

export interface UserState {
  token: string;
  isLoggedIn: boolean;
  userID: string;
  userName: string;
  notification: boolean;
  phone: string;
  location: any;
  images: any;
  email: any;
  otp: string;
  password: string;
  confirmPassword: string;
  isProfileComplete: boolean;
  mainImage: string;
  mobileToken: string;
}

const initialState: UserState = {
  userName: '',
  token: '',
  isLoggedIn: false,
  userID: '',
  notification: true,
  phone: '',
  location: {
    longitude: -122.431297,
    latitude: 37.773972,
  },
  images: [],
  email: '',
  otp: '',
  password: '',
  confirmPassword: '',
  isProfileComplete: false,
  mainImage: '',
  mobileToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    saveUser: (state, action) => {
      state.token = action.payload?.token;
      state.userID = action.payload?.userID;
      state.userName = action.payload?.userName;
      state.phone = action.payload?.phone;
      state.location = action.payload?.location;
      state.isLoggedIn = action.payload?.isLoggedIn;
      state.images = action.payload?.images;
      state.email = action.payload?.email;
      state.otp = action.payload?.otp;
      state.password = action.payload?.password;
      state.confirmPassword = action.payload?.confirmPassword;
      state.isProfileComplete = action.payload?.isProfileComplete;
    },
    deleteToken: state => {
      setToken('');
      removeToken();
      Object.assign(state, initialState);
    },
    setNotifiction: (state, action) => {
      state.notification = action.payload;
    },
    setMainImage: (state, action) => {
      state.mainImage = action.payload;
    },
    setMobileToken: (state, action) => {
      state.mobileToken = action.payload;
    },
  },
});

export const {
  saveUser,
  deleteToken,
  setNotifiction,
  setMainImage,
  setMobileToken,
} = userSlice.actions;
export default userSlice.reducer;
