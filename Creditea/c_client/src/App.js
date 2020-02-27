import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Form from './components/Form/Form';
import jwt from 'jwt-simple';
import {secret} from './utils';
import axios from 'axios';


function App() {
  const fields = [
    {
      label: "Monto",
      key: 'amount',
    },
    {
      label: "Celular",
      key: 'phone',
      type: 'tel',
    },
    {
      label: "Email",
      key: 'email',
    },
    {
      label: "Nombre (s)",
      key: 'name',
    },
    {
      label: "Apellido Paterno",
      key: 'last_name_1',
    },
    {
      label: "Apellido Materno",
      key: 'last_name_2',
    },
    {
      label: "Fecha de Nacimiento",
      key: 'birth_date',
      type: 'date',
    },
    {
      label: "Sexo",
      key: 'sex',
    },
    {
      label: "Clabe Interbancaria",
      key: 'bank_account',
    },
    {
      label: "monthly_income",
      key: 'monthly_income',
      type: 'number',
    },
    {
      label: "monthly_expenses",
      key: 'monthly_expenses',
      type: 'number',
    },
    {
      label: "Situacion laboral",
      key: 'work_situation',
    },
    {
      label: "Tiempo trabajando en tu empresa actual",
      key: 'work_time',
    },
    {
      label: "Profesion",
      key: 'work_profession',
    },
    {
      label: "Estado",
      key: 'state',
    },
    {
      label: "Ciudad",
      key: 'city',
    },
    {
      label: "Municipio",
      key: 'municipality',
    },
    {
      label: "Colonia",
      key: 'colony',
    },
    {
      label: "Calle",
      key: 'street_address',
    },
    {
      label: "Codigo postal",
      key: 'postal_code',
    },
    {
      label: "Numero de casa",
      key: 'house_number',
    },
    {
      label: "Numero de dependientes",
      key: 'dependents_number',
    },
];
const initialState = {
    amount: '',
    phone: '',
    email: '',
    name: '',
    last_name_1: '',
    last_name_2: '',
    birth_date: '',
    sex: '',
    bank_account: '',
    monthly_income: 0,
    monthly_expenses: 0,
    work_situation: '',
    work_time: '',
    work_profession: '',
    state: '',
    city: '',
    municipality: '',
    colony: '',
    street_address: '',
    postal_code: '',
    house_number: '',
    dependents_number: ''
}

const handleSave = data => {
  console.log("info: ", data);
  //const encoded = jwt.encode(data, secret);
  //console.log("encoded", encoded);
  //console.log("decoded", jwt.decode(encoded, secret));
  // Post request is done here to the server
}

// Retrieves the list of items from the Express app
 const getList = () => {
   fetch('/api/getList')
   .then(res => res.json())
   .then(list => this.setState({ list }))
 }


  return (
    <div className="App">
      <Form
        onSave={handleSave}
        initialState={initialState}
        fields={fields}
      />
    </div>
)
}

export default App;
