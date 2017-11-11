var vowels = ['у', 'е', 'а', 'о', 'э', 'я', 'и', 'ю', 'ы', 'ё'];
var constants = ["б","в","г","д","ж","з","й","к","л","м","н","п","р","с","т","ф","х","ц","ч","ш","щ"];
var numberofvowels = 0;
var numberofconstants = 0;
var mystr = prompt('Input your words');
mystr = mystr.toLowerCase();

function numberofvowelsandconstants(mystr){
  var i = 0;
  while (i < mystr.length) {
    if (vowels.indexOf(mystr[i]) != -1) {
      numberofvowels++;
    }else if (constants.indexOf(mystr[i]) != -1) {
      numberofconstants++;
    }
    i++;
  }
  alert('Number of vowels - ' + numberofvowels + '\n' + 'Number of constants - ' + numberofconstants);
}
numberofvowelsandconstants(mystr);
