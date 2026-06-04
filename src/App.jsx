import AppRouter from './router/AppRouter';
import ToastContainer from './components/toast/ToastContainer';
import ChatbotPanel from './components/chatbot/ChatbotPanel';

export default function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
      <div id="chatbot-container">
        <ChatbotPanel />
      </div>
    </>
  );
}
