//GET WHAT IS SELECTED:
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	let person_template = _.template($("#person_template").html()), //outside to save processing and need to rebuild that variable each time. Could be inside the bind, but wastes processing.
		option_template = _.template($("#select_template").html()),
		boros = _.uniqBy(data, "boro"),
		death = _.uniqBy(data, "statistical_murder_flag"),
		age = _.uniqBy(data, "vic_age_group"),
		gender = _.uniqBy(data, "vic_sex"),
		race = _.uniqBy(data, "vic_race");

	boros = _.sortBy(boros, "boro"),
		death = _.sortBy(death, "statistical_murder_flag"),
		age = _.sortBy(age, "vic_age_group"),
		gender = _.sortBy(gender, "vic_sex"),
		race = _.sortBy(race, "vic_race");

	//	console.log("BOROS");
	//	console.log(boros);

	//	console.log("statistical_murder_flag");
	//	console.log(death);

	//	console.log("vic_age_group");
	//	console.log(age);

	//	console.log("vic_sex");
	//	console.log(gender);

	//	console.log("vic_race");
	//	console.log(race);

	_.each(boros, function (boro) {
		$("#character").append(option_template({ boro: boro.boro }));
	});

	$('#enter').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		// DO STUFF...
		persons_boro = $("#character").val();
		result = _.find(data, { boro: persons_boro });
		f

		console.log(result);

		$("#favorites").html(person_template({ person: result }));

	});

	//	var result = _(data)
	//	.groupBy('boro')
	//	.map((items, boro) => ({ boro, count: items.length }))
	//	.value();
	//
	//console.log(_.includes('vic_race')); // false


	//	console.log(result);
	//
	//	var result = _(data)
	//	.groupBy('statistical_murder_flag')
	//.map((items, statistical_murder_flag) => ({ statistical_murder_flag, count: items.length }))
	//	.value();

	//	console.log(result);

	//	var result = _(data)
	//	.groupBy('statistical_murder_flag', 'vic_race')
	//	.map((items, statistical_murder_flag, vic_race) => ({ statistical_murder_flag, vic_race, count: items.length }))
	//	.value();

	//	console.log(result);


	//	var result = _(data)
	//	.groupBy('vic_age_group')
	//	.map((items, vic_age_group) => ({ vic_age_group, count: items.length }))
	//	.value();

	//console.log(result);


	//	var result = _(data)
	//	.groupBy('precinct')
	//	.map((items, precinct) => ({ precinct, count: items.length }))
	//	.value();

	//	console.log(result);


	//	var result = _(data)
	//	.groupBy('vic_age_group')
	//	.map((items, vic_age_group) => ({ vic_age_group, count: items.length }))
	//	.value();
	//
	//console.log(result);


	//var result = _(data)
	//	.groupBy('vic_sex')
	//	.map((items, vic_sex) => ({ vic_sex, count: items.length }))
	//	.value();

	//	console.log(result);


	//	var result = _(data)
	//	.groupBy('vic_race')
	//	.map((items, vic_race) => ({ vic_race, count: items.length }))
	//	.value();


	//	console.log(result);

	//document.write('<pre>' + JSON.stringify(result, 0, 4) + '</pre>');



}); // closes document ready