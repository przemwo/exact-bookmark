const getPathToElementFromClickEvent = (e) => {
    const path = [];
    let currentElement = e.target;
    if (currentElement.nodeName === 'HTML') return [];

    while (currentElement.parentNode !== null && currentElement.parentNode.nodeName !== 'HTML') {
        const parent = currentElement.parentNode;
        const numberOfParentChildElements = parent.childElementCount;
        let currentElementIndex = null;
        let elementHasTwin = false;
        if (numberOfParentChildElements > 1) {
            for (let i = 0; i < numberOfParentChildElements; i++) {
                elementHasTwin = parent.children[i].nodeName === currentElement.nodeName;
                if (parent.children[i] === currentElement) {
                    currentElementIndex = i + 1;
                }
            }
        }
        const pathFragment = (currentElementIndex && elementHasTwin) ? `${currentElement.nodeName.toLowerCase()}:nth-child(${currentElementIndex})` : currentElement.nodeName.toLowerCase();
        path.unshift(pathFragment);
        currentElement = parent;
    }
    path.unshift(currentElement.nodeName.toLowerCase());
    return path;
};

document.addEventListener('click', (e) => {
    const pathToElement = getPathToElementFromClickEvent(e);
    console.log(pathToElement.join(' > '));
});