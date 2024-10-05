// balance
let balance = elementValue("balance");


// calling the donation button listener function for each of the donation buttons
donationButtonListener(
	"btn-noakhali",
	"currentDonationNoakhali",
	"newDonationNoakhali"
);
donationButtonListener("btn-feni", "currentDonationFeni", "newDonationFeni");
donationButtonListener("btn-quota", "currentDonationQuota", "newDonationQuota");


// donation and history button

document.getElementById('btnDonation').addEventListener('click', function(){
  document.getElementById("btnDonation").classList.add("bg-[#B4F461]");
  document.getElementById("btnHistory").classList.remove("bg-[#B4F461]");

  document.getElementById("donationCards").classList.remove("hidden");
	document.getElementById("historyTab").classList.add("hidden");
})

document.getElementById('btnHistory').addEventListener('click', function(){
  document.getElementById("btnDonation").classList.remove("bg-[#B4F461]");
  document.getElementById("btnHistory").classList.add("bg-[#B4F461]");

  document.getElementById("donationCards").classList.add("hidden");
	document.getElementById("historyTab").classList.remove("hidden");
})
