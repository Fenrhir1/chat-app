import { mapNodes } from '../declarations';
import { utilityGetMessages } from '../utilities/messages/getMessages';
import { utilityGetEmailLogged } from '../utilities/user/getEmailLogged';

export function componentChat() {
  const email = utilityGetEmailLogged();
  const messages = utilityGetMessages();

  return `
    <div class="main-container">
    <div class="left-container">
    <header class="header">${email} <button id=${mapNodes.buttonLogout} class="buttons" >Logout</button> </header>
    
    </div>
    <div class="right-container">
    <div class="message-box">
    <div id=${mapNodes.messageList}>${messages || 'Non ci sono messaggi'}</div>
    </div>
    <div class="chatbox-input">
    <input id=${mapNodes.inputMessage} type="text" placeholder='Scrivi un messaggio' />  
    <button id=${mapNodes.buttonSend} class="buttons">Send</button>
    </div>
    </div>
    
    </div>`;
}
