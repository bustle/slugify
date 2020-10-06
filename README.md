# bustle slugify

[![Build Status](https://api.travis-ci.org/bustle/slugify.svg?branch=master)](https://travis-ci.org/github/bustle/slugify)

This is how you slug our things.

```slack
[1:04 PM]  zeejab the truth is within you reconbot
[1:04 PM]  reconbot so users is id first, articles and posts is id last
[1:05 PM]  steve articles is also id first
[1:06 PM]  zeejab everything new is id last, what steve said
```

This module just uses the `slugify` module from npm and adds some minor bustle-specific adjustments.

# Api

Everything new should be id last, use the function for your named item. This module will be updated as we transition all routes.

## slug(string) -> slug
Slug any string
```js
assert.equal(slug('a generic string'), 'a-generic-string')
```

## slugUser(user:{id!, name}) -> slug
```js
assert.equal(slugUser({ id: 1, name: 'Penny Dog' }), 'penny-dog-1')
assert.equal(slugUser({ id: 2 }), '2')
```

## slugPost(post:{id!, title}) -> slug
```js
assert.equal(slugPost({ id: 1, title: 'My Great Post!' }), 'my-great-post-1')
assert.equal(slugPost({ id: 1, title: 'This and That!' }), 'this-that-1')
assert.equal(slugPost({ id: 2 }), '2')
```

## slugArticle(article {id!, title})} -> slug
The only data type where the slug is id first.

```js
assert.equal(slugArticle({ id: 1, title: 'My Great Post!' }), '1-my-great-post')
assert.equal(slugArticle({ id: 1, title: 'This and That!' }), '1-this-that')
assert.equal(slugArticle({ id: 2 }), '2')
```
