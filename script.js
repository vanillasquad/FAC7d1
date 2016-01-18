var typeInput = document.getElementById('t-type');
var intInput = 11;
var enjInput = 11;
var lenInput = document.getElementById('t-length');
var noteInput = document.getElementById('t-notes');
var injInput = document.getElementById('t-injuries');
var goalInput = document.getElementById('t-goals');

function getRadioValue(groupName, groupVal) {
    var valRet = 0;
    var radios = document.getElementsByName(groupName);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            groupVal = i;
            break;
        }
    }
    return groupVal;
}

document.querySelector('form.train-form input[type=button]').addEventListener('click', function(e) {
    intInput = (getRadioValue("t-i", intInput)+1);
    enjInput = (getRadioValue("t-e", enjInput)+1);

    document.getElementById('results').innerHTML = "Type: "+typeInput.value+"\n" +
        "Intensity: " + intInput + "\n" +
        "Enjoyment: " + enjInput + "\n" +
        "Length: " + lenInput.value+ "\n" +
        "Notes: " + noteInput.value + "\n" +
        "Injuries: " + injInput.value + "\n" +
        "Goals: " + goalInput.value + "\n"; 
});
