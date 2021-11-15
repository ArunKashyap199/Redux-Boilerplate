import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { getUser } from './actions/getUserAction';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
