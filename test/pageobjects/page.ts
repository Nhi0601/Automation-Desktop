export default class Page {
    open(path: string) {
        return browser.url(`app://./${path}`);
    }
}
