module.exports = {
    "defaultSeverity": "error",
    "extends": [
        "tslint-eslint-rules",
        "tslint:latest"
    ],
    "rules": {
        "quotemark": [true, "double"],
        "jsx-no-lambda": false,
        "no-this-assignment": false,
        "ban-comma-operator": false,
        "no-implicit-dependencies": [true, "dev"],
        "prefer-conditional-expression": false,
        "no-object-literal-type-assertion": false,
        "no-console": false,
        "no-shadowed-variable": false,
        "no-any": true,
        "no-var-requires": false,
        "default-case": true,
        "interface-over-type-literal": false,
        "prefer-for-of": false,
        "no-eval": false,
        "no-unused-expression": false,
        "label-position": false,
        "arrow-parens": [true, "as-needed"],
        "semicolon": [true, "never"],
        "indent": [true, "spaces", 4],
        "no-for-in-array": true,
        "array-bracket-spacing": [true, "never"],
        "no-internal-module": true,
        "no-var-keyword": true,
        "radix": true,
        "triple-equals": [true, "allow-null-check"],
        "no-conditional-assignment": true,
        "no-inferrable-types": [true, "ignore-params", "ignore-properties"],
        "no-reference": true,
        "prefer-const": true,
        "no-string-throw": true,
        "no-string-literal": false,
        "no-return-await": true,
        "member-ordering": false,
        "only-arrow-functions": false,
        "interface-name": [true, "never-prefix"],
        "forin": false,
        "one-variable-per-declaration": false,
        "object-literal-sort-keys": false,
        "brace-style": [true, "1tbs", { "allowSingleLine": true }],
        "object-curly-spacing": [true, "never"],
        "arrow-spacing": {
            "before": true,
            "after": true
        },
        "await-promise": true,
        "curly": [true, "ignore-same-line"],
        "no-async-without-await": true,
        "switch-default": true,
        "deprecation": true,
        "prefer-readonly": true,
        "max-classes-per-file": false,
        "one-line": [
            true,
            "check-catch",
            "check-finally",
            "check-open-brace",
            "check-else"
        ],
        "arrow-return-shorthand": true,
        "no-angle-bracket-type-assertion": true,
        "switch-final-break": true,
        "max-line-length": false,
        "no-consecutive-blank-lines": true,
        "no-irregular-whitespace": true,
        "no-trailing-whitespace": true,
        "trailing-comma": [
            true,
            {
                "multiline": "never",
                "singleline": "never"
            }
        ],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-separator",
            "check-preblock",
            "check-typecast"
        ]
    },
    "rulesDirectory": []
}