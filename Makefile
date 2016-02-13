URL = www.teamed.io
HTML = $(patsubst pages/%.haml, target/%.html, $(wildcard pages/[^_]*.haml))
CSS = $(patsubst sass/%.scss, target/css/%.css, $(wildcard sass/[^_]*.scss))
IMAGES = $(patsubst images/%, target/images/%, $(wildcard images/*))

all: target lint site

target:
	mkdir -p target

scsslint:
	scss-lint -c .scss-lint.yml 

target/CNAME: target
	echo "$(URL)" > target/CNAME

target/robots.txt: target
	echo "" > target/robots.txt

target/images/%: images/% target
	mkdir -p target/images
	cp -R $< $@

target/%.html : pages/%.haml target
	haml --style=indented $< > $@

target/css/%.css: sass/%.scss target
	mkdir -p target/css
	sass --style=compressed --sourcemap=none $< $@

redirects: target
	while IFS=" " read src target; do \
	    mkdir -p target/$$(dirname $$src); \
	    echo "<html><head><meta http-equiv='refresh' content='0; URL=$$target'/></head><body/></html>" > target/$$src; \
	done < redirects

site: $(HTML) $(CSS) $(IMAGES) redirects target/CNAME target/robots.txt

lint: scsslint

clean:
	rm -rf target

