# Hashtables
Make hashtables

Updated 2/21 Below: **hashmap-repeated-word**


## Challenge
Features
Implement a Hashtable Class with the following methods



## Approach & Efficiency
time: O(1)
space: O(1)

## API

**set**

Arguments: key, value
Returns: nothing

This method should hash the key, and set the key and value pair in the table, handling collisions as needed.

Should a given key already exist, replace its value from the value argument given to this method.

**get**
Arguments: key
Returns: Value associated with that key in the table

**contains**
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

**keys**
Returns: Collection of keys

**hash**
Arguments: key
Returns: Index in the collection for that key

## Testing

Setting a key/value to your hashtable results in the value being in the data structure

Retrieving based on a key returns the value stored

Successfully returns null for a key that does not exist in the hashtable

Successfully returns a list of all unique keys that exist in the hashtable

Successfully handle a collision within the hashtable

Successfully retrieve a value from a bucket within the hashtable that has a collision

Successfully hash a key to an in-range value


2/21 Update:

# hashmap-repeated-word

Updated: 2/21: Find the first repeated word in a book.

- Write a function called repeated word that finds the first word to occur more than once in a string
- Arguments: string
- Return: string

## Credits

Worked with jamiguel23 and metty82 in remo

Got regex from https://stackoverflow.com/questions/20731966/regex-remove-all-special-characters-except-numbers