const SIGN_OUT_STATUS   = 1;
const SIGN_IN_STATUS    = 2;

function setMenuByStatus(menuStatusNo) {
    console.log('setMenuByStatus() CALLED!!');

    // menuStatusNo <-- 이 녀석에 따라서 메뉴를 변경한다.
    switch(menuStatusNo) {
        case SIGN_OUT_STATUS:       // 로그아웃 상태

            document.querySelector('div.menu_wrap a.sign_up').style.display = 'block';
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'block';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'none';

            break;

        case SIGN_IN_STATUS:        // 로그인 상태
            
            document.querySelector('div.menu_wrap a.sign_up').style.display = 'none';
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'none';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'block';

            break;
    }

}