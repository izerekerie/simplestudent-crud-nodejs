const express =require('express')
const mongoose=require('mongoose')
var router=express.Router()

const Student= mongoose.model('Student')