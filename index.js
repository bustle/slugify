const slugify = require('slugify')

const STOP_WORDS = new Set(['and', 'or', 'an'])

slugify.extend({
  $: '',
  '&': '',
  '|': '',
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
})

function slug (input) {
  return slugify(String(input), { replacement: '-', lower: true, remove: /[^\w\s_~-]+/g })
    .split('-')
    .filter(word => word && !STOP_WORDS.has(word))
    .join('-')
}

function makeSlug (id, string) {
  if (!string) { return `${id}` }
  return `${slug(string)}-${id}`
}

function makeOldSlug (id, string) {
  if (!string) { return `${id}` }
  return `${id}-${slug(string)}`
}

module.exports = {
  slug,
  slugUser: user => makeSlug(user.id, user.name),
  slugPost: post => makeSlug(post.id, post.title),
  slugArticle: article => makeOldSlug(article.id, article.title)
}
