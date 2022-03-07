import ejsMate from 'ejs-mate';
import {franc} from 'franc';
import express from 'express';
import lang from 'langs';

const app = express();

app.set('view engine', 'ejs');
app.engine('ejs',ejsMate);
app.use(express.urlencoded({extended:true}));

app.listen('3000',()=>{
    console.log('Listening on port 3000');
})

app.get('/home',(req,res)=>{
    res.render('home');
})

app.post('/home',(req,res)=>{
    const language = req.body.lang; 
    const langs = franc(language);
        if(langs==='und')
        res.send("Sorry Try a lengthier sentence");
        else{
        const languages = lang.where("3",langs);
       // console.log(languages);
        if(languages)
        res.render('view',{ languages });
        else{
            res.send("Sorry could not find this language, Try any other sentence");
        }
    }
})


app.use((req,res)=>{
    res.send('Hi!!');
})



