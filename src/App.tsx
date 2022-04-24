import React, {
  useEffect,
  useState,
} from 'react';
import logo from './logo.svg';
import './App.css';
import NameEdit from './components/NameEdit';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const App = () => {
  const [name, setName] = useState('Cody Payne');
  const [editingName, setEditingName] = useState('Cody Payne');

  const loadUserName = () => {
    setTimeout(() => {
      setName('name from async');
      setEditingName('name from async');
    }, 500);
  };

  useEffect(() => {
    loadUserName();
  }, []);

  const setNameState = () => setName(editingName);

  return (
    <div className="App">
      <NameEdit
        editingName={editingName}
        initialUserName={name}
        onEditingNameUpdated={setEditingName}
        onNameUpdated={setNameState}
      />
      <Typography variant="h3" color="primary">
        {name}
      </Typography>
    </div>
  )
}

export default App;
