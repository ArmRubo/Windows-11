const body = document.querySelector('body');
const winWallpaper = document.querySelector('.winWallpaper');
const questionDiv = document.querySelector('.question')
const question = document.getElementById('question');
const btn = document.getElementById('btn');
// const btn1 = document.getElementById('btn1');
// const btn2 = document.querySelector('.btn1');
const span = document.querySelector('.span');
const menuWindow = document.querySelector('.taskbar .menuWindow');
const menuLogo = document.querySelector('.taskbar .menu .menuLogo');
const powerWinBtn = document.querySelector('.powerWinBtn');
const powerWindow = document.querySelector('.powerWindow');
const userImg = document.querySelector('.taskbar .menuWindow .power .userInfo img');
const shutBtn = document.querySelector('.taskbar .menuWindow .power .powerWinBtn .powerWindow .shut');
const restartBtn = document.querySelector('.taskbar .menuWindow .power .powerWinBtn .powerWindow .restart');
const shut = document.querySelector('.shut.shutres');
const restart = document.querySelector('.restart.shutres');
const treaBtn = document.getElementById('treaBtn');
const treaBtn1 = document.getElementById('treaBtn1');
const treaWin = document.getElementById('treaWin');
const langBtn = document.getElementById('langBtn');
const langWin = document.getElementById('langWin');
const langSetting = document.querySelector('.info .language #langWin .jokeBox .setting');
const langJoke = document.querySelector('.info .language #langWin .jokeBox .joke');
const line = document.querySelector('.line');
const langSt = document.getElementById('st');
const langNd = document.getElementById('nd');
const WBBtn = document.getElementById('WBBtn');
const WBWin = document.getElementById('WBWin');
const WBMBtn = document.querySelectorAll('#WBMBtn');
const wifi = document.querySelector('.info .wifiBar #WBWin .WBMenu #WBMBtn.wifi');
const BT = document.querySelector('.info .wifiBar #WBWin .WBMenu #WBMBtn.BT');
const airplane = document.querySelector('.info .wifiBar #WBWin .WBMenu #WBMBtn.airplane');
const battery = document.querySelector('.info .wifiBar #WBWin .WBMenu #WBMBtn.battery');
const focusAssist = document.querySelector('.info .wifiBar #WBWin .WBMenu #WBMBtn.focus');
const volume = document.querySelector('.info .wifiBar #WBWin .WBMenu #WBMBtn.volume');
const volHigh = document.querySelector('.info .wifiBar #WBBtn .fa-volume-high');
const volXmark = document.querySelector('.info .wifiBar #WBBtn .fa-volume-xmark');
const slider = document.querySelectorAll('#myRange');
const brightnessRange = document.getElementById('brightness');
const volumeRange = document.getElementById('volume');
const vol = document.querySelector('.vol');
const vol1 = document.querySelector('.vol1');
const vol2 = document.querySelector('.vol2');
const vol3 = document.querySelector('.vol3');
const vvol = document.querySelector('.vvol');
const vvol1 = document.querySelector('.vvol1');
const vvol2 = document.querySelector('.vvol2');
const vvol3 = document.querySelector('.vvol3');
const nots = document.getElementById('nots');
const not = document.querySelector('.not');
const notBtn = document.getElementById('notBtn');
const notWin = document.getElementById('notWin');
const dateDiv = document.getElementById('date');
const name = document.querySelector('.info .notBar #notWin #nots .not .pupil .name');
const name1 = document.querySelector('.info .notBar #notWin #nots .not .pupil .name1');
const translate = document.getElementById('translate');
const translate1 = document.getElementById('translate1');
const letterEng = document.getElementById('eng');
const letterArm = document.getElementById('arm');
const letterEng1 = document.getElementById('eng1');
const letterArm1 = document.getElementById('arm1');
const clear = document.querySelector('.info .notBar #notWin #nots .not .letter .close');

