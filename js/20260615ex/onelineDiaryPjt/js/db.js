const memberDB = new Map();

function addMember(id, pw, mail) {
    console.log('addMember() CALLED!!');

    memberDB.set(id, {
            'u_id': id,
            'u_pw': pw,
            'u_mail': mail
        });

}

function searchMember(id, pw) {
    console.log('searchMember() CALLED!!');

   let memObj = memberDB.get(id);       // -> 데이터 타입? Object

   if (memObj !== undefined && memObj.u_pw === pw) {
        return true;
   }

   return false;

}