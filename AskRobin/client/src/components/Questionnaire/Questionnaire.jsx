
import React, { useState } from 'react';
import Form from '../Form';
import jwt from 'jwt-simple';
import { Redirect } from 'react-router-dom';
import {secret} from '../../utils';
import axios from 'axios';



const Questionnaire = () => {
    const [redirect, setRedirect] = useState(false);

    const fields = [
        {
          label: "Monto",
          key: 'amount',
          step: 1,
        },
        {
          label: "Celular",
          key: 'cellphone',
          type: 'tel',
          step: 1,
        },
        {
          label: "Email",
          key: 'email',
          step: 1,
        },
        {
          label: "Nombre (s)",
          key: 'first_name',
          step: 2,
        },
        {
          label: "Apellido Materno",
          key: 'last_name_1',
          step: 2,
        },
        {
          label: "Apellido Paterno",
          key: 'last_name_2',
          step: 2,
        },
        {
          label: "birth_date",
          key: 'birth_date',
          type: 'date',
          step: 2,
        },
        {
          label: "sex",
          key: 'sex',
          type: 'select',
          options: {
            M: "Masculino",
            F: "Femenino",
          },
          step: 2,
        },
        {
          label: "bank_account",
          key: 'bank_account',
          step: 3,
        },
        {
          label: "monthly_income",
          key: 'monthly_income',
          type: 'number',
          step: 3,
        },
        {
          label: "monthly_expenses",
          key: 'monthly_expenses',
          type: 'number',
          step: 3,
        },
        {
          label: "address_1",
          key: 'address_1',
          step: 3,
        },
        {
          label: "address_2",
          key: 'address_2',
          step: 3,
        },
        {
          label: "zipcode",
          key: 'zipcode',
          step: 3,
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
      axios.post(`/createToken`,
            data
      ).then(res => {
        localStorage.setItem('GattaiToken', res.data['accessToken']);
        console.log(res.data)
      })
      setRedirect(true);
    }

    const renderRedirect = () => {
        if (redirect) {
          window.location = 'http://localhost:5000/'
        }
    }



    return (
        <React.Fragment>
            {renderRedirect()}
            <Form
                onSave={handleSave}
                initialState={initialState}
                fields={fields}
            />
        </React.Fragment>
    )
}

export default Questionnaire;
