import multer from 'multer';


const fs = require('fs');

const storage = multer.diskStorage({
    destination:(rq, file,cb)=>{
        let dir = `uploads/img`
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null,'uploads/img');
        
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname )
    }
})
export const upload_character= multer({storage})