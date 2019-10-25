
include .env
export


update:
	npm update


build: update
	npm run build


deploy: build
	. ./scripts/deploy.sh


.PHONY: deploy
