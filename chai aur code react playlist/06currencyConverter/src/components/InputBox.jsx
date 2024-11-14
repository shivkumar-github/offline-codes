import React from 'react'


function InputBox({
	label, // to decide whether you are passing "from" or "to"
	amount, // amount in that field
	onAmmountChange,
	onCurrencyChange,
	currencyOptions = [], // options of currency available for conversions
	selectCurrency = "usd",
	className = "",
}) {
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
			<div className="w-1/2">
				<label className="text-black/40 mb-2 inline-block">
					{label}
				</label>
				<input
					className="outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
					value={amount}
					onChange={(e) => onAmmountChange && onAmmountChange(Number(e.target.value))} // if amountchange exits then execute it 
				/>
			</div>
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select
					className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
					value={selectCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
				>

					{/* creating currency options using loop */}
					{currencyOptions.map((currency) => (
						<option key={currency} value={currency}>{currency}</option> // the key helps react to identify each option and helping it in rendering improving the comparison between virtual and actual dom
					))}
					{/* while using loops in react it is necessary to pass key for performance reasons*/}

				</select>
			</div>
		</div>
	);
}

export { InputBox };
