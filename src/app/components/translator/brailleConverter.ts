export function latinToBraille(text: string): string {
    const brailleDict: { [key: string]: string } = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
        'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
        'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
        'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
        'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
        'z': '⠵',
        '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉', '4': '⠼⠙', '5': '⠼⠑',
        '6': '⠼⠋', '7': '⠼⠛', '8': '⠼⠓', '9': '⠼⠊', '0': '⠼⠚',
        ' ': '⠀',  // Braille space character
        '.': '⠲',  // Period
        ',': '⠂',  // Comma
        ';': '⠆',  // Semicolon
        ':': '⠒',  // Colon
        '!': '⠮',  // Exclamation mark
        '?': '⠦',  // Question mark
        "'": '⠄',  // Apostrophe
        '"': '⠦⠴', // Quotation mark
        '-': '⠤',  // Hyphen
        '/': '⠸⠌', // Slash
        '(': '⠶⠂', // Left parenthesis
        ')': '⠶⠆', // Right parenthesis
        '[': '⠦⠶⠂', // Left square bracket
        ']': '⠦⠶⠆', // Right square bracket
        '{': '⠦⠶⠲', // Left curly bracket
        '}': '⠦⠶⠦', // Right curly bracket
        '&': '⠈⠯',  // Ampersand
        '*': '⠔',    // Asterisk
        '_': '⠸⠤',  // Underscore
        '+': '⠬',    // Plus
        '=': '⠐⠤',  // Equals
        '<': '⠦⠣',  // Less than
        '>': '⠦⠜',  // Greater than
        '|': '⠦⠳',  // Vertical bar
        '\\': '⠦⠸⠌', // Backslash
        '%': '⠸⠴⠦'  // Percent
    };
    
    let brailleText = '';
    for (const char of text.toLowerCase()) {
        brailleText += brailleDict[char] || char;  // If character not found, keep it unchanged
    }
    
    return brailleText;
}