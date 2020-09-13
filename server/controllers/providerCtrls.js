const Provider = require('../models/providerModel')

exports.createProvider = (req,res) => { //Function controller to create a new Provider
    const body = req.body;

     //Check if the request is blank or invalid in some way
     if (!body)
     {
         return res.status(400).json(
             { success: false,
               error: "No data entered!" 
             }
         )
     }


     //Create a Provider with the data in the request. Handle errors with status codes and json responses
    Provider.create(body, (err, provider) => {
        if (err) return res.status(400).send(`Some error occured while adding the Provider. Error: ${err}`);

        else {
                return res.status(201).json(
                    { success: true,
                      id: provider._id,
                      message: "Provider added!"
                    }
                )
            }
    })

} //function to handle POST requests and add new provider to database

exports.getProviderbyId = async (req,res) => { //Controller for finding a single Provider with the requested id
    await Provider.findOne({_id: req.params.id}, (err, provider) => {
        if(err)
            return res.status(400).json(
                {
                    success: false,
                    message: "Incorrect query",
                    error: err
                })

        
        if(!provider)
        {
            return res.status(404).json({success: false, error: `Provider was not found`})
        }

    return res.status(200).json({ success: true, data: provider });
    }).catch(error => console.log(error)) //find method
} //SEARCH function

exports.getProviders = async (req, res) => { //Controller for finding all providers on the list
    await Provider.find({}, (error, provider) => {
        if(error)
        {
            return res.status(400).json({success: false, error: "Query is incorrect"});
        }

        if(!provider.length)
        {
            return res.status(404).json({success: false, error: "List possibly empty or contains incorrect values"});
        }


        return res.status(200).json(
                { success: true, data: provider }
            )


    }).catch(
        error => console.log(error)
    )


} //GET list/database

module.exports = exports //export all controllers