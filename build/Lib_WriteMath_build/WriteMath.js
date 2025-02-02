"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["TILDE_KEY"] = 0] = "TILDE_KEY";
    KeyCodes[KeyCodes["BACKSPACE_KEY"] = 8] = "BACKSPACE_KEY";
    KeyCodes[KeyCodes["TAB_KEY"] = 9] = "TAB_KEY";
    KeyCodes[KeyCodes["ENTER_KEY"] = 13] = "ENTER_KEY";
    KeyCodes[KeyCodes["SHIFT_KEY"] = 16] = "SHIFT_KEY";
    KeyCodes[KeyCodes["CTRL_KEY"] = 17] = "CTRL_KEY";
    KeyCodes[KeyCodes["ALT_KEY"] = 18] = "ALT_KEY";
    KeyCodes[KeyCodes["CAPSLOCK_KEY"] = 20] = "CAPSLOCK_KEY";
    KeyCodes[KeyCodes["ESCAPE_KEY"] = 27] = "ESCAPE_KEY";
    KeyCodes[KeyCodes["SPACE_KEY"] = 32] = "SPACE_KEY";
    KeyCodes[KeyCodes["PAGEUP_KEY"] = 33] = "PAGEUP_KEY";
    KeyCodes[KeyCodes["PAGEDOWN_KEY"] = 34] = "PAGEDOWN_KEY";
    KeyCodes[KeyCodes["END_KEY"] = 35] = "END_KEY";
    KeyCodes[KeyCodes["HOME_KEY"] = 36] = "HOME_KEY";
    KeyCodes[KeyCodes["LEFTARROW_KEY"] = 37] = "LEFTARROW_KEY";
    KeyCodes[KeyCodes["UPARROW_KEY"] = 38] = "UPARROW_KEY";
    KeyCodes[KeyCodes["RIGHTARROW_KEY"] = 39] = "RIGHTARROW_KEY";
    KeyCodes[KeyCodes["DOWNARROW_KEY"] = 40] = "DOWNARROW_KEY";
    KeyCodes[KeyCodes["DELETE_KEY"] = 46] = "DELETE_KEY";
    KeyCodes[KeyCodes["N0_KEY"] = 48] = "N0_KEY";
    KeyCodes[KeyCodes["N1_KEY"] = 49] = "N1_KEY";
    KeyCodes[KeyCodes["N6_KEY"] = 54] = "N6_KEY";
    KeyCodes[KeyCodes["N7_KEY"] = 55] = "N7_KEY";
    KeyCodes[KeyCodes["N8_KEY"] = 56] = "N8_KEY";
    KeyCodes[KeyCodes["N9_KEY"] = 57] = "N9_KEY";
    KeyCodes[KeyCodes["SEMICOLON_KEY"] = 59] = "SEMICOLON_KEY";
    KeyCodes[KeyCodes["EQUAL_KEY"] = 61] = "EQUAL_KEY";
    KeyCodes[KeyCodes["A_KEY"] = 65] = "A_KEY";
    KeyCodes[KeyCodes["C_KEY"] = 67] = "C_KEY";
    KeyCodes[KeyCodes["D_KEY"] = 68] = "D_KEY";
    KeyCodes[KeyCodes["E_KEY"] = 69] = "E_KEY";
    KeyCodes[KeyCodes["F_KEY"] = 70] = "F_KEY";
    KeyCodes[KeyCodes["G_KEY"] = 71] = "G_KEY";
    KeyCodes[KeyCodes["I_KEY"] = 73] = "I_KEY";
    KeyCodes[KeyCodes["K_KEY"] = 75] = "K_KEY";
    KeyCodes[KeyCodes["L_KEY"] = 76] = "L_KEY";
    KeyCodes[KeyCodes["M_KEY"] = 77] = "M_KEY";
    KeyCodes[KeyCodes["N_KEY"] = 78] = "N_KEY";
    KeyCodes[KeyCodes["O_KEY"] = 79] = "O_KEY";
    KeyCodes[KeyCodes["P_KEY"] = 80] = "P_KEY";
    KeyCodes[KeyCodes["Q_KEY"] = 81] = "Q_KEY";
    KeyCodes[KeyCodes["R_KEY"] = 82] = "R_KEY";
    KeyCodes[KeyCodes["S_KEY"] = 83] = "S_KEY";
    KeyCodes[KeyCodes["T_KEY"] = 84] = "T_KEY";
    KeyCodes[KeyCodes["U_KEY"] = 85] = "U_KEY";
    KeyCodes[KeyCodes["V_KEY"] = 86] = "V_KEY";
    KeyCodes[KeyCodes["W_KEY"] = 87] = "W_KEY";
    KeyCodes[KeyCodes["X_KEY"] = 88] = "X_KEY";
    KeyCodes[KeyCodes["Y_KEY"] = 89] = "Y_KEY";
    KeyCodes[KeyCodes["Z_KEY"] = 90] = "Z_KEY";
    KeyCodes[KeyCodes["MINUS_KEY"] = 173] = "MINUS_KEY";
    KeyCodes[KeyCodes["OPENCHEVRON_KEY"] = 188] = "OPENCHEVRON_KEY";
    KeyCodes[KeyCodes["SLASH_KEY"] = 191] = "SLASH_KEY";
    KeyCodes[KeyCodes["CLOSECHEVRON_KEY"] = 190] = "CLOSECHEVRON_KEY";
    KeyCodes[KeyCodes["OPENHOOK_KEY"] = 219] = "OPENHOOK_KEY";
    KeyCodes[KeyCodes["PIPE_KEY"] = 220] = "PIPE_KEY";
    KeyCodes[KeyCodes["CLOSEHOOK_KEY"] = 221] = "CLOSEHOOK_KEY";
    KeyCodes[KeyCodes["ALTGR_KEY"] = 225] = "ALTGR_KEY";
})(KeyCodes || (KeyCodes = {}));
/*
 * Class MathLineInput
 * ------------------------------
 * Main Class which generates an input text element where we
 * can type math visually formatted directly
 * * */
