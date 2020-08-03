import React, { useState } from "react";

export function TrafficLight() {
	//hooks here
	const [lightColor, setLightColor] = useState(null);

	function doShane(color) {
		setLightColor(color);
	}

	//return here
	return (
		<>
			<div className="topTrafic container" />
			<div className="square container d-flex">
				<div
					className={
						lightColor == "red"
							? "light bg-danger shane"
							: "light bg-danger"
					}
					onClick={() => doShane("red")}
				/>
				<div
					className={
						lightColor == "yellow"
							? "light bg-warning shane"
							: "light bg-warning"
					}
					onClick={() => doShane("yellow")}
				/>
				<div
					className={
						lightColor == "green"
							? "light bg-success shane"
							: "light bg-success"
					}
					onClick={() => doShane("green")}
				/>
			</div>
		</>
	);
}
