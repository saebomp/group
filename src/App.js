import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID='591ccf26-c647-4212-8fd3-42cb8860afbd'
      userName='Sae'
      userSecret='SaePak'
      renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;



// https://www.youtube.com/watch?v=jcOKU9f86XE   1:01:05

// https://chatengine.io/projects/591ccf26-c647-4212-8fd3-42cb8860afbd
// https://chatengine.io/docs