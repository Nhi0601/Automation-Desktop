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
}

export default new Anonymous();
