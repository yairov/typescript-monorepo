module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["airbnb", "airbnb/hooks", "plugin:jsx-a11y/recommended"],
  "plugins": ["babel", "react", "react-hooks", "jsx-a11y", "welldone"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "globals": {
    "flushConsoleOutput": true
  },
  "rules": {
    "welldone/modules-engagement": ["error", {
      "glob": "/packages/!(wd-common)/**/!(*.stories|*.test).js"
    }],
    "no-underscore-dangle": "off",
    "arrow-body-style": "off",
    "react/no-unescaped-entities": "off",
    "arrow-parens": ["error", "as-needed"],
    "babel/object-curly-spacing": ["error", "never"],
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error",
    "class-methods-use-this": "error",
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": "off",
    "function-paren-newline": "off",
    "global-require": "off",
    "react/jsx-props-no-spreading": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "error",
    "import/extensions": ["error", {tsx: "never", ts: "never"}],
    "indent": ["error", 2, {
      "ignoreComments": true,
      "SwitchCase": 1
    }],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/html-has-lang": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "linebreak-style": "off",
    "max-len": ["warn", 240],
    "multiline-ternary": "off",
    "no-alert": "off",
    "no-console": "warn",
    "no-lonely-if": "off",
    "no-static-element-interactions": "off",
    "spaced-comment": ["error", "always", {
      "exceptions": ["*"]
    }],
    "no-mixed-operators": ["error", {
      "allowSamePrecedence": true
    }],
    "no-nested-ternary": "off",
    "no-param-reassign": ["error", {
      "ignorePropertyModificationsFor": ["result"]
    }],
    "no-trailing-spaces": ["error", {
      "skipBlankLines": true
    }],
    "no-unused-vars": ["error", {
      "args": "after-used",
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "prefer-promise-reject-errors": "off",
    "quotes": ["error", "single"],
    "no-plusplus": "off",
    "react/jsx-curly-spacing": ["error", "never"],
    "react/button-has-type": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never"
    }],
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }],
    "react/jsx-one-expression-per-line": "off",
    "react/prefer-stateless-function": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/sort-comp": "off",
    "semi": ["error", "always"],
    "array-callback-return": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-restricted-modules": ["error", "lodash"],
    "no-restricted-imports": ["error", {
      "paths": [
        {
          "name": "@storybook/react",
          "importNames": ["storiesOf"],
          "message": "Please import \"storiesOf\" from \"storybook/utils\" instead."
        }
      ]
    }]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": `${__dirname}/webpack.eslint.config.js`
      }
    }
  }
}
