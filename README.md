install npm dependencies

```
npm i
```

build project

```
npm build
```

start project

```
npm start
```

send a request
```
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"mutation {\n  set(input: {\n    children : [\n\t\t\t{ name: \"ricky\" },\n      { name: \"bobby\" },\n    ]\n  })\n}"}' --compressed
```

console should print the follow
```
input.children [ [ name: [ 'ricky' ] ], [ name: [ 'bobby' ] ] ]
input.children [[],[]]
```