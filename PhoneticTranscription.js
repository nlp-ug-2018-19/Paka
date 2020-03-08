function transcribe() {
  var myText = document.getElementById("text");
  var rawText = myText.value;
  var ipa = document.getElementById("IPA");
  var tipa = document.getElementById("TIPA");
  ipa.value = phoneticTranscription(rawText);
  tipa.value = phoneticLatexTranscription(rawText);
}

function phoneticTranscription(rawText) {
  var result = rawText;
  return result;

}

function phoneticLatexTranscription(rawText) {
  var result = rawText + "LAtex";
  return result;
}