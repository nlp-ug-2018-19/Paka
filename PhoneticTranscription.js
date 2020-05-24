function transcribe() {
  var myText = document.getElementById("text");
  var rawText = myText.value.trim();
  var ipa = document.getElementById("IPA");
  var tipa = document.getElementById("TIPA");
  ipa.value = phoneticTranscription(rawText);
  
  var rawWords = rawText.toLowerCase().split(" ");
  var ipaWords = [];
  var tipaWords = [];
  var ipaResult = "";
  var tipaResult = "";

  for (let i = 0; i < rawWords.length; i++) {
    var word = rawWords[i];
    var ipaWord = phoneticTranscription(word);
    if (ipaWord){
      ipaWords.push(ipaWord);
      ipaResult += ipaWord + " ";
    }
  }
  ipaResult = ipaResult.trim();
  
  for (let i = 0; i < ipaWords.length; i++) {
    var ipaWord = ipaWords[i];
    var tipaWord = phoneticLatexTranscription(ipaWord);
    tipaWords.push(tipaWord);
    tipaResult += tipaWord + " ";
  }
  tipaResult = tipaResult.trim();

  if (!ipaResult){
    ipaResult = "Transcription not available";
  }

  if (!tipaResult){
    tipaResult = "Transcription not available";
  }
  
  ipa.value = ipaResult;
  tipa.value = tipaResult;
 
}

function phoneticTranscription(rawText) {
  return dict[rawText.toLowerCase()];

}

function phoneticLatexTranscription(ipaText) {
  var result = "";
  for (let index = 0; index < ipaText.length; index++) {
    const element = ipaText[index];
    const xlate_element = xlate[element];
    if(xlate_element === undefined){
      result += element;}
    else{
      result += xlate_element;}
  }
  return result;
}