const getMonth = require('../index.js');

describe(
    "test getMonth", () => {
        const february = 2;
        const may = 5;
        it('enter 2 to get февраль', () => {
            expect(getMonth(february)).toBe('февраль');
        }),
        it('enter 5 to get май', () => {
            expect(getMonth(may)).toBe('май');
        }),
        it('should operate coorectly with invalid number', () => {
            expect(getMonth(0)).toBe('неизвестно');
        })
    }
);