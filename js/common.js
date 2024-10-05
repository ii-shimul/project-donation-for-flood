// input field string to number convert function
function inputValue(id) {
	const value = document.getElementById(id).value;
	const amount = parseFloat(document.getElementById(id).value);
	if (typeof amount !== "number" || value === "") {
		return -1;
	}
	return amount;
}

// element text to number convert
function elementValue(id) {
	const amount = parseFloat(document.getElementById(id).innerText);
	return amount;
}

// function for donation buttons listener
function donationButtonListener(btnID, currentDonationID, newDonationID) {
	document.getElementById(btnID).addEventListener("click", function () {
		const newDonation = inputValue(newDonationID);
		if (newDonation < 0) {
			alert("Invalid donation amount or input.");
			return;
		}
		if (newDonation > balance) {
			alert("Insufficient balance.");
			return;
		}
		let currentDonation = elementValue(currentDonationID);
		balance -= newDonation;
		currentDonation += newDonation;

		document.getElementById("balance").innerText = balance;
		document.getElementById(currentDonationID).innerText = currentDonation;
		const modal = document.getElementById("modal");
		modal.showModal();

		// adding in history
		const date = new Date().toLocaleString("en-US", {
			timeZone: "Asia/Dhaka",
			timeZoneName: "long",
		});

    const history = document.getElementById("historyTab");

    // removing the not donated reminder in history first 
    history.removeChild(document.getElementById("notDonated"));

		if (btnID === "btn-noakhali") {
      const newHistory = document.createElement("div");
			newHistory.classList.add("p-8", "rounded-2xl", "border");
			newHistory.innerHTML = `
          <h1 class="text-xl font-bold">${newDonation} Taka is Donated for Flood-2024 at Noakhali, Bangladesh</h1>
          <p class="text-base font-light text-gray-500">
            Date : ${date}
          </p>
        `;
			history.appendChild(newHistory);
		}
		if (btnID === "btn-feni") {
			const newHistory = document.createElement("div");
			newHistory.classList.add("p-8", "rounded-2xl", "border");
			newHistory.innerHTML = `
          <h1 class="text-xl font-bold">${newDonation} Taka is Donated for Flood Relief at Feni, Bangladesh</h1>
          <p class="text-base font-light text-gray-500">
            Date : ${date}
          </p>
        `;
			history.appendChild(newHistory);
		}
		if (btnID === "btn-quota") {
			const newHistory = document.createElement("div");
			newHistory.classList.add("p-8", "rounded-2xl", "border");
			newHistory.innerHTML = `
          <h1 class="text-xl font-bold">${newDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
          <p class="text-base font-light text-gray-500">
            Date : ${date}
          </p>
        `;
			history.appendChild(newHistory);
		}
	});
}
