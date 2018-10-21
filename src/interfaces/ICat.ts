export interface ICat {
    [Symbol.toStringTag]: 'ICat';
    name?: string;
    lines: string[];
}