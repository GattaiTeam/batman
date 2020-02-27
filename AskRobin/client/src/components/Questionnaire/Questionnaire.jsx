
import React, { useState } from 'react';
import Form from '../Form';
import axios from 'axios';
import logo from '../../media/logo.png';

const Questionnaire = () => {
    const [redirect, setRedirect] = useState(false);

    const fields = [
        {
          label: "Elige el monto",
          key: 'amount',
          step: 1,
        },
        {
          label: "¿Cuál es tu número de celular? 📱",
          key: 'cellphone',
          type: 'tel',
          step: 2,
        },
        {
          label: "¿Cuál es tu correo electrónico? 📧",
          key: 'email',
          step: 2,
        },
        {
          label: "Nombre",
          key: 'name',
          step: 3,
        },
        {
          label: "Primer Apellido",
          key: 'last_name_1',
          step: 3,
        },
        {
          label: "Segundo Apellido",
          key: 'last_name_2',
          step: 3,
        },
        {
          label: "Fecha de Nacimiento",
          key: 'birth_date',
          type: 'date',
          step: 4,
        },
        {
          label: "Sexo 👨👧",
          key: 'sex',
          type: 'select',
          options: {
            M: "Masculino",
            F: "Femenino",
          },
          step: 4,
        },
        {
          label: "¿Cuáles son tus ingresos mensuales? 🤑",
          key: 'monthly_income',
          type: 'number',
          step: 5,
        },
        {
          label: "¿Cuáles son tus gastos mensuales? 💸",
          key: 'monthly_expenses',
          type: 'number',
          step: 5,
        },
        {
          label: "Tienes una cuenta bancaria?",
          key: 'has_bank_account',
          type: 'select',
          options: {
            'true': "Si",
            'false': "No"
          },
          step: 5,
        },
        {
          label: "CLABE (18 digitos por favor)",
          key: 'bank_account',
          step: 5,
        },
        {
          label: "¿Cuál es tu situación laboral? 💼",
          key: 'employment',
          step: 6,
          type: 'select',
          options: {
            employee: "Empleado",
            independent: "Independiente",
            unemployed: "Desempleado",
            houseworker: "Ama de casa",
            student: "Estudiante",
            retired: "Jubilado" ,
            other: "Otro"
          },
        },
        {
          label: "¿Cuánto tiempo has trabajado en tu empresa actual?",
          key: 'working_time',
          type: 'select',
          step: 6,
          options: {
            year_less_than_half: "0-6 meses",
            year_more_than_half: "7-12 meses",
            years_one_to_two: "1-2 años",
            years_two_to_five: "2-5 años",
            years_five_to_ten: "5-10 años",
            years_more_than_ten: "mas de diez años",
          },
        },    
        {
          label: "¿Cuál es tu profesión? 🤓",
          key: 'profession_name',
          step: 6,
        },            
        {
          label: "Estado",
          key: 'state',
          step: 7,
        },
        {
          label: "Ciudad",
          key: 'city',
          step: 7,
        },        
        {
          label: "Municipio",
          key: 'county',
          step: 7,
        },
        {
          label: "Colonia",
          key: 'neighborhood',
          step: 7,
        },        
        {
          label: "Calle",
          key: 'street',
          step: 7,
        },        
        {
          label: "Código Postal",
          key: 'zipcode',
          step: 7,
        },
        {
          label: "Número de casa",
          key: "external_number",
          step: 7,
        },
        {
          label: "Número de dependientes",
          key: "economic_dependants",
          type: 'select',
          step: 7,
          options: {
            '0': '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '5+': 'Más de 5',
          },
        },
    ];
    const initialState = {
        amount: '',
        cellphone: '',
        email: '',
        name: '',
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
        //setRedirect(true);
      })
    }

    const renderRedirect = () => {
        if (redirect) {
          window.location = 'http://localhost:5000/'
        }
    }



    return (
        <React.Fragment>
            {renderRedirect()}
            <img className="logo" src={logo} alt="Gattai" />
            <Form
                onSave={handleSave}
                initialState={initialState}
                fields={fields}
            />
        </React.Fragment>
    )
}

export default Questionnaire;
