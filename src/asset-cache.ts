export enum AssetType {
    IMAGE, AUDIO
}

export default class AssetCache {
    private _cache: any[];

    constructor() {
        this._cache = [];
    }

    public loadAsset(filename: string, type: AssetType) {
        return new Promise((resolve, reject) => {
            switch (type) {
                case AssetType.IMAGE:
                    let image = new Image();
                    image.onload = resolve;
                    image.onerror = reject;
                    image.src = filename;
                    this._cache[filename] = image;
                    break;
                case AssetType.AUDIO:
                    let audio = new Audio(filename);
                    audio.preload = "auto";
                    audio.onerror = reject;
                    audio.onloadeddata = resolve;
                    this._cache[filename] = audio;
                    break;
            }
        });
    }

    public getAsset(filename: string) {
        return this._cache[filename];
    }

    public debug() {
        console.log(this._cache);
    }
}