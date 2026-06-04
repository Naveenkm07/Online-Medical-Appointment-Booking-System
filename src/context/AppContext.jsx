/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  theme: localStorage.getItem('omabs-theme') || 'light',
  role: null,            // 'patient' | 'doctor' | 'admin'
  user: null,            // { name: string }
  avatar: localStorage.getItem('omabs-avatar') || 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  chatbotOpen: false,
  sidebarCollapsed: false,
  sidebarOpen: false,    // mobile drawer
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_AVATAR':
      localStorage.setItem('omabs-avatar', action.payload);
      return { ...state, avatar: action.payload };
    case 'SET_ROLE':
      return { ...state, role: action.payload };
    case 'TOGGLE_CHATBOT':
      return { ...state, chatbotOpen: !state.chatbotOpen };
    case 'SET_CHATBOT':
      return { ...state, chatbotOpen: action.payload };
    case 'TOGGLE_SIDEBAR_COLLAPSE':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    case 'TOGGLE_SIDEBAR_MOBILE':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'LOGOUT':
      return { ...initialState, theme: state.theme };
    default:
      return state;
  }
}

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sync theme to DOM & localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('omabs-theme', state.theme);
  }, [state.theme]);

  const toggleTheme = () =>
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });

  return (
    <AppContext.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
