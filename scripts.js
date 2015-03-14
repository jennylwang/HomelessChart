var JWFont = {
      fontName: 'Arial',
      fontSize: 12,
      bold: true,
      italic: true,
      color: '#grey',     // The color of the text.
      auraColor: '#grey', // The color of the text outline.
      opacity: 0.8          // The transparency of the text.
    }


// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	var homelessDataArray = [];

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Homeless Population');
	data.addRows(allHomelessData);

	var myGrid = {
		'color' : "lightgreen"
	}

	// Set chart options
	var options = {
		'title' : 'Homelessness in New York City',
		'width' : 800,
		'height' : 600,
		'hAxis':{
			'title': 'Years'},// end of hAxis
		'vAxis': {
			'title': 'Total Number of Unsheltered Individuals'}// end of vAxis
	};
	
	options.vAxis.gridlines = myGrid;
	options.hAxis.textStyle = JWFont;
	options.vAxis.textStyle = JWFont;

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}