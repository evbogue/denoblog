---
title: How to filter an in-memory datastore in JavaScript
publish_date: 2022-10-25
---

Yesterday we started talking about data structures and object storage within arrays and I promised I'd keep iterating over this idea until you had some better idea of what you are doing in the programming world.

So we created an array store

```
const array = []
```

and then we added something to it.

```
array.push('World')
```

That throws the information at the end of the array.

And 

```
array.unshift('Hello')
```

...will throw infromation at the beginning of the array.

So if you run this program you will find that it will print

```
console.log(array)
[ "Hello", "World" ]
```

And as you can see the Hello is printed before the World, which is because of what we did above.

So we can add all kinds of things to this in-memory data storage, as much stuff as we want to add, and it will all be in there as long as we don't put so much in that we use all of our memory which is pretty hard these days with the amount of memory that most devices have.

So writing that program that creates a lot of data is probably kind of hard, so we will skip that one right now.

Instead, let's see if we can make a new array out of the old array that only contains the information we are looking for. To do this we need a filter.

```
const array = []
array.push('World')
array.unshift('Hello')
console.log(array.filter(item => item === 'World'))
// [ "World" ]
```

And the above code turns a new array that contains the information that we are looking for. 

And that is exact of course, but if we are iterating over data that is a paragraph or something then we could do 

```
array.push('Hello World')
console.log(array.filter(item => item.includes('World')))
[ "World", "Hello World" ]
```

And as you can see that gets you both the World item and the Hello World item in the array.

Tomorrow we will iterate over this idea again to build even bigger and better p2p programs that return the results that we are looking for. 
