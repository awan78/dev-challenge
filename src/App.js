import './App.css';
import { RenderJson } from './Components/RenderJson';
import { RenderHtml } from './Components/RenderHtml';
import {messages, users} from './data'; 

function App() {

  return (
    <div className="App">
     <div className='common-styles'>
       <div className='heading'>
        Messages for Chat ID=3 as HTML are: 
       </div>
       <div className='content'>
         <RenderHtml data={messages.filter(mes => mes.chatid === 3)}/>
       </div> 
     </div> 
     <div className='common-styles'>
       <div className='heading'>
        Messages for Chat ID=8 as JSON are: 
       </div>
       <div className='content'>
         <RenderJson data={messages.filter(mes => mes.chatid === 8)} field={'message'}/>
       </div> 
     </div>
     <div className='common-styles'>
       <div className='heading'>
        User with ID=100 as JSON is: 
       </div>
       <div className='content'>
       <RenderJson data={users.filter(user => user.id === 100)} />
       </div> 
     </div>
     <div className='common-styles'>
       <div className='heading'>
        Message for Message ID=459 as HTML is: 
       </div>
       <div className='content'>
         <RenderHtml data={messages.filter(mes => mes.id === 459)}/>
       </div> 
     </div> 
    </div>
  );
}

export default App;
