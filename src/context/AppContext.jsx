/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  theme: localStorage.getItem('omabs-theme') || 'light',
  role: null,            // 'patient' | 'doctor' | 'admin'
  user: null,            // { name: string }
  userProfile: JSON.parse(localStorage.getItem('omabs-profile')) || null, // { firstName, lastName, email, phone, dob, bloodGroup, address }
  avatar: localStorage.getItem('omabs-avatar') || 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  chatbotOpen: false,
  sidebarCollapsed: false,
  sidebarOpen: false,    // mobile drawer
  blockchainLogs: JSON.parse(localStorage.getItem('omabs-logs')) || [
    { block: 48291, ts: '2025-06-03 21:14:32', hash: '0x7a3f...c291', action: 'Record Created', doctor: 'Dr. Mehta' },
    { block: 48290, ts: '2025-06-03 20:58:11', hash: '0x4b2e...a778', action: 'Record Updated', doctor: 'Dr. Nair' },
    { block: 48289, ts: '2025-06-03 20:41:05', hash: '0x9d1c...f045', action: 'Record Accessed', doctor: 'Dr. Mehta' },
    { block: 48288, ts: '2025-06-03 19:32:47', hash: '0x2f8a...b331', action: 'Record Created', doctor: 'Dr. Rao' },
    { block: 48287, ts: '2025-06-03 18:15:22', hash: '0x8c4d...e912', action: 'Prescription Added', doctor: 'Dr. Nair' },
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_USER_PROFILE':
      localStorage.setItem('omabs-profile', JSON.stringify(action.payload));
      return { ...state, userProfile: action.payload };
    case 'SET_AVATAR':
      localStorage.setItem('omabs-avatar', action.payload);
      return { ...state, avatar: action.payload };
    case 'SET_ROLE':
      return { ...state, role: action.payload };
    case 'ADD_LOG': {
      const newLogs = [action.payload, ...state.blockchainLogs];
      localStorage.setItem('omabs-logs', JSON.stringify(newLogs));
      return { ...state, blockchainLogs: newLogs };
    }
    case 'TOGGLE_CHATBOT':
      return { ...state, chatbotOpen: !state.chatbotOpen };
    case 'SET_CHATBOT':
      return { ...state, chatbotOpen: action.payload };
    case 'TOGGLE_SIDEBAR_COLLAPSE':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    case 'TOGGLE_SIDEBAR_MOBILE':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'LOGOUT':
      return { ...initialState, theme: state.theme, blockchainLogs: state.blockchainLogs };
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
