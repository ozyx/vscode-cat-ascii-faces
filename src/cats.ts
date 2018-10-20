import { ICatFace } from "./interfaces/ICatFace";

export class Cats {
    constructor() {
        this.BigCatFaceList = require("../data/bigCatFaces.json");
    }

    public GetAsciiCatList(): string[] {
        return this.AsciiCatList;
    }

    public GetBigCatFaceList(): ICatFace[] {
        return this.BigCatFaceList;
    }

    public GetBigCatNames(): string[] {
        let names: string[] = [];

        for (let bigCat of this.BigCatFaceList) {
            names.push(bigCat.name);
        }

        return names;
    }

    public GetBigCatByName(name: string): ICatFace | undefined {

        for (let bigCat of this.BigCatFaceList) {
            if (name === bigCat.name) {
                return bigCat;
            }
        }

        // Not found
        return undefined;
    }

    private BigCatFaceList: ICatFace[];

    private AsciiCatList: string[] = [
        "｡＾･ｪ･＾｡",
        "( ͒ ु- •̫̮ – ू ͒)",
        "( ^..^)ﾉ",
        "( =①ω①=)",
        "( =ω=)..nyaa",
        "( =ノωヽ=)",
        "(´; ω ;｀)",
        "(^-人-^)",
        "(^･o･^)ﾉ”",
        "(^・ω・^ )",
        "(^._.^)ﾉ",
        "(^人^)",
        "(・∀・)",
        "(,,◕　⋏　◕,,)",
        "(.=^・ェ・^=)",
        "(｡･ω･｡)",
        "((≡^⚲͜^≡))",
        "((ΦωΦ))",
        "(*^ω^*)",
        "(*✧×✧*)",
        "(*ΦωΦ*)",
        "(⁎˃ᆺ˂)",
        "(ٛ⁎꒪̕ॢ ˙̫ ꒪ٛ̕ॢ⁎)",
        "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛",
        "₍˄·͈༝·͈˄₎ฅ˒˒",
        "₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒",
        "(=｀ω´=)",
        "(=｀ェ´=)",
        "（=´∇｀=）",
        "(=^ ◡ ^=)",
        "(=^-ω-^=)",
        "(=^･^=)",
        "(=^･ω･^)y＝",
        "(=^･ω･^=)",
        "(=^･ｪ･^=)",
        "(=^‥^=)",
        "(=･ω･=)",
        "(=;ω;=)",
        "(=;ェ;=)",
        "(=；ェ；=)",
        "(=;ェ;=)",
        "(=；ェ；=)",
        "(=；ｪ；=)",
        "(=‘ｘ‘=)",
        "(=⌒‿‿⌒=)",
        "(=ↀωↀ=)",
        "(=ↀωↀ=)✧",
        "(=①ω①=)",
        "(=ＴェＴ=)",
        "(=ｘェｘ=)",
        "(=ΦｴΦ=)",
        "(ٛ₌டுͩ ˑ̭ டுͩٛ₌)ฅ",
        "(≚ᄌ≚)ℒℴѵℯ❤",
        "(≚ᄌ≚)ƶƵ",
        "(○｀ω´○)",
        "(●ↀωↀ●)",
        "(●ↀωↀ●)✧",
        "(✦థ ｪ థ)",
        "(ↀДↀ)",
        "(ↀДↀ)⁼³₌₃",
        "(ↀДↀ)✧",
        "(๑•ω•́ฅ✧",
        "(๑ↀᆺↀ๑)☄",
        "(๑ↀᆺↀ๑)✧",
        "(p`･ω･´) q",
        "(p`ω´) q",
        "(Φ∇Φ)",
        "(ΦεΦ)",
        "(ΦωΦ)",
        "(ΦёΦ)",
        "(ΦзΦ)",
        "(ฅ`･ω･´)っ=",
        "(ฅ`ω´ฅ)",
        "(ฅ’ω’ฅ)",
        "(ะ`♔´ะ)",
        "(ะ☫ω☫ะ)",
        "(ㅇㅅㅇ❀)",
        "(ノω<。)",
        "(ꀄꀾꀄ)",
        "（三ФÅФ三）",
        "[ΦωΦ]",
        "] ‘͇̂•̩̫’͇̂ ͒)ฅ ﾆｬ❣",
        "＼(=^‥^)/’`",
        "<(*ΦωΦ*)>",
        "<ΦωΦ>",
        "|ΦωΦ|",
        "|ｪ･`｡)･･･　　",
        "~(=^‥^)",
        "~(=^‥^)_旦~",
        "~(=^‥^)/",
        "~(=^‥^)ノ",
        "~□Pヘ(^･ω･^=)~",
        "⊱ฅ•ω•ฅ⊰",
        "└(=^‥^=)┐",
        "✩⃛( ͒ ु•·̫• ू ͒)",
        "❤(´ω｀*)",
        "ヽ(^‥^=ゞ)",
        "ヾ(*ΦωΦ)ﾉ",
        "ヾ(*ФωФ)βyё βyё☆彡",
        "ヾ(=｀ω´=)ノ”",
        "ヽ(=^･ω･^=)丿",
        "ヾ(=ﾟ･ﾟ=)ﾉ",
        "0( =^･_･^)=〇",
        "٩(ↀДↀ)۶",
        "b(=^‥^=)o",
        "d(=^･ω･^=)b",
        "o(^・x・^)o",
        "o(=・ω・=o)",
        "V(=^･ω･^=)v",
        "ლ(=ↀωↀ=)ლ",
        "ლ(●ↀωↀ●)ლ",
        "ฅ ̂⋒ิ ˑ̫ ⋒ิ ̂ฅ",
        "ฅ( ᵕ ω ᵕ )ฅ",
        "ฅ(´-ω-`)ฅ",
        "ฅ(´・ω・｀)ฅ",
        "ฅ(^ω^ฅ)",
        "ฅ(≚ᄌ≚)",
        "ฅ(⌯͒• ɪ •⌯͒)ฅ❣",
        "ฅ⃛(⌯͒꒪ั ˑ̫ ꒪ั ⌯͒) ﾆｬｯ❣",
        "ฅ(●´ω｀●)ฅ",
        "ฅ*•ω•*ฅ♡",
        "ฅ•ω•ฅ",
        "ฅ⊱*•ω•*⊰ฅ",
        "ㅇㅅㅇ",
        "ミ๏ｖ๏彡",
        "ミ◕ฺｖ◕ฺ彡",
        "=＾● ⋏ ●＾=",
        "ฅ^•ﻌ•^ฅ",
        "₍ᵔ·͈༝·͈ᵔ₎",
        "ฅ(⌯͒•̩̩̩́ ˑ̫ •̩̩̩̀⌯͒)ฅ",
        "₍˄·͈༝·͈˄*₎◞ ̑̑",
        "ଲ( ⓛ ω ⓛ *)ଲ",
        "=^._.^= ∫",
        "ଲ(⁃̗̀̂❍⃓ˑ̫❍⃓⁃̠́̂)ଲ"
    ];
}