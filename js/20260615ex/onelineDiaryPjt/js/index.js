document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!!');

    init();

});

function init() {
    console.log('init() CALLED!!');

    initViews();
    addEvents();

}

signUpWrap = '';
signInWrap = '';
writeWrap = '';
listWrap = '';

function initViews() {
    console.log('initViews() CALLED!!');

    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    writeWrap = document.querySelector('div.write_wrap');
    listWrap = document.querySelector('div.list_wrap');
    
}

function addEvents() {
    console.log('addEvents() CALLED!!');

    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICEKD!!');
    
    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICEKD!!');
    
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICEKD!!');
    
    });

}