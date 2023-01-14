require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
  console.log(`server is running port http://localhost:${PORT}`);
});
