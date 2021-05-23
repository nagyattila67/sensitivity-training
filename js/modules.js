export const makeAllObject = function (lines, linesBoolean, allLines) {
    lines.forEach((value, index) => {
        let myObject = Object();
        myObject.line = value;
        myObject.status = linesBoolean[index];
        allLines[allLines.length] = myObject;
    })
}

export const loadText = function (allLines, container) {
    let counter = 0;
    allLines.forEach((value) => {
        counter += 1;
        container.innerHTML += `
        <div>
        <input class="statusInput" id=${counter - 1} style="margin-right:10px" type="checkbox" ${value.status ? '<checked>' : ''}>
        <span id="span${counter - 1}">
    ${value.line}
    </span>
    </div>
    ${counter % 4 == 0 ? '<br>' : ''}
    `
    })
}

export const countAverage = function (linesBoolean) {
    let myAverage = linesBoolean.reduce((total, number) => { return total + number }, 0);
    myAverage = Math.ceil(myAverage * 100 / linesBoolean.length)
    document.querySelector("#actualAverage").textContent = myAverage;
}

export const inputClick = function (myNumber,allLines,linesBoolean) {
    let myId=myNumber;
    let myStatus = allLines[myId].status ? false : true;
    allLines[myId].status = myStatus;
    linesBoolean[myId] = myStatus;
    let mySpanId = 'span' + myId;
    document.querySelector(`#${mySpanId}`).innerHTML =
        myStatus ? `<s style="color:grey">${allLines[myId].line}</s>` : `${allLines[myId].line}`
    countAverage(linesBoolean)
}

export const restart = function (container,linesBoolean,allLines,lines) {
    container.innerHTML = '';
    linesBoolean.forEach((value,index)=>{linesBoolean[index]=false;})
    allLines = Array();
    makeAllObject(lines,linesBoolean,allLines);
    loadText(allLines,container);
    countAverage(linesBoolean);
    addEventForInput(allLines,linesBoolean)
}

export const addEventForInput = function(allLines,linesBoolean){
    document.querySelectorAll(".statusInput").forEach((value,index) => {
        document.querySelectorAll(".statusInput")[index].addEventListener('click',()=>{var myNumber=index; inputClick(myNumber,allLines,linesBoolean)})
    })
}