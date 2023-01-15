// Import the necessary modules
import express from "express";
import mongodb from "mongodb";

// Create an instance of express
const app = express();

// Connect to the MongoDB database
mongodb.connect("mongodb://localhost:27017/my-project", { useNewUrlParser: true, useUnifiedTopology: true }, (err: any, client: any) => {
	if (err) {
		console.log(err);
	}

	// Get the database
	const db = client.db();

	// Set up the API routes
	app.get("/api/items", (req: any, res: any) => {
		// Get the items from the database
		db.collection("items")
			.find()
			.toArray((err: any, items: any) => {
				if (err) {
					console.log(err);
				}
				res.json(items);
			});
	});

	// Start the server
	app.listen(3000, () => {
		console.log("Server is running on port 3000");
	});
});
