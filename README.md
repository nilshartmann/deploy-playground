# Playground for webpack deployment scenarios

## "dev build" (non optimized)

* Run `npm run dev`: output will be written to `src/public/dist/`

## "prod bulid" (optimized, using React as external lib from CDN)

* Run `npm run prod`: output will be written `dist/`

## Results

```bash
# "dev build"
$ du -h public/dist/
1.6M    public/dist/

# "prod build"
$ du -h dist/
156K    dist/lib  # This includes React and React DOM
188K    dist/     # Our application + CSS + SourceMap
```
