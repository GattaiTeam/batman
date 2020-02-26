let gattai = function() {
    console.log("BLA");
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
            "phone" : "phone",
            "email" : "email",
            "firstName" : "first_name",
            "lastName" : "last_name_1",
            "mothersLastName" : "last_name_2"    
        };

        let correspondingFieldName = mapping[fieldName];
        let correspondingField = document.getElementsByName(correspondingFieldName)[0];
        return correspondingField;
    };

    let sampleMessage =  {
        "amount" : '6000',
        "phone" : '55555555555',
        "email" : 'a@a.com',
        "firstName" : 'Rodolfo',
        "lastName" : 'Ram',
        "mothersLastName" : 'Val'
    };

    fillingDataListener(sampleMessage);

}();