export const part_builder = (key, variable, appendTo) => {
    let block_char = document.createElement('p');
    let variableEq = document.createElement('p');
    block_char.append(variableEq)
    variableEq.innerText = key + ' : ' + variable
    appendTo.append(block_char)
}


export const element_builder = (startPoint, parentsElementName, appendTo) => {
    let parentElement = document.createElement('div')

    if (parentsElementName) {
        let prevLevel = document.createElement('div')
        prevLevel.innerText = parentsElementName
        parentElement.append(prevLevel)
    }

    for (let elem in startPoint) {
        if (typeof startPoint[`${elem}`] == 'object') {
            element_builder(startPoint[`${elem}`], elem, parentElement)
        } else {
            part_builder(elem, startPoint[`${elem}`], parentElement)
        }
    }
    appendTo.append(parentElement)

}

