



let gattai = function() {
    // TODO: Create a subscrition to the postMessage event

    let fillingDataListener = function(data) {

        for(const key of getFieldsToFill(data)) {
            console.log("Filling data for key: " + key);
            fillData(key, data[key])
        }
    };

    let getFieldsToFill = function(data) {
        return Object.keys(data);
    };

    let fillData = function(fieldToFill, dataToFill) {
        let correspondingInputField = getCorrespondingInput(fieldToFill);
        correspondingInputField.value = dataToFill;
    };

    let getCorrespondingInput = function(fieldName) {

        // Hardcoded mapping
        var mapping = {
            "amount" : "amount",
            "cellphone" : "phone",
            "email" : "email",
            "name" : "name",
            "last_name_1" : "last_name_1",
            "last_name_2" : "last_name_2",
            "birth_date" :"birth_date",
            "sex" :"sex",
            "bank_account" :"bank_account",
            "monthly_income" :"monthly_income",
            "monthly_expenses": "monthly_expenses",
            "address_1": "street",
            "address_2": "city",
            "zipcode": "postal_code",


        };

        let correspondingFieldName = mapping[fieldName];
        let correspondingField = document.getElementsByName(correspondingFieldName)[0];
        return correspondingField;
    };

    let sampleMessage =  {
        "amount" : '6000',
        "phone" : '55555555555',
        "email" : 'a@a.com',
        "name" : 'Rodolfo',
        "lastName" : 'Ram',
        "mothersLastName" : 'Val'
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
