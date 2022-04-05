const today = new Date();
const twoWeeksBefore = new Date();

twoWeeksBefore.setDate(today.getDate() + 14);

// Then set in input
const input = document.querySelector('[name=validation]');

input.setAttribute('min', today.toISOString().slice(0, 10));
input.setAttribute('max', twoWeeksBefore.toISOString().slice(0, 10));

myInput.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0,4); 
    }
}
// const withoutZero = input.val().replace(/^0+/, '');
// if (this.value.length > 4) {
//     this.value = this.value.slice(0,4); 
// }

// function maxLengthCheck(object)
// {
//     if (object.value.length > object.maxLength)
//     object.value = object.value.slice(0, object.maxLength)
// }

// function isNumeric (evt) {
//     var theEvent = evt || window.event;
//     var key = theEvent.keyCode || theEvent.which;
//     key = String.fromCharCode (key);
//     var regex = /[0-9]|\./;
//     if ( !regex.test(key) ) {
//       theEvent.returnValue = false;
//       if(theEvent.preventDefault) theEvent.preventDefault();
//     }
//   }

// function onlyNumberKey(evt) {    
// var regex = '^(?!00)([1-9][0-9]*)$';

// var testCases = ['0', '12345', '0123', '456', '12340', '00123'];

// for (var i in testCases) {
//   var result = (testCases[i]).match(new RegExp(regex));
  
//   var div = document.createElement('div');
//   var textNode = document.createTextNode(testCases[i] + ': ' + !!result);
//   div.append(textNode);
//   document.querySelector('#results').appendChild(div);
// }
//     // Only ASCII character in that range allowed
//     var ASCIICode = (evt.which) ? evt.which : evt.keyCode
//     if (ASCIICode > 31 && (ASCIICode < 49 || ASCIICode > 57))
//         return false;
//     return true;
// }
