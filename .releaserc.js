module.exports = {
    branches: [
        "master",
        "next"
    ],
    extends: 'semantic-release-monorepo',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm'
    ]
}
