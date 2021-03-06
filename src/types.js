"use strict";
/**
*   EditorGrammar Codebase
*   @version: @@VERSION@@
*
*   https://github.com/foo123/editor-grammar
**/


//
// types
var    
TOKENS = 1, ERRORS = 2, FLAT = 32, REQUIRED = 4, ERROR = 8,
CLEAR_REQUIRED = ~REQUIRED, CLEAR_ERROR = ~ERROR, REQUIRED_OR_ERROR = REQUIRED | ERROR,

// action types
A_NOP = 0, A_ERROR = 4,
A_DEFINE = 8, A_UNDEFINE = 9,
A_DEFINED = 10, A_NOTDEFINED = 11, A_UNIQUE = 12,
A_CTXSTART = 16, A_CTXEND = 17,
A_HYPCTXSTART = 18, A_HYPCTXEND = 19,
A_MCHSTART = 32, A_MCHEND = 33,
A_FOLDSTART = 64, A_FOLDEND = 65, /*TODO*/
A_INDENT = 128, A_OUTDENT = 129, /*TODO*/

// pattern types
P_SIMPLE = 2,
P_COMPOSITE = 4,
P_BLOCK = 8,

// token types
T_ACTION = 4,
T_SOF = 8, T_FNBL = 9, T_EOL = 16/*=T_NULL*/, T_SOL = 32, T_EOF = 64,
T_EMPTY = 128, T_NONSPACE = 256,
T_INDENTATION = 129, T_DEDENTATION = 130, /*TODO*/
T_SIMPLE = 512,
T_BLOCK = 1024, T_COMMENT = 1025,
T_ALTERNATION = 2048,
T_SEQUENCE = 4096,
T_REPEATED = 8192, T_ZEROORONE = 8193, T_ZEROORMORE = 8194, T_ONEORMORE = 8195,
T_LOOKAHEAD = 16384, T_POSITIVE_LOOKAHEAD = T_LOOKAHEAD, T_NEGATIVE_LOOKAHEAD = 16385,
T_NGRAM = 32768, T_SUBGRAMMAR = 65536,
T_SEQUENCE_OR_NGRAM = T_SEQUENCE|T_NGRAM,
T_COMPOSITE = T_ALTERNATION|T_SEQUENCE|T_REPEATED|T_LOOKAHEAD|T_NGRAM|T_SUBGRAMMAR,

// tokenizer types
tokenTypes = {
action: T_ACTION,
simple: T_SIMPLE,
block: T_BLOCK, comment: T_COMMENT,
subgrammar: T_SUBGRAMMAR,
alternation: T_ALTERNATION,
sequence: T_SEQUENCE,
repeat: T_REPEATED, zeroorone: T_ZEROORONE, zeroormore: T_ZEROORMORE, oneormore: T_ONEORMORE,
positivelookahead: T_POSITIVE_LOOKAHEAD, negativelookahead: T_NEGATIVE_LOOKAHEAD,
ngram: T_NGRAM
},

$T_SOF$ = '$|SOF|$', $T_FNBL$ = '$|NONBLANK|$', $T_SOL$ = '$|SOL|$', $T_EOL$ = '$|EOL|$', $T_NULL$ = '$|ENDLINE|$',
$T_EMPTY$ = '$|EMPTY|$', $T_NONSPACE$ = '$|NONSPACE|$'
//$T_SPACE$ = '$|SPACE|$'
;
