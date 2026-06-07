import express from "express"


const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Production! with CI/CD V2.0' });
});

app.get('/health', (req, res) => {
     res.json({
          status: 'OK',
          uptime: process.uptime(),
          timestamp: new Date().toISOString()
     });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});