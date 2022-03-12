import { Line } from '@antv/g2plot'
import { useEffect } from 'react';
import { useState } from 'react'




export default function Plot() {
    const [data, setData] = useState(
        [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
        ]
    );
    useEffect(() => {
        const line = new Line('plotContainer', {
            data,
            xField: 'year',
            yField: 'value'
        })
        line.render()
        return () => { }
    }, [])
    return (
        <div id="plotContainer">
            Plot
        </div>
    )
}