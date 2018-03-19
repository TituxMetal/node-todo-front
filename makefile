.PHONY: help vendor composer.lock install watch build serverRun
.DEFAULT_GOAL=help

PORT?=8888
HOST?=0.0.0.0

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

vendor: composer.json ## Install php dependencies
	composer install

composer.lock: composer.json ## Update php dependencies
	composer update

install: vendor composer.lock ## Install or update php dependencies

watch: ## Watch changed files and refresh the browser
	yarn watch

build: ## Build files for production
	yarn build

serverRun: ## Run the php server for developement
	php -S $(HOST):$(PORT) -t public/
