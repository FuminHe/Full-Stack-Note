const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Video = require('../models/video')

const db = "mongodb://localhost:27017/videoplayer";

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true },function(err){
    if(err){
        console.log('Error!!'+err)
    }
    else{
        console.log("Connected to MongoDB");
    }
})
//get all videos
router.get('/videos', function (req, res){
   console.log('Get request for all the videos')
   Video.find({})
        .exec(function(err, videos){
            if(err){
                console.log("Error retrieving videos")
            }else{
                res.json(videos);
            }
        })

});

//get videos by id
router.get('/videos/:id', function (req, res){
    console.log('Get request for a single video')
    Video.findById(req.params.id)
         .exec(function(err, video){
             if(err){
                 console.log("Error retrieving video")
             }else{
                 res.json(video);
             }
         })
 
 });

 //post a video -> add a new record to DB

 router.post('/video', function(req, res){
     console.log('Post a video')
     var newVideo = new Video();

     newVideo.title = req.body.title;
     newVideo.url = req.body.url;
     newVideo.description = req.body.description;  
     newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error saving a video")
        }else{
            res.json(insertedVideo);
        }
     })
     
 })

// put -> update a record
router.put("/video/:id")

// delete -> to delete a record
router.delete("/video/:id",function(req,res){
  console.log("Deleting a video");
  
  Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
    if(err){
      res.send("Error deleting a video");
    }else{
      res.json(deletedVideo);
    }
  })
}

module.exports = router;
