import { INVALID_LOGIN_ANONYMOUS, VALID_LOGIN_ANONYMOUS, OTP_FALSE, INVALID_OTP } from '../../data/login/anonymous';
import AnonymousPage from '../../pageobjects/login/anonymous';
import ModalPage from '../../elements /modal /modal';
import LeftSidebarPage from '../../elements /left-sidebar/left-sidebar';

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

    // //Bo sung case
    it('should close modal confirm after click icon close', async () =>{
        await AnonymousPage.goBack();
       // await browser.pause(3000);
        await AnonymousPage.clickX();
    })
    //
    it('Click button OK', async () => {
        await AnonymousPage.goBack();
        await AnonymousPage.clickOK();
    });

    it('should enter OTP code for verification', async () =>{
        await AnonymousPage.enterPhoneNumber(VALID_LOGIN_ANONYMOUS.phoneNumber);
        await AnonymousPage.starLogin();
        await AnonymousPage.clickSendOtpSMS();
    });
//
    it ('login fail', async () =>{
        await AnonymousPage.enterOTP(OTP_FALSE);
    });

    it('login success', async () =>{
        await AnonymousPage.enterOTP(VALID_LOGIN_ANONYMOUS.OTP);
    });

    //Bo sung case
    it('should disable button login after enter special characters in the text input phone number',async () =>{
        await AnonymousPage.enterPhoneNumber(INVALID_LOGIN_ANONYMOUS.specialCharacter);
    });

    it('should disable button login after enter alphanumeric characters in the text input phone number', async () =>{
        await AnonymousPage.enterPhoneNumber(INVALID_LOGIN_ANONYMOUS.alphanumericCharacter);
    });
    it('should not enter special characters in the text input OTP', async () =>{
        await AnonymousPage.enterOTP(INVALID_LOGIN_ANONYMOUS.specialCharacter);
    });
    it('should disable button login after enter alphanumeric characters in the text input OTP', async () =>{
        await AnonymousPage.enterOTP(INVALID_LOGIN_ANONYMOUS.specialCharacter);
    });

    it('should input OTP on position 1', async () =>{
        await expect(AnonymousPage.inputfocus).toBeFocused();
    })

    it('should login fail after enter space into OTP', async () =>{
        await AnonymousPage.enterOTP1(INVALID_OTP.space);
        await expect(AnonymousPage.inputOTP1).toHaveValue;
    });

    it('should login fail after enter space into input phone number', async () =>{
        await AnonymousPage.enterPhoneNumber1(INVALID_LOGIN_ANONYMOUS.space);
        await expect(AnonymousPage.inputPhoneNumber1).toHaveValue;
    });

    it('should login failed after enter OTP false', async ()=>{
        await AnonymousPage.enterOTP(INVALID_OTP.otpFalse);
        await expect(AnonymousPage.loginVerifyError).toBeExisting();
        await expect(AnonymousPage.inputOTP1).toBeFocused();
    });

    it('should  Resend + Time', async ()=>{
        await expect(AnonymousPage.btnResenDisable).toBeExisting();
        await expect(AnonymousPage.resendOTPTime).toBeExisting();
    })

    // it('should enable Resend button after 1:00', async () =>{
    //     await AnonymousPage.btnResend.waitForDisplayed();
    // });

    it('should exist logo app Halome', async () =>{
       await expect(LeftSidebarPage.logoApp).toBeExisting();
    });

});
