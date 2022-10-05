import Page from '../page';

class Anonymous extends Page {
    get inputPhoneNumber() {
        return $('#anonymous-input');
    }

    get btnStartLogin() {
        return $('button[id="anonymous-button-ok"]');
    }

    async enterPhoneNumber(phone) {
        // const inputPhone = this.inputPhoneNumber;
        // await inputPhone.clearValue();
        // await inputPhone.setValue(phone);
        return this.inputPhoneNumber.setValue(phone);
    }

    async starLogin(){
        return this.btnStartLogin.click();
    }

    get btnBack(){
        return $('#login-button-back');
    }

    async goBack(){
        return this.btnBack.click();
    }

    get btnCancel(){
        return $('#modal-button-cancel');
    }

    get btnOK(){
        return $('#modal-button-ok');
    }

    async clickCancel(){
        return this.btnCancel.click();
    }

    async clickOK() {
        return this.btnOK.click();
    }

    get sendOtpSMS(){
        return $('input[id="phone-verify-form-input-1"]');
    }
    async clickSendOtpSMS(){
        return this.sendOtpSMS.click();
    }

    get inputOTP(){
        return $('#phone-verify-form-input-1');
    }

    async enterOTP(OTP){
        return this.inputOTP.setValue(OTP);
    }
//Bo sung case
    get btnX(){
        return $('#modal-icon-close');
    }
    async clickX(){
        return this.btnX.click();
    }
    get inputfocus(){
        return $('#phone-verify-form-input-1[aria-label="Character 1."]');
    }

    get inputOTP1(){
        return $('#phone-verify-form-input-1[aria-label="Character 1."]');
    }

    async enterOTP1(OTP){
        return this.inputOTP1.setValue(OTP);
    }

    get inputPhoneNumber1(){
        return $('#anonymous-input[aria-label="Character 1."]');
    }
    async enterPhoneNumber1(phone){
        return this.inputPhoneNumber1.setValue(phone);
    }

    get loginVerifyError(){
        return $('#login-verify-error');
    }

    get btnResend(){
        return $('.text-typo-light font-normal cursor-pointer#login-verify-resend-otp');
    }

    get btnResenDisable(){
        return $('.text-gray-30#login-verify-resend-otp');
    }

    get resendOTPTime (){
        return $('#login-verify-resend-otp-timer');
    }






}

export default new Anonymous();
