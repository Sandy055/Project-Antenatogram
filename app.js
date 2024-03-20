const express=require('express');
const multer =require('multer');
const app = express();
const fs = require('fs');

const {createWorker}=require('tesseract.js');
const worker = createWorker();


const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }

});

const upload=multer({storage:storage}).single("avatar");
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/upload",(req,res)=>{
    upload(req,res,err=>{
        fs.readFile("./uploads/${req.file.originalname}",(err,data)=>{
            if (err) return console.log("this is yout error",err);

            awaitworker
              .recognize(data,"eng",{tessjs_create_pdf:"1"})
              .progress(progress=>{
                console.log(progress);
              })
              .then(result=>{
                res.redirect('/download');
              })
              .finally(()=>worker.terminate())
            
        });
    });
});

app.get("/download", (req, res)=>{
    const file='${__dirname}/tesseract.js-ocr-result.pdf';
    res.download(file);
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT,()=>console.log("hey i am running on port ${PORT}"));

