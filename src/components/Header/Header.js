import React from 'react';
import './Header.css';
import ArrowIcon from '../../assets/images/icon-arrow.js';
import { getGeoDatas } from '../../services/GeoService';

function Header(props) {
	const { config, setConfig } = props;

	const handleSetIpAdress = async () => {
		const newConfig = await getGeoDatas(config.ip);
		setConfig(newConfig);
	};

	return (
		<header>
			<h1 className='title'>IP Address Tracker</h1>
			<div className='wr-input-ip'>
				<input
					type='text'
					value={config?.ip}
					placeholder='Search for any IP address or domain'
					onChange={e => setConfig({ ...config, ip: e.target.value })}
				/>
				<button aria-label='btn-set-ipadress' onClick={handleSetIpAdress}>
					<ArrowIcon />
				</button>
			</div>
			<div className='information'>
				<article className='ip'>
					<h2>IP ADDRESS</h2>
					<p>{config?.ip}</p>
				</article>
				<article className='location'>
					<h2>LOCATION</h2>
					<p>{config?.location}</p>
				</article>
				<article className='timezone'>
					<h2>TIMEZONE</h2>
					<p>{config?.timezone}</p>
				</article>
				<article className='isp'>
					<h2>ISP</h2>
					<p>{config?.isp}</p>
				</article>
			</div>
		</header>
	);
}

export default Header;
