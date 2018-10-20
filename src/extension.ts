'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Cats } from './cats';

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
        vscode.window.showQuickPick(cats.GetAsciiCatList()).then(val => {
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
                    let editor = vscode.window.activeTextEditor;

                    if (!editor) {
                        return; // No open text editor
                    }

                    if (!bigCat) {
                        throw new Error("Cat name not found");
                    }

                    // Get current cursor position
                    const position = editor.selection.active;

                    // Iterate through the lines inserting them into the editor,
                    // followed by a new line.
                    editor.edit(editBuilder => {
                        for (let i = 0; i < bigCat.lines.length; i++) {
                            editBuilder.insert(position.translate(i, 0), bigCat.lines[i]);
                            editBuilder.insert(position.translate(i, 0), "\n");
                        }
                    });
                }).catch(err => {
                    vscode.window.showErrorMessage(err.toString());
                });
            }
        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}