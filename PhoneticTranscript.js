function transcribe() {
    var myText = document.getElementById("text");
    var rawText = myText.value.trim();
    var ipa = document.getElementById("IPA");
    var tipa = document.getElementById("TIPA");
    ipa.value = phoneticTranscription(rawText);
    if(ipa.value === "undefined")
    {
        ipa.value = "Transcription not available";
        tipa.value = "";
    }
    else
        tipa.value = phoneticLatexTranscription(ipa.value);
  }
  
  function phoneticTranscription(rawText) {
    var result = rawText;

    return dict[rawText];
  }
  
  function phoneticLatexTranscription(ipaText) {
    var result = "";
    for (let index = 0; index < ipaText.length; index++) {
        const element = ipaText[index];
        const xlate_element = xlate[element];
        if(xlate_element === undefined)
            result += element;
        else
            result += xlate_element;
    }
    return result;
  }
