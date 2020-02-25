import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import jwt from 'jwt-simple';
import {secret} from './utils';


function App() {
  const fields = [
    {
      label: "Monto",
      key: 'amount',
    },
    {
      label: "Celular",
      key: 'cellphone',
      type: 'tel',
    },
    {
      label: "Email",
      key: 'email',
    },
    {
      label: "Nombre (s)",
      key: 'first_name',
    },
    {
      label: "Apellido Materno",
      key: 'last_name_1',
    },
    {
      label: "Apellido Paterno",
      key: 'last_name_2',
    },
    {
      label: "birth_date",
      key: 'birth_date',
      type: 'date',
    },
    {
      label: "sex",
      key: 'sex',
    },
    {
      label: "bank_account",
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
      label: "address_1",
      key: 'address_1',
    },
    {
      label: "address_2",
      key: 'address_2',
    },
    {
      label: "zipcode",
      key: 'zipcode',
    },
];
const initialState = {
    amount: '',
    cellphone: '',
    email: '',
    first_name: '',
    last_name_1: '',
    last_name_2: '',
    birth_date: '',
    sex: '',
    bank_account: '',
    monthly_income: 0,
    monthly_expenses: 0,
    address_1: '',
    address_2: '',
    zipcode: '',
}

const handleSave = data => {
  
  console.log("data: ", data);
  const encoded = jwt.encode(data, secret);
  console.log("encoded", encoded);
  console.log("decoded", jwt.decode(encoded, secret));
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
