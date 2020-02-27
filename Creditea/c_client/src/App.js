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
      step: 1,
    },
    {
      label: "Nombre",
      key: 'name',
      step: 1,
    },
    {
      label: "Segundo Nombre (en caso de tenerlo)",
      key: 'name',
      step: 1,
    },
    {
      label: "Apellido Paterno",
      key: 'last_name_1',
      step: 1,
    },
    {
      label: "Apellido Materno",
      key: 'last_name_2',
      step: 1,
    },
    {
      label: "Correo eléctronico",
      key: 'email',
      step: 1,
    },
    {
      label: "Confirma tu correo eléctronico",
      key: 'email_confirmation',
      step: 1,
    },
    {
      label: "Contraseña",
      key: 'password',
      type: 'password',
      step: 1,
    },
    {
      label: "Confirmar Contraseña",
      key: 'password_confirmation',
      type: 'password',
      step: 1,
    },
    {
      label: "Ingresa tu CURP",
      key: 'curp',
      step: 1,
    },
    {
      label: "Tu número de celular",
      key: 'mobile_phone',
      type: 'tel',
      step: 1,
    },
    {
      label: "Telefono de casa u oficina",
      key: 'phone',
      type: 'tel',
      step: 1,
    },
    {
      label: "Tienes una cuenta bancaria?",
      key: 'has_bank_account',
      type: 'select',
      options: {
        'true': "Si",
        'false': "No"
      },
      step: 1,
    },
    {
      label: "Tipo de Vivienda",
      key: 'house_ownership',
      step: 1,
    },
    {
      label: "Calle",
      key: 'street',
      step: 1,
    },
    {
      label: "Numero Exterior",
      key: "external_number",
      step: 1,
    },
    {
      label: "Numero Interior",
      key: "internal_number",
      step: 1,
    },
    {
      label: "Codigo postal",
      key: 'postal_code',
      step: 1,
    },
    {
      label: "Colonia",
      key: 'neighborhood',
      step: 1,
    },    
    {
      label: "Municipio",
      key: 'county',
      step: 1,
    },
    {
      label: "Ciudad",
      key: 'city',
      step: 1,
    },
    {
      label: "Provincia",
      key: 'province',
      step: 1,
    },
    {
      label: "Estado Civil",
      key: 'marital_status',
      type: 'select',
      step: 1,
      options: {
        'single': 'Soltero',
        'married': 'Casado',
        'divorced': 'Divorciado',
        'widowed': 'Viudo',      },
    },
    {
      label: "Tu nivel de estudios",
      key: 'education_level',
      type: 'select',
      step: 1,
      options: {
        'doctorate': 'Doctorado',
        'masters': 'Maestria',
        'university': 'Licenciatura',
        'high_schooll': 'Preparatoria/Bachillerato',
        'secondary_school': 'Secundaria',
        'primary_school': 'Primaria',
      }
    },
    {
      label: "¿Cuál es tu situación laboral?",
      key: 'work_status',
      type: 'select',
      step: 1,
      options: {
        'long_term_contract': 'Contrato por tiempo indefinido',
        'temporary_contract': 'Contrato temporal',
        'unemployed': 'Desempleado',
        'business_owner': 'Empresario'    
      },
    },
    {
      label: "Nombre de la empresa",
      key: 'business_name',
      step: 1,
    },
    {
      label: "Antigüedad",
      key: 'work_time',
      type: 'select',
      options: {
        'less_than_year': 'Menos de 1 año',
        'year_one_to_three': '1 a 3 años',
        'year_three_to_five': '3 a 5 años',
        'year_five_or_more': 'Mas de 5 años',
      },
    },
    {
      label: "Ingresos comprobables después de impuestos",
      key: 'monthly_income',
      type: 'number',
      step: 1,
    },
    {
      label: "Gastos mensuales",
      key: 'monthly_expenses',
      type: 'number',
      step: 1,
    }
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
