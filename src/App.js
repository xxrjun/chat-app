import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      publicKey={process.env.REACT_APP_PROJECT_ID}
      userName="test001"
      userSecret="test001"
      renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
    />
  );
}

export default App;