const icon = document.querySelectorAll('.taskbar .menu .iconBox .icon');
const windows = document.querySelectorAll('.window');
const minimize = document.getElementById('minimize');
const restore = document.getElementById('restore');
const close1 = document.getElementById('close');

const chromeBtn = document.getElementById('chrome');
const chromeWin = document.getElementById('chromeWindow');
const chromeIcon = document.querySelector('.chromeIcon');
const closeTab = document.getElementById('closeTab');
const magGlass = document.getElementById('magGlass');
const microphone = document.querySelector('#chromeWindow form button.mic');
const search = document.getElementById('search');
const hint = document.getElementById('hints');
const hintText = document.querySelector('#hints .hint');

const settingsBtn = document.getElementById('settings');
const settingsWindow = document.getElementById('settingsWindow');
const settingsIcon = document.querySelector('.settingsIcon');
const minimize1 = document.getElementById('minimize1');
const restore1 = document.getElementById('restore1');
const close2 = document.getElementById('close1');
const show = document.getElementById('show');

const controlCl = document.querySelectorAll('.controlCl');
const control = document.getElementById('control');
const control1 = document.getElementById('control1');
const control2 = document.getElementById('control2');
const control3 = document.getElementById('control3');
const control4 = document.getElementById('control4');
const control5 = document.getElementById('control5');

const explorerIcon = document.querySelector('.explorerIcon');
const explorerWindow = document.getElementById('explorerWindow');
const minimize2 = document.getElementById('minimize2');
const restore2 = document.getElementById('restore2');
const close3 = document.getElementById('close2');
const disk = document.getElementById('disk');
const properties = document.getElementById('properties');
const propertiesBtn = document.getElementById('propertiesBtn');
const close4 = document.getElementById('close3');
const txt = document.querySelector('.txt');
const ok = document.getElementById('ok');
const cancel = document.getElementById('cancel');

const chromeApp = document.getElementById('chromeApp');
const settingsApp = document.getElementById('settingsApp');
const explorerApp = document.getElementById('explorerApp');


const a = new Date();

// RightClick

const contextMenu = document.querySelector('.wrapper');
const settingSpan = document.querySelector('.content .setting');

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = contextMenu.offsetWidth,
        cmHeight = contextMenu.offsetHeight;

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.classList.add('active');
});

document.addEventListener('click', () => {
    contextMenu.classList.remove('active');
    propertiesBtn.classList.remove('active');
});

settingSpan.addEventListener('click', function () {
    settingsIcon.classList.add('active');
    settingsWindow.classList.add('active');
})

// btn.addEventListener('mouseenter', () => {
//     btn.style.left = `${random(0, 90)}%`;
//     btn.style.top = `${random(0, 90)}%`;
// });

// btn1.addEventListener('click', function() {
//     btn.style.display = 'none';
//     btn1.style.display = 'none';
//     question.style.display = 'none';
//     span.style.display = 'inline-block';
//     btn2.style.display = 'inline-block';
// })

// btn2.addEventListener('click', function() {
//     questionDiv.style.display = 'none';
// })


//                                  Functions


const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const value = () => {
    const volElements = [vol, vol1, vol2, vol3, vvol, vvol1, vvol2, vvol3];
    const value = volumeRange.value;

    volElements.forEach(element => {
        element.classList.remove('active');
    });

    if (value <= 100 && value > 50) {
        vol3.classList.add('active');
        vvol3.classList.add('active');
    } else if (value <= 50 && value > 25) {
        vol2.classList.add('active');
        vvol2.classList.add('active');
    } else if (value <= 25 && value > 0) {
        vol1.classList.add('active');
        vvol1.classList.add('active');
    } else if (value == 0) {
        vol.classList.add('active');
        vvol.classList.add('active');
    }
}

