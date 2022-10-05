import Leftsidebar from '../../pageobjects/login/left-sidebar';
import {VALID_LOGIN_HHLL} from '../../data/login/left-sidebar';
describe ('TEST LEFT-SIDEBAR FLOWS', async () => {
    it('should enable login button', async () => {
        await expect(Leftsidebar.btnStarLoginHHLL).not.toBeDisabled();
    })

    it('click button', async () => {
        await Leftsidebar.startLogin();
    })

    it('login HHLL success', async () => {
        await Leftsidebar.startLogin();
        await Leftsidebar.enterAccount(VALID_LOGIN_HHLL.account);
    })
})