
const mongoose = require('mongoose');
const password = "UjJf73hg5E4pxEzr";
const encodedPassword = encodeURIComponent(password);

mongoose.connect(`mongodb+srv://agdabhaykumar:${encodedPassword}@cluster0.lqnlo8g.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection Successful`);
}).catch((err) => {
    console.log(`Failed to Connect: ${err}`);
});