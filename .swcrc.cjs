{
  "$schema": "https://json.schemastore.org/swcrc",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "dynamicImport": false,
      "decorators": true
    },
    "transform": {
      "decoratorMetadata": true
    },
    "target": "es5",
    "loose": false,
    "externalHelpers": true,
    "keepClassNames": true,
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "minify": true,
  "module": {
    "type": "commonjs"
  }
}
