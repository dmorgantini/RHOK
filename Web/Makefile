
TESTS = test/*.coffee
REPORTER = spec

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		--slow 20 \
		--growl \
		$(TESTS)


.PHONY: test