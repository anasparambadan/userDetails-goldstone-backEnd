

// Sample array of objects
// const data = [
//   { name: 'John Doe', age: 30, email: 'john@example.com' },
//   { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
//   { name: 'Bob Johnson', age: 35, email: 'bob@example.com' }
// ];

// Extract column headers from the first object
// const headers = Object.keys(data[0]);

// Convert array of objects to CSV format

// Write CSV content to a file
export const exportCsv = (req, res) => {
  const data = req.body;    
  const headers = ["id", "name", "email", "status", "gender"];

  const csvContent = [
    headers.join(","),
    ...data.map((obj) => headers.map((key) => obj[key]).join(",")),
  ].join("\n");
  

  res.set('Content-Disposition', 'attachment; filename="data.csv"');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(csvContent);

};
