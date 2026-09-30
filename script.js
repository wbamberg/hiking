import { data, monthNames } from "./data.js";

/* first row */
const monthRow = document.createElement("div");
monthRow.classList.add("month-row");

const monthBox = document.createElement("div");
monthBox.classList.add("month");
monthRow.appendChild(monthBox);

for (const name of monthNames) {
	const monthBox = document.createElement("div");
	monthBox.classList.add("month");
	monthBox.textContent = name;
	monthRow.appendChild(monthBox);
}
document.body.appendChild(monthRow);

/* actual years */

for (const year of data) {
	const yearBox = document.createElement("div");
	yearBox.classList.add("year");

	const yearValueBox = document.createElement("div");
	yearValueBox.classList.add("year-value");
	yearValueBox.textContent = year.year;
	yearBox.appendChild(yearValueBox);

	for (const hikes of year.months.slice(4, 10)) {
		const hikesBox = document.createElement("div");
		hikesBox.classList.add("month");
		for (const hike of hikes) {
			const hikeBox = document.createElement("div");
			hikeBox.classList.add("hike-box");
			hikeBox.setAttribute("data-with", hike.with);
			hikeBox.textContent = hike.name;
			if (hike.completed === false) {
				hikeBox.textContent += "*";
			}
			hikesBox.appendChild(hikeBox);
		}
		yearBox.appendChild(hikesBox);
	}

	document.body.appendChild(yearBox);
}
