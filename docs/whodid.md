# Whodid

Il file whodid nella root da le linee guida, ad esempio con questa configurazione, possiamo avere i dati giornalieri togliendo le merge.

```js
{
  "include_merge": "false",
  "since": "1.day"
}
```

## Parametri

Per avere i dati filtrati per autore

```js
--author;
```

Per avere i dati filtrati per lasso di tempo

```js
--since=1.month
```

## Totale per autore

```js
whodid author
```

## Commit più grandi

```js
whodid heavy
```

## History totale per data

```js
whodid history
```
