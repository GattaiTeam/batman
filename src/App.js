import React from 'react';
import './App.css';
import Form from './components/Form/Form';


function App() {
  const fields = [
    {
      label: "amount",
      key: 'amount',
    },
    {
      label: "cellphone",
      key: 'cellphone',
    },
    {
      label: "email",
      key: 'email',
    },
    {
      label: "first_name",
      key: 'first_name',
    },
    {
      label: "last_name_1",
      key: 'last_name_1',
    },
    {
      label: "last_name_2",
      key: 'last_name_2',
    },
    {
      label: "birth_date",
      key: 'birth_date',
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
      key: 'zipcode  ',
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

  return (
    <div className="App">
      <Form
        initialState={initialState}
        fields={fields}
      />
    </div>
)
}

export default App;
