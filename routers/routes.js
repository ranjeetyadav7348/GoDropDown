const express = require('express');
const { fetchLinkPreview } =require('../controller/controller');

const router=express.Router();
router.put('/linkcheckIn',fetchLinkPreview);

module.exports={router};