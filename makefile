.PHONY: build test help
.DEFAULT_GOAL := help

NODE_ENV ?= development
DATABASE_NAME ?= database

help:
	grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Installs npm dependencies for the api, and frontend apps
	$(MAKE) -C api install
	$(MAKE) -C frontend install

dev: ## Runs the development environment
	docker-compose up

mongo-shell: ## Starts the mongo shell
	docker exec -it dpc_mongo_1 mongo $(DATABASE_NAME) --shell

mongo-shell-test: ## Starts the mongo shell for the test database
	docker exec -it dpc_mongo_1 mongo $(DATABASE_NAME)_test --shell

storybook: ## Starts the storybook app
	$(MAKE) -C frontend storybook

test: ## Executes all tests for API and frontend
	$(MAKE) -C api test
	$(MAKE) -C frontend test
