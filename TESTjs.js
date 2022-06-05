

function sum(...args) {
    if (args.length === 0) {
        return 0
    }
    // 如果不为0，加上和
    return args.reduce((accum, val) => accum + val);
}