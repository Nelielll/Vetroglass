export class PozaGallery {
    private srcUrl: String;
    private previewUrl: String;
    private number: Number;

    constructor(src: String, preview: String, nr: Number) {
        this.srcUrl = src;
        this.previewUrl = preview;
        this.number = nr;
    }

    public getSrcUrl() { return this.srcUrl; }
    public getPreviewUrl() { return this.previewUrl; }

}