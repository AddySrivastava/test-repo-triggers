exports = function() {
  /*
    A Scheduled Trigger will always call a function without arguments.
    Documentation on Triggers: https://docs.mongodb.com/realm/triggers/overview/

    Functions run by Triggers are run as System users and have full access to Services, Functions, and MongoDB Data.

    Access a mongodb service:
    
  */  
    const collection = context.services.get("adityas-dev").db("sample_training").collection("companies");
        const collection2 = context.services.get("adityas-dev").db("sample_training").collection("trips");

    console.log(JSON.stringify(collection));
    return collection.findOne().then(data => collection2.insertOne(data)).catch(err => console.error(err))
   
    //Note: In Atlas Triggers, the service name is defaulted to the cluster name.

    //Call other named functions if they are defined in your application:
    //const result = context.functions.execute("function_name", arg1, arg2);

    //Access the default http client and execute a GET request:
    //const response = context.http.get({ url: <URL> })

   // Learn more about http client here: https://docs.mongodb.com/realm/functions/context/#context-http
  //*/
};
