const startExp = () => {
    const polarBear = document.getElementById('polarBear1');
    const startExp = document.getElementById('startExp');
    const startExpLanding = document.getElementById('openLanding');

    polarBear.classList.add('polarBearActive')
    startExp.style.display = 'none'
    startExpLanding.style.display = 'flex'
}