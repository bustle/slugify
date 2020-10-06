/* eslint-env mocha */

const { slug } = require('../')

describe('slug', function () {
  it('should convert input to string', function () {
    [slug(1)].should.eql(['1'])
    return [slug(567890)].should.eql(['567890'])
  })
  it('should replace whitespaces with replacement', function () {
    return [slug('foo bar baz')].should.eql(['foo-bar-baz'])
  })
  it('should remove trailing space if any', function () {
    return [slug(' foo bar baz ')].should.eql(['foo-bar-baz'])
  })
  it('should remove not allowed chars', function () {
    [slug('foo, bar baz')].should.eql(['foo-bar-baz']);
    [slug('foo- bar baz')].should.eql(['foo-bar-baz']);
    [slug('foo:  bar baz ')].should.eql(['foo-bar-baz']);
    [slug('foo@  bar baz')].should.eql(['foo-bar-baz'])
    return [slug('foo] bar baz')].should.eql(['foo-bar-baz'])
  })
  it('should leave allowed chars in pretty mode', function () {
    var a, allowed, i, len, results
    allowed = ['_', '~']
    results = []
    for (i = 0, len = allowed.length; i < len; i++) {
      a = allowed[i]
      results.push([slug('foo ' + a + ' bar baz')].should.eql(['foo-' + a + '-bar-baz']))
    }
    return results
  })
  it('should replace latin chars', function () {
    var char, charMap, replacement, results
    charMap = {
      À: 'A',
      Á: 'A',
      Â: 'A',
      Ã: 'A',
      Ä: 'A',
      Å: 'A',
      Æ: 'AE',
      Ç: 'C',
      È: 'E',
      É: 'E',
      Ê: 'E',
      Ë: 'E',
      Ì: 'I',
      Í: 'I',
      Î: 'I',
      Ï: 'I',
      Ð: 'D',
      Ñ: 'N',
      Ò: 'O',
      Ó: 'O',
      Ô: 'O',
      Õ: 'O',
      Ö: 'O',
      Ő: 'O',
      Ø: 'O',
      Ù: 'U',
      Ú: 'U',
      Û: 'U',
      Ü: 'U',
      Ű: 'U',
      Ý: 'Y',
      Þ: 'TH',
      ß: 'ss',
      à: 'a',
      á: 'a',
      â: 'a',
      ã: 'a',
      ä: 'a',
      å: 'a',
      æ: 'ae',
      ç: 'c',
      è: 'e',
      é: 'e',
      ê: 'e',
      ë: 'e',
      ì: 'i',
      í: 'i',
      î: 'i',
      ï: 'i',
      ð: 'd',
      ñ: 'n',
      ò: 'o',
      ó: 'o',
      ô: 'o',
      õ: 'o',
      ö: 'o',
      ő: 'o',
      ø: 'o',
      ù: 'u',
      ú: 'u',
      û: 'u',
      ü: 'u',
      ű: 'u',
      ý: 'y',
      þ: 'th',
      ÿ: 'y',
      ẞ: 'SS'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace greek chars', function () {
    var char, charMap, replacement, results
    charMap = {
      α: 'a',
      β: 'b',
      γ: 'g',
      δ: 'd',
      ε: 'e',
      ζ: 'z',
      η: 'h',
      θ: '8',
      ι: 'i',
      κ: 'k',
      λ: 'l',
      μ: 'm',
      ν: 'n',
      ξ: '3',
      ο: 'o',
      π: 'p',
      ρ: 'r',
      σ: 's',
      τ: 't',
      υ: 'y',
      φ: 'f',
      χ: 'x',
      ψ: 'ps',
      ω: 'w',
      ά: 'a',
      έ: 'e',
      ί: 'i',
      ό: 'o',
      ύ: 'y',
      ή: 'h',
      ώ: 'w',
      ς: 's',
      ϊ: 'i',
      ΰ: 'y',
      ϋ: 'y',
      ΐ: 'i',
      Α: 'A',
      Β: 'B',
      Γ: 'G',
      Δ: 'D',
      Ε: 'E',
      Ζ: 'Z',
      Η: 'H',
      Θ: '8',
      Ι: 'I',
      Κ: 'K',
      Λ: 'L',
      Μ: 'M',
      Ν: 'N',
      Ξ: '3',
      Ο: 'O',
      Π: 'P',
      Ρ: 'R',
      Σ: 'S',
      Τ: 'T',
      Υ: 'Y',
      Φ: 'F',
      Χ: 'X',
      Ψ: 'PS',
      Ω: 'W',
      Ά: 'A',
      Έ: 'E',
      Ί: 'I',
      Ό: 'O',
      Ύ: 'Y',
      Ή: 'H',
      Ώ: 'W',
      Ϊ: 'I',
      Ϋ: 'Y'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace turkish chars', function () {
    var char, charMap, replacement, results
    charMap = {
      ş: 's',
      Ş: 'S',
      ı: 'i',
      İ: 'I',
      ç: 'c',
      Ç: 'C',
      ü: 'u',
      Ü: 'U',
      ö: 'o',
      Ö: 'O',
      ğ: 'g',
      Ğ: 'G'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace cyrillic chars', function () {
    var char, charMap, expected, replacement, results
    charMap = {
      а: 'a',
      б: 'b',
      в: 'v',
      г: 'g',
      д: 'd',
      е: 'e',
      ё: 'yo',
      ж: 'zh',
      з: 'z',
      и: 'i',
      й: 'j',
      к: 'k',
      л: 'l',
      м: 'm',
      н: 'n',
      о: 'o',
      п: 'p',
      р: 'r',
      с: 's',
      т: 't',
      у: 'u',
      ф: 'f',
      х: 'h',
      ц: 'c',
      ч: 'ch',
      ш: 'sh',
      щ: 'sh',
      ъ: 'u',
      ы: 'y',
      ь: '',
      э: 'e',
      ю: 'yu',
      я: 'ya',
      А: 'A',
      Б: 'B',
      В: 'V',
      Г: 'G',
      Д: 'D',
      Е: 'E',
      Ё: 'Yo',
      Ж: 'Zh',
      З: 'Z',
      И: 'I',
      Й: 'J',
      К: 'K',
      Л: 'L',
      М: 'M',
      Н: 'N',
      О: 'O',
      П: 'P',
      Р: 'R',
      С: 'S',
      Т: 'T',
      У: 'U',
      Ф: 'F',
      Х: 'H',
      Ц: 'C',
      Ч: 'Ch',
      Ш: 'Sh',
      Щ: 'Sh',
      Ъ: 'U',
      Ы: 'Y',
      Ь: '',
      Э: 'E',
      Ю: 'Yu',
      Я: 'Ya',
      Є: 'Ye',
      І: 'I',
      Ї: 'Yi',
      Ґ: 'G',
      є: 'ye',
      і: 'i',
      ї: 'yi',
      ґ: 'g'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      expected = 'foo-' + replacement.toLowerCase() + '-bar-baz'
      if (!replacement) {
        expected = 'foo-bar-baz'
      }
      results.push([slug('foo ' + char + ' bar baz')].should.eql([expected]))
    }
    return results
  })
  it('should replace czech chars', function () {
    var char, charMap, replacement, results
    charMap = {
      č: 'c',
      ď: 'd',
      ě: 'e',
      ň: 'n',
      ř: 'r',
      š: 's',
      ť: 't',
      ů: 'u',
      ž: 'z',
      Č: 'C',
      Ď: 'D',
      Ě: 'E',
      Ň: 'N',
      Ř: 'R',
      Š: 'S',
      Ť: 'T',
      Ů: 'U',
      Ž: 'Z'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace polish chars', function () {
    var char, charMap, replacement, results
    charMap = {
      ą: 'a',
      ć: 'c',
      ę: 'e',
      ł: 'l',
      ń: 'n',
      ó: 'o',
      ś: 's',
      ź: 'z',
      ż: 'z',
      Ą: 'A',
      Ć: 'C',
      Ę: 'E',
      Ł: 'L',
      Ń: 'N',
      Ś: 'S',
      Ź: 'Z',
      Ż: 'Z'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace latvian chars', function () {
    var char, charMap, replacement, results
    charMap = {
      ā: 'a',
      č: 'c',
      ē: 'e',
      ģ: 'g',
      ī: 'i',
      ķ: 'k',
      ļ: 'l',
      ņ: 'n',
      š: 's',
      ū: 'u',
      ž: 'z',
      Ā: 'A',
      Č: 'C',
      Ē: 'E',
      Ģ: 'G',
      Ī: 'I',
      Ķ: 'K',
      Ļ: 'L',
      Ņ: 'N',
      Š: 'S',
      Ū: 'U',
      Ž: 'Z'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace vietnamese chars', function () {
    var char, charMap, replacement, results
    charMap = {
      Ạ: 'A',
      Ả: 'A',
      Ầ: 'A',
      Ấ: 'A',
      Ậ: 'A',
      Ẩ: 'A',
      Ẫ: 'A',
      Ằ: 'A',
      Ắ: 'A',
      Ặ: 'A',
      Ẳ: 'A',
      Ẵ: 'A',
      Ẹ: 'E',
      Ẻ: 'E',
      Ẽ: 'E',
      Ề: 'E',
      Ế: 'E',
      Ệ: 'E',
      Ể: 'E',
      Ễ: 'E',
      Ị: 'I',
      Ỉ: 'I',
      Ĩ: 'I',
      Ọ: 'O',
      Ỏ: 'O',
      Ồ: 'O',
      Ố: 'O',
      Ộ: 'O',
      Ổ: 'O',
      Ỗ: 'O',
      Ơ: 'O',
      Ờ: 'O',
      Ớ: 'O',
      Ợ: 'O',
      Ở: 'O',
      Ỡ: 'O',
      Ụ: 'U',
      Ủ: 'U',
      Ũ: 'U',
      Ư: 'U',
      Ừ: 'U',
      Ứ: 'U',
      Ự: 'U',
      Ử: 'U',
      Ữ: 'U',
      Ỳ: 'Y',
      Ỵ: 'Y',
      Ỷ: 'Y',
      Ỹ: 'Y',
      Đ: 'DJ',
      ạ: 'a',
      ả: 'a',
      ầ: 'a',
      ấ: 'a',
      ậ: 'a',
      ẩ: 'a',
      ẫ: 'a',
      ằ: 'a',
      ắ: 'a',
      ặ: 'a',
      ẳ: 'a',
      ẵ: 'a',
      ẹ: 'e',
      ẻ: 'e',
      ẽ: 'e',
      ề: 'e',
      ế: 'e',
      ệ: 'e',
      ể: 'e',
      ễ: 'e',
      ị: 'i',
      ỉ: 'i',
      ĩ: 'i',
      ọ: 'o',
      ỏ: 'o',
      ồ: 'o',
      ố: 'o',
      ộ: 'o',
      ổ: 'o',
      ỗ: 'o',
      ơ: 'o',
      ờ: 'o',
      ớ: 'o',
      ợ: 'o',
      ở: 'o',
      ỡ: 'o',
      ụ: 'u',
      ủ: 'u',
      ũ: 'u',
      ư: 'u',
      ừ: 'u',
      ứ: 'u',
      ự: 'u',
      ử: 'u',
      ữ: 'u',
      ỳ: 'y',
      ỵ: 'y',
      ỷ: 'y',
      ỹ: 'y',
      đ: 'dj'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace currencies', function () {
    var char, charMap, replacement, results
    charMap = {
      '€': 'euro',
      '₢': 'cruzeiro',
      '₣': 'french franc',
      '£': 'pound',
      '₤': 'lira',
      '₥': 'mill',
      '₦': 'naira',
      '₧': 'peseta',
      '₨': 'rupee',
      '₹': 'indian rupee',
      '₩': 'won',
      '₪': 'new shequel',
      '₫': 'dong',
      '₭': 'kip',
      '₮': 'tugrik',
      '₯': 'drachma',
      '₰': 'penny',
      '₱': 'peso',
      '₲': 'guarani',
      '₳': 'austral',
      '₴': 'hryvnia',
      '₵': 'cedi',
      '¢': 'cent',
      '¥': 'yen',
      元: 'yuan',
      円: 'yen',
      '﷼': 'rial',
      '₠': 'ecu',
      '¤': 'currency',
      '฿': 'baht'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      replacement = replacement.replace(' ', '-')
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace symbols in pretty mode', function () {
    var char, charMap, replacement, results
    charMap = {
      '©': 'c',
      œ: 'oe',
      Œ: 'OE',
      '∑': 'sum',
      '®': 'r',
      '∂': 'd',
      ƒ: 'f',
      '™': 'tm',
      '℠': 'sm',
      '˚': 'o',
      º: 'o',
      ª: 'a',
      '∆': 'delta',
      '∞': 'infinity',
      '♥': 'love',
      '<': 'less',
      '>': 'greater'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should remove ellipsis in pretty mode', function () {
    var char, charMap, results
    charMap = {
      '…': '...'
    }
    results = []
    for (char in charMap) {
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-bar-baz']))
    }
    return results
  })
  it('should strip … symbols in pretty mode', function () {
    return [slug('foo … bar baz')].should.eql(['foo-bar-baz'])
  })
  it('should strip symbols', function () {
    var char, charMap, i, len, results
    charMap = ['†', '“', '”', '‘', '’', '•']
    results = []
    for (i = 0, len = charMap.length; i < len; i++) {
      char = charMap[i]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-bar-baz']))
    }
    return results
  })
  it('should replace unicode', function () {
    var char, charMap, replacement, results
    charMap = {
      '☠': 'skull-bones',
      '☣': 'biohazard',
      '☭': 'hammer-sickle',
      '☯': 'yin-yang',
      '☮': 'peace',
      '☏': 'telephone',
      '☎': 'telephone',
      '★': 'star',
      '☂': 'umbrella',
      '☃': 'snowman',
      '✈': 'airplane',
      '✉': 'envelope',
      '✊': 'raised-fist'
    }
    results = []
    for (char in charMap) {
      replacement = charMap[char]
      results.push([slug('foo ' + char + ' bar baz')].should.eql(['foo-' + replacement.toLowerCase() + '-bar-baz']))
    }
    return results
  })
  it('should replace lithuanian characters', function () {
    return slug('ąčęėįšųūžĄČĘĖĮŠŲŪŽ').should.eql('aceeisuuzACEEISUUZ'.toLowerCase())
  })
  it('should replace multichars', function () {
    return [slug('w/ ♥ && sugar || ☠')].should.eql(['w-love-sugar-skull-bones'])
  })
  it('should be flavourable', function () {
    var expected, text
    text = "It's your journey ... we guide you through."
    expected = 'Its-your-journey-we-guide-you-through'.toLowerCase()
    return [
      slug(text)
    ].should.eql([expected])
  })
})
