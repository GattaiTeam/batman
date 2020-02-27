let gattai = function() {
    
    let fillingMapping = {
        // This list can grow, this is a generic representation of the fields that are asked
        // during a credit KYC
        amount: ['amount', 'monto'],
        mobile_phone: ['mobile_phone', 'cellphone', 'mobile', 'celular', 'num_celular'],
        phone: ['phone', 'telefono', 'phone_number', 'numero_telefonico'],
        email: ['email', 'correo'],
        email_confirmation: ['email_confirmation', 'confirmacion_correo'],
        name: ['name', 'first_name', 'nombre', 'firstName'],
        fathers_last_name: ['last_name_1', 'last_name', 'lastName', 'apellido', 'apellido_paterno', 'apellidoPaterno'],
        mothers_last_name: ['last_name_2', 'apellido_materno', 'apellidoMaterno'],
        birth_date: ['birth_date', 'dateOfBirth', 'birthDate', 'fecha_nacimiento', 'fecha_de_nacimiento'],
        sex: ['sex', 'sexo', 'gender', 'genero'],
        curp: ['curp', 'national_id'],
        bank_account: ['bank_account', 'cuenta_bancaria'],
        monthly_income: ['monthly_income', 'ingresos_mensuales', 'ingresos'],
        monthly_expenses: ['monthly_expenses', 'egresos', 'gastos'],
        zipcode: ['zipcode', 'zip_code', 'codigo_postal', 'codigoPostal'],
        has_bank_account: ['has_bank_account', 'tienes_cuenta_bancaria'],
        work_status: ['work_status', 'employment_status', 'situacion_laboral'],
        working_time: ['working_time', 'fecha_trabajando', 'antiguedad', 'antigüedad'],
        profession_name: ['profession_name', 'nombre_profesion'],
        state: ['state', 'estado'],
        city: ['city', 'ciudad'],
        county: ['county', 'municipio'],
        neighborhood: ['neighborhood', 'colonia', 'barrio', 'vecindario'],
        street: ['street', 'calle'],
        external_number: ['external_number', 'numero_externo'],
        economic_dependants: ['economic_dependants', 'dependientes_economicos'],
    };

    let fillingDataListener = function(userData) {

        console.log(userData);
        let fieldsToFill = Object.keys(fillingMapping)
        for(const key of fieldsToFill) {
            
            let fillingResult = fillData(key, userData);
            
            if(fillingResult) {
                console.log("Successfully filled data for " + key)
            }
            else {
                console.log("Could not fill data for " + key);
            }
        }
    };

    let fillData = function(fieldToFill, userData) {

        let userDataElement = getCorrespondingUserData(fieldToFill, userData);
        let correspondingInputField = getCorrespondingInput(fieldToFill);
        if(correspondingInputField) {
            if(userDataElement) {
                correspondingInputField.value = userDataElement;
                return true;
    
            }
        }

        return false;
    };

    let getCorrespondingUserData = function(fieldToFill, userData) {
        let fillingData = userData[fieldToFill];

        // Data for some fields can come from others.
        // Example: Email confirmation data comes from the field email
        if(!fillingData) {

            if(fieldToFill === 'email_confirmation') {
                return userData['email'];
            }
            // TODO: Add formula to calculate CURP
            if(fieldToFill === 'curp') {
                return 'RAVR870316HDFMLG05';
            }
            // TODO: Add formula to calculate CURP
            if(fieldToFill === 'phone') {
                return userData['mobile_phone'];
            }

        }

        return fillingData;
    }

    let getCorrespondingInput = function(fieldName) {

        let correspondingFieldNames = fillingMapping[fieldName];
        for(var correspondingFieldName of correspondingFieldNames) {
            let correspondingField = document.getElementsByName(correspondingFieldName)[0];
            if(correspondingField) {
                return correspondingField;
            }
        }

        return null;
    };

    let receiveMessage = (event) =>
    {
      if(event.origin !== "http://localhost:4000") return
      let result = event.data['0'];
      fillingDataListener(result)
      console.log(result)
    }

    window.addEventListener("message", receiveMessage, false);

}();
