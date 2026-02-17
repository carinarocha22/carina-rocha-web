document.querySelectorAll("button, a, h1, h2, h3, p").forEach(element => {
  element.addEventListener("mouseover", () => {
    let texto = element.innerText;
    let speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "pt-PT";
    window.speechSynthesis.speak(speech);
  });
});
