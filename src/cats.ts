import { ICatFace } from "./interfaces/ICatFace";

export class Cats {
    constructor() {
        this.bigCatFaceList = require("../data/bigCatFaces.json");
        this.asciiCatList = require("../data/smallCatFaces.json");
    }

    public GetAsciiCatList(): string[] {
        return this.asciiCatList;
    }

    public GetBigCatFaceList(): ICatFace[] {
        return this.bigCatFaceList;
    }

    public GetBigCatNames(): string[] {
        let names: string[] = [];

        for (let bigCat of this.bigCatFaceList) {
            names.push(bigCat.name);
        }

        return names;
    }

    public GetBigCatByName(name: string): Promise<ICatFace | undefined> {

        for (let bigCat of this.bigCatFaceList) {
            if (name === bigCat.name) {
                return Promise.resolve(bigCat);
            }
        }

        // Not found
        return Promise.reject(undefined);
    }

    private bigCatFaceList: ICatFace[];

    private asciiCatList: string[];
}