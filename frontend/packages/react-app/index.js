const express = require("express");
const app = express();
const port = 3000;

// Static Files
app.use('/public',express.static('public'));

// Templating Engine
app.set('views', './public/views')
app.set('view engine', 'ejs')
app.disable('view cache')

app.get("/about-us", (req, res)=>{
    res.render("about-us");
});

app.get("/blog-v1", (req, res)=>{
    res.render("blog-v1");
});

app.get("/blog-v2", (req, res)=>{
    res.render("blog-v2");
});

app.get("/button", (req, res)=>{
    res.render("button");
});

app.get("/connect-wallet", (req, res)=>{
    res.render("connect-wallet");
});

app.get("/dashboard-faq", (req, res)=>{
    res.render("dashboard-faq");
});

app.get("/dashboard-roadmap", (req, res)=>{
    res.render("dashboard-roadmap");
});

app.get("/dashboard-team", (req, res)=>{
    res.render("dashboard-team");
});

app.get("/dashboard-tokensales", (req, res)=>{
    res.render("dashboard-tokensales");
});

app.get("/document", (req, res)=>{
    res.render("document");
});

app.get("/faq", (req, res)=>{
    res.render("faq");
});

app.get("/features", (req, res)=>{
    res.render("features");
});

app.get("/features", (req, res)=>{
    res.render("footer");
});

app.get("/index-2", (req, res)=>{
    res.render("index-2");
});

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/our-team", (req, res)=>{
    res.render("our-team");
});

app.get("/partner", (req, res)=>{
    res.render("partner");
});

app.get("/roadmap", (req, res)=>{
    res.render("roadmap");
});

app.get("/sign-in", (req, res)=>{
    res.render("sign-in");
});

app.get("/sign-up", (req, res)=>{
    res.render("sign-up");
});

app.get("/token-sales", (req, res)=>{
    res.render("token-sales");
});

app.listen(port, ()=>{
    console.log(`Project dang chay o port ${port}`);
});