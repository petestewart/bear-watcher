const printToDom = (selector, text) => {
    document.querySelector(selector).innerHTML = text;
}

const getDate = () => {
    const uglyDate = Date(Date.now());
    const niceDate = uglyDate.slice(4,24);
    return niceDate;
}

export default { printToDom, getDate };