const app = require('./app');
const { close } = require('./utils/ngrok');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', async() => {
    await close();
    process.exit(0);
});