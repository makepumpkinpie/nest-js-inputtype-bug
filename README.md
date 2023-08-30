# NestJS bug with nest array of InputType
When a nestjs input has a nested array of inputs as a property, values of the array are being mapped as array object and not standard json. This is causing an error when we try to Json serialize our input objects.


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