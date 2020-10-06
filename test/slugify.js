/* eslint-env mocha */
const assert = require('assert')
const slugify = require('../')

const slug = slugify.slug
const slugUser = slugify.slugUser
const slugArticle = slugify.slugArticle
const slugPost = slugify.slugPost

describe('slugify', () => {
  describe('#slug', () => {
    it('should slugify a string', () => {
      assert.strictEqual(slug('a generic string'), 'a-generic-string')
    })

    it('should not expand certain chars', () => {
      assert.strictEqual(slug('Bet $5k on the Knicks'), 'bet-5k-on-the-knicks')
    })
  })

  describe('#slugUser', () => {
    it('should put the id at the end', () => {
      assert.strictEqual(slugUser({ id: 1, name: 'Penny Dog' }), 'penny-dog-1')
    })

    it('should ignore a missing name', () => {
      assert.strictEqual(slugUser({ id: 2 }), '2')
    })
  })

  describe('#slugPost', () => {
    it('should put the id at the end', () => {
      assert.strictEqual(slugPost({ id: 1, title: 'My Great Post!' }), 'my-great-post-1')
    })

    it('should remove stop words', () => {
      assert.strictEqual(slugPost({ id: 1, title: 'This and That!' }), 'this-that-1')
    })

    it('should ignore a missing title', () => {
      assert.strictEqual(slugPost({ id: 2 }), '2')
    })
  })

  describe('#slugArticle', () => {
    it('should put the id at the beginning', () => {
      assert.strictEqual(slugArticle({ id: 1, title: 'My Great Post!' }), '1-my-great-post')
    })

    it('should remove stop words', () => {
      assert.strictEqual(slugArticle({ id: 1, title: 'This and That!' }), '1-this-that')
    })

    it('should ignore a missing title', () => {
      assert.strictEqual(slugArticle({ id: 2 }), '2')
    })
  })
})
