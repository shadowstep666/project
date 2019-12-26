const view = {};
view.setMessage = (elementId, message) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = message;
  }
};

view.setActiveScreen = (screenName) => {
  const app = document.getElementById('app');

  switch (screenName) {
    case 'register':
      if(app) {
        app.innerHTML = components.register;
      }

      // Listen submit event
      const registerForm = document.getElementById('form-wrapper');
      if (registerForm) {
        const handleRegisterSubmit = (event) => {
          event.preventDefault();

          // get input values
          const firstName = registerForm.firstName.value;
          const lastName = registerForm.lastName.value;
          const email = registerForm.email.value;
          const password = registerForm.password.value;
          const confirmPassword = registerForm.confirmPassword.value;

          const registerInfo = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
          };

          controller.validateRegisterForm(registerInfo);
        };
        registerForm.addEventListener('submit', handleRegisterSubmit);
      }
      break;
    
    case 'login':
      if(app) {
        app.innerHTML = components.login;
      }

      const createAccountButton = document.getElementById('create-account-button');
      if (createAccountButton) {
        handleCreateAccountClick = (_event) => {
          view.setActiveScreen('register');
        };
        createAccountButton.addEventListener('click', handleCreateAccountClick);
      }

      // Listen submit event
      const loginForm = document.getElementById('form-wrapper');
      if (loginForm) {
        const handleLoginSubmit = (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;

          const loginInfo = {
            email,
            password,
          };

          controller.validateLoginForm(loginInfo);
        };
        loginForm.addEventListener('submit', handleLoginSubmit);
      }
      break;

      case 'matchConversation':
        if (app){
          app.innerHTML=components.matchConversation;
        }

        const messageForm=document.getElementById('input-message');
        if (messageForm) {
          const handleMessageSubmit = (event) => {
            // get value from input
            event.preventDefault();
            const message = messageForm.message.value;
            
            // validate messageContent (not null)
            if (message) {
              // save message to db
              model.saveMessage(message);
  
              // remove old message from input
              messageForm.message.value = '';
            }
          };
          // addEventListener
          messageForm.addEventListener('submit', handleMessageSubmit);
        }
       model.loadConversations();

        break;
      case 'createMatch':
          if(app) {
            app.innerHTML = components.createMatch;
          }
        const createMatchForm = document.getElementById('form-wrapper');
        if (createMatchForm){
          const handleCreateMatchSubmit =(event)=>{
            
            event.preventDefault();
            const firstTeamName = createMatchForm.firstTeamName.value;
            const firstTeamLogo= createMatchForm.firstTeamLogo.value;
            const secondTeamName = createMatchForm.secondTeamName.value;
            const secondTeamLogo = createMatchForm.secondTeamLogo.value;
            const createMatchInfo= {
              firstTeamName,
              firstTeamLogo,
              secondTeamName,
              secondTeamLogo,
            };
            controller.validateCreateMatchForm(createMatchInfo);
          };
          createMatchForm.addEventListener('submit',handleCreateMatchSubmit)
        } 
    }

    
}

const loginButton = document.getElementById('login-button');
if (loginButton){
  loginButton.addEventListener('click',investigateToLoginPage=(_event)=>{
    view.setActiveScreen('login');
  });
}

const registerButton = document.getElementById('register-button');
if (registerButton){
  registerButton.addEventListener('click',investigateToRegisterPage=(_event)=>{
    view.setActiveScreen('register');
  });
}

const createMatchButton = document.getElementById('add-button');
if (createMatchButton){
  createMatchButton.addEventListener('click',investigateToCreateMatchPage=(_event)=>{
    view.setActiveScreen('createMatch');
  });
}

view.setMatchForm =(item) =>{
  const MatchFormCreate = document.getElementById('match-play-screen');
  const createMatchForm= document.createElement('div');
  createMatchForm.classList.add('item'); 

  const firstTeamNameElement = document.getElementById('div');
  firstTeamNameElement.add('first-team-name'); 

  createMatchForm.appendChild(firstTeamNameElement);
}


view.sendMessage = (sender, message) => {
  // render a new message
  const messageContent = document.createElement('div');
  messageContent.classList.add('message-content');
  if (sender) {
    messageContent.classList.add('friend-message');
  } else {
    messageContent.classList.add('my-message');
  }

  const senderElement = document.createElement('div');
  senderElement.classList.add('sender');
  if (sender) {
    senderElement.innerText = sender;
  }

  const content = document.createElement('div');
  content.classList.add('content');
  content.innerText = message;

  messageContent.appendChild(senderElement);
  messageContent.appendChild(content);

  const messageContainer = document.getElementById('conversation-message');
  if (messageContainer) {
    messageContainer.appendChild(messageContent);
  }
};

view.renderConversationItem = (conversationInfo) => {
  const conversationItem = document.createElement('div');
  conversationItem.innerText = conversationInfo.name;
  conversationItem.classList.add('conversation-item');
  conversationItem.id = conversationInfo.id;
  if (conversationInfo.id === model.activeConversation.id) {
    conversationItem.classList.add('active-conversation');
  }
  changeActiveConversation = (_event) => {
    // render conversation list
    const oldConversationItem = document.getElementById(model.activeConversation.id);
    if (oldConversationItem) {
      oldConversationItem.classList.remove('active-conversation');
    }
    // update model.activeConversation
    model.updateActiveConversation(conversationInfo);

    // clear + re-render messages
    const messageContainer = document.getElementById(`conversation-message`);
    messageContainer.innerText = '';
    model.activeConversation.messages.forEach((message) => {
      if (message.user === model.logInUser.email) {
        view.sendMessage('', message.content);
      } 
    });
  };
};