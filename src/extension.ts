'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Range } from 'vscode';
import { Cats } from './cats';
import { ICat } from './interfaces/ICat';
import { EOL } from 'os';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    const cats: Cats = new Cats();

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-cat-ascii-faces" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    /**
     * COMMAND: Insert Cat Face
     * Inserts a single-line ascii cat face of your choice into the
     * editor.
     */
    let disposable = vscode.commands.registerCommand('catfaces.insertCatFace', () => {
        // The code you place here will be executed every time your command is executed

        // Show the quick pick dropdown with a list of ascii cats
        vscode.window.showQuickPick(cats.GetAsciiCatNames()).then(val => {
            let editor = vscode.window.activeTextEditor;

            if (!editor) {
                return; // No open text editor
            }

            // Get position of the cursor
            const position = editor.selection.active;

            // Add cat face at position of cursor
            editor.edit(editBuilder => {
                if (val) {
                    editBuilder.insert(position, val);
                }
            });
        });
    });

    /**
     * COMMAND: Insert Big Cat Face
     * Inserts a multiline ascii cat face of your choice into the editor
     * at the cursor position.
     */
    disposable = vscode.commands.registerCommand('catfaces.insertBigCatFace', () => {
        vscode.window.showQuickPick(cats.GetBigCatNames()).then(val => {

            if (val) {

                // Get the CatFace object by name from the list
                cats.GetBigCatByName(val).then(bigCat => {

                    let editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

                    if (!editor) {
                        return; // No open text editor
                    }

                    replaceRangeWithCat(editor, bigCat);

                },
                    (err: Error) => {
                        vscode.window.showErrorMessage(err.toString());
                    });
            }
        });
    });

    disposable = vscode.commands.registerCommand('catfaces.insertCatCommentBlock', () => {

        let editor = vscode.window.activeTextEditor;

        if (!editor) {
            return; // No open text editor
        }

        // Get current cursor position
        const position = editor.selection.active;

        editor.edit(editBuilder => {
            editBuilder.insert(position, cats.GetCatCommentBlock());
        });
    });

    context.subscriptions.push(disposable);
}

function replaceRangeWithCat(editor: vscode.TextEditor, cat: ICat) {

    let selection: vscode.Selection = editor.selection;
    let startLine: number = selection.start.line;
    let endLine: number = selection.end.line;

    getMultiLineRange(editor, startLine, endLine).then(range => {
        printCat(editor, cat, range);
    }).catch(err => {
        vscode.window.showErrorMessage(err.toString());
    });
}

function printCat(editor: vscode.TextEditor | undefined, cat: ICat, range: vscode.Range | undefined) {
    if (!editor) {
        throw new Error("Editor is not present. How did this happen?");
    }

    editor.edit(editBuilder => {
        const asciiCat: string = cat.lines.join(EOL);

        if (!range) {
            throw new Error("Range is invalid. How did this happen?");
        }

        editBuilder.replace(range, asciiCat);
    });
}

function getMultiLineRange(editor: vscode.TextEditor, startLine: number, endLine: number): Promise<Range | undefined> {

    let range: Range | undefined = undefined;

    for (var l = startLine; l <= endLine; l++) {

        if (!range) {
            range = editor.document.lineAt(l).range;
        } else {
            range = range.union(editor.document.lineAt(l).range);
        }
    }

    return Promise.resolve(range);
}

// this method is called when your extension is deactivated
export function deactivate() {
}