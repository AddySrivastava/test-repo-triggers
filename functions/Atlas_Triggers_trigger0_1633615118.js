exports = async function(changeEvent) {

    const docId = changeEvent.documentKey._id;
    
    console.log(changeEvent.ns.db, changeEvent.ns.coll);

    const fullDocument = changeEvent.fullDocument;
    
    console.log(JSON.stringify(fullDocument));

    const updateDescription = changeEvent.updateDescription;

    if (updateDescription) {
      const updatedFields = updateDescription.updatedFields; // A document containing updated fields
    }

    if (updateDescription) {
      const removedFields = updateDescription.removedFields; // An array of removed fields
    }
    
    const mongodb = context.services.get('adityas-dev');
    
    const users = mongodb.db("movies").collection("db");
    
    const one = await users.insertOne(fullDocument);
    
    console.log("Hello world");

};
