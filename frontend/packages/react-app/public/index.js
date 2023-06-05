const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res)=>{
    res.render("about-us");
});

app.get("/", (req, res)=>{
    res.render("blog-v1");
});

app.get("/", (req, res)=>{
    res.render("blog-v2");
});

app.get("/", (req, res)=>{
    res.render("button");
});

app.get("/", (req, res)=>{
    res.render("connect-wallet");
});

app.get("/", (req, res)=>{
    res.render("dashboard-faq");
});

app.get("/", (req, res)=>{
    res.render("dashboard-roadmap");
});

app.get("/", (req, res)=>{
    res.render("dashboard-team");
});

app.get("/", (req, res)=>{
    res.render("dashboard-tokensales");
});

app.get("/", (req, res)=>{
    res.render("document");
});

app.get("/", (req, res)=>{
    res.render("faq");
});

app.get("/", (req, res)=>{
    res.render("features");
});

app.get("/", (req, res)=>{
    res.render("footer");
});

app.get("/", (req, res)=>{
    res.render("index-2");
});

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/", (req, res)=>{
    res.render("our-team");
});

app.get("/", (req, res)=>{
    res.render("partner");
});

app.get("/", (req, res)=>{
    res.render("roadmap");
});

app.get("/", (req, res)=>{
    res.render("sign-in");
});

app.get("/", (req, res)=>{
    res.render("sign-up");
});

app.get("/", (req, res)=>{
    res.render("token-sales");
});

app.listen(port, ()=>{
    console.log("Project dang chay o port ${port}");
});