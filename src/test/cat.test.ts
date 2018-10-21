//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as chai from 'chai';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it

// import * as vscode from 'vscode';
import { Cats } from "../cats";
import { ICat } from "../interfaces/ICat";

// Defines a Mocha test suite to group tests of similar kind together
suite("Cat Tests", function () {

    // Defines a Mocha unit test
    test("GetBigCatByNameTest", function () {

        // arrange
        const cats = new Cats();

        // act
        cats.GetBigCatByName("Spooky").then(cat => {

            // assert
            chai.expect(cat).to.be.a("ICat", "Should return a cat");
        });
    });

    test("GetBigCatByNameTest2", function () {

        // arrange
        const cats = new Cats();

        // act
        cats.GetBigCatByName("IAmNotARealCat").then(cat => {

            // assert
            chai.expect(cat).to.be.undefined("Should be undefined");
        });
    });

    test("GetAsciiCatListTest", function () {

        // arrange
        const cats = new Cats();

        // act
        const asciiCats: string[] = cats.GetAsciiCatList();

        // assert
        chai.expect(asciiCats).to.be.an("array", "Should return an array").that.is.not.empty("Can't find any ascii cats! Where did your cats go?");
    });

    test("GetBigCatListTest", function () {

        // arrange
        const cats = new Cats();

        // act
        const bigCats: ICat[] = cats.GetBigCatFaceList();

        // assert
        chai.expect(bigCats).to.be.an("array", "Should return an array").that.is.not.empty("Can't find any big cats! Where did your big cats go?");
    });

    test("GetAsciiCatListTest", function () {

        // arrange
        const cats = new Cats();

        // act
        const names: string[] = cats.GetBigCatNames();

        // assert
        chai.expect(names).to.be.an("array", "Should return an array").that.is.not.empty("Can't find any big cat names! Where are your big cats' names?");
    });
});