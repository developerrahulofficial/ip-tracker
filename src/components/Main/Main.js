import React, { useEffect, useState } from 'react';
import './Main.css';

//* External Packages
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

//* Services
import { getGeoDatas } from '../../services/GeoService';

//* Assets
import MarkerDark from '../../assets/images/icon-location-dark.svg';

function Main(props) {
	const { config, setConfig } = props;
	const [center, setCenter] = useState({ lat: 50.5, lng: 30.5 });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		updateCenter();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (config !== null) {
			setCenter({ lat: config.lat, lng: config.lng });
		}
	}, [config]);

	const updateCenter = async () => {
		const newConfig = await getGeoDatas();
		setConfig(newConfig);
		setLoading(false);
	};

	const iconCustom = new L.Icon({
		iconUrl: MarkerDark,
		iconRetinaUrl: MarkerDark,
		iconAnchor: null,
		popupAnchor: null,
		shadowUrl: null,
		shadowSize: null,
		shadowAnchor: null,
		iconSize: new L.Point(45, 45),
	});

	const ChangeView = () => {
		const map = useMap();
		map.setView(center);
		return null;
	};

	return (
		<main>
			{loading ? (
				<div className='wrapper-loading light'>
					<span>Loading...</span>
				</div>
			) : (
				<MapContainer center={center} zoom={15} zoomControl={false}>
					<ChangeView />
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={center} icon={iconCustom}></Marker>
				</MapContainer>
			)}
		</main>
	);
}

export default Main;
