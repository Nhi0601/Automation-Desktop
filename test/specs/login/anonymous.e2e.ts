import { INVALID_LOGIN_ANONYMOUS, VALID_LOGIN_ANONYMOUS } from '../../data/login/anonymous';
import AnonymousPage from '../../pageobjects/login/anonymous';

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
});