const brightness = () => {
    const value = brightnessRange.value;
    body.style.opacity = 'none';

    if (value == 10) {
        body.style.opacity = '1';
    } else if (value == 9) {
        body.style.opacity = '.9';
    } else if (value == 8) {
        body.style.opacity = '.8';
    } else if (value == 7) {
        body.style.opacity = '.7';
    } else if (value == 6) {
        body.style.opacity = '.6';
    } else if (value == 5) {
        body.style.opacity = '.5';
    } else if (value == 4) {
        body.style.opacity = '.4';
    } else if (value == 3) {
        body.style.opacity = '.3';
    } else if (value == 2) {
        body.style.opacity = '.2';
    } else if (value == 1) {
        body.style.opacity = '.1';
    }
}

const check = () => {
    if (not.innerHTML == '') {
        nots.innerHTML = '';
        const notSpan = document.createElement('span');
        notSpan.className = 'notSpan';
        notSpan.innerText = 'Notifications';
        nots.appendChild(notSpan);
    }
}

const month1 = () => {
    return a.getMonth() + 1;
}

//                          Click

menuLogo.addEventListener('click', function () {
    menuWindow.classList.toggle('active');

    if (!menuWindow.classList.contains('active')) {
        powerWindow.classList.remove('active');
    }
})

window.addEventListener('keydown', function (event) {
    if (event.code == 'ControlLeft' || event.code == 'ControlRight') {
        menuWindow.classList.toggle('active');

        if (!menuWindow.classList.contains('active')) {
            powerWindow.classList.remove('active');
        }
    }
})

powerWinBtn.addEventListener('click', function () {
    powerWindow.classList.toggle('active');
})

userImg.addEventListener('click', function () {
    window.location.href = 'https://account.microsoft.com/account/manage-my-account';
})

shutBtn.addEventListener('click', function () {
    setTimeout(function () {
        shut.style.display = 'inline-block';

        setTimeout(function () {
            window.location.href = '../index.html';
        }, 5000)
    }, 500)
})

restartBtn.addEventListener('click', function () {
    setTimeout(function () {
        restart.style.display = 'inline-block';

        setTimeout(function () {
            window.location.href = './index2.html';
        }, 5000)
    }, 500)
})

treaBtn.addEventListener('click', function () {
    treaWin.classList.toggle('active');
    treaBtn.classList.toggle('active');
})

langBtn.addEventListener('click', function () {
    langWin.classList.toggle('active');
})

langSetting.addEventListener('click', function () {
    langSetting.classList.add('active');
    langJoke.classList.add('active');
})

langSt.addEventListener('click', function () {
    if (!langSt.classList.contains('active')) {
        langSt.classList.add('active');
    }

    langNd.classList.remove('active');
    line.classList.remove('active');
    langBtn.innerText = 'eng';
})

langNd.addEventListener('click', function () {
    if (!langNd.classList.contains('active')) {
        langNd.classList.add('active');
    }

    langSt.classList.remove('active');
    line.classList.add('active');
    langBtn.innerText = 'рус';
})

WBBtn.addEventListener('click', function () {
    WBWin.classList.toggle('active');
})

WBMBtn.forEach(function (click) {
    click.addEventListener('click', function (event) {
        setTimeout(function () {
            event.target.classList.toggle('active');
        }, 200);
    })
})

airplane.addEventListener('click', function () {
    if (!airplane.classList.contains('active')) {
        wifi.classList.remove('active');
        BT.classList.remove('active');
        console.log('aa');
    }
})

battery.addEventListener('click', function () {
    body.classList.toggle('active');
})

focusAssist.addEventListener('click', function () {
    body.classList.toggle('active2');
})

volumeRange.addEventListener('input', value)
brightnessRange.addEventListener('input', brightness)

