const express = require('express');
const app = express();
const cors = require('cors');
const qrcode = require('qrcode');
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

app.post('/bookticket', async (req, res) => {
  const { from, to, ticketType, nopass } = req.body;
console.log("Form Data:", req.body);
  // Validate the form data
  //if (from==='SELECT' || to=='SELECT' || ticketType=='' || !passengerCount=='') {
  //  return res.status(400).json({ message: 'Please fill all the fields' });
 // }

console.log("nospass",nopass);

  try {
    // Connect to the MongoDB server
    const client = await MongoClient.connect(url, options);
    console.log('Connected to MongoDB server');

    // Select the database and collection
    const collection = client.db('watermetro').collection('ticketfare');

    // Create a query object with the "from" and "to" values
    const query = { from: from, to: to };

    // Find the document that matches the query in the collection
    const foundDocument = await collection.findOne(query);

    // Retrieve the fare value from the document
    if (foundDocument) {
      let fare = foundDocument.fare;
      let ticketType = foundDocument.ticketType;
      if(ticketType=='2'){
        fare=fare*2;
      }
      if(nopass>1){
        fare=fare*nopass;
      
      }
      console.log('fare:', fare, 'ruppees');
    } else {
      console.log('Fare not found for the given "from" and "to" stations.');
    }

    // Close the MongoDB connection
    client.close();
    console.log('Connection closed');

    // Generate the QR code
    // const qrCode = await qrcode.toDataURL(JSON.stringify(document));

    // Return the QR code data URL
    // return res.json({ message: 'Form submitted successfully', qrCode });
  } catch (error) {
    console.error('Error retrieving document:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Backend server is running on port 4000');
});
