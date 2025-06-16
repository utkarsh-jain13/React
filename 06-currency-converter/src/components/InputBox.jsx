import React, { useId } from "react";

/**
 * InputBox component renders an input field for amount and a select dropdown for currency.
 * @param {Object} props - The properties for the InputBox component.
 * @param {string} props.label - The label for the amount input field.
 * @param {number} props.amount - The current amount value.
 * @param {function} props.onAmountChange - Callback function to handle amount changes.
 * @param {function} props.onCurrencyChange - Callback function to handle currency changes.
 * @param {Array} props.currencyOptions - List of currency options for the select dropdown.
 * @param {string} props.selectcurrency - The currently selected currency.
 * @param {boolean} props.amountDisabled - Whether the amount input is disabled.
 * @param {boolean} props.currencyDisabled - Whether the currency select is disabled.
 * @param {string} props.className - Additional CSS classes for styling.
 * @returns {JSX.Element} The rendered InputBox component.
 */
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectcurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {

  // Generate a unique ID for the amount input field using useId hook
  // This ensures that the label is correctly associated with the input field
  // and helps with accessibility.
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(+e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
