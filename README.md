# @h4v0c/uid
A unique id generator. This does NOT confirm to any standards, instead, it generates a string of case-sensitive, alpha-numeric characters of length 16 (default).



## Install:
`npm install @h4v0c/uid`

## Usage:
```javascript
import { uid } from "@h4v0c/uid";

// syntax: uid(length: number = 16) => string

console.debug('id:', uid());
// id: AM3opWGT9DIySAkg

console.debug('id:', uid(8));
// id: X9CrwIxE

console.debug('id:', uid(24));
// id: 8P8SdVZSsSBLSh7hLZjAd6rF
```