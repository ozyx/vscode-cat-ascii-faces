import { ICat } from "./interfaces/ICat";

export class Cats {

    private readonly bigCatFaceList: ICat[];

    private readonly asciiCatList: ICat[];

    private readonly commentCatList: ICat[];

    constructor() {
        this.bigCatFaceList = require("../data/bigCatFaces.json");
        this.asciiCatList = require("../data/smallCatFaces.json");
        this.commentCatList = require("../data/commentCats.json");
    }

    public GetCatCommentBlock(): string {
        const randCat: ICat = this.commentCatList[Math.floor(Math.random() * this.commentCatList.length)];
        const lines: string[] = randCat.lines;

        let comment: string[] = ["/**",
            " * ",
            " * "];

        for (let line of lines) {
            comment.push(` *   ${line}`);
        }

        comment.push(" */");

        return comment.join("\n");
    }

    public GetAsciiCatList(): ICat[] {
        return this.asciiCatList;
    }

    public GetAsciiCatNames(): string[] {
        let cats: string[] = [];

        for (let asciiCat of this.asciiCatList) {
            cats.push(asciiCat.lines[0]);
        }

        return cats;
    }

    public GetBigCatFaceList(): ICat[] {
        return this.bigCatFaceList;
    }

    public GetBigCatNames(): string[] {
        let names: string[] = [];

        for (let bigCat of this.bigCatFaceList) {
            if (bigCat.name) {
                names.push(bigCat.name);
            }
        }

        return names;
    }

    public GetBigCatByName(name: string): Promise<ICat> {

        for (let bigCat of this.bigCatFaceList) {
            if (name === bigCat.name) {
                return Promise.resolve(bigCat);
            }
        }

        // Not found
        return Promise.reject(new Error("Could not find cat! Something is very wrong."));
    }
}