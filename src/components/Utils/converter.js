// Convert time to hours and minutes
export const convertTime = (time) => {
	const hours = Math.floor(time / 60);
	const mins = time % 60;
	return `${hours}h ${mins}m`;
};
// Convert a number to money format
export const convertMoney = (money) => {
	const formatter = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		minimumFractionDigits: 0,
	});
	return formatter.format(money);
};
