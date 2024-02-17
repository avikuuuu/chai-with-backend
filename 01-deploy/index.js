const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
