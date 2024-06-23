const userActivities = [
	{ userId: 1, activityType: "login", timestamp: "2024-06-14T10:00:00Z" },
	{ userId: 2, activityType: "login", timestamp: "2024-06-14T10:00:00Z" },
	{ userId: 2, activityType: "homepage-view", timestamp: "2024-06-14T10:02:00Z" },
	{ userId: 2, activityType: "logout", timestamp: "2024-06-14T10:03:00Z" },
	{ userId: 1, activityType: "homepage-view", timestamp: "2024-06-14T10:4:00Z" },
	{ userId: 2, activityType: "login", timestamp: "2024-06-14T10:05:00Z" },
	{ userId: 2, activityType: "homepage-view", timestamp: "2024-06-14T10:06:00Z" },
	{ userId: 3, activityType: "login", timestamp: "2024-06-14T10:07:00Z" },
	{ userId: 3, activityType: "homepage-view", timestamp: "2024-06-14T10:07:00Z" },
];

// Write a function to count the number of unique users.
const countUniqueUsers = (activities) => {
	const userSet = {};
	let uniqueCount = 0;

	activities.forEach((activity) => {
		if (!userSet[activity.userId]) {
			userSet[activity.userId] = true;
			uniqueCount += 1;
		}
	});

	return uniqueCount;
};

// Write a function to find the most common activity type.
const mostCommonActivityType = (activities) => {
	const activityCount = {};
	let maxCount = 0;
	let mostCommonActivity = "";

	for (const activity of activities) {
		const type = activity.activityType;
		activityCount[type] = (activityCount[type] || 0) + 1;

		if (activityCount[type] > maxCount) {
			maxCount = activityCount[type];
			mostCommonActivity = type;
		}
	}

	return mostCommonActivity;
};

// Write a function to generate a timeline of activities for each user, sorted by timestamp.
const generateUserTimelines = (activities) => {
	const userTimelines = {};

	activities.forEach((activity) => {
		if (!userTimelines[activity.userId]) {
			userTimelines[activity.userId] = [];
		}
		userTimelines[activity.userId].push(activity);
	});

    // Only Required if timeline is not in sorted order
	for (const userId in userTimelines) {
		userTimelines[userId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
	}

	return userTimelines;
};

console.log("Number Of Unique Users:", countUniqueUsers(userActivities));
console.log("Most Common Activity Type:", mostCommonActivityType(userActivities));
console.log('User Timelines:', generateUserTimelines(userActivities));
