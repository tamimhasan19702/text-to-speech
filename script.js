/** @format */

const textarea = document.querySelector("textarea"),
  voiceList = document.querySelector("select"),
  speechBtn = document.querySelector("button");

const apiUrl = "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize";

const voiceUrl =
  "https://cloudlabs-text-to-speech.p.rapidapi.com/voices?language_code=en-US";

voices();
async function voices() {
  try {
    const response = await fetch(voiceUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8df68afb72msh70eb88ff2524d5dp1992f6jsn35158121c6e8",
        "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
      },
    });

    const result = await response.json();

    if (response.ok) {
      const voices = result.voices;
      const voiceOptions = [];

      voices.forEach((voice) => {
        const option = document.createElement("option");
        option.value = voice.voice_code;
        option.textContent = voice.name;
        voiceOptions.push(option);
      });
      console.log(result);

      // Do something with voiceOptions array
    } else {
      console.error("Error fetching available voices:", result);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function textToSpeech(text) {
  // Use the API to convert text to speech
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "8df68afb72msh70eb88ff2524d5dp1992f6jsn35158121c6e8",
      "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
    },
    body: new URLSearchParams({
      voice_code: voiceList.value, // Get the selected voice from the dropdown
      text: text,
      speed: "1.00",
      pitch: "1.00",
      output_type: "audio_url",
    }),
  };

  fetch(apiUrl, options)
    .then((response) => response.json())
    .then((result) => {
      // Handle the result, play the audio using an <audio> element
      const audioUrl = result.result.audio_url;

      const audio = new Audio(audioUrl);
      audio.play();
    })
    .catch((error) => {
      console.error(error);
    });
}

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    textToSpeech(textarea.value);
  }
});
