.PHONY: build test help
.DEFAULT_GOAL := help

NODE_ENV ?= development

help:
	grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

copy-conf: ## Initialize the configuration files by copying the *''-dist" versions (does not override existing config)
	-cp -n ./config/${NODE_ENV}-dist.js ./config/${NODE_ENV}.js
ifeq ($(NODE_ENV), development)
	-cp -n ./config/test-dist.js ./config/test.js
endif

install-npm-dependencies:
	echo "Installing Node dependencies for environment $(NODE_ENV)"
	yarn $(if $(filter production staging,$(NODE_ENV)),--production,)

install: copy-conf install-npm-dependencies ## Install npm dependencies for the api, admin, and frontend apps

# Test
# ==============================================================================
test-unit:
	NODE_ENV=test ./node_modules/.bin/mocha \
		--require babel-polyfill \
		--compilers="js:babel-core/register" \
		"./src/**/*.spec.js" \

test: test-unit

# Database
# ==============================================================================
create-database: ## Create the database
	./node_modules/.bin/db-migrate \
		--config=config/db-migrate-install.js \
		db:create database

migrate: ## Migrate the database
	./node_modules/.bin/db-migrate \
		--migrations-dir=./src/migrations \
		--config=config/db-migrate.js \
		up

revert-last-migration: ## Revert the last database migration
	./node_modules/.bin/db-migrate \
		--migrations-dir=./src/migrations \
		--config=config/db-migrate.js \
		down

create-migration: ## Create a new database migration
	./node_modules/.bin/db-migrate \
		--migrations-dir=./src/migrations \
		--config=config/db-migrate.js \
		create migration

reset-migrations: ## Reset the database
	NODE_ENV=test ./node_modules/.bin/db-migrate \
		--migrations-dir=./src/migrations \
		--config=config/db-migrate.js \
		reset

reset-database: reset-migrations migrate ## Reset the database and run all migrations
