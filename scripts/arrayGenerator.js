function arrayGenerator(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * length);
    array.push(randomNum);
  };
  return array;
};

module.exports = arrayGenerator;