const addZero = (num) => {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

//                                  Date

const time = a.getHours() + ':' + addZero(a.getMinutes());
const date = a.getDate() + '/' + addZero(month1()) + '/' + a.getFullYear();

const spanTime = document.createElement('span');
spanTime.className = 'time';
spanTime.innerText = time;
notBtn.appendChild(spanTime);

const br = document.createElement('br');
notBtn.appendChild(br);

const spanDate = document.createElement('span');
spanDate.className = 'date';
spanDate.innerText = date;
notBtn.appendChild(spanDate);

const week = () => {
    let week = a.getDay();
    let weekDay;

    if (week == 0) {
        weekDay = 'Sunday';
        return weekDay;
    } else if (week == 1) {
        weekDay = 'Monday';
        return weekDay;
    } else if (week == 2) {
        weekDay = 'Tuesday';
        return weekDay;
    } else if (week == 3) {
        weekDay = 'Wednwsday';
        return weekDay;
    } else if (week == 4) {
        weekDay = 'Thursday';
        return weekDay;
    } else if (week == 5) {
        weekDay = 'Friday';
        return weekDay;
    } else if (week == 6) {
        weekDay = 'Saturday';
        return weekDay;
    }

}

const month = () => {
    let month = a.getMonth();
    let monthDay;

    if (month == 0) {
        monthDay = 'January';
        return monthDay;
    } else if (month == 1) {
        monthDay = 'February';
        return monthDay;
    } else if (month == 2) {
        monthDay = 'March';
        return monthDay;
    } else if (month == 3) {
        monthDay = 'April';
        return monthDay;
    } else if (month == 4) {
        monthDay = 'May';
        return monthDay;
    } else if (month == 5) {
        monthDay = 'June';
        return monthDay;
    } else if (month == 6) {
        monthDay = 'July';
        return monthDay;
    } else if (month == 7) {
        monthDay = 'August';
        return monthDay;
    } else if (month == 8) {
        monthDay = 'September';
        return monthDay;
    } else if (month == 9) {
        monthDay = 'October';
        return monthDay;
    } else if (month == 10) {
        monthDay = 'Novermber';
        return monthDay;
    } else if (month == 11) {
        monthDay = 'December';
        return monthDay;
    }
}

const date1 = week() + ', ' + month() + ' ' + a.getDate();

const spanDate1 = document.createElement('span');
spanDate1.className = 'dateSpan';
spanDate1.innerText = date1;
dateDiv.appendChild(spanDate1);

setInterval(() => {
    notBtn.innerHTML = '';

    const a = new Date();
    const time = a.getHours() + ':' + addZero(a.getMinutes());
    const date = a.getDate() + '/' + addZero(month1()) + '/' + a.getFullYear();

    const spanTime = document.createElement('span');
    spanTime.className = 'time';
    spanTime.innerText = time;
    notBtn.appendChild(spanTime);

    const br = document.createElement('br');
    notBtn.appendChild(br);

    const spanDate = document.createElement('span');
    spanDate.className = 'date';
    spanDate.innerText = date;
    notBtn.appendChild(spanDate);

    const date1 = week() + ', ' + month() + ' ' + a.getDate();

    const spanDate1 = document.createElement('span');
    spanDate1.className = 'dateSpan';
    spanDate1.innerText = date1;
    dateDiv.appendChild(spanDate1);
}, 1000)

notBtn.addEventListener('click', function () {
    notWin.classList.toggle('active');

    if (treaWin.classList.contains('active')) {
        treaWin.classList.remove('active');
    }

    if (langWin.classList.contains('active')) {
        langWin.classList.remove('active');
    }
})

translate.addEventListener('click', function () {
    letterEng.classList.toggle('active');
    letterArm.classList.toggle('active');
    translate.classList.toggle('active');
    translate1.classList.toggle('active');
    name.classList.toggle('active');
    name1.classList.toggle('active');
    clear.classList.toggle('active');
})

translate1.addEventListener('click', function () {
    letterEng.classList.toggle('active');
    letterArm.classList.toggle('active');
    translate.classList.toggle('active');
    translate1.classList.toggle('active');
    name.classList.toggle('active');
    name1.classList.toggle('active');
    clear.classList.toggle('active');
})

clear.addEventListener('click', function () {
    not.classList.add('active');
    setTimeout(function () {
        not.innerHTML = '';
        not.style.border = 'none';
        check();
    }, 400);
})


//                                Windows


windows.forEach(function (event) {
    if (event.id == 'chromeWindow') {
        minimize.addEventListener('click', function () {
            event.classList.toggle('active');

            chromeIcon.classList.toggle('active');
        })

        restore.addEventListener('click', function () {
            event.classList.toggle('active2');
        })

        close1.addEventListener('click', function () {
            event.classList.remove('active');

            chromeIcon.classList.toggle('active');
        });
    }
})

minimize1.addEventListener('click', function () {
    settingsIcon.classList.toggle('active');

    settingsWindow.classList.toggle('active');
})

restore1.addEventListener('click', function () {
    settingsWindow.classList.toggle('active2');
})

close2.addEventListener('click', function () {
    settingsIcon.classList.toggle('active');

    settingsWindow.classList.toggle('active');
})

minimize2.addEventListener('click', function () {
    explorerIcon.classList.toggle('active');

    explorerWindow.classList.toggle('active');
})

restore2.addEventListener('click', function () {
    explorerWindow.classList.toggle('active2');
})

close3.addEventListener('click', function () {
    explorerIcon.classList.toggle('active');

    explorerWindow.classList.toggle('active');
})


chromeBtn.addEventListener('click', function (event) {
    chromeWin.classList.toggle('active');
    event.target.parentElement.classList.toggle('active');
})

closeTab.addEventListener('click', function () {
    chromeWin.classList.remove('active');
    chromeIcon.classList.remove('active');
})

microphone.addEventListener('click', function () {
    alert("You don't have microphone");
})

search.addEventListener('click', function () {
    if (search.focus) {
        hint.classList.toggle('active');
        magGlass.classList.toggle('active');
        microphone.classList.toggle('active');

    }
})

magGlass.addEventListener('click', function (event) {
    event.preventDefault();
})

hint.addEventListener('click', function () {
    window.location.href = 'https://www.google.com/search?q=windows+11&oq=windows+11&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIJCAQQABgKGIAEMgkIBRAAGAoYgAQyCQgGEAAYChiABDIJCAcQABgKGIAEMgkICBAAGAoYgAQyCQgJEAAYChiABNIBCTM2NzBqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8';
})


settingsBtn.addEventListener('click', function (event) {
    settingsWindow.classList.toggle('active');
    event.target.parentElement.classList.toggle('active');
})

controlCl.forEach(function () {
    control.addEventListener('click', function () {
        if (control1.classList.contains('active')) {
            control1.classList.remove('active');
            control.classList.add('active')
        } else if (control2.classList.contains('active')) {
            control2.classList.remove('active');
            control.classList.add('active')
        } else if (control3.classList.contains('active')) {
            control3.classList.remove('active');
            control.classList.add('active')
        } else if (control4.classList.contains('active')) {
            control4.classList.remove('active');
            control.classList.add('active')
        } else if (control5.classList.contains('active')) {
            control5.classList.remove('active');
            control.classList.add('active')
        }

        winWallpaper.src = '../images/win11.jpg';
        show.src = '../images/win11.jpg';
    })

    control1.addEventListener('click', function () {
        if (control.classList.contains('active')) {
            control.classList.remove('active');
            control1.classList.add('active')
        } else if (control2.classList.contains('active')) {
            control2.classList.remove('active');
            control1.classList.add('active')
        } else if (control3.classList.contains('active')) {
            control3.classList.remove('active');
            control1.classList.add('active')
        } else if (control4.classList.contains('active')) {
            control4.classList.remove('active');
            control1.classList.add('active')
        } else if (control5.classList.contains('active')) {
            control5.classList.remove('active');
            control1.classList.add('active')
        }

        winWallpaper.src = '../images/wallpaper.jpg';
        show.src = '../images/wallpaper.jpg'
    })

    control2.addEventListener('click', function () {
        if (control1.classList.contains('active')) {
            control1.classList.remove('active');
            control2.classList.add('active')
        } else if (control.classList.contains('active')) {
            control.classList.remove('active');
            control2.classList.add('active')
        } else if (control3.classList.contains('active')) {
            control3.classList.remove('active');
            control2.classList.add('active')
        } else if (control4.classList.contains('active')) {
            control4.classList.remove('active');
            control2.classList.add('active')
        } else if (control5.classList.contains('active')) {
            control5.classList.remove('active');
            control2.classList.add('active')
        }

        winWallpaper.src = '../images/wallpaper1.jpg';
        show.src = '../images/wallpaper1.jpg'
    })

    control3.addEventListener('click', function () {
        if (control.classList.contains('active')) {
            control.classList.remove('active');
            control3.classList.add('active')
        } else if (control2.classList.contains('active')) {
            control2.classList.remove('active');
            control3.classList.add('active')
        } else if (control1.classList.contains('active')) {
            control1.classList.remove('active');
            control3.classList.add('active')
        } else if (control4.classList.contains('active')) {
            control4.classList.remove('active');
            control3.classList.add('active')
        } else if (control5.classList.contains('active')) {
            control5.classList.remove('active');
            control3.classList.add('active')
        }

        winWallpaper.src = '../images/wallpaper2.jpg';
        show.src = '../images/wallpaper2.jpg'
    })

    control4.addEventListener('click', function () {
        if (control1.classList.contains('active')) {
            control1.classList.remove('active');
            control4.classList.add('active')
        } else if (control2.classList.contains('active')) {
            control2.classList.remove('active');
            control4.classList.add('active')
        } else if (control3.classList.contains('active')) {
            control3.classList.remove('active');
            control4.classList.add('active')
        } else if (control.classList.contains('active')) {
            control.classList.remove('active');
            control4.classList.add('active')
        } else if (control5.classList.contains('active')) {
            control5.classList.remove('active');
            control4.classList.add('active')
        }

        winWallpaper.src = '../images/wallpaper3.jpg';
        show.src = '../images/wallpaper3.jpg'
    })

    control5.addEventListener('click', function () {
        if (control.classList.contains('active')) {
            control.classList.remove('active');
            control5.classList.add('active')
        } else if (control2.classList.contains('active')) {
            control2.classList.remove('active');
            control5.classList.add('active')
        } else if (control3.classList.contains('active')) {
            control3.classList.remove('active');
            control5.classList.add('active')
        } else if (control4.classList.contains('active')) {
            control4.classList.remove('active');
            control5.classList.add('active')
        } else if (control1.classList.contains('active')) {
            control1.classList.remove('active');
            control5.classList.add('active')
        }

        winWallpaper.src = '../images/wallpaper4.jpg';
        show.src = '../images/wallpaper4.jpg';
    })
})


explorerIcon.addEventListener('click', function () {
    explorerWindow.classList.toggle('active');
    explorerIcon.classList.toggle('active');
})

explorerApp.addEventListener('click', function () {
    explorerWindow.classList.add('active');
    explorerIcon.classList.add('active');
})

disk.addEventListener('contextmenu', function () {
    propertiesBtn.classList.add('active');

    setTimeout(function () {
        contextMenu.classList.remove('active');
    }, .1)
})

propertiesBtn.addEventListener('click', function () {
    properties.classList.add('active');
    txt.focus();
})

ok.addEventListener('click', function () {
    properties.classList.remove('active');
})

cancel.addEventListener('click', function () {
    properties.classList.remove('active');
})

close4.addEventListener('click', function() {
    properties.classList.remove('active');
})

//                      Desktop


chromeApp.addEventListener('click', function () {
    chromeWin.classList.add('active');
    chromeIcon.classList.add('active');
})

settingsApp.addEventListener('click', function () {
    settingsWindow.classList.add('active');
    settingsIcon.classList.add('active');
})