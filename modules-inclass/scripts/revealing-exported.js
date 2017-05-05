const revealing = (function() {

  const words = ['world', 'Utah', 'class', 'learners'];

  let randomWord = '';

  function setRandomWord () {
    const random = Math.floor(Math.random() *
    words.length);
    randomWord = words[random];
  };

  function getRandomWord() {
    console.log(randomWord);
    return randomWord;
  };

  return {
    setRandomWord: setRandomWord,
    getRandomWord: getRandomWord,
    randomWord: randomWord
  };

})();

module.exports = revealing;
