/*
	prefs.js
	Copyright © 2009-2011  WOT Services Oy <info@mywot.com>

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

$.extend(wot, { prefs: {
	defaults: {
		/* setting names are the same for each platform, don't change */
		accessible:				false,
		min_confidence_level:	wot.confidencelevels[2].min + 2,
		my_cookies:				true,
		popup_hide_delay:		1000,
		popup_show_delay:		200,
		search_ignore_0:		false,
		search_ignore_1:		false,
		search_ignore_2:		false,
		search_ignore_4:		true,
		search_level:			wot.reputationlevels[5].min,
		search_type:			wot.searchtypes.optimized,
		show_application_0:		true,
		show_application_1:		true,
		show_application_2:		true,
		show_application_4:		true,
		show_search_popup:		true,
		use_search_level:		false,
		status_level:			"",
		warning_level_0:		wot.reputationlevels[4].min - 1,
		warning_level_1:		wot.reputationlevels[4].min - 1,
		warning_level_2:		wot.reputationlevels[4].min - 1,
		warning_level_4:		0,
		warning_opacity:		0.7,
		warning_type_0:			wot.warningtypes.overlay,
		warning_type_1:			wot.warningtypes.overlay,
		warning_type_2:			wot.warningtypes.overlay,
		warning_type_4:			wot.warningtypes.none,
		warning_unknown_0:		false,
		warning_unknown_1:		false,
		warning_unknown_2:		false,
		warning_unknown_4:		false
	},

	set: function(name, value)
	{
		try {
			localStorage.setItem(name, JSON.stringify(value));
			wot.trigger("prefs:set", [ name, value ]);
			return true;
		} catch (e) {
			console.log("prefs.set: failed with " + e + "\n");
		}

		return false;
	},

	get: function(name)
	{
		try {
			var value;

			try {
				value = JSON.parse(localStorage.getItem(name));
			} catch (e) {
			}

			if (value == null) {
				value = this.defaults[name];
			}

			wot.trigger("prefs:get", [ name, value ]);
			return value;
		} catch (e) {
			console.log("prefs.get: failed with " + e + "\n");
		}

		return null;
	},

	clear: function(name)
	{
		try {
			localStorage.removeItem(name);
			wot.trigger("prefs:clear", [ name ]);
			return true;
		} catch (e) {
			console.log("prefs.clear: failed with " + e + "\n");
		}

		return false;
	},

	each: function(func, params)
	{
		if (typeof(func) != "function") {
			return;
		}

		params = params || [];

		for (var i = 0; i < localStorage.length; ++i) {
			var key = localStorage.key(i);

			var rv = func.apply(null,
						[ key, this.get(key) ].concat(params));

			if (rv) {
				return;
			}
		}
	},

	onload: function()
	{
		wot.bind("message:prefs:getm", function(port, data) {
			var values = {};

			data.names.forEach(function(item) {
				values[item] = wot.prefs.get(item);
			});

			port.post("putm", {
				values: values
			});
		});

		wot.bind("message:prefs:get", function(port, data) {
			port.post("put", {
				name: data.name,
				value: wot.prefs.get(data.name)
			});
		});

		wot.bind("message:prefs:set", function(port, data) {
			wot.prefs.set(data.name, data.value);
		});

		wot.bind("message:prefs:clear", function(port, data) {
			wot.prefs.clear(data.name);
		});

		wot.listen("prefs");
	}
}});

wot.prefs.onload();
