const slug = require('slug')

const STOP_WORDS = ['and', 'or', 'an']

function slugify (input) {
  return slug(input, { lower: true })
    .split('-')
    .filter(word => word && (STOP_WORDS.indexOf(word) === -1))
    .join('-')
}

function makeSlug (id, string) {
  if (!string) { return `${id}` }
  return `${slugify(string)}-${id}`
}

function makeOldSlug (id, string) {
  if (!string) { return `${id}` }
  return `${id}-${slugify(string)}`
}

module.exports = {
  slugUser: user => makeSlug(user.id, user.name),
  slugPost: post => makeSlug(post.id, post.title),
  slugArticle: article => makeOldSlug(article.id, article.title)
}