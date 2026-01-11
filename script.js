let voiceSelect = document.getElementById("voiceSelect");
let textArea = document.getElementById("text");
let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

  voices.forEach((voice, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.textContent = voice.name + " (" + voice.lang + ")";
    voiceSelect.appendChild(option);
  });
}

speechSynthesis.onvoiceschanged = loadVoices;

function speakText() {
  if (textArea.value === "") {
    alert("Fadlan qoraal geli!");
    return;
  }

  let utterance = new SpeechSynthesisUtterance(textArea.value);
  utterance.voice = voices[voiceSelect.value];
  speechSynthesis.speak(utterance);
}