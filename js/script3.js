const minimize = document.getElementById('minimize');
const maximize = document.getElementById('maximize');
const closebtn = document.getElementById('close');
const closeAtt = document.getElementById('closeAtt');
const attClose = document.querySelector('#closeAtt .att');
const no = document.getElementById('no');
const yes = document.getElementById('yes');
const colInf = document.getElementById('colInf');
const instWin = document.getElementById('instWin');
const green1 = document.getElementById('green1');
const green2 = document.getElementById('green2');
const content = document.getElementById('content');
const icon = document.querySelector('#content .icon');
const MC = document.querySelector('#content .MC');
//              Page 1
const select1 = document.querySelector('.first');
const select2 = document.querySelector('.second');
const select3 = document.querySelector('.third');
const att = document.querySelector('#content span.att');
const next = document.getElementById('next');
//              Page 2
const install = document.getElementById('install');
const black = document.getElementById('black');
//              Page 3
const actTxt = document.getElementById('actTxt');
const actCode = document.getElementById('actCode');
const actCodeInp = document.getElementById('actCodeInp');
const DHC = document.getElementById('DHC');
const next2 = document.getElementById('next2');
//              Page 4
const selTxt = document.getElementById('selTxt');
const selVer = document.getElementById('selVer');
const ver = document.querySelectorAll('#selVer .ver');
const des = document.querySelector('.des');
const desValue = document.getElementById('desValue');
const next3 = document.getElementById('next3');
//              Page 5
const insType = document.getElementById('insType');
const active = document.getElementById('active');
const type = document.querySelectorAll('.type');
const types = document.getElementById('types');
//              Page 6
const insWin = document.getElementById('insWin');
const diskMgr = document.getElementById('diskMgr');
const actions = document.getElementById('actions');
const next4 = document.getElementById('next4');
//              Page 7
const instWindows = document.getElementById('instWindows');
const status = document.getElementById('status');
const process = document.getElementById('process');
const percents1 = document.getElementById('percents1');
const percents2 = document.getElementById('percents2');
const percents3 = document.getElementById('percents3');
const percents4 = document.getElementById('percents4');
const percents5 = document.getElementById('percents5');
const copy = document.getElementById('copy');
const getFiles = document.getElementById('getFiles');
const features = document.getElementById('features');
const updates = document.getElementById('updates');
const finish = document.getElementById('finish');
const comp1 = document.getElementById('comp1');
const comp2 = document.getElementById('comp2');
const comp3 = document.getElementById('comp3');
const comp4 = document.getElementById('comp4');
const comp5 = document.getElementById('comp5');



minimize.addEventListener('click', function () {
    closeAtt.style.display = 'inline-block';
    const audio = document.createElement('audio');
    audio.src = '/sounds/Windows7CriticalStopSound.mp3';
    audio.play();
})

closebtn.addEventListener('click', function () {
    closeAtt.style.display = 'inline-block';
    const audio = document.createElement('audio');
    audio.src = '/sounds/Windows7CriticalStopSound.mp3';
    audio.play();
})

no.addEventListener('click', function () {
    closeAtt.style.display = 'none';
})

yes.addEventListener('click', function () {
    window.location.href = './index.html';
})

//              Page 1

next.addEventListener('click', function () {
    select1.style.display = 'none';
    select2.style.display = 'none';
    select3.style.display = 'none';
    next.style.display = 'none';
    att.style.display = 'none';
    install.style.display = 'inline-block';
})

//              Page 2

install.addEventListener('click', function () {
    black.style.display = 'inline-block';
    install.style.display = 'none';
    setTimeout(function () {
        black.style.display = 'none';
    }, 5000);
    minimize.style.display = 'none';
    maximize.style.display = 'none';
    closebtn.style.position = 'relative';
    closebtn.style.left = '6.5rem';
    icon.style.display = 'none';
    content.style.background = '#fff';
    MC.style.display = 'none';
    next2.style.display = 'inline-block';
    actTxt.style.display = 'inline-block';
    actCode.style.display = 'inline-block';
    actCodeInp.style.display = 'inline-block';
    DHC.style.display = 'inline-block';
    colInf.style.display = 'inline-block';
    instWin.style.display = 'inline-block';
})

