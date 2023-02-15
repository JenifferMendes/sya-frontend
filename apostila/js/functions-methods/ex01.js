function funcOne(params) {
    console.log(params)

    return params
}

console.log(funcOne(1))

const funcTwo = (params) => {
    console.log(params)

    return params
}

console.log(funcTwo(2))

const funcThree = (param1, param2, param3) => {
    console.log(param1, param2)

    return param3
}

console.log(funcThree(0, 1, 2))

const funcFour = (param1, ...others) => {
    console.log(param1, others)
}

console.log(funcFour(0, 1, 2, 3, 4, 5, 6, 7, 8, 9))
