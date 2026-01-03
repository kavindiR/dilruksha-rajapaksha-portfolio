import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface ThemeState {
  mode: 'light' | 'dark';
}

// Load theme from localStorage or default to light
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
  }
  return 'light';
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.mode;
export default themeSlice.reducer;