//              Page 3

next2.addEventListener('click', function () {
    closeAtt.style.display = 'inline-block';
    closeAtt.style.zIndex = '100';
    yes.style.display = 'none';
    no.innerText = 'Ok';
    no.style.left = '44%';
    attClose.innerText = 'That is not real product code';
    //              ActCode: 02330-80400-00800-FF164
})

DHC.addEventListener('click', function () {
    next2.style.display = 'none';
    actTxt.style.display = 'none';
    actCode.style.display = 'none';
    actCodeInp.style.display = 'none';
    DHC.style.display = 'none';
    green1.style.width = '44%';
    selTxt.style.display = 'inline-block';
    selVer.style.display = 'inline-block';
    des.style.display = 'inline-block';
    desValue.style.display = 'inline-block';
    next3.style.display = 'inline-block';
})

//              Page 4

for (let i = 0; i < ver.length; i++) {
    ver[i].addEventListener('click', function () {
        document.querySelector('#selVer .ver.active').classList.remove('active');
        ver[i].classList.add('active');
        if (i == 0) {
            desValue.innerText = 'Windows 10 Home';
        } else if (i == 1) {
            desValue.innerText = 'Windows 10 Education';
        } else if (i == 2) {
            desValue.innerText = 'Windows 10 Pro';
        }
    })
}

next3.addEventListener('click', function () {
    selTxt.style.display = 'none';
    selVer.style.display = 'none';
    des.style.display = 'none';
    desValue.style.display = 'none';
    next3.style.display = 'none';
    green1.style.width = '54%';
    insType.style.display = 'inline-block';
    types.style.display = 'inline-block';
})

//              Page 5

for (let i = 0; i < type.length; i++) {
    type[i].addEventListener('click', function () {
        if (!active.classList.contains('active1')) {
            active.classList.add('active1');
        } else if (active.classList.contains('active1')) {
            active.classList.remove('active1');
        }
    })
}

active.addEventListener('click', function () {
    insType.style.display = 'none';
    types.style.display = 'none';
    green1.style.width = '60%';
    insWin.style.display = 'inline-block';
    diskMgr.style.display = 'inline-block';
    actions.style.display = 'inline-block';
    next4.style.display = 'inline-block';
})

//              Page 6

next4.addEventListener('click', function () {
    insWin.style.display = 'none';
    diskMgr.style.display = 'none';
    actions.style.display = 'none';
    next4.style.display = 'none';
    green1.style.width = '100%';
    //              Page 7
    instWindows.style.display = 'inline-block';
    status.style.display = 'inline-block';
    process.style.display = 'inline-block';
    setTimeout(function () {
        percents1.innerText = '(100%)';
        setTimeout(function () {
            copy.classList.remove('active');
            getFiles.classList.add('active');
            green2.style.width = '20%';
            comp1.style.display = 'inline-block';
            let percents2Value = 0;
            for (let i = 0; i < 100; i++) {
                percents2Value = i;
                percents2.innerText = percents2Value;
                getFiles.classList.remove('active');
                features.classList.add('active');
                comp2.style.display = 'inline-block';
                green2.style.width = '40%';
                setTimeout(function () {
                    percents3.innerText = '(100%)';
                    features.classList.remove('active');
                    updates.classList.add('active');
                    comp3.style.display = 'inline-block';
                    green2.style.width = '55%';
                    setTimeout(function () {
                        percents4.innerText = '(100%)';
                        updates.classList.remove('active');
                        finish.classList.add('active');
                        comp4.style.display = 'inline-block';
                        green2.style.width = '65%';
                        setTimeout(function () {
                            comp5.style.display = 'inline-block';
                            finish.classList.remove('active');
                            instWindows.style.display = 'none';
                            status.style.display = 'none';
                            process.style.display = 'none';
                            green2.style.width = '100%';
                            window.location.href = './index4.html';
                        }, 100);
                    }, 200);
                }, 600);
            }
        }, 400);
    }, 1500);
})

//              Page 8

