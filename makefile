.PHONY: help watch build start
.DEFAULT_GOAL=help

help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-10s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

watch: ## Watch changed files and refresh the browser
	yarn watch

build: ## Build files for production
	yarn build

start: ## Run the node server for developement
	yarn start
