import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getAlbum } from './actions/getAlbumsAction';
import { getComment } from './actions/getCommentsAction';
import { getPhoto } from './actions/getPhotosAction';
import { getTodo } from './actions/getTodosAction';
import { getUser } from './actions/getUserAction';
import { getPost } from './actions/getPostsAction';

import './App.css';

function App() {
  const state = useSelector(state => state)
  console.log(state);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbum())
    dispatch(getComment())
    dispatch(getPhoto())
    dispatch(getTodo())
    dispatch(getUser())
    dispatch(getPost())
  }, [dispatch])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
