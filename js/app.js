// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear existing data
    tbody.html("");
    data.forEach((dataRow) => {
        //Append row to table body
        let row = tbody.append("tr")

        //loop through each field in dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    //grab the datetiem value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if a date was entered and filter the data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filteredData
    buildTable(filteredData);
}

// Attach an event to listen for the filter button click
d3.selectAll("#filter-btn").on("click", handleClick);

//build table when page loads
buildTable(tableData);
