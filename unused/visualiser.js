window.AudioContext = window.AudioContext || window.webkitaudioContext;
const audioContext = new AudioContext();
const source = audioContext.createBufferSource();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;
const data = new Uint8Array(analyser.frequencyBinCount);
