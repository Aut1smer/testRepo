import { useCallback, useState } from "react";
import './Counter.css'


export default function Counter({ defaultVal, step }) {
    const [val, setVal] = useState(defaultVal)

    const inc = useCallback(() => {
        setVal(val => val + step)
    }, [])

    return (
        <div>
            <span>{val}</span>
            <button onClick={inc}>
                {step >= 0 ? '+' + step : '-' + step}
            </button>
        </div>
    )

}