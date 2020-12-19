interface FormatOptions {
    from: Date;
    to?: Date;
    useFromPrefix?: boolean;
}

export default function DateFromToFormat({from, to, useFromPrefix}: FormatOptions) {
    if (from == null) {
        return undefined;
    }

    let output = `${fillLeadingZero(from.getHours())}:${fillLeadingZero(from.getMinutes())}`;

    if (to == null) {
        const prefix = from > new Date() ? 'from' : 'since';
        return useFromPrefix ? `${prefix} ${output}` : output;
    }

    output += ` - ${fillLeadingZero(to.getHours())}:${fillLeadingZero(to.getMinutes())}`;

    return output;
}

/**
 * Formats a number into a "visual time number"
 * Examples
 * 3 -> 03
 * 10 -> 10
 * 0 -> 00
 * @param input The number you wish to format
 */
function fillLeadingZero(input: number): string {
    if (input == null) {
        return '00';
    }
    if (input >= 10) {
        return `${input}`;
    }
    return `0${input}`;
}
