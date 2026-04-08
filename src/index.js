/**
 * How to run test:
 * 1) Install NodeJS
 * 2) Instal node_modules on repo: `npm i`
 * 3) Start test: `npm run test`
 */

module.exports = function toReadable(number) {
  const ARRAY_0_TO_9 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const ARRAY_10_TO_19 = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const ARRAY_20_TO_90 = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 10) {
    /**
     * number = 0 => 'zero',
     * number = 1 => 'one',
     * number = 2 => 'two',
     * number = 3 => 'three',
     * number = 4 => 'four',
     * number = 5 => 'five',
     * number = 6 => 'six',
     * number = 7 => 'seven',
     * number = 8 => 'eight',
     * number = 9 => 'nine',
     */
    return ARRAY_0_TO_9[number];
  }

  if (number < 20) {
    /**
     * 10 - 10 = 0 => 'ten',
     * 11 - 10 = 1 => 'eleven',
     * 12 - 10 = 2 => 'twelve',
     * 13 - 10 = 3 => 'thirteen',
     * 14 - 10 = 4 => 'fourteen',
     * 15 - 10 = 5 => 'fifteen',
     * 16 - 10 = 6 => 'sixteen',
     * 17 - 10 = 7 => 'seventeen',
     * 18 - 10 = 8 => 'eighteen',
     * 19 - 10 = 9 => 'nineteen',
     */
    return ARRAY_10_TO_19[number - 10];
  }

  if (number < 100) {
    /**
     * 20 / 10 ~floor~ 2
     * 21 / 10 ~floor~ 2
     * 22 / 10 ~floor~ 2
     * 29 / 10 ~floor~ 2
     * 99 / 10 ~floor~ 9
     *
     * '',
     * '',
     * 2 => 'twenty',
     * 3 => 'thirty',
     * 4 => 'forty',
     * 5 => 'fifty',
     * 6 => 'sixty',
     * 7 => 'seventy',
     * 8 => 'eighty',
     * 9 => 'ninety',
     */
    const SECOND_N = Math.floor(number / 10);
    const FIRST_N = number % 10;
    const IS_20_30_40_50_60_70_80_90 = FIRST_N === 0;
    if (IS_20_30_40_50_60_70_80_90) {
      return ARRAY_20_TO_90[SECOND_N];
    }
    return `${ARRAY_20_TO_90[SECOND_N]} ${ARRAY_0_TO_9[FIRST_N]}`;
  }

  if (number <= 999) {
    const THIRD_N = Math.floor(number / 100);
    const END = number % 100;

    if (END === 0) {
      return `${ARRAY_0_TO_9[THIRD_N]} hundred`;
    }

    return `${ARRAY_0_TO_9[THIRD_N]} hundred ${toReadable(END)}`;
  }

  return 'no logic';
};
