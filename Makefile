install: #install all package from devDependencies.
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish
