import Counter from './Counter'
import Content from './Content'
import Plot from './Plot'

export default function Main() {
    return (
        <>
            <Counter defaultVal={1} step={1} />
            <Content />
            <Plot />
        </>
    )
}