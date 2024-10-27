import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
			.then((res) => res.json())
			.then((res) => setData(res[fromCurrency]))
		console.log(data);
	}, [fromCurrency]) // when fromCurrency changes the method is called again
	console.log(data);
	return data;
}

export {useCurrencyInfo};