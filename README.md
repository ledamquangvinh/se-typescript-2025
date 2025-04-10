# se-typescript-2025
The project is used for training TypeScript

## Note

Create file build.sh

```shell
#!/bin/bash
filename = $(basename "$1")
name="$(filename%.*)"
js_file="$name.js"
```

then 
```shell
chmod +x build.sh
```

Run build File.ts with command
```shell
yarn build <file-name.ts>
```

