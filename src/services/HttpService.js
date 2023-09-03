const API_KEY = 'at_XutrWCJhSHpANbD3ArkbSyvuGU0kI'; //... Set your api key so that the app works

export const getCurrentIp = async () => {
	const response = await fetch('https://api.ipify.org');
	return await response.text();
};

export const getIp = async ip => {
	const response = await fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
	);
	return await response.json();
};
