var originalText = "I love Faisalabad <br>  I Love my homeLand   <br> I love my City<br>";
var cities      = ['Faisalabad<br>','Lahore<br>', 'Multan <br>', 'Karachi <br>']
function clearinput(){
    document.getElementById('inputText').value= "";
}
function clearoutput(){
  document.getElementById('output').innerHTML= "";
}
function lowercase(){
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById('output').innerHTML = lowerCaseText;
}
function uppercase(){
  let upperCaseText = originalText.toUpperCase();
  document.getElementById('output').innerHTML = upperCaseText;
}
function capitalize(){
  let capitalizeText= '<span style="text-transform: capitalize;">' +originalText + '</span>';
  document.getElementById('output').innerHTML=capitalizeText
}
function betterformatting(){
  let text= document.getElementById('inputText').value;
  if(!text){
    alert("Please write the text that you want to  format");
    return;
  }
  text=text.toLowerCase();
  document.getElementById('output').style.textTransform='capitalize';
  document.getElementById('output').innerHTML=text ;


}
function printcity(){
  document.getElementById('output').innerHTML=""
  for(let i=0; i<cities.length;i++){
    document.getElementById('output').innerHTML+= cities[i];
  }
}
function addcity(){
    var city= document.getElementById('inputText').value;
    if(!city){
      alert("Enter the city you want to Enter")
      return;
      
    }
    cities.push(city)
      document.getElementById('output').innerHTML='<span style="color: red; text-transform: capitalize; font-size: 35px;">" '+ city +'  "</span> is added Successfully now click "printAllCities" to check your city<br>'
}
function searchword(){
 let neworiginalText=originalText.toLocaleLowerCase()
 let word=document.getElementById('inputText').value;
 if(!word){
  alert("You did not enter any word kindly enter the word!!")
 }
 word=word.toLowerCase()
 let searchword= neworiginalText.indexOf(word)
 if (searchword !==-1){   
       let html='  <span style="color:green ;">" '+word+'  "</span>    is  in our database';
        document.getElementById('output').innerHTML = html
        
       
   
   }
   else{
    let html='  <span style="color:red ;">" '+word+'  "</span>    is not in our database';
    document.getElementById('output').innerHTML = html
    
   }



}
function replaceword(){
  let neworiginalText=originalText.toLowerCase()
 let word=document.getElementById('inputText').value;
 if(!word){
  alert("You did not enter any word kindly enter the word that you want to replace!!")
  return;
 }
 let replacewith= prompt("Enter the word you want to replace with")
 if(!replacewith){
  alert("pleae type the word to replace with")

 }
 word=word.toLowerCase()
 word=new RegExp(word, 'g');
 replacewith=replacewith.toLowerCase()
 let replaceword =neworiginalText.replace(word,replacewith);
 document.getElementById('output').innerHTML = replaceword
}