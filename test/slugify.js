/* eslint-env mocha */
const assert = require('assert')
const slugify = require('../')

const slugUser = slugify.slugUser
const slugArticle = slugify.slugArticle
const slugPost = slugify.slugPost

describe('slugify', () => {
  describe('#slugUser', () => {
    it('should put the id at the end', () => {
      assert.equal(slugUser({ id: 1, name: 'Penny Dog' }), 'penny-dog-1')
    })

    it('should ignore a missing name', () => {
      assert.equal(slugUser({ id: 2 }), '2')
    })
  })

  describe('#slugPost', () => {
    it('should put the id at the end', () => {
      assert.equal(slugPost({ id: 1, title: 'My Great Post!' }), 'my-great-post-1')
    })

    it('should remove stop words', () => {
      assert.equal(slugPost({ id: 1, title: 'This and That!' }), 'this-that-1')
    })

    it('should ignore a missing title', () => {
      assert.equal(slugPost({ id: 2 }), '2')
    })
  })

  describe('#slugArticle', () => {
    it('should put the id at the beginning', () => {
      assert.equal(slugArticle({ id: 1, title: 'My Great Post!' }), '1-my-great-post')
    })

    it('should remove stop words', () => {
      assert.equal(slugArticle({ id: 1, title: 'This and That!' }), '1-this-that')
    })

    it('should ignore a missing title', () => {
      assert.equal(slugArticle({ id: 2 }), '2')
    })
  })
})
