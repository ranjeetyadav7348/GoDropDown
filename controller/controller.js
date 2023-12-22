const User =require('../model/valueModel.js');
const linkPreview = require('link-preview-js');



 const fetchLinkPreview=async(req,res)=> {

  try {
    
    const options = {
      headers: {
        'User-Agent': 'Googlebot',
      },
    };
    const {link}=req.body;

    const preview = await linkPreview.getLinkPreview(link, options);


     
    const validlink=await User.findOne({link});
   
    if(!validlink)
    {
        const newlink=new User({link,val:1}); 
        try{ await newlink.save()
          
            res.status(201).json({preview});
          }catch(error){
           res.status(500).json({message:"Internal Server Error"});
          }

    }
    else{
           if(validlink.val<=2)
           {
            validlink.val=validlink.val+1;
            try{ 

                const updatedUser = await User.findByIdAndUpdate(
                    validlink._id,
                    {
                      $set: {
                      link,
                       val:validlink.val,
                      },
                    },
                    { new: true }
                  );
                  const {val, ...rest } = updatedUser._doc;


                res.status(201).json({preview});
              }catch(error){
              res.status(500).json(error)
              }

           }
           else{
            res.status(201).json({message:"Limit Exceeded"});
           }

    }

   
  } catch (error) {
    console.error('Error:', error.message);
  }
}


module.exports={fetchLinkPreview}


