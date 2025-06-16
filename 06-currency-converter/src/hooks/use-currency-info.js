import { useEffect, useState} from 'react';

export default function useCurrencyInfo(currency) {
    // State to hold the currency information fetched from the API
    // This state will be updated with the data fetched from the API
    // and will be used to display the conversion rates and other details.
    // The currency parameter is used to specify which currency's information to fetch.
    // It is expected to be a string representing the currency code (e.g., 'usd', 'inr').
    // The useEffect hook is used to fetch the currency information when the component mounts
    // or when the currency changes. The fetched data is then stored in the currencyInfo state.
    const [currencyInfo, setCurrencyInfo] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res?.json())
        .then((data) => {
            return setCurrencyInfo(data[currency]);
        })
        .catch(() => {
            setCurrencyInfo(null);
        });
    }, [currency]);
    return currencyInfo;
}

 