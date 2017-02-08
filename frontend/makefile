.PHONY: build test help
.DEFAULT_GOAL := help

NODE_ENV ?= development

help:
	grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# Initialization ===============================================================
copy-conf: ## Initialize the configuration files by copying the *''-dist" versions (does not override existing config)
	-cp -n ./config/${NODE_ENV}-dist.js ./config/${NODE_ENV}.js
ifeq ($(NODE_ENV), development)
	-cp -n ./config/test-dist.js ./config/test.js
endif

install-npm-dependencies:
	echo "Installing Node dependencies for environment $(NODE_ENV)"
	yarn $(if $(filter production staging,$(NODE_ENV)),--production,)
ifeq ($(NODE_ENV), $(filter $(NODE_ENV),development test))
	make install-selenium
endif

install-selenium:
	echo "Installing Selenium server"
	./node_modules/.bin/selenium-standalone install --version=2.50.1 --drivers.chrome.version=2.24

install: copy-conf install-npm-dependencies ## Install npm dependencies for the api, admin, and frontend apps

build:
	./node_modules/.bin/next build src

start:
	./node_modules/.bin/next start src

test-unit: ## Run the frontend application unit tests
	NODE_ENV=test ./node_modules/.bin/mocha \
		--require babel-polyfill \
		--compilers="js:babel-core/register" \
		"./src/**/*.spec.js"

test-e2e: ## Run the frontend application e2e tests
	# NODE_ENV=test ${MAKE} build
	NODE_ENV=test SELENIUM_BROWSER_BINARY_PATH="./node_modules/selenium-standalone/.selenium/chromedriver/2.24-x64-chromedriver" \
		./node_modules/.bin/mocha \
        --require babel-polyfill \
		--compilers="js:babel-core/register" \
		--recursive \
		./tests/e2e

test: test-unit test-e2e
