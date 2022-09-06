import { INVALID_LOGIN_ANONYMOUS, VALID_LOGIN_ANONYMOUS, OTP_FALSE } from '../../data/login/anonymous';
import AnonymousPage from '../../pageobjects/login/anonymous';
import ModalPage from '../../elements /modal /modal';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    it('should disable login button', async () => {
        await expect(AnonymousPage.btnStartLogin).toBeDisabled();
    });

    it('should disable button login phone number length is less than 5', async () => {
        await AnonymousPage.enterPhoneNumber(INVALID_LOGIN_ANONYMOUS.phoneNumber);
        await expect(AnonymousPage.btnStartLogin).toBeDisabled();
    });

    it('should enable button login after enter valid phone number', async () => {
        await AnonymousPage.enterPhoneNumber(VALID_LOGIN_ANONYMOUS.phoneNumber);
        await expect(AnonymousPage.btnStartLogin).not.toBeDisabled();
    });

    it('should show confirmation modal', async () => {
        await AnonymousPage.starLogin();
        await AnonymousPage.goBack();
        await expect(ModalPage.titleModal).toBeExisting();
    });

    it('Cancel button', async () =>{
        await AnonymousPage.clickCancel();
    });

    it('Click button OK', async () => {
        await AnonymousPage.goBack();
        await AnonymousPage.clickOK();
    });

    it('should enter OTP code for verification', async () =>{
        await AnonymousPage.enterPhoneNumber(VALID_LOGIN_ANONYMOUS.phoneNumber);
        await AnonymousPage.starLogin();
        await AnonymousPage.clickSendOtpSMS();
    });

    it ('login fail', async () =>{
        await AnonymousPage.enterOTP(OTP_FALSE);
    })

    it('login success', async () =>{
        await AnonymousPage.enterOTP(VALID_LOGIN_ANONYMOUS.OTP);
    });



    


});
