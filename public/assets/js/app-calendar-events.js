// sample calendar events data
'use strict'
var curYear = moment().format('YYYY');
var curMonth = moment().format('MM');
// Calendar Event Source
var sptCalendarEvents = {
	id: 1,
	events: [{
		id: '1',
		start: curYear + '-' + curMonth + '-02T09:00:00',
		end: curYear + '-' + curMonth + '-02T13:00:00',
		title: 'Spruko Meetup',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '2',
		start: curYear + '-' + curMonth + '-12T09:00:00',
		end: curYear + '-' + curMonth + '-12T17:00:00',
		title: 'Design Review',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '3',
		start: curYear + '-' + curMonth + '-13T12:00:00',
		end: curYear + '-' + curMonth + '-13T18:00:00',
		title: 'Lifestyle Conference',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '4',
		start: curYear + '-' + curMonth + '-21T07:30:00',
		end: curYear + '-' + curMonth + '-21T15:30:00',
		title: 'Team Weekly Brownbag',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '5',
		start: curYear + '-' + curMonth + '-04T10:00:00',
		end: curYear + '-' + curMonth + '-06T15:00:00',
		title: 'Music Festival',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '6',
		start: curYear + '-' + curMonth + '-23T13:00:00',
		end: curYear + '-' + curMonth + '-23T18:30:00',
		title: 'Attend Lea\'s Wedding',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '7',
		start: curYear + '-' + curMonth + '-07T13:00:00',
		end: curYear + '-' + curMonth + '-07T17:00:00',
		title: 'IT Practicum Class',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '8',
		start: curYear + '-' + curMonth + '-14T13:00:00',
		end: curYear + '-' + curMonth + '-14T17:00:00',
		title: 'IT Practicum Class',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '9',
		start: curYear + '-' + curMonth + '-21T13:00:00',
		end: curYear + '-' + curMonth + '-21T17:00:00',
		title: 'IT Practicum Class',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '10',
		start: curYear + '-' + curMonth + '-28T13:00:00',
		end: curYear + '-' + curMonth + '-28T17:00:00',
		title: 'IT Practicum Class',
		backgroundColor: 'rgba(68, 84, 195, 0.15)',
		borderColor: 'rgba(68, 84, 195, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	},]
};
// Birthday Events Source
var sptBirthdayEvents = {
	id: 2,
	backgroundColor: 'rgba(247, 45, 102, 0.15)',
	borderColor: 'rgba(247, 45, 102, 0.15)',
	events: [{
		id: '11',
		start: curYear + '-' + curMonth + '-04T18:00:00',
		end: curYear + '-' + curMonth + '-04T23:30:00',
		title: 'Harcates Birthday',
		backgroundColor: 'rgba(247, 45, 102, 0.15)',
		borderColor: 'rgba(247, 45, 102, 0.15)',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '12',
		start: curYear + '-' + curMonth + '-28T15:00:00',
		end: curYear + '-' + curMonth + '-28T21:00:00',
		title: 'Jinnysin\'s Birthday',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '13',
		start: curYear + '-' + curMonth + '-31T15:00:00',
		end: curYear + '-' + curMonth + '-31T21:00:00',
		title: 'Lee shin\'s Birthday',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}, {
		id: '14',
		start: curYear + '-05-13T15:00:00',
		end: curYear + '-05-13T21:00:00',
		title: 'Wilchin\'s Birthday',
		description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary'
	}]
};
var sptHolidayEvents = {
	id: 3,
	backgroundColor: 'rgba(45, 206, 137, 0.15)',
	borderColor: 'rgba(45, 206, 137, 0.15)',
	events: [{
		id: '15',
		start: curYear + '-' + curMonth + '-05',
		end: curYear + '-' + curMonth + '-08',
		title: 'Festival Day'
	}, {
		id: '16',
		start: curYear + '-' + curMonth + '-18',
		end: curYear + '-' + curMonth + '-19',
		title: 'Memorial Day'
	}, {
		id: '17',
		start: curYear + '-' + curMonth + '-25',
		end: curYear + '-' + curMonth + '-26',
		title: 'Diwali'
	}]
};
var sptOtherEvents = {
	id: 4,
	backgroundColor: 'rgba(69, 170, 242,0.15)',
	borderColor: 'rgba(69, 170, 242,0.15)',
	events: [{
		id: '18',
		start: curYear + '-' + curMonth + '-07',
		end: curYear + '-' + curMonth + '-09',
		title: 'My Rest Day'
	}, {
		id: '18',
		start: curYear + '-' + curMonth + '-27',
		end: curYear + '-' + curMonth + '-28',
		title: 'My Rest Day'
	}, {
		id: '19',
		start: curYear + '-' + curMonth + '-03T09:00:00',
		end: curYear + '-' + curMonth + '-03T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '20',
		start: curYear + '-' + curMonth + '-04T09:00:00',
		end: curYear + '-' + curMonth + '-04T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '21',
		start: curYear + '-' + curMonth + '-05T09:00:00',
		end: curYear + '-' + curMonth + '-05T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '22',
		start: curYear + '-' + curMonth + '-06T09:00:00',
		end: curYear + '-' + curMonth + '-06T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '23',
		start: curYear + '-' + curMonth + '-07T09:00:00',
		end: curYear + '-' + curMonth + '-07T12:00:00',
		title: 'Duty - Internship'
	}, {
		id: '24',
		start: curYear + '-' + curMonth + '-10T09:00:00',
		end: curYear + '-' + curMonth + '-10T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '25',
		start: curYear + '-' + curMonth + '-11T09:00:00',
		end: curYear + '-' + curMonth + '-11T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '26',
		start: curYear + '-' + curMonth + '-12T09:00:00',
		end: curYear + '-' + curMonth + '-12T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '27',
		start: curYear + '-' + curMonth + '-13T09:00:00',
		end: curYear + '-' + curMonth + '-13T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '28',
		start: curYear + '-' + curMonth + '-14T09:00:00',
		end: curYear + '-' + curMonth + '-14T12:00:00',
		title: 'Duty - Internship'
	}, {
		id: '29',
		start: curYear + '-' + curMonth + '-17T09:00:00',
		end: curYear + '-' + curMonth + '-17T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '30',
		start: curYear + '-' + curMonth + '-18T09:00:00',
		end: curYear + '-' + curMonth + '-18T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '31',
		start: curYear + '-' + curMonth + '-19T09:00:00',
		end: curYear + '-' + curMonth + '-19T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '32',
		start: curYear + '-' + curMonth + '-20T09:00:00',
		end: curYear + '-' + curMonth + '-20T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '33',
		start: curYear + '-' + curMonth + '-21T09:00:00',
		end: curYear + '-' + curMonth + '-21T12:00:00',
		title: 'Duty - Internship'
	}, {
		id: '34',
		start: curYear + '-' + curMonth + '-24T09:00:00',
		end: curYear + '-' + curMonth + '-24T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '35',
		start: curYear + '-' + curMonth + '-25T09:00:00',
		end: curYear + '-' + curMonth + '-25T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '36',
		start: curYear + '-' + curMonth + '-26T09:00:00',
		end: curYear + '-' + curMonth + '-26T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '37',
		start: curYear + '-' + curMonth + '-27T09:00:00',
		end: curYear + '-' + curMonth + '-27T18:00:00',
		title: 'Duty - Internship'
	}, {
		id: '38',
		start: curYear + '-' + curMonth + '-28T09:00:00',
		end: curYear + '-' + curMonth + '-28T12:00:00',
		title: 'Duty - Internship'
	}, ]
};