import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello");
});
//module.exports(router);
export default router;