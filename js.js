const startExp = () => {
    const polarBear = document.getElementById('polarBear1');
    const polarBear2 = document.getElementById('polarBear2');
    const polarBear3 = document.getElementById('polarBear3');
    const mainbox = document.getElementById('mainUICard');
    const startExp = document.getElementById('startExp');
    const startExpLanding = document.getElementById('openLanding');

    polarBear.classList.add('polarBearActive')
    polarBear2.classList.add('polarBearActive')
    polarBear3.classList.add('polarBearActive')
    startExp.style.display = 'none'
    startExpLanding.style.display = 'flex'
    mainbox.style.border= 'none';
}

const completeExp = () => {
    const polarBear = document.getElementById('polarBear1');
    const polarBear2 = document.getElementById('polarBear2');
    const polarBear3 = document.getElementById('polarBear3');
    const page3 = document.getElementById('page3Wrapper');
    const userName = document.getElementById('firstName').value;
    const userNameFI = userName[0].toUpperCase();
    const animal = document.getElementById('animalName').value;
    const mainbox = document.getElementById('mainUICard');

    const returnText = document.getElementById('returnText')
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    const code = document.getElementById('code');

    polarBear.classList.remove('polarBearActive')
    polarBear2.classList.remove('polarBearActive')
    polarBear3.classList.remove('polarBearActive')
    page3.style.display ='flex';
    mainbox.style.boxShadow = '0px 0px 6px 1px white';


    code.style.display = 'flex';
    code.innerHTML = 'please provide code at store : pchFREE0001'
    returnText.innerHTML = 'Thanks for accepting our invite ' + userNameFI + ' - ' + animal +  '.  Woah, now that\'s a nickname with some umph behind it. Stop by for our grand opening Decemeber 1st, and let us treat you to a drink, free of charge!'  
    if (radio1.checked) {
    returnText.innerHTML = 'Thanks for accepting our invite ' + userNameFI + ' - ' + animal + '.  Woah, now that\'s a nickname with some umph behind it. Stop by for our grand opening Decemeber 1st, and let us treat you to that black coffee, free of charge!'
    }
    else if (radio2.checked) {
        returnText.innerHTML = 'Thanks for accepting our invite ' + userNameFI + ' - ' + animal + '. Woah, now that\'s a nickname with some umph behind it. Stop by for our grand opening Decemeber 1st, and let us treat you to that cup of tea, free of charge!'
    }
    else if (radio3.checked) {
        returnText.innerHTML = 'Thanks for accepting our invite ' + userNameFI + ' - ' + animal + '. Woah, now that\'s a nickname with some umph behind it. Stop by for our grand opening Decemeber 1st, and let us treat you to that fancy drink, free of charge!'
    }
}