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
A_ERROR = 4,
A_INDENT = 8,
A_OUTDENT = 16,
A_CTXSTART = 32,
A_CTXEND = 64,
A_MCHSTART = 128,
A_MCHEND = 256,
A_UNIQUE = 512,

// pattern types
P_SIMPLE = 2,
P_COMPOSITE = 4,
P_BLOCK = 8,

// token types
T_ACTION = 4,
T_SOF = 8, T_FNBL = 9, T_EOL = 16/*=T_NULL*/, T_SOL = 32, T_EOF = 64,
T_EMPTY = 128, T_NONSPACE = 256,
T_SIMPLE = 512,
T_BLOCK = 1024, T_COMMENT = 1025,
T_ALTERNATION = 2048,
T_SEQUENCE = 4096,
T_REPEATED = 8192, T_ZEROORONE = 8193, T_ZEROORMORE = 8194, T_ONEORMORE = 8195,
T_LOOKAHEAD = 16384, T_POSITIVE_LOOKAHEAD = T_LOOKAHEAD, T_NEGATIVE_LOOKAHEAD = 16385, 
T_NGRAM = 32768,
T_SEQUENCE_OR_NGRAM = T_SEQUENCE|T_NGRAM,
T_COMPOSITE = T_ALTERNATION|T_SEQUENCE|T_REPEATED|T_LOOKAHEAD|T_NGRAM,

// tokenizer types
tokenTypes = {
action: T_ACTION,
simple: T_SIMPLE,
block: T_BLOCK, comment: T_COMMENT,
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