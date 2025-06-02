export default [
{
files: ['**/*.js'],
languageOptions: {
ecmaVersion: 'latest',
sourceType: 'commonjs' //  esto es clave porque usas require()
},
plugins: {},
rules: {
semi: ['error', 'always'],
quotes: ['error', 'single']
}
}
];

