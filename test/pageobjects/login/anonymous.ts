import Page from '../page';

class Anonymous extends Page {
    get inputPhoneNumber() {
        return $('input[id="anonymous-input"]');
    }

    get btnStartLogin() {
        return $('button[id="anonymous-button-ok"]');
    }

    async enterPhoneNumber(phone: string) {
        const inputPhone = this.inputPhoneNumber;
        await inputPhone.clearValue();
        await inputPhone.setValue(phone);
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


}

export default new Anonymous();
