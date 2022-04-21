const footers = [
	{
		id: 'shortcuts',
		name: 'Shortcuts',
		values: [
			{
				name: 'Customers',
				path: '../dashboard',
			},
			{
				name: 'Products',
				path: '../products',
			},
		],
	},
	{
		id: 'followus',
		name: 'Follow us',
		values: [
			{
				name: 'Facebook',
				path: 'url',
			},
			{
				name: 'Twitter',
				path: 'url',
			},
		],
	},
	{
		id: 'usefullinks',
		name: 'Useful links',
		values: [
			{
				name: 'Accounts',
				path: './accounts',
			},
			{
				name: 'Pricing',
				path: './pricing',
			},
		],
	},
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
	footers,
};
