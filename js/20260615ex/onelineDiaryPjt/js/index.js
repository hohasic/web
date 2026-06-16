document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!!');

    init();

});

function init() {
    console.log('init() CALLED!!');

    // set dumy data


    // 뷰와 관련된 내용
    initViews();

    // 이벤트와 관련된 내용
    addEvents();

}

function addEvents() {
    console.log('addEvents() CALLED!!');

    // MENU BUTTON EVENT SATRT
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!!');

        showSelectedView(SIGN_UP_VIEW);

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!!');

        showSelectedView(SIGN_IN_VIEW);
        
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!!');
        
        showSelectedView(SIGN_OUT_VIEW);

    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!!');

        showSelectedView(WRITE_VIEW);
        
    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!!');

        showSelectedView(LIST_VIEW);
        
    });
    // MENU BUTTON EVENT END

    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn CLICKED!!');

        let uIdEle = document.querySelector('div.sign_up_wrap input[name="u_id"]');
        let uPwEle = document.querySelector('div.sign_up_wrap input[name="u_pw"]');
        let uMailEle = document.querySelector('div.sign_up_wrap input[name="u_mail"]');

        addMember(uIdEle.value, uPwEle.value, uMailEle.value);

        alert('SIGNUP SUCCESS!!');

        removeValue([uIdEle, uPwEle, uMailEle]);

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function() {
        console.log('signInBtn CLICKED!!');

        let uIdEle = document.querySelector('div.sign_in_wrap input[name="u_id"]');
        let uPwEle = document.querySelector('div.sign_in_wrap input[name="u_pw"]');

        let isMember = searchMember(uIdEle.value, uPwEle.value);
        if (isMember) {
            signInedMemberId = uIdEle.value;
            alert('SIGNIN SUCCESS!!');

            setMenuByStatus(SIGN_IN_STATUS);

        } else {
            signInedMemberId = '';
            alert('SIGNIN FAIL!!');

            setMenuByStatus(SIGN_OUT_STATUS);

        }

        removeValue([uIdEle, uPwEle]);

    });

}

function removeValue(eles) {
    console.log('removeValue() CALLED!!');

    for(let i = 0; i < eles.length; i++)
        eles[i].value = '';

}

