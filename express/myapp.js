import express from "express"
const app = express()
const PORT = 4455;

app.get("/", (req,res) => {
    res.send("Hello world!");
});

app.get("/home", (req,res) => {
    res.send("oi eu sou o mario sem bigode");
});

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}!`);
});

app.listen("4455");
