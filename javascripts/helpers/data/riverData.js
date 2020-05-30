const river = [];

const setRiver = (newBear) => {
    river.push(newBear);
}

const getRiver = () => {
    return river
}

export default { setRiver, getRiver }