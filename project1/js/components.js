components = {
  matchConversation:`
  <div id='conversation-screen'>
  <div id='conversation-match'>
      <div></div>
      <div id="match-container">                    
          <div id='title-match'> 
              <form id='match-play-form'>
                  
              </form>    
          </div>
        <div id='conversation-message'></div>
        <form id="input-message">
            <input type="text" id='message' name='message'>
            <input type='submit' value="send" id='submit'>
        </form>
      </div>
      
  </div>  
</div>
`,

message: `
<div id='message-content' class='message-content'>
  <div id='sender' class='sender'></div>
  <div id='content' class='content'></div>
</div>
`,

  createMatch:`
  <div id='match-play-screen'>
      <div id='match-play-screen-content'>
        <div id='logo'>
          <h1>MATCH PLAY</h1>
        </div>
        <div id='match-play-form'>
          <form id='form-wrapper'>
              <div class='input-wrapper'>
                  <input type='' class="input" name="first-team-logo" placeholder="input first team logo">
              </div>
            <div class='input-wrapper'>
              <input
                class='input'
                type='text'
                name='first-team-name'
                id='first-team-name'
                placeholder='input first team'
              />
              <div class='error-message' id='firstTeam-error-message'></div>
              
            </div>
            <div class='input-wrapper'>
                  <input type="" class="input" name="first-team-logo" placeholder="input first team logo">
              </div>
            <div class='input-wrapper'>
              <input
                class='input'
                type='text'
                name='second-team-name'
                placeholder='input second team'
              />
              <div class='error-message' id='stadiun-address-error-message'></div>
            </div>
            <div class='input-wrapper'>
                  <input
                    class='input'
                    type='text'
                    name='stadium-address'
                    placeholder='input stadium-address'
                  />
                  <div class='error-message' id='date-error-message'></div>
                </div>
                <div class='input-wrapper'>
                      <input
                        class='input'
                        type='datetime'
                        name='start-time'
                        placeholder='time start'
                      />
                      <div class='error-message' id='secondTeam-error-message'></div>
                    </div>
            <div id='form-footer'>
              <input class='button' id='save-button' type='submit' value='SAVE' />
            </div>
          </form>
        </div>
      </div>
    </div>
  `,

    register: `
      <div id='register-screen'>
        <div id='register-screen-content'>
          <div id='logo'>
            <h1>register</h1>
          </div>
          <div id='register-form'>
            <form id='form-wrapper'>
              <div id='name-wrapper'>
                <div class='input-wrapper'>
                  <input
                    class='input'
                    type='text'
                    name='firstName'
                    placeholder='First name'
                  />
                  <div class='error-message' id='firstName-error-message'></div>
                </div>
                <div class='input-wrapper'>
                  <input
                    class='input'
                    type='text'
                    name='lastName'
                    placeholder='Last name'
                  />
                  <div class='error-message' id='lastName-error-message'></div>
                </div>
              </div>
              <div class='input-wrapper'>
                <input
                  class='input'
                  type='text'
                  name='email'
                  placeholder='Email address'
                />
                <div class='error-message' id='email-error-message'></div>
              </div>
              <div class='input-wrapper'>
                <input
                  class='input'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <div class='error-message' id='password-error-message'></div>
              </div>
              <div class='input-wrapper'>
                <input
                  class='input'
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm password'
                />
                <div class='error-message' id='confirm-error-message'></div>
              </div>
              <div id='form-footer'>
                <div id=already-have-account'> already have account </div>
                <input class='button' type='submit' value='Register' />
              </div>
            </form>
          </div>
        </div>
      </div>
    `,
    login: `
      <div id='login-screen'>
        <div id='login-screen-content'>
          <div id='logo'>
            <h1>LOGIN</h1>
          </div>
          <div id='login-form'>
            <form id='form-wrapper'>
              <div class='input-wrapper'>
                <input
                  class='input'
                  type='text'
                  name='email'
                  placeholder='Email address'
                />
                <div class='error-message' id='email-error-message'></div>
              </div>
              <div class='input-wrapper'>
                <input
                  class='input'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <div class='error-message' id='password-error-message'></div>
              </div>
              <div id='form-footer'>
                <div id='create-account-button'>Create an account</div>
                <input class='button' type='submit' value='Log In' />
              </div>
            </form>
          </div>
        </div>
      </div>
    `,
}
