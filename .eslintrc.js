module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/recommended',
      'eslint:recommended'
    ],
    rules: {
      // Otras reglas...
      'vue/multi-word-component-names': 'off'
    }
  };
  