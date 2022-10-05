import Page from '../page';

class LeftSidebar extends Page {
    get btnStarLoginHHLL(){
        return $('button[id="platforms-halo"]');
    }

    async startLogin(){
        return this.btnStarLoginHHLL.click();
    }

    get inputAccountid(){
        return $('input[id="accountId"]');
    }

    async enterAccount(account){
        return this.inputAccountid.setValue(account);
    }





}
export default new LeftSidebar();
