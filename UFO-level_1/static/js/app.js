// from data.js
var tableData = data;


//Use D3 to select the table body
var tbody = d3.select("tbody");

// Loop through array of objects then each object
tableData.forEach((item) => {
  console.log(item);
  var row = tbody.append("tr");

// Get the entries for each object in the array
Object.entries(item).forEach(([key, value]) => {
    // Log the key and value
    console.log(`Key: ${key} and Value ${value}`);
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the filterdate button
var filterDate = d3.select("#filter-btn");

filterDate.on("click", function() {
  // Select the input date
  var inputDate = d3.select("#datetime");
  var inputDateValue = inputDate.property("value");


  var filterTable = tableData.filter(item => item.datetime === inputDateValue);

  // remove any children from the list to
  tbody.html("");

  //repopulate with the filtered data
// Loop through array of objects then each object
  filterTable.forEach((item) => {
    console.log(item);
    var row = tbody.append("tr");

  // Get the entries for each object in the array
  Object.entries(item).forEach(([key, value]) => {
      // Log the key and value
      console.log(`Key: ${key} and Value ${value}`);
      var cell = row.append("td");
      cell.text(value);
    });
  });

})

