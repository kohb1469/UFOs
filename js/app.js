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