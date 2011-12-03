/*
	content/search.js
	Copyright © 2009, 2011  WOT Services Oy <info@mywot.com>

	This file is part of WOT.

	WOT is free software: you can redistribute it and/or modify it
	under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	WOT is distributed in the hope that it will be useful, but WITHOUT
	ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
	or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
	License for more details.

	You should have received a copy of the GNU General Public License
	along with WOT. If not, see <http://www.gnu.org/licenses/>.
*/

wot.search = {
	added: {},

	getattrname: function(name)
	{
		return "wotsearch" + name.replace(/[^a-z0-9]/g, "");
	},

	getname: function(name)
	{
		return "wotsearch" + name;
	},

	matchregexp: function(spec, data)
	{
		try {
			/* Custom flags:
				- n = negative match
				*/
			var flags = spec.flags || "";
			var rv = RegExp(spec.re, flags.replace("n", "")).test(data);

			return (flags.indexOf("n") < 0) ? rv : !rv;
		} catch (e) {
			console.log("search.matchregexp: failed with " + e + "\n");
		}

		return false;
	},

	matchelement: function(match, elem)
	{
		try {
			/* match by attributes */
			if (match.attribute && match.attribute.length) {
				for (var i = 0; i < match.attribute.length; ++i) {
					if (!match.attribute[i].name || !match.attribute[i].re) {
						continue;
					}

					if (!elem.hasAttribute(match.attribute[i].name) ||
							!this.matchregexp(match.attribute[i],
								elem.getAttribute(match.attribute[i].name))) {
						return false;
					}
				}
			}

			/* match by content */
			if (match.value && match.value.length) {
				if (!elem.innerHTML) {
					return false;
				}

				for (var i = 0; i < match.value.length; ++i) {
					if (!match.value[i].re) {
						continue;
					}

					if (!this.matchregexp(match.value[i], elem.innerHTML)) {
						return false;
					}
				}
			}

			return true;
		} catch (e) {
			console.log("search.matchelement: failed with " + e + "\n");
		}

		return false;
	},

	findmatchingelement: function(match, frame)
	{
		try {
			var set = [];

			if (match.element == "$frame") {
				set.push(frame.frameElement);
			} else {
				var docelem = frame.document;

				if (match.document == "$parent" && frame.parent) {
					docelem = frame.parent.document;
				}

				if (!docelem) {
					return null;
				}

				if (/^#/.test(match.element)) {
					set.push(docelem.getElementById(
						match.element.replace(/^#/, "")));
				} else {
					set = docelem.getElementsByTagName(match.element);
				}
			}

			if (set && set.length) {
				/* One matching element is enough */
				for (var i = 0; i < set.length; ++i) {
					if (set[i] && this.matchelement(match, set[i])) {
						return set[i];
					}
				}
			}
		} catch (e) {
			console.log("search.findmatchingelement: failed with " + e + "\n");
		}

		return null;
	},

	matchcontent: function(match, frame)
	{
		try {
			/* process conditional rules */
			if (match.condition && match.match) {
				for (var i = 0; i < match.match.length; ++i) {
					var rv = this.matchcontent(match.match[i], frame);

					if (match.condition == "or" && rv) {
						return true;
					} else if (match.condition == "and" && !rv) {
						return false;
					}
				}

				return (match.match.length == 0 || match.condition == "and");
			}

			/* see if there's a matching element */
			if (match.element &&
					this.findmatchingelement(match, frame)) {
				return true;
			}
		} catch (e) {
			console.log("search.matchcontent: failed with " + e + "\n");
		}

		return false;
	},

	matchrule: function(rule, frame)
	{
		try {
			if (!frame) {
				return false;
			}

			var url = frame.location.href;

			if (url == "about:blank" && frame.frameElement) {
				url = frame.frameElement.baseURI;
			}

			if (!wot.matchruleurl(url)) {
				return false;
			}

			if (rule.match &&
					!this.matchcontent(rule.match[0], frame)) {
				return false;
			}

			return true;
		} catch (e) {
			console.log("search.matchrule: failed with " + e + "\n");
		}

		return false;
	},

	processrule: function(rule, link, ontarget)
	{

		try {
			var url = link.href;

			if (rule.pre) {
				var matchfound = false;

				rule.pre.forEach(function(pre) {
					if (matchfound || !pre.re) {
						return;
					}

					var m = RegExp(pre.re).exec(url);

					if (m && m[pre.match]) {
						url = decodeURIComponent(m[pre.match]);
						matchfound = !!url;
					}
				});
			}

			if (rule.ign && RegExp(rule.ign).test(url)) {
				return;
			}

			wot.url.gethostname(url, function(target) {
				if (!target || (rule.target &&
						!wot.search.matchelement(rule.target, link))) {
					return;
				}

				ontarget(link, target);
			});

		} catch (e) {
			console.log("search.processrule: failed with " + e + "\n");
		}
	},

	addrating: function(target, link, frame)
	{
		try {
			var elem = frame.document.createElement("div");

			if (elem) {
				elem.setAttribute(this.getattrname("target"), target);

				elem.setAttribute("style",
					"display: inline-block; " +
					"cursor: pointer; " +
					"width: 16px; " +
					"height: 16px;");

				elem.addEventListener("click", this.onclickrating, false);

				if (link.nextSibling) {
					elem = link.parentNode.insertBefore(elem, link.nextSibling);
				} else {
					elem = link.parentNode.appendChild(elem);
				}

				elem.innerHTML = "&nbsp;";
			}
		} catch (e) {
			console.log("search.addrating: failed with " + e + "\n");
		}
	},

	addstyle: function(css, frame, id)
	{
		try {
			if (id && frame.document.getElementById(id)) {
				return;
			}

			var style = frame.document.createElement("style");

			style.setAttribute("type", "text/css");

			if (id) {
				style.setAttribute("id", id);
			}

			style.innerText = css;

			var insertpoint =
				frame.document.getElementsByTagName("head") ||
				frame.document.getElementsByTagName("body");

			if (insertpoint && insertpoint.length) {
				insertpoint[0].appendChild(style);
			}
		} catch (e) {
			console.log("search.addstyle: failed with " + e + "\n");
		}
	},

	formatcss: function(css)
	{
		return css.replace(/ATTR/g, this.getattrname("target"));
	},

	getreputation: function(data)
	{
		try {
			var r = data[0] ? data[0].r : -1;

			if (this.settings.search_type == wot.searchtypes.trustworthiness) {
				return r;
			}

			wot.components.forEach(function(item) {
				if (!wot.search.settings["show_application_" + item.name] ||
						wot.search.settings["search_ignore_" + item.name]) {
					return;
				}

				switch (wot.search.settings.search_type) {
				case wot.searchtypes.optimized:
					var type = wot.getwarningtypeforcomponent(item.name, data,
									wot.search.settings);

					if (type && data[item.name] && r > data[item.name].r) {
						r = data[item.name].r;
					}
					break;
				case wot.searchtypes.worst:
					if (data[item.name] && data[item.name].r >= 0 &&
							r > data[item.name].r) {
						r = data[item.name].r;
					}
					break;
				default:
					wot.log("search.getreputation: unknown search type: " +
						wot.search.settings.search_type + "\n");
					return;
				}
			});

			return r;
		} catch (e) {
			console.log("search.getreputation: failed with " + e + "\n");
		}

		return -1;
	},

	getcss: function(rule, obj)
	{
		var css = "";

		if (rule.style && !this.added[obj.target]) {
			this.added[obj.target] = true;

			var r = this.getreputation(obj);

			if (this.settings.use_search_level &&
					r >= this.settings.search_level) {
				return css;
			}

			css = this.formatcss(rule.style)
					.replace(/NAME/g, obj.target)
					.replace(/IMAGE/g,
						chrome.extension.getURL(wot.geticon(r, 16,
								this.settings.accessible, true)));
		}

		return css;
	},

	processframe: function(rule, frame, oncomplete)
	{
		try {
			var targets = [];

			for (var i = 0; i < frame.document.links.length; ++i) {
				var link = frame.document.links[i];

				if (!link.parentNode || !link.href ||
						link.getAttribute(this.getattrname("processed"))) {
					continue;
				}

				link.setAttribute(this.getattrname("processed"), true);

				this.processrule(rule, link, function(elem, target) {
					wot.search.addrating(target, elem, frame);
					targets.push(target);
				});
			}

			wot.bind("url:ready", function() {
				targets = wot.getuniques(targets);

				if (targets.length) {
					oncomplete(targets);
				}
			});
		} catch (e) {
			console.log("search.processframe: failed with " + e + "\n");
		}
	},

	loadsettings: function(ondone)
	{
		var prefs = [
			"accessible",
			"min_confidence_level",
			"popup_hide_delay",
			"popup_show_delay",
			"search_level",
			"search_type",
			"show_search_popup",
			"use_search_level"
		];

		wot.components.forEach(function(item) {
			prefs.push("show_application_" + item.name);
			prefs.push("search_ignore_" + item.name);
			prefs.push("warning_level_" + item.name);
			prefs.push("warning_type_" + item.name);
			prefs.push("warning_unknown_" + item.name);
		});

		this.settings = this.settings || {};

		wot.prefs.load(prefs, function(name, value) {
				wot.search.settings[name] = value;
			}, ondone);
	},

	onprocess: function(data)
	{
		wot.log("search.onprocess: " + data.url + "\n");

		if (this.matchrule(data.rule, window)) {
			this.processframe(data.rule, window, function(targets) {
				/* add common styles */
				if (data.rule.prestyle) {
					wot.search.addstyle(
						wot.search.formatcss(data.rule.prestyle), window,
						wot.search.getname("prestyle"));
				}

				if (data.rule.popup && data.rule.popup.match &&
						data.rule.popup.match.length) {
					var elem = wot.search.findmatchingelement(
									rule.popup.match[0], window);

					if (elem) {
						wot.popup.add(elem);
					}
				} else {
					wot.popup.add();
				}

				/* TODO: content scripts? */

				/* load ratings */
				wot.post("search", "get",
					{ rule: data.rule, targets: targets });
			});
		}

		if (data.rule.dynamic || window.frameElement) {
			var handler = {
				handleEvent: function() {
					/* remove event handler while processing */
					document.removeEventListener("DOMNodeInserted", this,
						false);

					/* let the document settle before reprocessing */
					window.setTimeout(function() {
							wot.search.onprocess(data);
						}, 500);
				}
			};

			/* watch for changes */
			document.addEventListener("DOMNodeInserted", handler, false);
		}
	},

	onupdate: function(data)
	{
		/* add rating styles */
		var style = "";

		for (var i in data.ratings) {
			style += this.getcss(data.rule, data.ratings[i]);
		}

		if (style.length) {
			this.addstyle(style, window);
		}
	},

	onclickrating: function(event)
	{
		try {
			var target =
				event.target.getAttribute(wot.search.getattrname("target"));

			if (target) {
				wot.post("search", "openscorecard", { target: target });
				event.stopPropagation();
			}
		} catch (e) {
			console.log("search.onclickrating: failed with " + e + "\n");
		}
	},

	onload: function()
	{
		try {
			wot.bind("message:search:process", function(port, data) {
				/* load the necessary settings before starting */
				wot.search.loadsettings(function() {
					wot.search.onprocess(data);
				});
			});

			wot.bind("message:search:update", function(port, data) {
				wot.search.onupdate(data);
			});

			document.addEventListener("DOMContentLoaded", function(e) {
					var url = e.target.location.href;
					if (url) {
						wot.post("search", "hello", { url: url });
					}
				}, false);

			if (document.readyState == "complete") {
				var url = window.location.href;
				if (url) {
					wot.post("search", "hello", { url: url });
				}
			}
		} catch (e) {
			console.log("search.onload: failed with " + e + "\n");
		}
	}
};

wot.search.onload();
