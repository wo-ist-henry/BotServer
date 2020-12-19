import DateFromToFormat from "./date-from-to-format";

describe('date-from-to-format', () => {
    it('Display a time in the format of HH:MM', () => {
        const nowMockDate = new Date('1900-05-05 00:00');

        const tests = [
            {from: new Date('1900-01-01 03:01'), expected: '03:01'},
            {from: new Date('1900-01-01 10:05'), expected: '10:05'},
            {from: new Date('1900-01-01 22:10'), expected: '22:10'},
            {from: new Date('1900-01-01 00:20'), expected: '00:20'}
        ]

        const spy = jest
            .spyOn(global, 'Date')
            .mockImplementation(() => nowMockDate as any);

        tests.forEach(({from, expected}) => {
            expect(DateFromToFormat({from, useFromPrefix: false})).toBe(expected);
        });

        spy.mockRestore()
    });

    it('If there is only a from time, a from/since Prefix is displayed depending on if it starts in the future or the past', () => {
        const nowMockDate = new Date('1900-01-01 06:00');

        const tests = [
            {from: new Date('1900-01-01 03:00'), expected: 'since 03:00'},
            {from: new Date('1900-01-01 10:00'), expected: 'from 10:00'}
        ]

        const spy = jest
            .spyOn(global, 'Date')
            .mockImplementation(() => nowMockDate as any);

        tests.forEach(({from, expected}) => {
            expect(DateFromToFormat({from, useFromPrefix: true})).toBe(expected);
        });

        spy.mockRestore()
    });

    it('If there is a to date set, it will be shown as with a "-" behind the from date. No from prefix is visible', () => {
        const from = new Date('1900-01-01 03:00');

        const tests = [
            {to: new Date('1900-01-01 06:00'), expected: '03:00 - 06:00'},
            {to: new Date('1900-01-01 11:00'), expected: '03:00 - 11:00'}
        ];

        tests.forEach(({to, expected}) => {
            expect(DateFromToFormat({from, to, useFromPrefix: true})).toBe(expected);
        });
    });

    it('There is currently no implementation on what happens if to > from', () => {
        const from = new Date('2000-01-01 03:00');
        const to = new Date('1900-01-01 04:00');

        expect(DateFromToFormat({from, to, useFromPrefix: true})).toBe('03:00 - 04:00');
    });
});
