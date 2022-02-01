const app = require('./app');

const PORT = 3000;
(() => {
  try {
    app.listen(PORT, () => console.log(`server run oh port - ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})()
