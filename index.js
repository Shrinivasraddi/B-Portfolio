import express from "express";

const app = express();
const port = process.env.port || 3000;

app.use(express.static("public"));
app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.get("/about",(req,res)=>{
  res.render("about.ejs");
});

app.get("/skills",(req,res)=>{
  res.render("skills.ejs");
});

app.get("/work",(req,res)=>{
  res.render("work.ejs");
});

app.get("/contact",(req,res)=>{
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
