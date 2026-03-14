const action = document.getElementById('action');

const keyboard = document.getElementById('keyboard');
const option = document.getElementById('option');
const select = document.querySelectorAll('#option .select');
const yes = document.getElementById('yes');

const updates = document.getElementById('updates');
const vdLoad = document.getElementById('vdLoad');
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');
const txt3 = document.getElementById('txt3');

const account = document.getElementById('account');


for (let i = 0; i < select.length; i++) {
    select[i].onclick = function () {
        document.querySelector('#option .select.active').classList.remove('active');
        select[i].classList.add('active');
    }
}

yes.addEventListener('click', function () {
    keyboard.style.display = 'none';
    updates.style.display = 'inline-block';
    setTimeout(() => {
        txt1.style.display = 'none';
        txt2.style.display = 'inline-block';
        setTimeout(() => {
            txt2.style.display = 'none';
            txt3.style.display = 'inline-block';
            setTimeout(() => {
                txt3.style.display = 'none';
                setTimeout(() => {
                    window.location.href = 'index5.html';
                }, 4000);
            }, 3000);
        }, 2000);
    }, 2000);
})

