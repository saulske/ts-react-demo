import React, {FunctionComponent, useState} from 'react';
import SubmitButton from './Button';

import './App.css';

interface IFields {
  firstname: string;
  lastname: string;
}

const App: FunctionComponent<{}> = () => {
  const [fields, setFields] = useState<IFields>({
    firstname: '',
    lastname: ''
  });

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFields({ ...fields, firstname: event.target.value });

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFields({ ...fields, lastname: event.target.value });

  const handleSubmit = () => {
    console.log('Fields', fields);
  }

  return (
    <div className="App">
      <input type="text" value={fields.firstname} onChange={handleFirstNameChange} />
      <input type="text" value={fields.lastname} onChange={handleLastNameChange}></input>
      <SubmitButton text="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default App;
