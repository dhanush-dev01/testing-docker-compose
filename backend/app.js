// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors')
// const port = 5000;


// app.use(cors({ origin: '*' }));
// const connectToMongoDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:32768/mydatabase', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB', error);
//     throw error;
//   }
// };
// connectToMongoDB()


//   .then(() => {
//     console.log('MongoDB connection established');
//   })
//   .catch((error) => {
//     console.error('Error initializing application', error);
//   });
//   const textSchema = new mongoose.Schema({
//     content: String
//   });
//   const Text = mongoose.model('Text', textSchema);
  
//   // API endpoint to save text
//   app.post('/api/text', (req, res) => {
//     const newText = new Text({ content: "hi bruh!!!" });
//     newText.save()
//       .then(() => res.sendStatus(201))
//       .catch(err => {
//         console.error('Failed to save text:', err);
//         res.sendStatus(500);
//       });
//   });
  
//   // API endpoint to save text
// app.delete('/api/text/:id', (req, res) => {
//   const postId = req.params.id;
//   Text.findByIdAndDelete(postId)
//     .then(() => res.sendStatus(204))
//     .catch(err => {
//       console.error('Failed to delete text:', err);
//       res.sendStatus(500);
//     });
// });

//   // API endpoint to retrieve text
//   app.get('/api/text', (req, res) => {
//     Text.find()
//       .then(texts => {
//         if (texts.length === 0) {
//           return res.status(404).send('No text found');
//         }
//         res.json(texts);
//       })
//       .catch(err => {
//         console.error('Failed to retrieve text:', err);
//         res.sendStatus(500);
//       });
//   });
  




// // Start the server


// // app.use(cors({ origin: '*' }));
// // // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // mongodb://mongodb1:27017/mydatabase'







// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:32768/mydatabase', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to yourDB-name database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/api/text", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/api/text", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
