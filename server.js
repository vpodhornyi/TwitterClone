const app = require('./app');

const PORT = process.env.PORT || 5000;
(() => {
  try {
    app.listen(PORT, () => console.log(`server run on port - ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})()
