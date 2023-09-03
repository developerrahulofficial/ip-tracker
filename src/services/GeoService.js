//* Services
import { getCurrentIp, getIp } from './HttpService';

export const getGeoDatas = async (tempIp = null) => {
	const ip = tempIp ?? (await getCurrentIp());
	const geo = await getIp(ip);

	return Promise.resolve({
		lat: geo.location.lat,
		lng: geo.location.lng,
		ip: geo.ip,
		isp: geo.isp,
		timezone: `UTC ${geo.location.timezone}`,
		location: `${geo.location.city}, ${geo.location.country} ${geo.location.postalCode}`,
	});
};
