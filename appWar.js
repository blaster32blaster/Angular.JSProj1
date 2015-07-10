(function() {
	var app = angular.module('applica', []);
	
	app.controller('MathController', function() {
	this.questions = articles;	
	});
	
	var articles = [
	 {
		title: 'Question 1',
		difficulty: 1,
		text: ' The dog walks up to his house.  The dog sees that he has one treat in his bowl and one treat on the ground.  How many treats does he have?',
		images: [
		{
			full: '15107031984_ca3c28a0e0_z.jpg',
			thumb: '15107031984_ca3c28a0e0_z.jpg',
		},
		],
		answers: [
		{
			first: 2,
			second: 3,
			third: 1,
		}
		],
	},
	{
		title: 'Question 2',
		difficulty: 1,
		text: ' The dog walks up to his house.  The dog sees that he has one treat in his bowl and one treat on the ground.  How many treats does he have?',
		images: [
		{
			full: '15107031984_ca3c28a0e0_z.jpg',
			thumb: '15107031984_ca3c28a0e0_z.jpg',
		},
		],
		answers: [
		{
			first: 2,
			second: 3,
			third: 1,
		}
		],
	},
	{
		title: 'Question 3',
		difficulty: 1,
		text: ' The dog walks up to his house.  The dog sees that he has one treat in his bowl and one treat on the ground.  How many treats does he have?',
		images: [
		{
			full: '15107031984_ca3c28a0e0_z.jpg',
			thumb: '15107031984_ca3c28a0e0_z.jpg',
		},
		],
		answers: [
		{
			first: 2,
			second: 3,
			third: 1,
		}
		],
	}
	
	];
	
})();

	
