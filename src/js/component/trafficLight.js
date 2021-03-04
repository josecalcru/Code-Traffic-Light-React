import React, { useState } from "react";

//create your first component
export function TrafficLight() {
	const [color, setColor] = useState("red");
	let redstatus = undefined;
	let greenstatus = undefined;
	let yellowstatus = undefined;

	if (color === "red") {
		redstatus = "selected";
	} else {
		//nothing happens
	}
	if (color === "green") {
		greenstatus = "selected";
	} else {
		//nothing happens
	}
	if (color === "yellow") {
		yellowstatus = "selected";
	} else {
		//nothing happens
	}
	return (
		<div className="col-3 justify-content-center box mx-auto">
			<div className={"red " + redstatus} onClick={() => setColor("red")}>
				{" "}
			</div>
			<div
				className={"yellow " + yellowstatus}
				onClick={() => setColor("yellow")}>
				{" "}
			</div>
			<div
				className={"green " + greenstatus}
				onClick={() => setColor("green")}>
				{" "}
			</div>
		</div>
	);
}
