export function shuffleLetter({ time }: { time: number }) {
  const letters: string = "abcdefghijklmnopqrstuvwxyz";
  const ShuffleElements: NodeListOf<HTMLElement> =
    document.querySelectorAll(".shuffle");

  ShuffleElements.forEach((ShuffleElements) => {
    let currentLetterIndex = 0;
    let shuffleCounter = 0;
    let interval: NodeJS.Timeout;
    let originalText: string;

    ShuffleElements.onmouseover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dataValue = target.dataset.value;

      if (dataValue) {
        clearInterval(interval);
        originalText = dataValue;
        interval = setInterval(() => {
          const shuffledText = originalText.split("");

          if (shuffleCounter < 4) {
            shuffledText[currentLetterIndex] =
              letters[Math.floor(Math.random() * 26)];
            target.innerText = shuffledText.join("");
            shuffleCounter++;
          } else {
            shuffleCounter = 0;
            currentLetterIndex++;
          }

          if (currentLetterIndex >= originalText.length) {
            target.innerText = originalText;
            clearInterval(interval);
          }
        }, time);
      }
    };
  });
}
