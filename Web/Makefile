
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


// meta(http-equiv='Content-Type' content='text/html; charset=utf-8')
// meta(http-equiv='Content-Language' content='EN')
// meta(http-equiv='Cache-Control' content='must-revalidate, post-check=0, pre-check=0')
// meta(http-equiv='Pragma' content='public')
// meta(http-equiv='Cache-Control' content='no-cache')
// meta(http-equiv='Pragma' content='no-cache')
// meta(http-equiv='Expires' content='-1')
// meta(name='robots' content='all,follow')
// meta(name='googlebot' content='all,follow,snippet,archive')
// meta(name='description' content='Lorem ipsum dolor sit ame')
// meta(name='keywords' content='charity charityclick')
// meta(http-equiv='imagetoolbar' content='no')
// meta(http-equiv='MSThemeCompatible' content='no')
// meta(content='TRUE' name='MSSmartTagsPreventParsing')
// meta(content='off' name='autosize')
// meta(name='author', content='David Morgantini, Andrea James')