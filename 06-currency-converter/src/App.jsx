import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/use-currency-info";
import { useState } from "react";

function App() {
  // State variables to hold the amount to convert, the 'from' currency,
  // the 'to' currency, and the converted amount.
  // These states will be updated based on user input and conversion logic.
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetching currency information based on the 'from' currency
  // This will give us the conversion rates for the selected currency
  // and allow us to convert the amount to the 'to' currency.
  const currencyInfo = useCurrencyInfo(from);

  // Fetching the list of available currencies from the currencyInfo object
  // This will be used to populate the dropdown options for currency selection.
  const options = Object.keys(currencyInfo);

  // Function to convert the amount from 'from' currency to 'to' currency
  // It multiplies the amount by the conversion rate of the 'to' currency
  // from the currencyInfo object.
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // Function to swap the 'from' and 'to' currencies
  // It sets the 'from' currency to the current 'to' currency and vice versa,
  // and also swaps the amounts accordingly.
  // This allows the user to easily switch between converting two currencies.
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={() => setAmount(amount)}
                selectcurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectcurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
