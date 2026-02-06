import app from './API/app.js';

const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server base URL: ${BASE_URL}`);
});
