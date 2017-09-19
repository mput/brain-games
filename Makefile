install:
	npm install --only=dev

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npm run eslint .
