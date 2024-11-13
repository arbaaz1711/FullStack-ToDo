
const express = require('express');
const app = express();
const PORT = 5000;
const db = require('./src/config/db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS \`node-complete\`.\`products\` (
  \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  \`title\` VARCHAR(255) NOT NULL,
  \`description\` TEXT NOT NULL,
  \`price\` DECIMAL(10, 2) NOT NULL,
  \`imageUrl\` VARCHAR(255) NOT NULL,
  PRIMARY KEY (\`id\`)
);
`;

// Function to create the table
async function createTable() {
  try {
    // Execute the query to create the table
    await db.execute(createTableQuery);
    console.log('Table "products" created successfully in "node-complete" schema.');
  } catch (err) {
    console.error('Error creating table:', err);
    process.exit(1); // Exit if there's an error creating the table
  }
}

// Call the function to create the table and then start the server
async function startServer() {
  // First, create the table
  await createTable();

  // Now, start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
