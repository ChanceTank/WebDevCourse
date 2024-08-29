/*
 * Starter file
 */
(function () {
	"use strict";

	/**
	 * The starting point in our program, setting up a listener
	 * for the "load" event on the window, signalling the HTML DOM has been constructed
	 * on the page. When this event occurs, the attached function (init) will be called.
	 */
	window.addEventListener("load", init);


  /**
   * Initializes the application.
   * Sets up event handlers for UI elements on the page.
   */
	function init() {
		// Note: In this function, we usually want to set up our event handlers
		// for UI elements on the page.

		let encryptItButton = document.getElementById("encrypt-it");
		if (encryptItButton) {
			encryptItButton.addEventListener("click", handleClick);
		}

		let resetButton = document.getElementById("reset");
		if (resetButton) {
			resetButton.addEventListener("click", handleReset);
		}
	}
	
	
  /**
   * Handles the click event and encrypts the text in the input-text textarea using the shiftCipher function.
   */
	function handleClick() {
		let textArea = document.getElementById("input-text");

		if (textArea) {
			textArea.value = shiftCipher(textArea.value);
		}
	}
	
	
	
	// Add any other functions in this area (you should not implement your
	// entire program in the init function, for similar reasons that
	// you shouldn't write an entire Java program in the main method).

	/**
	 * Resets the value of the input text area.
	 */
	function handleReset() {
		let textArea = document.getElementById("input-text");

		if (textArea) {
			textArea.value = "";
		}
		console.log("reset pressed");
	}

	/**
	 * Returns an encrypted version of the given text, where
	 * each letter is shifted alphabetically ahead by 1 letter,
	 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
	 *
	 * @param {string} text - The text to be encrypted.
	 * @returns {string} - The encrypted text.
	 */
	function shiftCipher(text) {
		text = text.toLowerCase();
		let result = "";
		for (let i = 0; i < text.length; i++) {
			if (text[i] < "a" || text[i] > "z") {
				result += text[i];
			} else if (text[i] == "z") {
				result += "a";
			} else {
				// letter is between 'a' and 'y'
				let letter = text.charCodeAt(i);
				let resultLetter = String.fromCharCode(letter + 1);
				result += resultLetter;
			}
		}
		return result;
	}
})();