var MathLineInput = /** @class */ (function () {
    function MathLineInput(pContainer, pSaverNOpenerStateManager) {
        var _this = this;
        this._jQWrapperEl = $('<div class="mathlineinput_container"><div class="number_line"><span> [1]</span></div><div class="mathLineInput"></div></div>');
        this._jQEl = this._jQWrapperEl.find('.mathLineInput');
        this._nextMathLineInput = null;
        this._previousMathLineInput = null;
        this._isDeletable = true;
        this._container = pContainer;
        this._saverNOpenerStateManager = pSaverNOpenerStateManager;
        this._lastValueBeforeFocusOut = "";
        this._isErrored = false;
        this._numberLine = 1;
        this._mathField = MathQuill.getInterface(2).MathField(this._jQEl.get(0), {
            autoCommands: 'implies infinity lor land neg union notin forall nabla Angstrom alpha beta gamma Gamma delta Delta zeta eta theta Theta iota kappa lambda Lambda mu nu pi Pi rho sigma Sigma tau phi Phi chi psi Psi omega Omega',
            autoOperatorNames: 'expand acosH asinH atanH asecH acosecH acotanH cosH sinH tanH secH cosecH cotanH acotan cotan atan tan asin sin acosec cosec asec sec acos cos Equation diff Vector Matrix Bool min max log ln solve factor polarForm cartForm arg min max abs simplify Shi Chi sign round fib CF PF line lim roots lcm gcd deg',
            substituteTextarea: (function () {
                var JQTextarea = $('<textarea autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" x-palm-disable-ste-all="true" inputmode="none"></textarea>');
                return JQTextarea.get(0);
            }),
            handlers: {
                edit: function () {
                },
                enter: function () {
                    _this.doIfKeyEnter();
                },
                upOutOf: function () {
                    if (_this.hasPreviousMathLineInput() && (!_this.autoCompleterIsVisible())) {
                        _this._previousMathLineInput.focus();
                    }
                },
                downOutOf: function () {
                    if (_this.hasNextMathLineInput() && (!_this.autoCompleterIsVisible())) {
                        _this.nextMathLineInput.focus();
                    }
                },
            }
        });
        this._autoCompleter = new AutoCompleter(this, g_keywordsList);
        this._undoRedoManager = new UndoRedoManager(this);
        this._shortcutsManager = new ShortcutsManager(this);
        this.setEvents()
            .setStyle();
    }
    Object.defineProperty(MathLineInput.prototype, "jQEl", {
        /* * * * * * * * * * * *
         * Getters and setters *
         * * * * * * * * * * * */
        get: function () {
            return this._jQEl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "nextMathLineInput", {
        get: function () {
            return this._nextMathLineInput;
        },
        set: function (pMathLineInput) {
            if (pMathLineInput !== null) {
                this._nextMathLineInput = pMathLineInput;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "isErrored", {
        get: function () {
            return this._isErrored;
        },
        set: function (pValue) {
            this._isErrored = pValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "previousMathLineInput", {
        get: function () {
            return this._previousMathLineInput;
        },
        set: function (pMathLineInput) {
            this._previousMathLineInput = pMathLineInput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "mathField", {
        get: function () {
            return this._mathField;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "isDeletable", {
        get: function () {
            return this._isDeletable;
        },
        set: function (pBool) {
            this._isDeletable = pBool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "saverNOpenerManager", {
        get: function () {
            return this._saverNOpenerStateManager;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathLineInput.prototype, "numberLine", {
        get: function () {
            return this._numberLine;
        },
        enumerable: false,
        configurable: true
    });
    /* * * * * *
     * Methods *
     * * * * * */
    MathLineInput.prototype.focus = function () {
        this._mathField.focus();
        return this;
    };
    MathLineInput.prototype.value = function () {
        return this._mathField.latex();
    };
    MathLineInput.prototype.setValue = function (pValue) {
        this._mathField.latex(pValue);
        return this;
    };
    MathLineInput.prototype.appendValueAtCursorPosition = function (pValue) {
        this._mathField.typedText(pValue);
        return this;
    };
    MathLineInput.prototype.appendCmdAtCursorPosition = function (pValue) {
        this._mathField.cmd(pValue);
        return this;
    };
    MathLineInput.prototype.writeLatexAtCursorPosition = function (pLatex) {
        this._mathField.write(pLatex);
        return this;
    };
    MathLineInput.prototype.isEmpty = function () {
        return this.value() === '';
    };
    MathLineInput.prototype.appendTo = function (pElement) {
        this._jQWrapperEl.appendTo(pElement);
        return this;
    };
    MathLineInput.prototype.appendToContainer = function () {
        this.appendTo(this._container);
        return this;
    };
    MathLineInput.prototype.insertAfter = function (pElement) {
        this._jQWrapperEl.insertAfter(pElement);
        return this;
    };
    MathLineInput.prototype.insertBefore = function (pElement) {
        this._jQWrapperEl.insertBefore(pElement);
        return this;
    };
    MathLineInput.prototype.hasPreviousMathLineInput = function () {
        if (this._previousMathLineInput !== null) {
            this._previousMathLineInput instanceof MathLineInput;
            return true;
        }
        return (false);
    };
    MathLineInput.prototype.hasNextMathLineInput = function () {
        return (this._nextMathLineInput !== null);
    };
    MathLineInput.prototype.hasBeenModifiedSinceLastFocusOut = function () {
        return (this.value() !== this._lastValueBeforeFocusOut);
    };
    MathLineInput.prototype.createNewMathLineInputAndAppendBefore = function (pMathLineInput) {
        var newMathLineInput = new MathLineInput(this._container, this.saverNOpenerManager);
        newMathLineInput.nextMathLineInput = pMathLineInput;
        newMathLineInput.insertBefore(pMathLineInput._jQWrapperEl)
            .updatenumberLineNDisplay(this._numberLine)
            .incrementFollowingsMathLineInputsnumberLine();
        if (pMathLineInput.hasPreviousMathLineInput()) {
            newMathLineInput.previousMathLineInput = pMathLineInput.previousMathLineInput;
            pMathLineInput.previousMathLineInput.nextMathLineInput = newMathLineInput;
        }
        pMathLineInput.previousMathLineInput = newMathLineInput;
        newMathLineInput.isDeletable = true;
        return newMathLineInput;
    };
    MathLineInput.prototype.createNewMathLineInputAndAppendAfter = function (pMathLineInput) {
        var newMathLineInput = new MathLineInput(this._container, this.saverNOpenerManager);
        newMathLineInput.insertAfter(pMathLineInput._jQWrapperEl)
            .updatenumberLineNDisplay(this._numberLine + 1);
        if (pMathLineInput.hasNextMathLineInput()) {
            pMathLineInput.nextMathLineInput.previousMathLineInput = newMathLineInput;
            newMathLineInput.nextMathLineInput = pMathLineInput.nextMathLineInput;
            newMathLineInput.incrementFollowingsMathLineInputsnumberLine();
        }
        pMathLineInput.nextMathLineInput = newMathLineInput;
        newMathLineInput.previousMathLineInput = pMathLineInput;
        newMathLineInput.isDeletable = true;
        return newMathLineInput;
    };
    MathLineInput.prototype.getOffset = function () {
        return this._jQWrapperEl.offset();
    };
    MathLineInput.prototype.getCursorCoordinates = function () {
        this.mathField.focus();
        var retOffset = this.mathField.__controller.cursor.offset();
        if (!(retOffset)) {
            retOffset = { 'top': 0, 'left': 0 };
        }
        return retOffset;
    };
    ;
    MathLineInput.prototype.erase = function () {
        if (this.hasPreviousMathLineInput()) {
            this._previousMathLineInput.nextMathLineInput = this.nextMathLineInput;
        }
        if (this.hasNextMathLineInput()) {
            this._nextMathLineInput.previousMathLineInput = this.previousMathLineInput;
        }
        this._autoCompleter.hide();
        this.removeFromDOM();
        this.decrementFollowingsMathLineInputsnumberLine();
        g_s4mCoreMemory.removeAllProducedBy(this);
        return this;
    };
    MathLineInput.prototype.removeFromDOM = function () {
        this._jQWrapperEl.remove();
        g_outputScreen.removeMessagesOf(this);
        return this;
    };
    MathLineInput.prototype.keyDown = function (pFunction) {
        this.jQEl.keydown(function (e) { return pFunction(e); });
        return this;
    };
    MathLineInput.prototype.keyUp = function (pFunction) {
        this.jQEl.keyup(function (e) { return pFunction(e); });
        return this;
    };
    MathLineInput.prototype.autoCompleterIsVisible = function () {
        return this._autoCompleter.isVisible();
    };
    MathLineInput.prototype.blur = function () {
        this._mathField.blur();
        return this;
    };
    MathLineInput.prototype.keyStroke = function (pKey) {
        this._mathField.keystroke(pKey);
        return this;
    };
    MathLineInput.prototype.deleteLeftWord = function (pWordLen) {
        for (var i = 0; i < pWordLen; i++) {
            this._mathField.keystroke('Shift-Left');
        }
        this._mathField.keystroke('Backspace');
        return this;
    };
    MathLineInput.prototype.getContainerTopCoord = function () {
        return this._container.offset().top;
    };
    MathLineInput.prototype.getContainerBottomCoord = function () {
        return this.getContainerTopCoord().valueOf() + this.container.outerHeight().valueOf();
    };
    MathLineInput.prototype.getTopCoord = function () {
        return this._jQEl.offset().top;
    };
    MathLineInput.prototype.getBottomCoord = function () {
        return this.getTopCoord().valueOf() + this._jQEl.outerHeight().valueOf();
    };
    MathLineInput.prototype.adjustContainerScrollToMe = function () {
        var scrollUpAdjust = 20;
        var scrollDownAdjust = 45;
        if (this.getTopCoord() < this.getContainerTopCoord()) {
            this._container.scrollTop(this._container.scrollTop() - scrollUpAdjust);
        }
        else if (this.getBottomCoord() > this.getContainerBottomCoord()) {
            this._container.scrollTop(this._container.scrollTop() + scrollDownAdjust);
        }
        if (!(this.hasPreviousMathLineInput())) {
            this._container.scrollTop(0);
        }
        else if (!(this.hasNextMathLineInput())) {
            this._container.scrollTop(this._container.scrollTop() + this._container.height());
        }
        else {
        }
        return this;
    };
    MathLineInput.prototype.boldNumberLine = function () {
        this._jQWrapperEl.find('.number_line span').css({
            'font-weight': 'bold',
            'opacity': '1',
        });
        return this;
    };
    MathLineInput.prototype.unBoldnumberLine = function () {
        this._jQWrapperEl.find('.number_line span').css({
            'font-weight': 'lighter',
            'opacity': '0.5',
        });
        return this;
    };
    MathLineInput.prototype.setEvents = function () {
        var _this = this;
        this.setKeyDownEvents();
        this.setKeyUpEvents();
        this._jQEl.focusin(function () {
            if (g_s4mCoreMemory !== undefined) {
                g_s4mCoreMemory.currentMathLineInputFocusedIs(_this);
            }
            _this.adjustContainerScrollToMe()
                .boldNumberLine();
        });
        this._jQEl.focusout(function () {
            _this._autoCompleter.hide();
            g_s4mCoreMemory.lastMathLineInputFocusedOutIs(_this);
            g_s4mCoreMemory.setCurrentMathLineInputFocusedToNull();
            _this.unBoldnumberLine();
            // S4M interactions:
            if (S4MLParser !== undefined && g_s4mCoreMemory !== undefined) {
                g_s4mCoreMemory.currentMathLineInputFocused = null;
                g_s4mCoreMemory.lastMathLineInputFocusedOut = _this;
                if (_this.hasBeenModifiedSinceLastFocusOut() || _this._isErrored) {
                    g_s4mCoreMemory.removeAllProducedBy(_this);
                    _this.processContent();
                }
            }
            else {
                _this.setStyle();
            }
            _this._lastValueBeforeFocusOut = _this.value();
        });
        return this;
    };
    MathLineInput.prototype.formatVarAtLargeNameFromNerdamerToS4ML = function (pNerdamerVarName) {
        var retVarName = pNerdamerVarName.replace(/OPNCRL/g, '{').replace(/CLSCRL/g, '}').replace(/BCKSLSH/g, '\\').replace(/SPACE/g, ' ');
        return retVarName;
    };
    MathLineInput.prototype.formatNerdamerLatex = function (pNerdamerLatexStr) {
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/OPNCRL/g, '{').replace(/CLSCRL/g, '}').replace(/BCKSLSH/g, '\\').replace(/SPACE/g, ' ');
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\sum\\limits/g, "\\sum");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\prod\\limits/g, "\\prod");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\lim\\limits/g, "\\lim");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\bmod/g, "%");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\left \\lfloor\{/g, "\\lfloor ");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\}\\right \\rfloor/g, " \\rfloor ");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\left \\lceil\{/g, "\\lceil ");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\}\\right \\rceil/g, " \\rceil ");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\mathrm\{sin\}/g, " \\operatorname{sin}");
        pNerdamerLatexStr = pNerdamerLatexStr.replace(/\\int\\limits/g, " \\int");
        return pNerdamerLatexStr;
    };
    MathLineInput.prototype.processContent = function () {
        g_s4mCoreMemory.unstoreErroredMathLineInput(this);
        g_outputScreen.removeMessagesOf(this);
        try {
            var S4MLQuestion = this.value();
            var parsedStr = S4MLParser.parse(S4MLQuestion, { processedMathLineInput: this });
            var answerMessagesArray = [S4MLQuestion.replace(/\\operatorname/g, "\\text")];
            console.log('S4ML Question:-- ' + this.value());
            console.log('nerdamer instruction:-- ' + parsedStr);
            nerdamer.set('SOLUTIONS_AS_OBJECT', true);
            // Display answer if nerdamer has a string output
            if (parsedStr !== undefined && parsedStr !== "[Unprocess]" && parsedStr.substring(0, 7) !== "[Print]" && parsedStr !== '') {
                var nerdamerAnswer = nerdamer(parsedStr);
                if (nerdamerAnswer.toString() !== "undefined") {
                    var nerdamerLatexAnswer = this.formatNerdamerLatex(nerdamerAnswer.latex());
                    var evaluatedAnswer = nerdamerAnswer.evaluate();
                    var evaluatedLatexAnswer = this.formatNerdamerLatex(evaluatedAnswer.latex());
                    // const recurringNumericalAnswer: string = evaluatedAnswer.text('recurring');
                    var approxAnswer = this.formatVarAtLargeNameFromNerdamerToS4ML(nerdamer.convertToLaTeX(evaluatedAnswer.text('decimals', 50), { decimals: true }));
                    answerMessagesArray.push(nerdamerLatexAnswer);
                    // if evaluatedLatexAnswer is different from all messages already shown
                    if (answerMessagesArray.indexOf(evaluatedLatexAnswer) === -1) {
                        answerMessagesArray.push(evaluatedLatexAnswer);
                    }
                    // // if recurringNumericalAnswer is not too long and different from all messages already shown
                    // if (recurringNumericalAnswer.length < 200 && answerMessagesArray.indexOf(recurringNumericalAnswer) === -1) {
                    //     answerMessagesArray.push(recurringNumericalAnswer.replace(/'([0-9]+)'/, '\\overline{$1}'));
                    // }
                    // if approxAnswer is different from all messages already shown
                    if (answerMessagesArray.indexOf(approxAnswer) === -1) {
                        answerMessagesArray.push(approxAnswer);
                    }
                    g_outputScreen.displayAnswerMessage(answerMessagesArray, this);
                    console.log(answerMessagesArray);
                }
            }
            else if (parsedStr.substring(0, 7) == "[Print]") {
                var latexStr = parsedStr.substring("[Print]".length, parsedStr.length);
                answerMessagesArray.push(latexStr);
                g_outputScreen.displayPrintLatexMessage(answerMessagesArray, this);
            }
            this.signalNoError();
        }
        catch (e) {
            this.signalError(e);
        }
        return this;
    };
    MathLineInput.prototype.setStyle = function () {
        if (this.isAGivenLine()) {
            this._jQEl.addClass('GivenLine');
        }
        else {
            this._jQEl.removeClass('GivenLine');
        }
        if (this.isALetLine()) {
            this._jQEl.addClass('LetLine');
        }
        else {
            this._jQEl.removeClass('LetLine');
        }
        if (this.isACommentLine()) {
            this._jQEl.addClass('commentLine');
        }
        else {
            this._jQEl.removeClass('commentLine');
        }
        if (this.isASeparatorLine()) {
            this._jQEl.addClass('separatorLine');
        }
        else {
            this._jQEl.removeClass('separatorLine');
        }
        if (this.isEmpty()) {
            this._jQEl.addClass('emptyLine');
        }
        else {
            this._jQEl.removeClass('emptyLine');
        }
        if (this.isErrored === true) {
            this._jQEl.addClass('errorLine');
        }
        else {
            this._jQEl.removeClass('errorLine');
        }
        return this;
    };
    MathLineInput.prototype.delete = function () {
        if (this.hasPreviousMathLineInput() || this.hasNextMathLineInput()) {
            if (this.hasNextMathLineInput()) {
                this.nextMathLineInput.focus();
            }
            else {
                this.previousMathLineInput.focus();
            }
            this.erase();
        }
    };
    MathLineInput.prototype.setKeyDownEvents = function () {
        var _this = this;
        this.keyDown(function (e) {
            //press delete ==> delete line if is empty
            if (e.which === KeyCodes.DELETE_KEY && _this.isEmpty()) {
                _this.delete();
                //press backspace ==> delete if is empty
            }
            else if (e.which === KeyCodes.BACKSPACE_KEY && _this.isDeletable) {
                _this.doIfKeyBackspace();
                //press escape
            }
            else if (e.which === KeyCodes.ESCAPE_KEY) {
                if (_this.autoCompleterIsVisible()) {
                    _this._autoCompleter.hide();
                }
                else {
                    _this.blur();
                }
            }
            else if (_this.isEmpty()) {
                _this.isDeletable = true;
            }
            else {
                _this.isDeletable = false;
            }
        });
        return this;
    };
    MathLineInput.prototype.setKeyUpEvents = function () {
        var _this = this;
        this.keyUp(function (e) {
            if (_this.isEmpty()) {
                _this.isDeletable = true;
            }
            else {
                _this.isDeletable = false;
            }
        });
        return this;
    };
    //protected getLocationOf(pCursor: MathFieldTreeElement): string[] {
    MathLineInput.prototype.getLocationOf = function (pCursor) {
        var L = -1;
        var R = 1;
        var retCursorLocation = [];
        var mathfieldTreeElement;
        if (pCursor[L]) {
            retCursorLocation.push('insRightOf');
            mathfieldTreeElement = pCursor[L];
        }
        else if (pCursor[R]) {
            retCursorLocation.push('insLeftOf');
            mathfieldTreeElement = pCursor[R];
        }
        else {
            retCursorLocation.push('insAtLeftEnd');
            mathfieldTreeElement = pCursor.parent;
        }
        while (mathfieldTreeElement != this._mathField.__controller.root) {
            if (mathfieldTreeElement[L]) {
                retCursorLocation.push('L');
                mathfieldTreeElement = mathfieldTreeElement[L];
            }
            else {
                retCursorLocation.push('endsL');
                mathfieldTreeElement = mathfieldTreeElement.parent;
            }
        }
        return retCursorLocation.reverse();
    };
    MathLineInput.prototype.getCursorConfiguration = function () {
        if (this._mathField.__controller.cursor.anticursor) {
            return {
                cursor: this.getLocationOf(this._mathField.__controller.cursor),
                anticursor: this.getLocationOf(this._mathField.__controller.cursor.anticursor)
            };
        }
        else {
            return { cursor: this.getLocationOf(this._mathField.__controller.cursor) };
        }
    };
    MathLineInput.prototype.getCursorConfigurationWithCursorAndAnticursorFusion = function () {
        var retCursorConfiguration = this.getCursorConfiguration();
        if (this.AreCursorAndAnticursorAtSameLocation(retCursorConfiguration)) {
            delete retCursorConfiguration.anticursor;
        }
        return retCursorConfiguration;
    };
    MathLineInput.prototype.setLocationOf = function (pCursor) {
        var L = -1;
        var R = 1;
        var mathfieldTreeElement = this._mathField.__controller.root;
        for (var i = 0; i < pCursor.length; i++) {
            switch (pCursor[i]) {
                case 'L':
                    mathfieldTreeElement = mathfieldTreeElement[R];
                    break;
                case 'endsL':
                    mathfieldTreeElement = mathfieldTreeElement.ends[L];
                    break;
                default:
                    this._mathField.__controller.cursor[pCursor[i].valueOf()](mathfieldTreeElement);
            }
        }
    };
    MathLineInput.prototype.isAGivenLine = function () {
        if (this.value().substr(0, 14) === '\\text{Given}\\ ') {
            return true;
        }
        return false;
    };
    MathLineInput.prototype.isAnUnprocessedLine = function () {
        if (this.value().substr(0, 8) === '\\vdash\\ ') {
            return true;
        }
        return false;
    };
    MathLineInput.prototype.isASeparatorLine = function () {
        return this.value() == '--';
    };
    MathLineInput.prototype.isALetLine = function () {
        if (this.value().substr(0, 12) === "\\text{Let}\\ ") {
            return true;
        }
        return false;
    };
    MathLineInput.prototype.isACommentLine = function () {
        return this.value()[0] === "#";
    };
    MathLineInput.prototype.isAPrintLine = function () {
        return (this.value().substr(0, 14) === "\\text{Print}\\ ");
    };
    MathLineInput.prototype.isAGraphLine = function () {
        return (this.value().substr(0, 18) === "\\text{Graph}\\left(");
    };
    MathLineInput.prototype.stopBeingAGivenLine = function () {
        if (this.isAGivenLine()) {
            this.shiftKeywordInField('Given');
            this.saveUndoRedoState();
        }
        return this;
    };
    MathLineInput.prototype.stopBeingAnUnprocessedLine = function () {
        this.shiftLatexInField('\\vdash\\ ');
        return this;
    };
    MathLineInput.prototype.stopBeingALetLine = function () {
        this.shiftKeywordInField('Let');
        return this;
    };
    MathLineInput.prototype.stopBeingAPrintLine = function () {
        this.setValue(this.value().substring("\\text{Print}\\ ".length, this.value().length));
        return this;
    };
    MathLineInput.prototype.stopBeingAGraphLine = function () {
        this.setValue(this.value().substring("\\text{Graph}\\left(".length, this.value().length - "\\right)".length));
        return this;
    };
    MathLineInput.prototype.becomeAGivenLine = function () {
        if (!(this.isAGivenLine())) {
            if (this.isALetLine()) {
                this.stopBeingALetLine();
            }
            this.prependToFieldKeyword('Given');
        }
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.becomeAnUnprocessedLine = function () {
        if (!this.isAnUnprocessedLine()) {
            this.prependToFieldLatex('\\vdash\\ ');
        }
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.becomeALetLine = function () {
        if (!(this.isALetLine())) {
            if (this.isAGivenLine()) {
                this.stopBeingAGivenLine();
            }
            this.prependToFieldKeyword('Let');
        }
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.letLineToggle = function () {
        if (this.isALetLine()) {
            this.stopBeingALetLine();
        }
        else {
            this.becomeALetLine();
        }
        return this;
    };
    MathLineInput.prototype.givenLineToggle = function () {
        if (this.isAGivenLine()) {
            this.stopBeingAGivenLine();
        }
        else {
            this.becomeAGivenLine();
        }
        return this;
    };
    MathLineInput.prototype.printLine = function () {
        if (this.isAPrintLine()) {
            this.stopBeingAPrintLine();
        }
        else {
            this.becomeAPrintLine();
        }
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.displaySaveWidget = function () {
        this.saverNOpenerManager.setActionToSave();
        this.saverNOpenerManager.callingMathLineInput = this;
        this.saverNOpenerManager.show();
        return this;
    };
    MathLineInput.prototype.displayOpenWidget = function () {
        this.saverNOpenerManager.setActionToOpen();
        this.saverNOpenerManager.callingMathLineInput = this;
        this.saverNOpenerManager.show();
        return this;
    };
    MathLineInput.prototype.openWidgetToggle = function () {
        if (this.saverNOpenerManager.isVisible()) {
            this.saverNOpenerManager.hide();
        }
        else {
            this.displayOpenWidget();
        }
        return this;
    };
    MathLineInput.prototype.saveWidgetToggle = function () {
        if (this.saverNOpenerManager.isVisible()) {
            this.saverNOpenerManager.hide();
        }
        else {
            this.displaySaveWidget();
        }
        return this;
    };
    MathLineInput.prototype.unprocessedLineToggle = function () {
        if (this.isAnUnprocessedLine()) {
            this.stopBeingAnUnprocessedLine();
        }
        else {
            this.becomeAnUnprocessedLine();
        }
        return this;
    };
    MathLineInput.prototype.becomeAPrintLine = function () {
        if (!(this.isAPrintLine())) {
            this.setValue("\\text{Print}\\ " + this.value());
            this.saveUndoRedoState();
        }
        return this;
    };
    MathLineInput.prototype.becomeAGraphLine = function () {
        if (!(this.isAGraphLine())) {
            this.setValue("\\text{Graph}\\left(" + this.value() + "\\right)");
            this.saveUndoRedoState();
        }
        return this;
    };
    MathLineInput.prototype.prependToFieldKeyword = function (pKeyword, pFollowingStr) {
        if (pFollowingStr === void 0) { pFollowingStr = '\\ '; }
        var cursorConfiguration = this.getCursorConfigurationWithCursorAndAnticursorFusion();
        var keyWordInLatex = '\\text{' + pKeyword.valueOf() + '}' + pFollowingStr;
        cursorConfiguration.cursor = __spreadArray(["endsL", "L", "L"], cursorConfiguration.cursor.slice(1));
        if (cursorConfiguration.anticursor) {
            cursorConfiguration.anticursor = __spreadArray(["endsL", "L", "L"], cursorConfiguration.anticursor.slice(1));
        }
        this.setValue(keyWordInLatex + this.value());
        this.setCursorConfiguration(cursorConfiguration);
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.prependToFieldLatex = function (pLatexKeyword) {
        var cursorConfiguration = this.getCursorConfigurationWithCursorAndAnticursorFusion();
        cursorConfiguration.cursor = __spreadArray(["endsL", "L", "L"], cursorConfiguration.cursor.slice(1));
        if (cursorConfiguration.anticursor) {
            cursorConfiguration.anticursor = __spreadArray(["endsL", "L", "L"], cursorConfiguration.anticursor.slice(1));
        }
        this.setValue(pLatexKeyword.valueOf() + this.value());
        this.setCursorConfiguration(cursorConfiguration);
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.shiftLatexInField = function (pLatexKeyword) {
        var cursorConfiguration = this.getCursorConfigurationWithCursorAndAnticursorFusion();
        cursorConfiguration.cursor = __spreadArray(["endsL"], cursorConfiguration.cursor.slice(3));
        if (cursorConfiguration.anticursor) {
            cursorConfiguration.anticursor = __spreadArray(["endsL"], cursorConfiguration.anticursor.slice(3));
        }
        this.setValue(this.value().slice(pLatexKeyword.length));
        this.setCursorConfiguration(cursorConfiguration);
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.shiftKeywordInField = function (pKeyword) {
        var cursorConfiguration = this.getCursorConfigurationWithCursorAndAnticursorFusion();
        var keyWordInLatex = '\\text{' + pKeyword.valueOf() + '}\\ ';
        cursorConfiguration.cursor = __spreadArray(["endsL"], cursorConfiguration.cursor.slice(3));
        if (cursorConfiguration.anticursor) {
            cursorConfiguration.anticursor = __spreadArray(["endsL"], cursorConfiguration.anticursor.slice(3));
        }
        this.setValue(this.value().slice(keyWordInLatex.length));
        this.setCursorConfiguration(cursorConfiguration);
        this.saveUndoRedoState();
        return this;
    };
    MathLineInput.prototype.saveUndoRedoState = function () {
        this._undoRedoManager.saveState();
        return this;
    };
    MathLineInput.prototype.AreCursorAndAnticursorAtSameLocation = function (pCursorConfiguration) {
        if ((!(pCursorConfiguration.anticursor))
            || (pCursorConfiguration.cursor.length !== pCursorConfiguration.anticursor.length)) {
            return false;
        }
        for (var index in pCursorConfiguration.cursor) {
            if (pCursorConfiguration.cursor[index] !== pCursorConfiguration.anticursor[index]) {
                return false;
            }
        }
        return true;
    };
    MathLineInput.prototype.setCursorConfiguration = function (pCursorConfiguration) {
        this._mathField.__controller.cursor.clearSelection();
        this._mathField.__controller.cursor.startSelection();
        if ((pCursorConfiguration.anticursor) && (!(this.AreCursorAndAnticursorAtSameLocation(pCursorConfiguration)))) {
            this.setLocationOf(pCursorConfiguration.anticursor);
            this._mathField.__controller.cursor.startSelection();
        }
        else {
            delete this._mathField.__controller.cursor.anticursor;
        }
        if (pCursorConfiguration.cursor) {
            this.setLocationOf(pCursorConfiguration.cursor);
            if (pCursorConfiguration.anticursor) {
                this._mathField.__controller.cursor.select();
            }
        }
        return this;
    };
    MathLineInput.prototype.moveCursorToLeftEnd = function () {
        this._mathField.moveToLeftEnd();
        return this;
    };
    MathLineInput.prototype.moveCursorToRightEnd = function () {
        this._mathField.moveToRightEnd();
        return this;
    };
    MathLineInput.prototype.showCursor = function () {
        this._mathField.__controller.cursor.show();
        return this;
    };
    MathLineInput.prototype.getTypedHistory = function () {
        return this._undoRedoManager.getTypedHistory();
    };
    MathLineInput.prototype.setTypedHistoryWith = function (pTypedHistory) {
        this._undoRedoManager.setTypedHistoryWith(pTypedHistory);
        return this;
    };
    MathLineInput.prototype.addNewMathLineInputOverMe = function () {
        var newMathlineInput = this.createNewMathLineInputAndAppendBefore(this).focus();
        return newMathlineInput;
    };
    MathLineInput.prototype.duplicateMathLine = function () {
        var newMathlineInput = this.createNewMathLineInputAndAppendAfter(this)
            .setValue(this.value())
            .focus();
        newMathlineInput._undoRedoManager = this._undoRedoManager.getCopy(newMathlineInput);
        newMathlineInput.setCursorConfiguration(this.getCursorConfigurationWithCursorAndAnticursorFusion());
        return newMathlineInput;
    };
    MathLineInput.prototype.getFirstMathLineInput = function () {
        var retMathlineInput = this;
        while (retMathlineInput.previousMathLineInput !== null) {
            retMathlineInput = retMathlineInput.previousMathLineInput;
        }
        return retMathlineInput;
    };
    MathLineInput.prototype.getLastMathLineInput = function () {
        var retMathlineInput = this;
        while (retMathlineInput.nextMathLineInput !== null) {
            retMathlineInput = retMathlineInput.nextMathLineInput;
        }
        return retMathlineInput;
    };
    MathLineInput.prototype.signalError = function (errorObject) {
        this._isErrored = true;
        this._jQEl.attr('title', "[" + errorObject.name + "]: " + errorObject.message);
        this.setStyle();
        g_s4mCoreMemory.storeErroredMathLineInput(this);
        g_outputScreen.displayErrorMessage(errorObject, this);
        return this;
    };
    MathLineInput.prototype.signalNoError = function () {
        this._isErrored = false;
        this._jQEl.attr('title', this.value());
        this.setStyle();
        g_s4mCoreMemory.unstoreErroredMathLineInput(this);
        return this;
    };
    MathLineInput.prototype.doIfKeyEnter = function () {
        if ((this._autoCompleter.isVisible() === false)) {
            var newMathLineInput = this.createNewMathLineInputAndAppendAfter(this);
            newMathLineInput.focus();
        }
        return this;
    };
    MathLineInput.prototype.doIfKeyBackspace = function () {
        if (this.hasPreviousMathLineInput() && this.isEmpty()) {
            this.erase();
            this.previousMathLineInput.focus();
        }
        return this;
    };
    MathLineInput.prototype.undo = function () {
        this._undoRedoManager.undo();
        return this;
    };
    MathLineInput.prototype.redo = function () {
        this._undoRedoManager.redo();
        return this;
    };
    MathLineInput.prototype.updatenumberLineNDisplay = function (pnumberLine) {
        this._numberLine = pnumberLine;
        var spanEl = this._jQWrapperEl.find('.number_line span');
        spanEl.text(((this._numberLine < 10) ? ' ' : '') + '[' + (pnumberLine) + ']');
        return this;
    };
    MathLineInput.prototype.updateOutputScreenTitle = function () {
        var messageGeneratedByMe = g_outputScreen.getMessageGeneratedBy(this);
        if (messageGeneratedByMe !== null) {
            messageGeneratedByMe.setTitleTo('Line [' + this.numberLine + ']');
        }
        return this;
    };
    MathLineInput.prototype.incrementnumberLine = function () {
        this._numberLine++;
        this.updatenumberLineNDisplay(this._numberLine);
        this.updateOutputScreenTitle();
        return this;
    };
    MathLineInput.prototype.decrementnumberLine = function () {
        this._numberLine--;
        this.updatenumberLineNDisplay(this._numberLine);
        this.updateOutputScreenTitle();
        return this;
    };
    MathLineInput.prototype.incrementFollowingsMathLineInputsnumberLine = function () {
        for (var mathLineInput = this.nextMathLineInput; mathLineInput !== null; mathLineInput = mathLineInput.nextMathLineInput) {
            mathLineInput.incrementnumberLine();
        }
        return this;
    };
    MathLineInput.prototype.decrementFollowingsMathLineInputsnumberLine = function () {
        for (var mathLineInput = this.nextMathLineInput; mathLineInput !== null; mathLineInput = mathLineInput.nextMathLineInput) {
            mathLineInput.decrementnumberLine();
        }
        return this;
    };
    return MathLineInput;
}());
/*
 * Class ShortcutsManager
 * ----------------------
 * Define and manage the shortcuts the user can use to simplify its entries
 * to a given MathLineInput
 * * */
var ShortcutsManager = /** @class */ (function () {
    function ShortcutsManager(pMathLineInput) {
        this._managedMathLineInput = pMathLineInput;
        this._altGrIsDown = false;
        this.setEvents();
    }
    ShortcutsManager.prototype.setEvents = function () {
        this.setKeyUpEvents();
        this.setKeyDownEvents();
        return this;
    };
    ShortcutsManager.prototype.setKeyUpEvents = function () {
        var _this = this;
        this._managedMathLineInput.keyUp(function (e) {
            /*
             * Deactivate the browser behavior when the user press the alt key
             * while focus is on the managed MathLineInput
             * * */
            if (e.which === KeyCodes.ALT_KEY) {
                e.preventDefault();
            }
            if (e.which === KeyCodes.ALTGR_KEY) {
                _this._altGrIsDown = false;
            }
        });
        return this;
    };
    ShortcutsManager.prototype.setKeyDownEvents = function () {
        var _this = this;
        this._managedMathLineInput.keyDown(function (e) {
            /*
            * Set <CTRL + KEY> and <ALT + KEY> shortcuts
            * * */
            if (e.ctrlKey) {
                _this.bindCtrlShortcuts(e);
            }
            if (e.altKey) {
                e.preventDefault();
                _this.bindAltShortcuts(e);
            }
            if (_this._altGrIsDown === true) {
                e.preventDefault();
                _this.bindAltGrShortcuts(e);
            }
            if (e.which === KeyCodes.ALTGR_KEY) {
                _this._altGrIsDown = true;
            }
        });
        return this;
    };
    ShortcutsManager.prototype.bindCtrlShortcuts = function (pEventObj) {
        switch (pEventObj.which) {
            //ctrl + [ ==> lbracket
            case KeyCodes.OPENHOOK_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.writeLatexAtCursorPosition('[');
                break;
            //ctrl + ] ==> rbracket
            case KeyCodes.CLOSEHOOK_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.writeLatexAtCursorPosition(']');
                break;
            //ctrl + D ==> duplicate line
            case KeyCodes.D_KEY:
                if ((this._managedMathLineInput.autoCompleterIsVisible() === false)) {
                    pEventObj.preventDefault();
                    this._managedMathLineInput.duplicateMathLine();
                }
                break;
            //ctrl + \ ==> \
            case KeyCodes.PIPE_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.appendValueAtCursorPosition(' \\backslash ');
                break;
            //ctrl + F ==> Function()
            case KeyCodes.F_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.writeLatexAtCursorPosition('\\text{f}^{\\circ }\\left(_{}^{}\\right)');
                this._managedMathLineInput.keyStroke('Left');
                this._managedMathLineInput.keyStroke('Left');
                break;
            //ctrl + E ==> show / hide outputScreen
            case KeyCodes.E_KEY:
                pEventObj.preventDefault();
                if (g_inputScreen) {
                    g_inputScreen.clickOnShowHideOutputScreenButton();
                }
                else {
                    console.log('ko');
                }
                break;
            //ctrl + K ==> display or hide virtual keyboard
            case KeyCodes.K_KEY:
                if (g_virtualKeyboard) {
                    pEventObj.preventDefault();
                    g_virtualKeyboard.toggle();
                }
                break;
            //ctrl + O ==> o composition de fonction
            case KeyCodes.N0_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.appendValueAtCursorPosition(' \\circ ');
                break;
            //ctrl + P ==> print encapsulation
            case KeyCodes.P_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.printLine();
                break;
            //ctrl + ENTER ==> re-compute the instruction
            case KeyCodes.ENTER_KEY:
                pEventObj.preventDefault();
                console.log('recompute');
                this._managedMathLineInput.processContent();
                break;
            case KeyCodes.M_KEY:
                this._managedMathLineInput.writeLatexAtCursorPosition("\\left[_{ }^{ }\\right]");
                this._managedMathLineInput.keyStroke('Left');
                this._managedMathLineInput.keyStroke('Left');
                break;
            //ctrl + right arrow
            case KeyCodes.RIGHTARROW_KEY:
                this._managedMathLineInput.appendValueAtCursorPosition(' \\mapsto ');
                break;
            //ctrl + down arrow
            case KeyCodes.DOWNARROW_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.addNewMathLineInputOverMe();
                break;
            //ctrl + G ==> become given line
            case KeyCodes.G_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.givenLineToggle();
                break;
            //ctrl + 8
            case KeyCodes.N8_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\infinity');
                break;
            //ctrl + L
            case KeyCodes.L_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.letLineToggle();
                break;
            //ctrl + /
            case KeyCodes.SLASH_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.unprocessedLineToggle();
                break;
            //ctrl + N
            case KeyCodes.N_KEY:
                pEventObj.preventDefault();
                break;
            //ctrl + U ==> display units keyboard
            case KeyCodes.U_KEY:
                pEventObj.preventDefault();
                if (g_virtualKeyboard.isVisible()) {
                    g_virtualKeyboard.displayUnitsPanel();
                }
                else {
                    g_virtualKeyboard.displayUnitsPanel().show();
                }
                break;
            //ctrl + up arrow ==> delete if empty and focus down
            case KeyCodes.UPARROW_KEY:
                pEventObj.preventDefault();
                if (this._managedMathLineInput.isEmpty()) {
                    if (this._managedMathLineInput.hasNextMathLineInput()) {
                        this._managedMathLineInput.nextMathLineInput.focus();
                        this._managedMathLineInput.erase();
                    }
                    else if (this._managedMathLineInput.hasPreviousMathLineInput()) {
                        this._managedMathLineInput.previousMathLineInput.focus();
                        this._managedMathLineInput.erase();
                    }
                }
                break;
            //ctrl + S ==> save
            case KeyCodes.S_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.displaySaveWidget();
                break;
            //ctrl + O ==> open
            case KeyCodes.O_KEY:
                pEventObj.preventDefault();
                this._managedMathLineInput.displayOpenWidget();
                break;
        }
        return this;
    };
    ShortcutsManager.prototype.bindAltGrShortcuts = function (pEventObj) {
        switch (pEventObj.which) {
            //altGR + [ ==> lceil
            case KeyCodes.OPENHOOK_KEY:
                this._managedMathLineInput.mathField.cmd('\\lceil');
                break;
            //altGR + [ ==> lfloor
            case KeyCodes.CLOSEHOOK_KEY:
                this._managedMathLineInput.mathField.cmd('\\rceil');
                break;
        }
        return this;
    };
    ShortcutsManager.prototype.bindAltShortcuts = function (pEventObj) {
        switch (pEventObj.which) {
            //alt + D
            case KeyCodes.D_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\partial');
                break;
            //alt + F
            case KeyCodes.F_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\forall');
                break;
            //alt + G ==> Graph encapsulation
            case KeyCodes.G_KEY:
                pEventObj.preventDefault();
                if (this._managedMathLineInput.isAGraphLine()) {
                    this._managedMathLineInput.stopBeingAGraphLine();
                }
                else {
                    this._managedMathLineInput.becomeAGraphLine();
                    this._managedMathLineInput.keyStroke('Left');
                }
                break;
            //alt + right arrow
            case KeyCodes.RIGHTARROW_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\rightarrow');
                break;
            //alt + left arrow
            case KeyCodes.LEFTARROW_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\leftarrow');
                break;
            //alt + V ==> vector arrows
            case KeyCodes.V_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\vec');
                break;
            //alt + S ==> sum
            case KeyCodes.S_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\sum');
                break;
            //alt + P ==> product
            case KeyCodes.P_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\prod');
                break;
            //alt + ;
            case KeyCodes.SEMICOLON_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\in');
                break;
            //alt + R
            case KeyCodes.R_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\R');
                break;
            //alt + Q
            case KeyCodes.Q_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\Q');
                break;
            //alt + Z
            case KeyCodes.Z_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\Z');
                break;
            //alt + N
            case KeyCodes.N_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\N');
                break;
            //alt + C
            case KeyCodes.C_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\C');
                break;
            //alt + <
            case KeyCodes.OPENCHEVRON_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\supset');
                break;
            //alt + >
            case KeyCodes.CLOSECHEVRON_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\subseteq');
                break;
            //alt + U
            case KeyCodes.U_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\union');
                break;
            //alt + I
            case KeyCodes.I_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\cap');
                break;
            //alt + ~
            case KeyCodes.TILDE_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\simeq');
                break;
            //alt + W
            case KeyCodes.W_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\sqrt');
                break;
            //alt + E
            case KeyCodes.E_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\exists');
                break;
            //alt + 0
            case KeyCodes.N0_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\emptyset');
                break;
            //alt + =
            case KeyCodes.EQUAL_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\neq');
                break;
            //alt + A
            case KeyCodes.A_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\land');
                break;
            //alt + O
            case KeyCodes.O_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\lor');
                break;
            //alt + -
            case KeyCodes.MINUS_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\overline');
                break;
            //alt + T
            case KeyCodes.T_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\perp');
                break;
            //alt + |
            case KeyCodes.PIPE_KEY:
                this._managedMathLineInput.writeLatexAtCursorPosition('\\ |\\ ');
                break;
            //alt + [
            case KeyCodes.OPENHOOK_KEY:
                this._managedMathLineInput.mathField.cmd('\\lfloor');
                break;
            //alt + ]
            case KeyCodes.CLOSEHOOK_KEY:
                this._managedMathLineInput.mathField.cmd('\\rfloor');
                break;
            //alt + 8
            case KeyCodes.N8_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\ast');
                break;
            //alt + 9 ==> degree symbol
            case KeyCodes.N9_KEY:
                this._managedMathLineInput.writeLatexAtCursorPosition('\\text{°}');
                break;
            //alt + 7 ==> differentiate
            case KeyCodes.N7_KEY:
                this._managedMathLineInput.writeLatexAtCursorPosition('\\frac{\\text{d}}{\\text{d}_{ }}');
                this._managedMathLineInput.keyStroke('Left');
                this._managedMathLineInput.keyStroke('Left');
                break;
            //alt + 6
            case KeyCodes.N6_KEY:
                this._managedMathLineInput.appendValueAtCursorPosition('\\partial/\\partial_');
                break;
            //alt + 1
            case KeyCodes.N1_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\neg');
                break;
            //alt + X
            case KeyCodes.X_KEY:
                this._managedMathLineInput.appendCmdAtCursorPosition('\\times');
                break;
        }
        return this;
    };
    return ShortcutsManager;
}());
/*
 * Keys that pressing is supposed to not generate a saveState
 * * */
var unaffectingKeys = [
    KeyCodes.ENTER_KEY,
    KeyCodes.SHIFT_KEY,
    KeyCodes.CTRL_KEY,
    KeyCodes.ALT_KEY,
    KeyCodes.CAPSLOCK_KEY,
    KeyCodes.ESCAPE_KEY,
    KeyCodes.PAGEUP_KEY,
    KeyCodes.PAGEDOWN_KEY,
    KeyCodes.ALTGR_KEY,
    KeyCodes.END_KEY,
];
/*
 * Class UndoRedoManager
 * ----------------------
 * Manages the undo and redo feature in MathLineInputs
 * * */
var UndoRedoManager = /** @class */ (function () {
    function UndoRedoManager(pMathLineInput) {
        this._mathLineInput = pMathLineInput;
        this._YIsDown = false;
        this._ZIsDown = false;
        this._currentState = 0;
        this._buffSize = 100;
        this._typedHistory = [
            {
                value: this._mathLineInput.value(),
                cursorConfiguration: this._mathLineInput.getCursorConfiguration()
            }
        ];
        this.setEvents();
    }
    UndoRedoManager.prototype.getTypedHistory = function () {
        return this._typedHistory;
    };
    UndoRedoManager.prototype.setTypedHistoryWith = function (pTypedHistory) {
        this._typedHistory = pTypedHistory;
        return this;
    };
    UndoRedoManager.prototype.setCurrentStateAt = function (pState) {
        this._currentState = pState;
        return this;
    };
    UndoRedoManager.prototype.rearrangeTypedHistoryArray = function () {
        if (this._typedHistory.length > this._buffSize) {
            var sizeOverflow = ((this._typedHistory.length) - this._buffSize);
            this._currentState = this._currentState - sizeOverflow;
            this._typedHistory = this._typedHistory.slice(this._buffSize * (-1));
        }
        return this;
    };
    UndoRedoManager.prototype.isKeyIsUnaffecting = function (pKey) {
        for (var _i = 0, unaffectingKeys_1 = unaffectingKeys; _i < unaffectingKeys_1.length; _i++) {
            var keyCode = unaffectingKeys_1[_i];
            if (keyCode === pKey) {
                return true;
            }
        }
        return false;
    };
    UndoRedoManager.prototype.isCurrentStateIsLastHistoryState = function () {
        return (this._currentState === (this._typedHistory.length - 1));
    };
    UndoRedoManager.prototype.isCurrentStateIsFirstHistoryState = function () {
        return (this._currentState === 0);
    };
    UndoRedoManager.prototype.saveState = function () {
        if (!(this.isCurrentStateIsLastHistoryState())) {
            this._typedHistory = this._typedHistory.slice(0, (this._currentState + 1));
        }
        this._typedHistory.push({
            value: this._mathLineInput.value(),
            cursorConfiguration: this._mathLineInput.getCursorConfiguration()
        });
        this.rearrangeTypedHistoryArray();
        this._currentState = this._currentState + 1;
        return this;
    };
    UndoRedoManager.prototype.getValueHistoryAtState = function (pState) {
        return this._typedHistory[pState].value;
    };
    UndoRedoManager.prototype.getCursorConfigurationHistoryAtState = function (pState) {
        return this._typedHistory[pState].cursorConfiguration;
    };
    UndoRedoManager.prototype.undo = function () {
        if (!this.isCurrentStateIsFirstHistoryState()) {
            this._currentState = this._currentState - 1;
            this._mathLineInput.setValue(this.getValueHistoryAtState(this._currentState));
            this._mathLineInput.setCursorConfiguration(this.getCursorConfigurationHistoryAtState(this._currentState));
            this._mathLineInput.showCursor();
        }
        else {
            //console.log('do nothing');
        }
        return this;
    };
    UndoRedoManager.prototype.redo = function () {
        if (!this.isCurrentStateIsLastHistoryState()) {
            this._currentState = this._currentState + 1;
            this._mathLineInput.setValue(this.getValueHistoryAtState(this._currentState));
            this._mathLineInput.setCursorConfiguration(this.getCursorConfigurationHistoryAtState(this._currentState));
            this._mathLineInput.showCursor();
        }
        else {
            //console.log('do nothing');
        }
        return this;
    };
    UndoRedoManager.prototype.setEvents = function () {
        this.setKeyUpEvents();
        this.setKeyDownEvents();
        return this;
    };
    UndoRedoManager.prototype.setKeyUpEvents = function () {
        var _this = this;
        this._mathLineInput.keyUp(function (e) {
            if (e.which === KeyCodes.ALT_KEY) {
                e.preventDefault();
            }
            if ((_this.isKeyIsUnaffecting(e.which) === false)
                && (e.ctrlKey === false || (e.ctrlKey === true && e.which === KeyCodes.V_KEY))) {
                _this.saveState();
            }
        });
        return this;
    };
    UndoRedoManager.prototype.setKeyDownEvents = function () {
        var _this = this;
        this._mathLineInput.keyDown(function (e) {
            // ctrl + Z ==> undo
            if (e.ctrlKey && e.which === KeyCodes.Z_KEY) {
                e.preventDefault();
                _this.undo();
            }
            // ctrl + Y ==> redo
            if (e.ctrlKey && e.which === KeyCodes.Y_KEY) {
                e.preventDefault();
                _this.redo();
            }
        });
        return this;
    };
    UndoRedoManager.prototype.getCopy = function (pMathLineInput) {
        var retUndoRedoManager = new UndoRedoManager(pMathLineInput);
        var retTypedHistory = [];
        for (var state in this._typedHistory) {
            retTypedHistory.push({
                value: this._typedHistory[state].value,
                cursorConfiguration: this._typedHistory[state].cursorConfiguration
            });
        }
        retUndoRedoManager.setTypedHistoryWith(retTypedHistory)
            .setCurrentStateAt(this._currentState);
        return retUndoRedoManager;
    };
    return UndoRedoManager;
}());
/*
 * Class SaverNOpenerStateManager
 * ------------------------------
 * Class that manage the save/open states feature.
 *
 * Because the purpose of S4M is to be full in
 * front-end, there will be no way to save files on the
 * computer or use files stored on the computer.
 *
 * So this features will just display or hide a textarea
 * element containing all the content of MathLineInputs
 * in JSON format.
 *
 * Press CTRL + S ==> Save
 * = display the textarea, containing all the contents
 *   of the MathLineinputs in JSON-Format, so we can
 *   copy it, paste it into a text-editor and save it
 *   manually on the computer.
 *   * Press Enter hide the textarea
 *
 * Press CTRL + O ==> Open
 * = display the textarea with an empty JSON-object string
 *   as content, where we can paste the json-format
 *   string previously stored on a file for example.
 *   * Press Enter hide the textarea and load all
 *     MathLineInputs of the JSON-object
 *
 * * */
var SaverNOpenerStateManagerAction;
(function (SaverNOpenerStateManagerAction) {
    SaverNOpenerStateManagerAction["NOTHING"] = "";
    SaverNOpenerStateManagerAction["OPEN"] = "OPEN";
    SaverNOpenerStateManagerAction["SAVE"] = "SAVE";
})(SaverNOpenerStateManagerAction || (SaverNOpenerStateManagerAction = {}));
var SaverNOpenerStateManager = /** @class */ (function () {
    function SaverNOpenerStateManager() {
        this._jQEl = $('<div id="SaverNOpenerStateManager"><textarea autocorrect="off" autocapitalize="off" spellcheck="false"></textarea></div>');
        this._textarea = this._jQEl.find('textarea');
        this._callingMathLineInput = null;
        this._action = SaverNOpenerStateManagerAction.NOTHING;
        this._isVisible = false;
        this._jQEl.appendTo($('body')).hide(0);
        this.setEvents();
    }
    Object.defineProperty(SaverNOpenerStateManager.prototype, "callingMathLineInput", {
        set: function (pValue) {
            this._callingMathLineInput = pValue;
        },
        enumerable: false,
        configurable: true
    });
    SaverNOpenerStateManager.prototype.setActionToSave = function () {
        this._action = SaverNOpenerStateManagerAction.SAVE;
        return this;
    };
    SaverNOpenerStateManager.prototype.setActionToOpen = function () {
        this._action = SaverNOpenerStateManagerAction.OPEN;
        return this;
    };
    SaverNOpenerStateManager.prototype.setActionToNothing = function () {
        this._action = SaverNOpenerStateManagerAction.NOTHING;
        return this;
    };
    SaverNOpenerStateManager.prototype.isActionIsSave = function () {
        return (this._action === SaverNOpenerStateManagerAction.SAVE);
    };
    SaverNOpenerStateManager.prototype.isActionIsOpen = function () {
        return (this._action === SaverNOpenerStateManagerAction.OPEN);
    };
    SaverNOpenerStateManager.prototype.isActionIsNothing = function () {
        return (this._action === SaverNOpenerStateManagerAction.NOTHING);
    };
    /*
     * Replace all non printable chars with nothing
     * * */
    SaverNOpenerStateManager.prototype.secureStr = function (pStr) {
        return pStr.replace(/[^ -~]+/g, "");
    };
    SaverNOpenerStateManager.prototype.show = function () {
        var _this = this;
        if (this.isActionIsSave() || this.isActionIsOpen()) {
            if (this.isActionIsSave()) {
                this._textarea.val(this.secureStr(this.getJSONState()));
                this.disableEditing();
            }
            else if (this.isActionIsOpen()) {
                this._textarea.val('{"MathLineInputsValues":[""]}');
                this.enableEditing();
            }
            this._jQEl.fadeIn(100, function () {
                _this._textarea.select();
                _this._isVisible = true;
            });
        }
        return this;
    };
    SaverNOpenerStateManager.prototype.hide = function () {
        var _this = this;
        this._jQEl.fadeOut(100, function () {
            var callingMathLineInput = _this.getCallingMathLineInput();
            _this._textarea.val('');
            _this.setActionToNothing();
            _this._isVisible = false;
            if (callingMathLineInput !== null) {
                callingMathLineInput.focus();
            }
        });
        return this;
    };
    SaverNOpenerStateManager.prototype.isVisible = function () {
        return this._isVisible;
    };
    SaverNOpenerStateManager.prototype.getCallingMathLineInput = function () {
        return this._callingMathLineInput;
    };
    SaverNOpenerStateManager.prototype.getLastMathLineInput = function () {
        var retMathLineInput = this._callingMathLineInput;
        if (retMathLineInput !== null) {
            retMathLineInput = retMathLineInput.getLastMathLineInput();
        }
        return retMathLineInput;
    };
    SaverNOpenerStateManager.prototype.getFirstMathLineInput = function () {
        var retMathLineInput = this._callingMathLineInput;
        if (retMathLineInput !== null) {
            retMathLineInput = retMathLineInput.getFirstMathLineInput();
        }
        return retMathLineInput;
    };
    SaverNOpenerStateManager.prototype.enableEditing = function () {
        this._textarea.attr('readonly', false);
        return this;
    };
    SaverNOpenerStateManager.prototype.disableEditing = function () {
        this._textarea.attr('readonly', true);
        return this;
    };
    SaverNOpenerStateManager.prototype.setEvents = function () {
        var _this = this;
        this._jQEl.keydown(function (pEventObj) {
            switch (pEventObj.which) {
                case KeyCodes.ESCAPE_KEY:
                    _this.hide();
                    break;
                case KeyCodes.ENTER_KEY:
                    pEventObj.preventDefault();
                    if (_this.isActionIsOpen()) {
                        var textareaValue = _this.secureStr(_this._textarea.val());
                        var state = JSON.parse(textareaValue.valueOf());
                        _this.replaceMathLineInputs(state['MathLineInputsValues']);
                    }
                    _this.hide();
                    break;
            }
        });
        return this;
    };
    SaverNOpenerStateManager.prototype.eraseMathLineInputs = function () {
        var currentMathLineInput = this.getLastMathLineInput();
        while (currentMathLineInput !== null) {
            currentMathLineInput.nextMathLineInput = null;
            currentMathLineInput.removeFromDOM();
            currentMathLineInput = currentMathLineInput.previousMathLineInput;
        }
        return this;
    };
    SaverNOpenerStateManager.prototype.checkState = function () {
        return true;
    };
    SaverNOpenerStateManager.prototype.replaceMathLineInputs = function (pState) {
        var callingMathLineInput = this.getCallingMathLineInput();
        if ((callingMathLineInput !== null) && this.checkState()) {
            if (pState.length !== 0) {
                this.eraseMathLineInputs();
                var mathLineInput = new MathLineInput(callingMathLineInput.container, this);
                mathLineInput.appendToContainer()
                    .setValue(pState[0])
                    .setStyle();
                pState = pState.slice(1);
                for (var index in pState) {
                    mathLineInput = mathLineInput.createNewMathLineInputAndAppendAfter(mathLineInput);
                    mathLineInput.setValue(pState[index])
                        .setStyle();
                }
                mathLineInput.getLastMathLineInput().focus();
            }
        }
        return this;
    };
    SaverNOpenerStateManager.prototype.getJSONState = function () {
        var retObj = {
            MathLineInputsValues: Array()
        };
        var mathLineInput = this.getFirstMathLineInput();
        while (mathLineInput !== null) {
            retObj.MathLineInputsValues.push(this.secureStr(mathLineInput.value()));
            mathLineInput = mathLineInput.nextMathLineInput;
        }
        return JSON.stringify(retObj);
    };
    return SaverNOpenerStateManager;
}());
var g_keywordsList = [
    {
        keyword: "\\exists",
        tags: "exist",
    },
    {
        keyword: "\\exists!",
        tags: "exist",
    },
    {
        keyword: "\\nexists",
        tags: "existe",
    },
    {
        keyword: "\\neg",
        tags: "not neg",
    },
    {
        keyword: "\\forall",
        tags: "forall",
    },
    {
        keyword: "\\Longrightarrow",
        tags: "arrow",
    },
    {
        keyword: "\\neq",
        tags: "neq",
    },
    {
        keyword: "\\nsubseteq",
        tags: "included",
    },
    {
        keyword: "\\subsetneq",
        tags: "included",
    },
    {
        keyword: "\\notin ",
        tags: "in",
    },
    {
        keyword: "\\ngtr",
        tags: "greater",
    },
    {
        keyword: "\\ngeq",
        tags: "greater",
    },
    {
        keyword: "\\nsupseteq",
        tags: "include",
    },
    {
        keyword: "\\supsetneq",
        tags: "include",
    },
    {
        keyword: "\\subset",
        tags: "include",
    },
    {
        keyword: "\\subseteq",
        tags: "include",
    },
    {
        keyword: "\\supset",
        tags: "include",
    },
    {
        keyword: "\\supseteq",
        tags: "include",
    },
    {
        keyword: "\\emptyset",
        tags: "set empty",
    },
    {
        keyword: "\\ni",
        tags: "in",
    },
    {
        keyword: "\\in",
        tags: "in",
    },
    {
        keyword: "\\cup",
        tags: "union",
    },
    {
        keyword: "\\cap",
        tags: "inter",
    },
    {
        keyword: "\\in",
        tags: "in",
    },
    {
        keyword: "\\lor",
        tags: "or",
    },
    {
        keyword: "\\Longrightarrow",
        tags: "arrow implies",
    },
    {
        keyword: "\\implies",
        tags: "implies",
    },
    {
        keyword: "\\Rightarrow",
        tags: "arrow",
    },
    {
        keyword: "\\Longleftarrow",
        tags: "arrow",
    },
    {
        keyword: "\\Leftarrow",
        tags: "arrow",
    },
    {
        keyword: " \\Leftrightarrow",
        tags: "arrow",
    },
    {
        keyword: "\\iff",
        tags: "equiv iff",
    },
    {
        keyword: "\\overline ",
        tags: "overline",
    },
    {
        keyword: "\\perp",
        tags: "perpendicular",
    },
    {
        keyword: "\\parallel",
        tags: "parallel",
    },
    {
        keyword: "\\nparallel",
        tags: "parallel",
    },
    {
        keyword: "\\lceil",
        tags: "ceil approx round",
    },
    {
        keyword: "\\rceil",
        tags: "ceil approx round",
    },
    {
        keyword: "\\lfloor",
        tags: "floor approx round",
    },
    {
        keyword: "\\rfloor",
        tags: "floor approx round",
    },
    {
        keyword: "\\rightarrow",
        tags: "right arrow",
    },
    {
        keyword: "\\mapsto",
        tags: "arrow",
    },
    {
        keyword: "\\leftarrow",
        tags: "left arrow",
    },
    {
        keyword: "\\Rightarrow",
        tags: "right arrow",
    },
    {
        keyword: "\\Leftarrow",
        tags: "left arrow",
    },
    {
        keyword: "\\longrightarrow",
        tags: "long right arrow",
    },
    {
        keyword: "\\longleftarrow",
        tags: "long left arrow",
    },
    {
        keyword: "\\Longrightarrow",
        tags: "long right arrow",
    },
    {
        keyword: "\\Longleftarrow",
        tags: "long left arrow",
    },
    {
        keyword: "\\uparrow",
        tags: "up arrow",
    },
    {
        keyword: "\\downarrow",
        tags: "down arrow",
    },
    {
        keyword: "\\updownarrow",
        tags: "up down arrow",
    },
    {
        keyword: "\\Uparrow",
        tags: "up arrow",
    },
    {
        keyword: "\\Downarrow",
        tags: "down arrow",
    },
    {
        keyword: "\\Updownarrow",
        tags: "up down arrow",
    },
    {
        keyword: "\\partial",
        tags: "round d partial",
    },
    {
        keyword: "\\nabla",
        tags: "del nabla",
    },
    {
        keyword: "\\infty",
        tags: "infinity",
    },
    {
        keyword: "\\downarrow",
        tags: "down arrow",
    },
    {
        keyword: "Function",
        tags: "function",
    },
    {
        keyword: "Equation",
        tags: "equation",
    },
    {
        keyword: "Vector",
        tags: "vect",
    },
    {
        keyword: "Matrix",
        tags: "matrix",
    },
    {
        keyword: "Bool",
        tags: "bool",
    },
];
/******************************************************************************************
* AutoCompleterManager:
* Wrapper object that wrap the textarea where the auto-completion takes place.
* It reimplements the functions of the textarea jQuery element
* and implements new ones.
* */
var AutoCompleterManager = /** @class */ (function () {
    function AutoCompleterManager(pInputTextElement) {
        this._inputTextElement = pInputTextElement;
        this._autoCompletionWidget = new AutoCompletionWidget(this);
    }
    /*
    * AutoCompleterManager.keydown():
    * Shortcut to use this.jqEl.keydown
    * */
    AutoCompleterManager.prototype.keyDown = function (pFunction) {
        this._inputTextElement.keyDown(pFunction);
    };
    AutoCompleterManager.prototype.deleteLeftWord = function (pWordLen) {
        this._inputTextElement.deleteLeftWord(pWordLen);
    };
    AutoCompleterManager.prototype.updateContentAndShow = function (pKwList) {
        this._autoCompletionWidget.updateContentAndShow(pKwList);
    };
    AutoCompleterManager.prototype.getValueFromInputText = function () {
        return this._inputTextElement.value();
    };
    AutoCompleterManager.prototype.selectNextKeyword = function () {
        this._autoCompletionWidget.selectNextKeyword();
    };
    AutoCompleterManager.prototype.selectPreviousKeyword = function () {
        this._autoCompletionWidget.selectPreviousKeyword();
    };
    AutoCompleterManager.prototype.setValueToInputText = function (pValue) {
        this._inputTextElement.setValue(pValue);
    };
    AutoCompleterManager.prototype.isVisible = function () {
        return this._autoCompletionWidget.isVisible();
    };
    AutoCompleterManager.prototype.getSelectedKeyword = function () {
        return this._autoCompletionWidget.getSelectedKeyword();
    };
    AutoCompleterManager.prototype.hide = function () {
        this._autoCompletionWidget.hide();
    };
    AutoCompleterManager.prototype.show = function () {
        this._autoCompletionWidget.show();
    };
    AutoCompleterManager.prototype.setVisibility = function (pBool) {
        this._autoCompletionWidget.setVisibility(pBool);
    };
    /*
    * AutoCompleterManager.keyup():
    * Shortcut to use this.jqEl.keyup
    * */
    AutoCompleterManager.prototype.keyUp = function (pFunction) {
        this._inputTextElement.keyUp(pFunction);
    };
    /*
    * AutoCompleterManager.focus():
    * Put the focus on the AutoCompleterManager
    * */
    AutoCompleterManager.prototype.focus = function () {
        this._inputTextElement.focus();
    };
    /*
    * AutoCompleterManager.getSelectionStart():
    * Returns the selectionStart value of the <textatrea#input> element.
    * This will be rewrote in a near future to be up to date ==> <REWRITE>
    * */
    AutoCompleterManager.prototype.getSelectionStart = function () {
        // return this._inputTextElement.get(0).selectionStart;
        return 42;
    };
    /*
    * AutoCompleterManager.getInputStr():
    * Gives the content of the AutoCompleterManager in raw str
    * */
    AutoCompleterManager.prototype.getInputStr = function () {
        return this._inputTextElement.value();
    };
    /*
    * AutoCompleterManager.getCurrentlyTypingWord():
    * Returns the word being typed by the user.
    * This function is used to filter the keywordsList in order to
    * display the suggested keywords according to what the user is currently typing.
    * */
    AutoCompleterManager.prototype.getCurrentlyTypingWord = function () {
        // const words = this.getInputStr()
        //                 .replace(/_/g, ' ')
        //                 .replace(/\^/g, ' ')
        //                 .replace(/\{/g, ' ')
        //                 .replace(/\}/g, ' [END_BRACKET]')
        //                 .replace(/\\left\(/g, ' ')
        //                 .replace(/\\right\)/g, ' [END_PARENTHESIS]')
        //                 .replace('\\', ' ')
        //                 .split(' ');
        // let typingWord = '[END_BRACKET]';
        // while (typingWord === '[END_BRACKET]' || typingWord === '[END_PARENTHESIS]') {
        //     typingWord = (words.at(-1) !== undefined ? words.pop() : '');
        // }
        // if (typingWord.indexOf('[END_BRACKET]') !== -1) {
        //     typingWord = typingWord.replace(/\[END_BRACKET\]/g, '')
        // }
        // if (typingWord.indexOf('[END_PARENTHESIS]') !== -1) {
        //     typingWord = typingWord.replace(/\[END_PARENTHESIS\]/g, '')
        // }
        var typingWord = 'pouet';
        return typingWord;
    };
    ;
    /*
     * AutoCompleterManager.getCaretCoordinates():
     * Returns the Top and Left coordinates of the caret in the AutoCompleterManager.
     * Uses getCaretCoordinates() function defined in  ./textareaCaretPosition.js.
     * The code and a lot of other features are available here: https://github.com/component/textarea-caret-position
     * */
    AutoCompleterManager.prototype.getCursorCoordinates = function () {
        return this._inputTextElement.getCursorCoordinates();
    };
    /*
     * AutoCompleterManager.setContent(pValue):
     * Erase all the content of the AutoCompleterManager and set its content to pValue
     * */
    AutoCompleterManager.prototype.setContent = function (pValue) {
        this._inputTextElement.setValue(pValue);
    };
    AutoCompleterManager.prototype.addContent = function (pValue) {
        this._inputTextElement.appendValueAtCursorPosition(pValue);
    };
    AutoCompleterManager.prototype.addCmd = function (pValue) {
        this._inputTextElement.appendCmdAtCursorPosition(pValue);
    };
    return AutoCompleterManager;
}());
/******************************************************************************************
* AutoCompletionWidget:
* Wrapper Object that manages the auto-completion Widget displayed over the textarea.
* Attributes are:
* - this.currentKeywordSelectedIndex = the index of the selected keyword in the widget
*                                      (-1 if no keyword is selected)
* - this.nbKeywords = the number of keywords displayed in the widget
* - this.isVisible = boolean, true if the widget is asked to be visible while typing,
*                    false if not.
*
* - this.AutoCompleterManager = the AutoCompleterManager Object where the auto-completion takes place
* */
var AutoCompletionWidget = /** @class */ (function () {
    function AutoCompletionWidget(pAutoCompleterManager) {
        this._jQEl = $('<ul id="auto_completer"></ul>');
        this.hide(0);
        this.appendTo($('body'));
        this._currentKeywordSelectedIndex = -1;
        this._nbKeywords = 0;
        this._isVisible = false;
        this._autoCompleterManager = pAutoCompleterManager;
    }
    /*
    * AutoCompletionWidget.show():
    * Displays the auto-completion widget in the AutoCompleterManager
    * */
    AutoCompletionWidget.prototype.show = function () {
        this._jQEl.fadeIn(100);
    };
    ;
    AutoCompletionWidget.prototype.isVisible = function () {
        return this._isVisible;
    };
    /*
    * AutoCompletionWidget.hide():
    * Hides the auto-completion widget
    * */
    AutoCompletionWidget.prototype.hide = function (pTime) {
        var _this = this;
        if (pTime === void 0) { pTime = 100; }
        this._jQEl.fadeOut(100, function () {
            _this.emptyContent();
        });
    };
    ;
    AutoCompletionWidget.prototype.appendTo = function (pElement) {
        this._jQEl.appendTo(pElement);
    };
    AutoCompletionWidget.prototype.setVisibility = function (pBool) {
        this._isVisible = pBool;
    };
    /*
    * AutoCompletionWidget.emptyContent():
    * Empty the content of the widget
    * */
    AutoCompletionWidget.prototype.emptyContent = function () {
        this._jQEl.html('');
        this._nbKeywords = 0;
        this._currentKeywordSelectedIndex = -1;
    };
    ;
    /*
    * AutoCompletionWidget.getLiElements():
    * Returns all Li elements contained in the widget
    * */
    AutoCompletionWidget.prototype.getLiElements = function () {
        return this._jQEl.find('li');
    };
    /*
    * AutoCompletionWidget.positionWidgetUnderCaret():
    * Positions the widget under the caret of the textarea
    * For now, it shifts the coordinates to 30px down and 5px right
    * but in the near future we will shift with relative values
    * to give more flexibility and adapt font-sizes that have not
    * default values.
    * */
    AutoCompletionWidget.prototype.positionWidgetUnderCursor = function () {
        var caretCoords = this._autoCompleterManager.getCursorCoordinates();
        this._jQEl.css({
            "top": '' + (caretCoords.top.valueOf() + 30) + 'px',
            "left": '' + (caretCoords.left.valueOf() + 5) + 'px',
        });
    };
    /*
    * AutoCompletionWidget.getFirstLiElement():
    * Returns the first Li elements contained in the widget
    * */
    AutoCompletionWidget.prototype.getFirstLiElement = function () {
        return this.getLiElements().first();
    };
    /*
    * AutoCompletionWidget.setLiElementSelected(pLiElement):
    * Takes a Li element (pLiElement) contained in the widget and set it to selected
    * */
    AutoCompletionWidget.prototype.setLiElementSelected = function (pLiElement) {
        pLiElement.addClass('selected_keyword');
    };
    /*
    * AutoCompletionWidget.setLiElementUnselected(pLiElement):
    * Takes a Li element (pLiElement) contained in the widget and set it to NOT selected
    * */
    AutoCompletionWidget.prototype.setLiElementUnselected = function (pLiElement) {
        pLiElement.removeClass('selected_keyword');
    };
    /*
    * AutoCompletionWidget.updateContentAndShow(pKwList):
    * Updates the content of the widget by clearing its content
    * and filling it with the keyword list given in argument (pKwList).
    * Then it displays it if there is at leat one keyword, or hide it if not.
    * */
    AutoCompletionWidget.prototype.updateContentAndShow = function (pKwList) {
        this.emptyContent();
        this._nbKeywords = pKwList.length;
        if (pKwList.length !== 0) {
            this.positionWidgetUnderCursor();
            for (var _i = 0, pKwList_1 = pKwList; _i < pKwList_1.length; _i++) {
                var keyword = pKwList_1[_i];
                this._jQEl.append($('<li>' + keyword + '</li>'));
            }
            if (this._currentKeywordSelectedIndex === -1) {
                this.setLiElementSelected(this.getFirstLiElement());
                this._currentKeywordSelectedIndex = 0;
            }
            this.show();
        }
        else {
            this.hide();
        }
    };
    /*
    * AutoCompletionWidget.getSelectedLiEl():
    * Returns the selected Li element in the widget
    * */
    AutoCompletionWidget.prototype.getSelectedLiEl = function () {
        return $(this.getLiElements().get(this._currentKeywordSelectedIndex));
    };
    /*
    * AutoCompletionWidget.getSelectedKeyword():
    * Returns the selected keyword in the widget
    * */
    AutoCompletionWidget.prototype.getSelectedKeyword = function () {
        return this.getSelectedLiEl().text();
    };
    ;
    /*
    * AutoCompletionWidget.selectNextKeyword():
    * Set to selected the Li element in the widget that is next to the currently
    * selected Li element, and unselect this one
    * */
    AutoCompletionWidget.prototype.selectNextKeyword = function () {
        var selectedLiEl = this.getSelectedLiEl();
        var nextLiEl = selectedLiEl.next();
        if (nextLiEl.length !== 0) {
            this.setLiElementUnselected(selectedLiEl);
            nextLiEl.addClass('selected_keyword');
            this._currentKeywordSelectedIndex += 1;
        }
    };
    ;
    /*
    * AutoCompletionWidget.selectPreviousKeyword():
    * Set to selected the Li element in the widget that is before the currently
    * selected Li element, and unselect this one
    * */
    AutoCompletionWidget.prototype.selectPreviousKeyword = function () {
        var selectedLiEl = this.getSelectedLiEl();
        var previousLiEl = selectedLiEl.prev();
        if (previousLiEl.length !== 0) {
            this.setLiElementUnselected(selectedLiEl);
            previousLiEl.addClass('selected_keyword');
            this._currentKeywordSelectedIndex -= 1;
        }
    };
    return AutoCompletionWidget;
}());
/*******************************************************************************************
* ClickAndKeyListener:
* Object that Manages the events definition
* */
var ClickAndKeyListener = /** @class */ (function () {
    function ClickAndKeyListener(pAutoCompleterManager) {
        this._IsCtrlKeyIsDown = false;
        this._autoCompleterManager = pAutoCompleterManager;
    }
    /*
    * ClickAndKeyListener.setKeydownEventsToAutoCompleterManager(pController):
    * Definition of what to do when we press keys in the AutoCompleterManager.
    *  .  CTRL + SPACE ==> display / hide the auto-completer widget
    *  .  UP / DOWN / ENTER / BACKSPACE ==> navigation into the auto-completer widget
    *  .  ESCAPE ==> hide auto-completer widget
    * */
    ClickAndKeyListener.prototype.setKeyDownEventsToAutoCompleterManager = function (pController) {
        var _this = this;
        this._autoCompleterManager.keyDown(function (e) {
            if (e.which === KeyCodes.CTRL_KEY) {
                _this._IsCtrlKeyIsDown = true;
            }
            /*
             * Ctrl key down + SPACE
             * */
            if (_this._IsCtrlKeyIsDown) {
                if (e.which === KeyCodes.SPACE_KEY) {
                    if (_this._autoCompleterManager.isVisible() === true) {
                        _this._autoCompleterManager.hide();
                        _this._autoCompleterManager.setVisibility(false);
                    }
                    else {
                        var keywordsList = pController.getFormatedMatchkingKeywordsList();
                        if (keywordsList.length === 1) {
                            _this.writeKeyword(keywordsList[0]);
                        }
                        else {
                            _this._autoCompleterManager.updateContentAndShow(keywordsList);
                            _this._autoCompleterManager.setVisibility(true);
                        }
                    }
                }
                /*
                 * Ctrl key is up and auto-completer widget is visibles
                 * */
            }
            else if (_this._autoCompleterManager.isVisible()) {
                if (e.which === KeyCodes.ENTER_KEY) {
                    var selectedKeyword = _this._autoCompleterManager.getSelectedKeyword();
                    // const currentlyTypingWord = this._autoCompleterManager.getCurrentlyTypingWord();
                    // const inputStr = this._autoCompleterManager.getInputStr();
                    //let startText = inputStr.substring(0, this.AutoCompleterManager.getSelectionStart() - currentlyTypingWord.length);
                    //let endText = inputStr.substring(this.AutoCompleterManager.getSelectionStart(), inputStr.length);
                    // console.log(selectedKeyword);
                    if (selectedKeyword !== '') {
                        _this.writeKeyword(selectedKeyword);
                        _this._autoCompleterManager.hide();
                        _this._autoCompleterManager.setVisibility(false);
                        e.preventDefault();
                    }
                }
                else if (e.which === KeyCodes.DOWNARROW_KEY) {
                    _this._autoCompleterManager.selectNextKeyword();
                    e.preventDefault();
                }
                else if (e.which === KeyCodes.UPARROW_KEY) {
                    _this._autoCompleterManager.selectPreviousKeyword();
                    e.preventDefault();
                }
            }
        });
    };
    ClickAndKeyListener.prototype.writeKeyword = function (pSelectedKeyword) {
        this._autoCompleterManager.deleteLeftWord(this._autoCompleterManager.getCurrentlyTypingWord().length);
        if (pSelectedKeyword[0] === '\\') {
            this._autoCompleterManager.addCmd(pSelectedKeyword);
        }
        else {
            this._autoCompleterManager.addContent(pSelectedKeyword);
        }
    };
    /*
    * ClickAndKeyListener.setKeyupEventsToAutoCompleterManager():
    * Definition of what to do when we release keys in the AutoCompleterManager.
    * Very usefull to manage the navigation into the auto-completionWidget
    * */
    ClickAndKeyListener.prototype.setKeyUpEventsToAutoCompleterManager = function (pController) {
        var _this = this;
        this._autoCompleterManager.keyUp(function (e) {
            if (_this._autoCompleterManager.isVisible()
                && (e.which !== KeyCodes.UPARROW_KEY)
                && (e.which !== KeyCodes.DOWNARROW_KEY)) {
                _this._autoCompleterManager.updateContentAndShow(pController.getFormatedMatchkingKeywordsList());
            }
            if (e.which === KeyCodes.CTRL_KEY) {
                _this._IsCtrlKeyIsDown = false;
            }
        });
    };
    /*
    * ClickAndKeyListener.setkeyAndMouseEvents():
    * Set all events definitions of the ClickAndKeyListener object
    * */
    ClickAndKeyListener.prototype.setkeyAndMouseEvents = function (pController) {
        this.setKeyDownEventsToAutoCompleterManager(pController);
        this.setKeyUpEventsToAutoCompleterManager(pController);
    };
    ;
    return ClickAndKeyListener;
}());
/*******************************************************************************************
* AutoCompleter:
* Controller object of the auto-completion feature.
* Manages the events setting through ClickAndKeyListener object
* */
var AutoCompleter = /** @class */ (function () {
    function AutoCompleter(pInputTextElement, pKeywordsList) {
        this._keywordsList = pKeywordsList;
        this._autoCompleterManager = new AutoCompleterManager(pInputTextElement);
        this._clickAndKeyListener = new ClickAndKeyListener(this._autoCompleterManager);
        this._clickAndKeyListener.setkeyAndMouseEvents(this);
    }
    AutoCompleter.prototype.isVisible = function () {
        return this._autoCompleterManager.isVisible();
    };
    AutoCompleter.prototype.hide = function () {
        this._autoCompleterManager.hide();
        this._autoCompleterManager.setVisibility(false);
    };
    /*
    * AutoCompleter.getMatchkingKeywordsList():
    * Returns an array containing all keywords contained in the pList object,
    * but only the word or that is currently typed in the AutoCompleterManager is contained
    * in the keyword or its tags.
    * */
    AutoCompleter.prototype.getMatchkingKeywordsList = function () {
        var currentlyTypingWord = this._autoCompleterManager.getCurrentlyTypingWord().toLowerCase();
        return this._keywordsList.filter(function (el) { return ((el.keyword.toLowerCase().indexOf(currentlyTypingWord) !== -1)
            || (el.tags.toLowerCase().indexOf(currentlyTypingWord) !== -1)); });
    };
    /*
    * Controller.getKeywordsList():
    * Returns an array containing all keywords contained in the pList object,
    * but only the word or that is currently typed in the AutoCompleterManager is contained
    * in the keyword or its tags.
    * But here, "keyword" is meant the string part before the opening parenthesis.
    * To be clear:
    * - if the keyword is a function, like "solv(VAR, EXPR)", the returned keyword in in the array
    *   will be "solv()"
    * - if the keyword isn't a function, like "Infinity", the returned keyword in the array
    *   will be "Infinity"
    *
    * */
    AutoCompleter.prototype.getFormatedMatchkingKeywordsList = function () {
        var helperKeywordsList = this.getMatchkingKeywordsList();
        var retKeywords = helperKeywordsList.map(function (el) {
            var indexOfOpeningParenthesis = el.keyword.indexOf('(');
            if (indexOfOpeningParenthesis !== -1) {
                return el.keyword.substring(0, indexOfOpeningParenthesis + 1) + ')';
            }
            else {
                return el.keyword;
            }
        });
        return (retKeywords.slice(0, 11));
    };
    return AutoCompleter;
}());
