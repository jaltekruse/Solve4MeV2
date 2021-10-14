declare function $(pStr: String): JQueryElement;

interface MathLineInput {
    focus(): MathLineInput;
    value(): String;
    setValue(pValue: String): MathLineInput;
    appendValueAtCursorPosition(pValue: String): MathLineInput;
    appendCmdAtCursorPosition(pValue: String): MathLineInput;
    writeLatexAtCursorPosition(pLatex: String): MathLineInput;
    isEmpty(): Boolean;
    appendTo(pElement: JQueryElement): MathLineInput;
    appendToContainer(): MathLineInput;
    insertAfter(pElement: JQueryElement): MathLineInput;
    insertBefore(pElement: JQueryElement): MathLineInput;
    hasPreviousMathLineInput(): Boolean;
    hasNextMathLineInput(): Boolean;
    setCtrlToDown(): MathLineInput;
    createNewMathLineInputAndAppendBefore(pMathLineInput: MathLineInput): MathLineInput;
    createNewMathLineInputAndAppendAfter(pMathLineInput: MathLineInput): MathLineInput;
    erase(): MathLineInput;
    removeFromDOM(): MathLineInput;
    keyDown(pFunction: Function): MathLineInput;
    keyUp(pFunction: Function): MathLineInput;
    autoCompleterIsVisible(): Boolean;
    blur(): MathLineInput;
    keyStroke(pKey: String): MathLineInput;
    deleteLeftWord(pWordLen: number): MathLineInput;
    setStyle(): MathLineInput;
    isAGivenLine(): Boolean;
    isASeparatorLine(): Boolean;
    isALetLine(): Boolean;
    isACommentLine(): Boolean;
    isAPrintLine(): Boolean;
    isAGraphLine(): Boolean;
    stopBeingAGivenLine(): MathLineInput;
    stopBeingALetLine(): MathLineInput;
    stopBeingAPrintLine(): MathLineInput;
    stopBeingAGraphLine(): MathLineInput;
    becomeAGivenLine(): MathLineInput;
    becomeALetLine(): MathLineInput;
    becomeAPrintLine(): MathLineInput;
    becomeAGraphLine(): MathLineInput;
    prependToFieldKeyword(pKeyword: String, pFollowingStr: String): MathLineInput;
    shiftKeywordInField(pKeyword: String): MathLineInput;
    saveUndoRedoState(): MathLineInput;
    moveCursorToLeftEnd(): MathLineInput;
    moveCursorToRightEnd(): MathLineInput;
    showCursor(): MathLineInput;
    addNewMathLineInputOverMe(): MathLineInput;
    duplicateMathLine(): MathLineInput;
    getFirstMathLineInput(): MathLineInput;
    getLastMathLineInput(): MathLineInput;
    processContent(): MathLineInput;
    letLineToggle(): MathLineInput;
    givenLineToggle(): MathLineInput;
    unprocessedLineToggle(): MathLineInput;
    doIfKeyEnter(): MathLineInput;
    doIfKeyBackspace(): MathLineInput;
    displaySaveWidget(): MathLineInput;
    displayOpenWidget(): MathLineInput;
    printLine(): MathLineInput;
    saveWidgetToggle(): MathLineInput;
    openWidgetToggle(): MathLineInput;
    undo(): MathLineInput;
    redo(): MathLineInput;
    delete(): void;
}