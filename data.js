let result;
//take the var data and its
let data = [{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 6,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 26,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 62,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "Unkown",
		"vic_sex": "unkown",
		"vic_race": "Unknown"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "Unkown",
		"vic_sex": "unkown",
		"vic_race": "Unknown"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 88,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 110,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 108,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 108,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 109,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 88,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 61,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Staten Island",
		"precinct": 123,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 61,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "65+",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 61,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 26,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 76,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Unknown"
	},
	{
		"boro": "Brooklyn",
		"precinct": 78,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "65+",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 109,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 109,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 115,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 121,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Brooklyn",
		"precinct": 94,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 76,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 78,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 13,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 13,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 94,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "65+",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 24,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 108,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 26,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 61,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 60,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 88,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 19,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 45,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 88,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "65+",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "65+",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "65+",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 88,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "UNKNOWN",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 60,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 107,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 88,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 107,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 107,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 5,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 5,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 45,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 6,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Brooklyn",
		"precinct": 66,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Brooklyn",
		"precinct": 66,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 20,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 45,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "65+",
		"vic_sex": "female",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 121,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 28,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 61,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 66,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 84,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 100,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Unknown"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 50,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 100,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "Brooklyn",
		"precinct": 68,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 7,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 7,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 19,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Manhattan",
		"precinct": 26,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 26,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 110,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 113,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 123,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "American Indian/Alaskan Native"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 102,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 30,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 63,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 94,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 26,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 26,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 115,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 41,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 23,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 107,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 67,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 83,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Staten Island",
		"precinct": 120,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 25,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 107,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 107,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 45,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 32,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 69,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 71,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 114,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 24,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 33,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 49,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 60,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 14,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 111,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 111,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 79,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 13,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 81,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 105,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "65+",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 106,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 46,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 75,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Manhattan",
		"precinct": 34,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "<18",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 52,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "female",
		"vic_race": "Unknown"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "Unknown"
	},
	{
		"boro": "the Bronx",
		"precinct": 48,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Queens",
		"precinct": 101,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 90,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 72,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "female",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 47,
		"statistical_murder_flag": "TRUE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Manhattan",
		"precinct": 24,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 77,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "45-64",
		"vic_sex": "male",
		"vic_race": "Asian / Pacific Islander"
	},
	{
		"boro": "the Bronx",
		"precinct": 43,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 44,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black Hispanic"
	},
	{
		"boro": "the Bronx",
		"precinct": 42,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "female",
		"vic_race": "Black"
	},
	{
		"boro": "Staten Island",
		"precinct": 123,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "White Hispanic"
	},
	{
		"boro": "Queens",
		"precinct": 103,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "White"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "18-24",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 70,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "Brooklyn",
		"precinct": 73,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	},
	{
		"boro": "the Bronx",
		"precinct": 40,
		"statistical_murder_flag": "FALSE",
		"vic_age_group": "25-44",
		"vic_sex": "male",
		"vic_race": "Black"
	}

];