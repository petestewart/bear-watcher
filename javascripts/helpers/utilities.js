const printToDom = (selector, text) => {
    document.querySelector(selector).innerHTML = text;
}

export default { printToDom };