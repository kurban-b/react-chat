import React, { useEffect } from 'react';
import Contacts from '../Contacts/Index';
import Chat from '../Chat';
import Profile from '../Profile/Index';
import { loadApplicaton } from '../../redux/ducks/application';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import StartPage from '../Chat/StartPage';

function App() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.application.darkTheme);

  useEffect(() => {
    dispatch(loadApplicaton());
  }, [dispatch]);

  return (
    <div
      className={darkTheme ? 'container-dark' : 'container'}
      name={darkTheme ? 'dark' : null}
    >
      <Switch>
        <Route exact path={'/contact/:id?'}>
          <Contacts />
          <div className={'chat_profile_block'}>
            <Chat />
            <Profile />
          </div>
        </Route>
        <Route>
          <Contacts />
          <StartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
