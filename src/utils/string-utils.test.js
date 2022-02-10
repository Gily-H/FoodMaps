import * as stringUtils from "./string-utils";

describe("valid lowercase string no whitespace"),
  () => {
    it("should have no leading whitespace", () => {
      const leadingSpace = "     leading";
      expect(stringUtils.formatStringInput(leadingSpace)).toEqual("leading");
    });

    it("should have not trailing white space", () => {
      const trailingSpace = "trailing       ";
      expect(stringUtils.formatStringInput(trailingSpace)).toEqual("trailing");
    });

    it("should contain only lowercase letters", () => {
      const lowerCase = "lmnopqr"
      const mixedCase = "AbCDeFg"
      const upperCase = "VWXYZ"

      expect(stringUtils.formatStringInput(lowerCase)).toEqual("lmnopqr")
      expect(stringUtils.formatStringInput(mixedCase)).toEqual("abcdefg")
      expect(stringUtils.formatStringInput(upperCase)).toEqual("vwxyz")
    })

    it ("should have single whitespace between words", () => {
      const singeSpaceBetweenWords = "this sentence has spaces inbetween words"
      const multipleSpaceBetweenWords = " This  sentence  has spaces  inbetween  words   "

      expect(stringUtils.formatStringInput(singeSpaceBetweenWords)).toEqual("this sentence has spaces inbetween words")
      expect(stringUtils.formatStringInput(multipleSpaceBetweenWords)).toEqual("this sentence has spaces inbetween words")
    })
  };
