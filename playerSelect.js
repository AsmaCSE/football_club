// document.getElementById('player1').addEventListener('click',function(){
//     const playerName=document.getElementById('playerName1');
//     const newplayerName1=playerName.innerText;

//     const playerNameadd=document.getElementById('playerName');
//     // const newplayerNameadd=playerNameadd.innerText;
//     playerNameadd.innerText=newplayerName1;


// })

// document.getElementById('player2').addEventListener('click',function(){
//     const playerName=document.getElementById('playerName2');
//     const newplayerName1=playerName.innerText;

//     const playerNameadd=document.getElementById('playerName');
//     // const newplayerNameadd=playerNameadd.innerText;
//     playerNameadd.innerText=newplayerName1;


// })
let count = 1;

function getElementValueById(elementId) {
    const playerName = document.getElementById(elementId);
    const newplayerName1 = playerName.innerText;
    return newplayerName1;
}

function getAddValue(valueId, ValueName, playerId) {
    const playerNameadd = document.getElementById(valueId);
    // const newplayerNameadd=playerNameadd.innerText;
    const newplayerNameadd = playerNameadd.innerText;
    const newPlayer = newplayerNameadd + "\n" + count + ". " + ValueName;
    playerNameadd.innerText = newPlayer;
    document.getElementById(playerId).disabled = true;
    return playerNameadd;


}


document.getElementById('player1').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName1');

        getAddValue('playerName', newplayerName1, 'player1');
        // const newplayerNameadd=playerNameadd.innerText;
        //playerNameadd.innerText=newplayerName1;
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }


})

document.getElementById('player2').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName2');

        getAddValue('playerName', newplayerName1, 'player2');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }

})


document.getElementById('player3').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName3');

        getAddValue('playerName', newplayerName1, 'player3');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }

})
document.getElementById('player4').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName4');

        getAddValue('playerName', newplayerName1, 'player4');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }
})
document.getElementById('player5').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName5');

        getAddValue('playerName', newplayerName1, 'player5');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }

})
document.getElementById('player6').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName6');

        getAddValue('playerName', newplayerName1, 'player6');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }
})
document.getElementById('player7').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName7');

        getAddValue('playerName', newplayerName1, 'player7');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }

})
document.getElementById('player8').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName8');

        getAddValue('playerName', newplayerName1, 'player8');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }

})
document.getElementById('player9').addEventListener('click', function () {
    if (count <= 5) {
        const newplayerName1 = getElementValueById('playerName9');

        getAddValue('playerName', newplayerName1, 'player9');
        count = count + 1;
    }
    else {
        alert('you could not add any more players');

    }

})

document.getElementById('calculatePlayer').addEventListener('click', function () {
    const PerPlayer = document.getElementById('perPlayer');
    const updatedValue = PerPlayer.value;
    const newperPlayer = parseFloat(updatedValue);
    //console.log(count);
    const Expenses = document.getElementById('expenses');
    // const updateExpenses=Expenses.value;
    // const newExpenses=parseFloat(updateExpenses);
    const totalResult = newperPlayer * (count - 1);
    Expenses.innerText = totalResult;



})


document.getElementById('calculateTotal').addEventListener('click',function(){
    const ManagerCost=document.getElementById('managerCost');
    const newManagerCost=ManagerCost.value;
    const updateManagerCOst=parseFloat(newManagerCost);

    const CoachCost=document.getElementById('coachCost');
    const newCoachCost=CoachCost.value;
    const updateCoachCost=parseFloat(newCoachCost);

    const TotalAmount=document.getElementById('totalAmount');

    const Expenses = document.getElementById('expenses');
    const updateExpenses=Expenses.innerText;
    const newExpenses=parseFloat(updateExpenses);

    const total=newExpenses+updateManagerCOst+updateCoachCost;
    TotalAmount.innerText=total;
})
