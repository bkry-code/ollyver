/* Modernizr 2.8.2 (Custom Build) */
/* http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-csstransforms-csstransforms3d-csstransitions-audio-video-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load */

;window.Modernizr = function(a, b, c) {
	function C(a) {
		j.cssText = a
	}
	function D(a, b) {
		return C(n.join(a + ";") + (b || ""))
	}
	function E(a, b) {
		return typeof a === b
	}
	function F(a, b) {
		return !!~("" + a).indexOf(b)
	}
	function G(a, b) {
		for (var d in a) {
			var e = a[d];
			if (!F(e, "-") && j[e] !== c)
				return b == "pfx" ? e : !0
		}
		return !1
	}
	function H(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c)
				return d===!1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
		}
		return !1
	}
	function I(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
		return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
	}
	var d = "2.8.2", e = {}, f=!0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
		svg: "http://www.w3.org/2000/svg"
	}, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function(a, c, d, e) {
		var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
		if (parseInt(d, 10))
			while (d--)
				j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
		return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
	}, z = function() {
		function d(d, e) {
			e = e || b.createElement(a[d] || "div"), d = "on" + d;
			var f = d in e;
			return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
		}
		var a = {
			select: "input",
			change: "input",
			submit: "form",
			reset: "form",
			error: "img",
			load: "img",
			abort: "img"
		};
		return d
	}(), A = {}.hasOwnProperty, B;
	!E(A, "undefined")&&!E(A.call, "undefined") ? B = function(a, b) {
		return A.call(a, b)
	} : B = function(a, b) {
		return b in a && E(a.constructor.prototype[b], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function(b) {
		var c = this;
		if (typeof c != "function")
			throw new TypeError;
		var d = w.call(arguments, 1), e = function() {
			if (this instanceof e) {
				var a = function() {};
				a.prototype = c.prototype;
				var f = new a, g = c.apply(f, d.concat(w.call(arguments)));
				return Object(g) === g ? g : f
			}
			return c.apply(b, d.concat(w.call(arguments)))
		};
		return e
	}), s.flexbox = function() {
		return I("flexWrap")
	}, s.flexboxlegacy = function() {
		return I("boxDirection")
	}, s.touch = function() {
		var c;
		return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c=!0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
			c = a.offsetTop === 9
		}), c
	}, s.rgba = function() {
		return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
	}, s.multiplebgs = function() {
		return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
	}, s.backgroundsize = function() {
		return I("backgroundSize")
	}, s.borderimage = function() {
		return I("borderImage")
	}, s.borderradius = function() {
		return I("borderRadius")
	}, s.boxshadow = function() {
		return I("boxShadow")
	}, s.textshadow = function() {
		return b.createElement("div").style.textShadow === ""
	}, s.opacity = function() {
		return D("opacity:.55"), /^0.55$/.test(j.opacity)
	}, s.cssanimations = function() {
		return I("animationName")
	}, s.csscolumns = function() {
		return I("columnCount")
	}, s.csstransforms = function() {
		return !!I("transform")
	}, s.csstransforms3d = function() {
		var a=!!I("perspective");
		return a && "webkitPerspective"in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
			a = b.offsetLeft === 9 && b.offsetHeight === 3
		}), a
	}, s.csstransitions = function() {
		return I("transition")
	}, s.fontface = function() {
		var a;
		return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
			var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText: f.cssText || "": "";
			a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
		}), a
	}, s.generatedcontent = function() {
		var a;
		return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
			a = b.offsetHeight >= 3
		}), a
	}, s.video = function() {
		var a = b.createElement("video"), c=!1;
		try {
			if (c=!!a.canPlayType)
				c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
		} catch (d) {}
		return c
	}, s.audio = function() {
		var a = b.createElement("audio"), c=!1;
		try {
			if (c=!!a.canPlayType)
				c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
		} catch (d) {}
		return c
	}, s.svg = function() {
		return !!b.createElementNS&&!!b.createElementNS(r.svg, "svg").createSVGRect
	}, s.inlinesvg = function() {
		var a = b.createElement("div");
		return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
	}, s.svgclippaths = function() {
		return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
	};
	for (var J in s)
		B(s, J) && (x = J.toLowerCase(), e[x] = s[J](), v.push((e[x] ? "" : "no-") + x));
	return e.addTest = function(a, b) {
		if (typeof a == "object")
			for (var d in a)
				B(a, d) && e.addTest(d, a[d]);
		else {
			a = a.toLowerCase();
			if (e[a] !== c)
				return e;
			b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
		}
		return e
	}, C(""), i = k = null, function(a, b) {
		function l(a, b) {
			var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
			return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
		}
		function m() {
			var a = s.elements;
			return typeof a == "string" ? a.split(" ") : a
		}
		function n(a) {
			var b = j[a[h]];
			return b || (b = {}, i++, a[h] = i, j[i] = b), b
		}
		function o(a, c, d) {
			c || (c = b);
			if (k)
				return c.createElement(a);
			d || (d = n(c));
			var g;
			return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren&&!e.test(a)&&!g.tagUrn ? d.frag.appendChild(g) : g
		}
		function p(a, c) {
			a || (a = b);
			if (k)
				return a.createDocumentFragment();
			c = c || n(a);
			var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
			for (; e < g; e++)
				d.createElement(f[e]);
			return d
		}
		function q(a, b) {
			b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
				return s.shivMethods ? o(c, a, b) : b.createElem(c)
			}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
				return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
			}) + ");return n}")(s, b.frag)
		}
		function r(a) {
			a || (a = b);
			var c = n(a);
			return s.shivCSS&&!g&&!c.hasCSS && (c.hasCSS=!!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
		}
		var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
		(function() {
			try {
				var a = b.createElement("a");
				a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function() {
					b.createElement("a");
					var a = b.createDocumentFragment();
					return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
				}()
			} catch (c) {
				g=!0, k=!0
			}
		})();
		var s = {
			elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
			version: c,
			shivCSS: d.shivCSS!==!1,
			supportsUnknownElements: k,
			shivMethods: d.shivMethods!==!1,
			type: "default",
			shivDocument: r,
			createElement: o,
			createDocumentFragment: p
		};
		a.html5 = s, r(b)
	}(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
		return G([a])
	}, e.testAllProps = I, e.testStyles = y, e.prefixed = function(a, b, c) {
		return b ? I(a, b, c) : I(a, "pfx")
	}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
}(this, this.document), function(a, b, c) {
	function d(a) {
		return "[object Function]" == o.call(a)
	}
	function e(a) {
		return "string" == typeof a
	}
	function f() {}
	function g(a) {
		return !a || "loaded" == a || "complete" == a || "uninitialized" == a
	}
	function h() {
		var a = p.shift();
		q = 1, a ? a.t ? m(function() {
			("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
		}, 0) : (a(), h()) : q = 0
	}
	function i(a, c, d, e, f, i, j) {
		function k(b) {
			if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
				"img" != a && m(function() {
					t.removeChild(l)
				}, 50);
				for (var d in y[c])
					y[c].hasOwnProperty(d) && y[c][d].onload()
			}
		}
		var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {
			t: d,
			s: c,
			e: f,
			a: i,
			x: j
		};
		1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
			k.call(this, r)
		}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
	}
	function j(a, b, c, d, f) {
		return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
	}
	function k() {
		var a = B;
		return a.loader = {
			load: j,
			i: 0
		}, a
	}
	var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r&&!!b.createRange().compareNode, t = s ? l: n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l=!!b.attachEvent&&!l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
		return "[object Array]" == o.call(a)
	}, x = [], y = {}, z = {
		timeout: function(a, b) {
			return b.length && (a.timeout = b[0]), a
		}
	}, A, B;
	B = function(a) {
		function b(a) {
			var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
				url: c,
				origUrl: c,
				prefixes: a
			}, e, f, g;
			for (f = 0; f < d; f++)
				g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
			for (f = 0; f < b; f++)
				c = x[f](c);
			return c
		}
		function g(a, e, f, g, h) {
			var i = b(a), j = i.autoCallback;
			i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec=!0 : y[i.url] = 1, f.load(i.url, i.forceCSS ||!i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
				k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
			})))
		}
		function h(a, b) {
			function c(a, c) {
				if (a) {
					if (e(a))
						c || (j = function() {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
					else if (Object(a) === a)
						for (n in m = function() {
							var b = 0, c;
							for (c in a)
								a.hasOwnProperty(c) && b++;
								return b
							}(), a)
								a.hasOwnProperty(n) && (!c&&!--m && (d(j) ? j = function() {
									var a = [].slice.call(arguments);
									k.apply(this, a), l()
								} : j[n] = function(a) {
									return function() {
										var b = [].slice.call(arguments);
										a && a.apply(this, b), l()
									}
								}(k[n])), g(a[n], j, b, n, h))
				} else 
					!c && l()
			}
			var h=!!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
			c(h ? a.yep : a.nope, !!i), i && c(i)
		}
		var i, j, l = this.yepnope.loader;
		if (e(a))
			g(a, 0, l, 0);
		else if (w(a))
			for (i = 0; i < a.length; i++)
				j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
		else 
			Object(a) === a && h(a, l)
	}, B.addPrefix = function(a, b) {
		z[a] = b
	}, B.addFilter = function(a) {
		x.push(a)
	}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
		b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
	}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
		var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
		k.src = a;
		for (o in d)
			k.setAttribute(o, d[o]);
		c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
			!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
		}, m(function() {
			l || (l = 1, c(1))
		}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
	}, a.yepnope.injectCss = function(a, c, d, e, g, i) {
		var e = b.createElement("link"), j, c = i ? h: c || f;
		e.href = a, e.rel = "stylesheet", e.type = "text/css";
		for (j in d)
			e.setAttribute(j, d[j]);
		g || (n.parentNode.insertBefore(e, n), m(c, 0))
	}
}(this, document), Modernizr.load = function() {
	yepnope.apply(window, [].slice.call(arguments, 0))
};

// Webkit detection script
Modernizr.addTest('webkit', function() {
	return RegExp("AppleWebKit/").test(navigator.userAgent);
});

// Firefox detection script
Modernizr.addTest('firefox', function () {
	return !!navigator.userAgent.match(/firefox/i);
});

/* Elixir */

var elixir = function(e) {
	"use strict";
	var t = function(e) {
		return document.querySelectorAll(e)
	}, i = function(e) {
		for (var t in e)
			n(t, e[t]);
		elixir.object = e || {}
	}, n = function(e, i, n) {
		for (var n = n ||!1, r = t(e), s = i.widths || [320, 640, 800, 1200, 1500, 1800, 2400, 3e3], a = i.heights ||!1, l = i.lazy_tag ||!1, c = i.lazy_url ||!1, u = [], d = function(e) {
			c&&!n && e.setAttribute("src", c), u.push(e)
		}, h = 0; h < r.length; h++)
			if ("IMG" === r[h].tagName || r[h].style.cssText.length)
				d(r[h]);
			else if (r[h].children.length > 0) {
				var p = [];
				r[h].querySelectorAll("[data-elixir]").length > 0 ? p = r[h].querySelectorAll("[data-elixir]") : r[h].querySelectorAll("img").length > 0 ? p = r[h].querySelectorAll("img") : r[h].querySelectorAll("[style]").length > 0 && (p = r[h].querySelectorAll("[style]"));
				for (var f = 0; f < p.length; f++)
					d(p[f])
			}
		o(u, s, a, l, n)
	}, o = function(e, t, i, n, o) {
		for (var s = 0; s < e.length; s++) {
			var a = e[s], l = a.getAttribute("data-elixir") || a.getAttribute(n) || a.src || a.style.cssText, c = a.offsetWidth * r(), u, d, h, p;
			if (null !== l.match(/(w=)\d+/) || null !== l.match(/(-w)\d+/))
				var f = null !== l.match(/(w=)\d+/) ? l.match(/(w=)\d+/)[0].replace("w=", ""): l.match(/(-w)\d+/)[0].replace("-w", "");
			else 
				var f = null;
			var v = function() {
				p = n ? a.getAttribute(n) || a.getAttribute("data-elixir") ? n : "src" : "IMG" === a.tagName ? "src" : "style", o || a.removeAttribute("data-elixir");
				for (var e = 0; e < t.length; e++) {
					if (t[e] >= c) {
						u = t[e], i && (d = i[e]);
						break
					}
					u = t[e], i && (d = i[e])
				}
				h = i ? l.replace(/(-w)\d+/, "-w" + u).replace(/(-h)\d+/, "-h" + d).replace(/(w=)\d+/, "w=" + u).replace(/(h=)\d+/, "h=" + d) : l.replace(/(-w)\d+/, "-w" + u).replace(/(w=)\d+/, "w=" + u), a.setAttribute(p, h)
			};
			(c > parseFloat(f) ||!o) && v()
		}
	}, r = function() {
		var e = 1;
		return "deviceXDPI"in screen ? e = screen.deviceXDPI / screen.logicalXDPI : window.hasOwnProperty("devicePixelRatio") && (e = window.devicePixelRatio), e
	};
	window.onresize = function() {
		this.resize && clearTimeout(this.resize), this.resize = setTimeout(function() {
			for (var e in elixir.object)
				n(e, elixir.object[e], !0)
		}, 500)
	}, i(e)
};

/* Unveil */

;(function($) {

  $.fn.unveil = function(threshold, callback) {

	var $w = $(window),
		th = threshold || 0,
		retina = window.devicePixelRatio > 1,
		attrib = retina? "data-src-retina" : "data-src",
		images = this,
		loaded;

	this.one("unveil", function() {
	  var source = this.getAttribute(attrib);
	  source = source || this.getAttribute("data-src");
	  if (source) {
		this.setAttribute("src", source);
		if (typeof callback === "function") callback.call(this);
	  }
	});

	function unveil() {
	  var inview = images.filter(function() {
		var $e = $(this);
		if ($e.is(":hidden")) return;

		var wt = $w.scrollTop(),
			wb = wt + $w.height(),
			et = $e.offset().top,
			eb = et + $e.height();

		return eb >= wt - th && et <= wb + th;
	  });

	  loaded = inview.trigger("unveil");
	  images = images.not(loaded);
	}

	$w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

	unveil();

	return this;

  };

})(window.jQuery || window.Zepto);

/* FitVids */

!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(e){var i=t(this);if(!(i.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length)){i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16));var a="object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height(),d=isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10),o=a/d;if(!i.attr("id")){var h="fitvid"+e;i.attr("id",h)}i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),i.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);

/* Fancy Select */

(function() {
	var $;
	$ = window.jQuery || window.Zepto || window.$, $.fn.fancySelect = function(t) {
		var e, a, i=!0;
		return null == t && (t = {}), a = $.extend({
			forceiOS: !1,
			includeBlank: !1,
			optionTemplate: function(t) {
				return t.text()
			},
			triggerTemplate: function(t) {
				return t.text()
			}
		}, t), e=!!navigator.userAgent.match(/iP(hone|od|ad)/i), this.each(function() {
			var t, n, r, o, s, l, c;
			return o = $(this), o.hasClass("fancified") || "SELECT" !== o[0].tagName ? void 0 : (o.addClass("fancified"), o.css({
				width: 1,
				height: 1,
				display: "block",
				position: "absolute",
				top: 0,
				left: 0,
				opacity: 0
			}), o.wrap('<div class="fancy-select">'), c = o.parent(), o.data("class") && c.addClass(o.data("class")), c.append('<div class="trigger">'), (!e || a.forceiOS) && c.append('<ul class="options">'), s = c.find(".trigger"), r = c.find(".options"), n = o.prop("disabled"), n && c.addClass("disabled"), l = function() {
				var t;
				return t = a.triggerTemplate(o.find(":selected")), s.html(t)
			}, o.on("blur.fs", function() {
				return i ? void 0 : s.hasClass("open") ? s.trigger("close.fs") : void 0
			}), s.on("close.fs", function() {
				return s.removeClass("open"), r.removeClass("open")
			}), s.on("click.fs", function() {
				var t, i;
				if (!n)
					if (s.toggleClass("open"), e&&!a.forceiOS) {
						if (s.hasClass("open"))
							return o.focus()
					} else if (s.hasClass("open") && (i = s.parent(), t = i.offsetParent(), i.offset().top + i.outerHeight() + r.outerHeight() + 20 > $(window).height() + $(window).scrollTop() ? r.addClass("overflowing") : r.removeClass("overflowing")), r.toggleClass("open"), !e)
						return o.focus()
			}), o.on("enable", function() {
				return o.prop("disabled", !1), c.removeClass("disabled"), n=!1, t()
			}), o.on("disable", function() {
				return o.prop("disabled", !0), c.addClass("disabled"), n=!0
			}), o.on("change.fs", function(t) {
				return t.originalEvent && t.originalEvent.isTrusted ? t.stopPropagation() : l()
			}), o.on("keydown", function(t) {
				var e, a, i;
				if (i = t.which, e = r.find(".hover"), e.removeClass("hover"), r.hasClass("open")) {
					if (38 === i ? (t.preventDefault(), e.length && e.index() > 0 ? e.prev().addClass("hover") : r.find("li:last-child").addClass("hover")) : 40 === i ? (t.preventDefault(), e.length && e.index() < r.find("li").length - 1 ? e.next().addClass("hover") : r.find("li:first-child").addClass("hover")) : 27 === i ? (t.preventDefault(), s.trigger("click.fs")) : 13 === i || 32 === i ? (t.preventDefault(), e.trigger("click.fs")) : 9 === i && s.hasClass("open") && s.trigger("close.fs"), a = r.find(".hover"), a.length)
						return r.scrollTop(0), r.scrollTop(a.position().top - 12)
				} else if (13 === i || 32 === i || 38 === i || 40 === i)
					return t.preventDefault(), s.trigger("click.fs")
			}), r.on("click.fs", "li", function(t) {
				var a;
				return a = $(this), o.val(a.data("raw-value")), e || o.trigger("blur.fs").trigger("focus.fs"), r.find(".selected").removeClass("selected"), a.addClass("selected"), i=!1, o.val(a.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")
			}), r.on("mousedown.fs", "li", function() {
				i=!0
			}), r.on("mouseenter.fs", "li", function() {
				var t, e;
				return e = $(this), t = r.find(".hover"), t.removeClass("hover"), e.addClass("hover")
			}), r.on("mouseleave.fs", "li", function() {
				return r.find(".hover").removeClass("hover")
			}), t = function() {
				var t;
				return l(), !e || a.forceiOS ? (t = o.find("option"), o.find("option").each(function(t, e) {
					var i;
					return e = $(e), e.prop("disabled") ||!e.val()&&!a.includeBlank ? void 0 : (i = a.optionTemplate(e), e.prop("selected") ? r.append('<li data-raw-value="' + e.val() + '" class="selected">' + i + "</li>") : r.append('<li data-raw-value="' + e.val() + '">' + i + "</li>"))
				})) : void 0
			}, o.on("update.fs", function() {
				return c.find(".options").empty(), t()
			}), t())
		})
	}
}).call(this),

/* MixItUp */

!function(t, e) {
	t.MixItUp = function() {
		var e = this;
		e._execAction("_constructor", 0), t.extend(e, {
			selectors: {
				target: ".mix",
				filter: ".filter",
				sort: ".sort"
			},
			animation: {
				enable: !0,
				effects: "fade scale",
				duration: 600,
				easing: "ease",
				perspectiveDistance: "3000",
				perspectiveOrigin: "50% 50%",
				queue: !0,
				queueLimit: 1,
				animateChangeLayout: !1,
				animateResizeContainer: !0,
				animateResizeTargets: !1,
				staggerSequence: !1,
				reverseOut: !1
			},
			callbacks: {
				onMixLoad: !1,
				onMixStart: !1,
				onMixBusy: !1,
				onMixEnd: !1,
				onMixFail: !1,
				_user: !1
			},
			controls: {
				enable: !0,
				live: !1,
				toggleFilterButtons: !1,
				toggleLogic: "or",
				activeClass: "active"
			},
			layout: {
				display: "inline-block",
				containerClass: "",
				containerClassFail: "fail"
			},
			load: {
				filter: "all",
				sort: !1
			},
			_$body: null,
			_$container: null,
			_$targets: null,
			_$parent: null,
			_$sortButtons: null,
			_$filterButtons: null,
			_suckMode: !1,
			_mixing: !1,
			_sorting: !1,
			_clicking: !1,
			_loading: !0,
			_changingLayout: !1,
			_changingClass: !1,
			_changingDisplay: !1,
			_origOrder: [],
			_startOrder: [],
			_newOrder: [],
			_activeFilter: null,
			_toggleArray: [],
			_toggleString: "",
			_activeSort: "default:asc",
			_newSort: null,
			_startHeight: null,
			_newHeight: null,
			_incPadding: !0,
			_newDisplay: null,
			_newClass: null,
			_targetsBound: 0,
			_targetsDone: 0,
			_queue: [],
			_$show: t(),
			_$hide: t()
		}), e._execAction("_constructor", 1)
	}, t.MixItUp.prototype = {
		constructor: t.MixItUp,
		_instances: {},
		_handled: {
			_filter: {},
			_sort: {}
		},
		_bound: {
			_filter: {},
			_sort: {}
		},
		_actions: {},
		_filters: {},
		extend: function(e) {
			for (var a in e)
				t.MixItUp.prototype[a] = e[a]
		},
		addAction: function(e, a, i, n) {
			t.MixItUp.prototype._addHook("_actions", e, a, i, n)
		},
		addFilter: function(e, a, i, n) {
			t.MixItUp.prototype._addHook("_filters", e, a, i, n)
		},
		_addHook: function(e, a, i, n, r) {
			var o = t.MixItUp.prototype[e], s = {};
			r = 1 === r || "post" === r ? "post" : "pre", s[a] = {}, s[a][r] = {}, s[a][r][i] = n, t.extend(!0, o, s)
		},
		_init: function(e, a) {
			var i = this;
			if (i._execAction("_init", 0, arguments), a && t.extend(!0, i, a), i._$body = t("body"), i._domNode = e, i._$container = t(e), i._$container.addClass(i.layout.containerClass), i._id = e.id, i._platformDetect(), i._brake = i._getPrefixedCSS("transition", "none"), i._refresh(!0), i._$parent = i._$targets.parent().length ? i._$targets.parent() : i._$container, i.load.sort && (i._newSort = i._parseSort(i.load.sort), i._newSortString = i.load.sort, i._activeSort = i.load.sort, i._sort(), i._printSort()), i._activeFilter = "all" === i.load.filter ? i.selectors.target : "none" === i.load.filter ? "" : i.load.filter, i.controls.enable && i._bindHandlers(), i.controls.toggleFilterButtons) {
				i._buildToggleArray();
				for (var n = 0; n < i._toggleArray.length; n++)
					i._updateControls({
						filter: i._toggleArray[n],
						sort: i._activeSort
					}, !0)
			} else 
				i.controls.enable && i._updateControls({
					filter: i._activeFilter,
					sort: i._activeSort
				});
			i._filter(), i._init=!0, i._$container.data("mixItUp", i), i._execAction("_init", 1, arguments), i._buildState(), i._$targets.css(i._brake), i._goMix(i.animation.enable)
		},
		_platformDetect: function() {
			var t = this, a = ["Webkit", "Moz", "O", "ms"], i = ["webkit", "moz"], n = window.navigator.appVersion.match(/Chrome\/(\d+)\./) ||!1, r = "undefined" != typeof InstallTrigger, o = function(t) {
				for (var e = 0; e < a.length; e++)
					if (a[e] + "Transition"in t.style)
						return {
							prefix: "-" + a[e].toLowerCase() + "-",
							vendor: a[e]
						};
				return "transition"in t.style ? "" : !1
			}, s = o(t._domNode);
			t._execAction("_platformDetect", 0), t._chrome = n ? parseInt(n[1], 10) : !1, t._ff = r ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : !1, t._prefix = s.prefix, t._vendor = s.vendor, t._suckMode = window.atob && t._prefix?!1 : !0, t._suckMode && (t.animation.enable=!1), t._ff && t._ff <= 4 && (t.animation.enable=!1);
			for (var l = 0; l < i.length&&!window.requestAnimationFrame; l++)
				window.requestAnimationFrame = window[i[l] + "RequestAnimationFrame"];
			"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof"test".__proto__ ? function(t) {
				return t.__proto__
			} : function(t) {
				return t.constructor.prototype
			}), t._domNode.nextElementSibling === e && Object.defineProperty(Element.prototype, "nextElementSibling", {
				get: function() {
					for (var t = this.nextSibling; t;) {
						if (1 === t.nodeType)
							return t;
						t = t.nextSibling
					}
					return null
				}
			}), t._execAction("_platformDetect", 1)
		},
		_refresh: function(t, a) {
			var i = this;
			i._execAction("_refresh", 0, arguments), i._$targets = i._$container.find(i.selectors.target);
			for (var n = 0; n < i._$targets.length; n++) {
				var r = i._$targets[n];
				if (r.dataset === e || a) {
					r.dataset = {};
					for (var o = 0; o < r.attributes.length; o++) {
						var s = r.attributes[o], l = s.name, c = s.value;
						if (l.indexOf("data-")>-1) {
							var g = i._helpers._camelCase(l.substring(5, l.length));
							r.dataset[g] = c
						}
					}
				}
				r.mixParent === e && (r.mixParent = i._id)
			}
			if (i._$targets.length && t ||!i._origOrder.length && i._$targets.length) {
				i._origOrder = [];
				for (var n = 0; n < i._$targets.length; n++) {
					var r = i._$targets[n];
					i._origOrder.push(r)
				}
			}
			i._execAction("_refresh", 1, arguments)
		},
		_bindHandlers: function() {
			var a = this, i = t.MixItUp.prototype._bound._filter, n = t.MixItUp.prototype._bound._sort;
			a._execAction("_bindHandlers", 0), a.controls.live ? a._$body.on("click.mixItUp." + a._id, a.selectors.sort, function() {
				a._processClick(t(this), "sort")
			}).on("click.mixItUp." + a._id, a.selectors.filter, function() {
				a._processClick(t(this), "filter")
			}) : (a._$sortButtons = t(a.selectors.sort), a._$filterButtons = t(a.selectors.filter), a._$sortButtons.on("click.mixItUp." + a._id, function() {
				a._processClick(t(this), "sort")
			}), a._$filterButtons.on("click.mixItUp." + a._id, function() {
				a._processClick(t(this), "filter")
			})), i[a.selectors.filter] = i[a.selectors.filter] === e ? 1 : i[a.selectors.filter] + 1, n[a.selectors.sort] = n[a.selectors.sort] === e ? 1 : n[a.selectors.sort] + 1, a._execAction("_bindHandlers", 1)
		},
		_processClick: function(a, i) {
			var n = this, r = function(a, i, r) {
				var o = t.MixItUp.prototype;
				o._handled["_" + i][n.selectors[i]] = o._handled["_" + i][n.selectors[i]] === e ? 1 : o._handled["_" + i][n.selectors[i]] + 1, o._handled["_" + i][n.selectors[i]] === o._bound["_" + i][n.selectors[i]] && (a[(r ? "remove" : "add") + "Class"](n.controls.activeClass), delete o._handled["_" + i][n.selectors[i]])
			};
			if (n._execAction("_processClick", 0, arguments), !n._mixing || n.animation.queue && n._queue.length < n.animation.queueLimit) {
				if (n._clicking=!0, "sort" === i) {
					var o = a.attr("data-sort");
					(!a.hasClass(n.controls.activeClass) || o.indexOf("random")>-1) && (t(n.selectors.sort).removeClass(n.controls.activeClass), r(a, i), n.sort(o))
				}
				if ("filter" === i) {
					var s, l = a.attr("data-filter"), c = "or" === n.controls.toggleLogic ? ",": "";
					n.controls.toggleFilterButtons ? (n._buildToggleArray(), a.hasClass(n.controls.activeClass) ? (r(a, i, !0), s = n._toggleArray.indexOf(l), n._toggleArray.splice(s, 1)) : (r(a, i), n._toggleArray.push(l)), n._toggleArray = t.grep(n._toggleArray, function(t) {
						return t
					}), n._toggleString = n._toggleArray.join(c), n.filter(n._toggleString)) : a.hasClass(n.controls.activeClass) || (t(n.selectors.filter).removeClass(n.controls.activeClass), r(a, i), n.filter(l))
				}
				n._execAction("_processClick", 1, arguments)
			} else 
				"function" == typeof n.callbacks.onMixBusy && n.callbacks.onMixBusy.call(n._domNode, n._state, n), n._execAction("_processClickBusy", 1, arguments)
		},
		_buildToggleArray: function() {
			var t = this, e = t._activeFilter.replace(/\s/g, "");
			if (t._execAction("_buildToggleArray", 0, arguments), "or" === t.controls.toggleLogic)
				t._toggleArray = e.split(",");
			else {
				t._toggleArray = e.split("."), !t._toggleArray[0] && t._toggleArray.shift();
				for (var a, i = 0; a = t._toggleArray[i]; i++)
					t._toggleArray[i] = "." + a
			}
			t._execAction("_buildToggleArray", 1, arguments)
		},
		_updateControls: function(a, i) {
			var n = this, r = {
				filter: a.filter,
				sort: a.sort
			}, o = function(t, e) {
				i && "filter" === s && "none" !== r.filter && "" !== r.filter ? t.filter(e).addClass(n.controls.activeClass) : t.removeClass(n.controls.activeClass).filter(e).addClass(n.controls.activeClass)
			}, s = "filter", l = null;
			n._execAction("_updateControls", 0, arguments), a.filter === e && (r.filter = n._activeFilter), a.sort === e && (r.sort = n._activeSort), r.filter === n.selectors.target && (r.filter = "all");
			for (var c = 0; 2 > c; c++)
				l = n.controls.live ? t(n.selectors[s]) : n["_$" + s + "Buttons"], l && o(l, "[data-" + s + '="' + r[s] + '"]'), s = "sort";
			n._execAction("_updateControls", 1, arguments)
		},
		_filter: function() {
			var e = this;
			e._execAction("_filter", 0);
			for (var a = 0; a < e._$targets.length; a++) {
				var i = t(e._$targets[a]);
				i.is(e._activeFilter) ? e._$show = e._$show.add(i) : e._$hide = e._$hide.add(i)
			}
			e._execAction("_filter", 1)
		},
		_sort: function() {
			var t = this, e = function(t) {
				for (var e = t.slice(), a = e.length, i = a; i--;) {
					var n = parseInt(Math.random() * a), r = e[i];
					e[i] = e[n], e[n] = r
				}
				return e
			};
			t._execAction("_sort", 0), t._startOrder = [];
			for (var a = 0; a < t._$targets.length; a++) {
				var i = t._$targets[a];
				t._startOrder.push(i)
			}
			switch (t._newSort[0].sortBy) {
			case"default":
				t._newOrder = t._origOrder;
				break;
			case"random":
				t._newOrder = e(t._startOrder);
				break;
			case"custom":
				t._newOrder = t._newSort[0].order;
				break;
			default:
				t._newOrder = t._startOrder.concat().sort(function(e, a) {
					return t._compare(e, a)
				})
			}
			t._execAction("_sort", 1)
		},
		_compare: function(t, e, a) {
			a = a ? a : 0;
			var i = this, n = i._newSort[a].order, r = function(t) {
				return t.dataset[i._newSort[a].sortBy] || 0
			}, o = isNaN(1 * r(t)) ? r(t).toLowerCase(): 1 * r(t), s = isNaN(1 * r(e)) ? r(e).toLowerCase(): 1 * r(e);
			return s > o ? "asc" === n?-1 : 1 : o > s ? "asc" === n ? 1 : - 1 : o === s && i._newSort.length > a + 1 ? i._compare(t, e, a + 1) : 0
		},
		_printSort: function(t) {
			var e = this, a = t ? e._startOrder: e._newOrder, i = e._$parent[0].querySelectorAll(e.selectors.target), n = i.length ? i[i.length - 1].nextElementSibling: null, r = document.createDocumentFragment();
			e._execAction("_printSort", 0, arguments);
			for (var o = 0; o < i.length; o++) {
				var s = i[o], l = s.nextSibling;
				"absolute" !== s.style.position && (l && "#text" === l.nodeName && e._$parent[0].removeChild(l), e._$parent[0].removeChild(s))
			}
			for (var o = 0; o < a.length; o++) {
				var c = a[o];
				if ("default" !== e._newSort[0].sortBy || "desc" !== e._newSort[0].order || t)
					r.appendChild(c), r.appendChild(document.createTextNode(" "));
				else {
					var g = r.firstChild;
					r.insertBefore(c, g), r.insertBefore(document.createTextNode(" "), c)
				}
			}
			n ? e._$parent[0].insertBefore(r, n) : e._$parent[0].appendChild(r), e._execAction("_printSort", 1, arguments)
		},
		_parseSort: function(t) {
			for (var e = this, a = "string" == typeof t ? t.split(" ") : [t], i = [], n = 0; n < a.length; n++) {
				var r = "string" == typeof t ? a[n].split(":"): ["custom", a[n]], o = {
					sortBy: e._helpers._camelCase(r[0]),
					order: r[1] || "asc"
				};
				if (i.push(o), "default" === o.sortBy || "random" === o.sortBy)
					break
			}
			return e._execFilter("_parseSort", i, arguments)
		},
		_parseEffects: function() {
			var t = this, e = {
				opacity: "",
				transformIn: "",
				transformOut: "",
				filter: ""
			}, a = function(e, a) {
				if (t.animation.effects.indexOf(e)>-1) {
					if (a) {
						var i = t.animation.effects.indexOf(e + "(");
						if (i>-1) {
							var n = t.animation.effects.substring(i), r = /\(([^)]+)\)/.exec(n), o = r[1];
							return {
								val: o
							}
						}
					}
					return !0
				}
				return !1
			}, i = function(t, e) {
				return e ? "-" === t.charAt(0) ? t.substr(1, t.length) : "-" + t : t
			}, n = function(t, n) {
				for (var r = [["scale", ".01"], ["translateX", "20px"], ["translateY", "20px"], ["translateZ", "20px"], ["rotateX", "90deg"], ["rotateY", "90deg"], ["rotateZ", "180deg"]], o = 0; o < r.length; o++) {
					var s = r[o][0], l = r[o][1], c = n && "scale" !== s;
					e[t] += a(s) ? s + "(" + i(a(s, !0).val || l, c) + ") " : ""
				}
			};
			return e.opacity = a("fade") ? a("fade", !0).val || "0" : "1", n("transformIn"), t.animation.reverseOut ? n("transformOut", !0) : e.transformOut = e.transformIn, e.transition = {}, e.transition = t._getPrefixedCSS("transition", "all " + t.animation.duration + "ms " + t.animation.easing + ", opacity " + t.animation.duration + "ms linear"), t.animation.stagger = a("stagger")?!0 : !1, t.animation.staggerDuration = parseInt(a("stagger") && a("stagger", !0).val ? a("stagger", !0).val : 100), t._execFilter("_parseEffects", e)
		},
		_buildState: function(t) {
			var e = this, a = {};
			return e._execAction("_buildState", 0), a = {
				activeFilter: "" === e._activeFilter ? "none": e._activeFilter,
				activeSort: t && e._newSortString ? e._newSortString: e._activeSort,
				fail: !e._$show.length && "" !== e._activeFilter,
				$targets: e._$targets,
				$show: e._$show,
				$hide: e._$hide,
				totalTargets: e._$targets.length,
				totalShow: e._$show.length,
				totalHide: e._$hide.length,
				display: t && e._newDisplay ? e._newDisplay: e.layout.display
			}, t ? e._execFilter("_buildState", a) : (e._state = a, void e._execAction("_buildState", 1))
		},
		_goMix: function(t) {
			var e = this, a = function() {
				e._chrome && 31 === e._chrome && r(e._$parent[0]), e._setInter(), i()
			}, i = function() {
				var t = window.pageYOffset, a = window.pageXOffset;
				document.documentElement.scrollHeight, e._getInterMixData(), e._setFinal(), e._getFinalMixData(), window.pageYOffset !== t && window.scrollTo(a, t), e._prepTargets(), window.requestAnimationFrame ? requestAnimationFrame(n) : setTimeout(function() {
					n()
				}, 20)
			}, n = function() {
				e._animateTargets(), 0 === e._targetsBound && e._cleanUp()
			}, r = function(t) {
				var e = t.parentElement, a = document.createElement("div"), i = document.createDocumentFragment();
				e.insertBefore(a, t), i.appendChild(t), e.replaceChild(t, a)
			}, o = e._buildState(!0);
			e._execAction("_goMix", 0, arguments), !e.animation.duration && (t=!1), e._mixing=!0, e._$container.removeClass(e.layout.containerClassFail), "function" == typeof e.callbacks.onMixStart && e.callbacks.onMixStart.call(e._domNode, e._state, o, e), e._$container.trigger("mixStart", [e._state, o, e]), e._getOrigMixData(), t&&!e._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(a) : a() : e._cleanUp(), e._execAction("_goMix", 1, arguments)
		},
		_getTargetData: function(t, e) {
			var a, i = this;
			t.dataset[e + "PosX"] = t.offsetLeft, t.dataset[e + "PosY"] = t.offsetTop, i.animation.animateResizeTargets && (a = window.getComputedStyle(t), t.dataset[e + "MarginBottom"] = parseInt(a.marginBottom), t.dataset[e + "MarginRight"] = parseInt(a.marginRight), t.dataset[e + "Width"] = t.offsetWidth, t.dataset[e + "Height"] = t.offsetHeight)
		},
		_getOrigMixData: function() {
			var t = this, e = t._suckMode ? {
				boxSizing: ""
			}
			: window.getComputedStyle(t._$parent[0]), a = e.boxSizing || e[t._vendor + "BoxSizing"];
			t._incPadding = "border-box" === a, t._execAction("_getOrigMixData", 0), !t._suckMode && (t.effects = t._parseEffects()), t._$toHide = t._$hide.filter(":visible"), t._$toShow = t._$show.filter(":hidden"), t._$pre = t._$targets.filter(":visible"), t._startHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height();
			for (var i = 0; i < t._$pre.length; i++) {
				var n = t._$pre[i];
				t._getTargetData(n, "orig")
			}
			t._execAction("_getOrigMixData", 1)
		},
		_setInter: function() {
			var t = this;
			t._execAction("_setInter", 0), t._changingLayout && t.animation.animateChangeLayout ? (t._$toShow.css("display", t._newDisplay), t._changingClass && t._$container.removeClass(t.layout.containerClass).addClass(t._newClass)) : t._$toShow.css("display", t.layout.display), t._execAction("_setInter", 1)
		},
		_getInterMixData: function() {
			var t = this;
			t._execAction("_getInterMixData", 0);
			for (var e = 0; e < t._$toShow.length; e++) {
				var a = t._$toShow[e];
				t._getTargetData(a, "inter")
			}
			for (var e = 0; e < t._$pre.length; e++) {
				var a = t._$pre[e];
				t._getTargetData(a, "inter")
			}
			t._execAction("_getInterMixData", 1)
		},
		_setFinal: function() {
			var t = this;
			t._execAction("_setFinal", 0), t._sorting && t._printSort(), t._$toHide.removeStyle("display"), t._changingLayout && t.animation.animateChangeLayout && t._$pre.css("display", t._newDisplay), t._execAction("_setFinal", 1)
		},
		_getFinalMixData: function() {
			var t = this;
			t._execAction("_getFinalMixData", 0);
			for (var e = 0; e < t._$toShow.length; e++) {
				var a = t._$toShow[e];
				t._getTargetData(a, "final")
			}
			for (var e = 0; e < t._$pre.length; e++) {
				var a = t._$pre[e];
				t._getTargetData(a, "final")
			}
			t._newHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height(), t._sorting && t._printSort(!0), t._$toShow.removeStyle("display"), t._$pre.css("display", t.layout.display), t._changingClass && t.animation.animateChangeLayout && t._$container.removeClass(t._newClass).addClass(t.layout.containerClass), t._execAction("_getFinalMixData", 1)
		},
		_prepTargets: function() {
			var e = this, a = {
				_in: e._getPrefixedCSS("transform", e.effects.transformIn),
				_out: e._getPrefixedCSS("transform", e.effects.transformOut)
			};
			e._execAction("_prepTargets", 0), e.animation.animateResizeContainer && e._$parent.css("height", e._startHeight + "px");
			for (var i = 0; i < e._$toShow.length; i++) {
				var n = e._$toShow[i], r = t(n);
				n.style.opacity = e.effects.opacity, n.style.display = e._changingLayout && e.animation.animateChangeLayout ? e._newDisplay : e.layout.display, r.css(a._in), e.animation.animateResizeTargets && (n.style.width = n.dataset.finalWidth + "px", n.style.height = n.dataset.finalHeight + "px", n.style.marginRight =- (n.dataset.finalWidth - n.dataset.interWidth) + 1 * n.dataset.finalMarginRight + "px", n.style.marginBottom =- (n.dataset.finalHeight - n.dataset.interHeight) + 1 * n.dataset.finalMarginBottom + "px")
			}
			for (var i = 0; i < e._$pre.length; i++) {
				var n = e._$pre[i], r = t(n), o = {
					x: n.dataset.origPosX - n.dataset.interPosX,
					y: n.dataset.origPosY - n.dataset.interPosY
				}, a = e._getPrefixedCSS("transform", "translate(" + o.x + "px," + o.y + "px)");
				r.css(a), e.animation.animateResizeTargets && (n.style.width = n.dataset.origWidth + "px", n.style.height = n.dataset.origHeight + "px", n.dataset.origWidth - n.dataset.finalWidth && (n.style.marginRight =- (n.dataset.origWidth - n.dataset.interWidth) + 1 * n.dataset.origMarginRight + "px"), n.dataset.origHeight - n.dataset.finalHeight && (n.style.marginBottom =- (n.dataset.origHeight - n.dataset.interHeight) + 1 * n.dataset.origMarginBottom + "px"))
			}
			e._execAction("_prepTargets", 1)
		},
		_animateTargets: function() {
			var e = this;
			e._execAction("_animateTargets", 0), e._targetsDone = 0, e._targetsBound = 0, e._$parent.css(e._getPrefixedCSS("perspective", e.animation.perspectiveDistance + "px")).css(e._getPrefixedCSS("perspective-origin", e.animation.perspectiveOrigin)), e.animation.animateResizeContainer && e._$parent.css(e._getPrefixedCSS("transition", "height " + e.animation.duration + "ms ease")).css("height", e._newHeight + "px");
			for (var a = 0; a < e._$toShow.length; a++) {
				var i = e._$toShow[a], n = t(i), r = {
					x: i.dataset.finalPosX - i.dataset.interPosX,
					y: i.dataset.finalPosY - i.dataset.interPosY
				}, o = e._getDelay(a), s = {};
				i.style.opacity = "";
				for (var l = 0; 2 > l; l++) {
					var c = 0 === l ? c = e._prefix: "";
					e._ff && e._ff <= 20 && (s[c + "transition-property"] = "all", s[c + "transition-timing-function"] = e.animation.easing + "ms", s[c + "transition-duration"] = e.animation.duration + "ms"), s[c + "transition-delay"] = o + "ms", s[c + "transform"] = "translate(" + r.x + "px," + r.y + "px)"
				}(e.effects.transform || e.effects.opacity) && e._bindTargetDone(n), e._ff && e._ff <= 20 ? n.css(s) : n.css(e.effects.transition).css(s)
			}
			for (var a = 0; a < e._$pre.length; a++) {
				var i = e._$pre[a], n = t(i), r = {
					x: i.dataset.finalPosX - i.dataset.interPosX,
					y: i.dataset.finalPosY - i.dataset.interPosY
				}, o = e._getDelay(a);
				(i.dataset.finalPosX !== i.dataset.origPosX || i.dataset.finalPosY !== i.dataset.origPosY) && e._bindTargetDone(n), n.css(e._getPrefixedCSS("transition", "all " + e.animation.duration + "ms " + e.animation.easing + " " + o + "ms")), n.css(e._getPrefixedCSS("transform", "translate(" + r.x + "px," + r.y + "px)")), e.animation.animateResizeTargets && (i.dataset.origWidth - i.dataset.finalWidth && 1 * i.dataset.finalWidth && (i.style.width = i.dataset.finalWidth + "px", i.style.marginRight =- (i.dataset.finalWidth - i.dataset.interWidth) + 1 * i.dataset.finalMarginRight + "px"), i.dataset.origHeight - i.dataset.finalHeight && 1 * i.dataset.finalHeight && (i.style.height = i.dataset.finalHeight + "px", i.style.marginBottom =- (i.dataset.finalHeight - i.dataset.interHeight) + 1 * i.dataset.finalMarginBottom + "px"))
			}
			e._changingClass && e._$container.removeClass(e.layout.containerClass).addClass(e._newClass);
			for (var a = 0; a < e._$toHide.length; a++) {
				for (var i = e._$toHide[a], n = t(i), o = e._getDelay(a), g = {}, l = 0; 2 > l; l++) {
					var c = 0 === l ? c = e._prefix: "";
					g[c + "transition-delay"] = o + "ms", g[c + "transform"] = e.effects.transformOut, g.opacity = e.effects.opacity
				}
				n.css(e.effects.transition).css(g), (e.effects.transform || e.effects.opacity) && e._bindTargetDone(n)
			}
			e._execAction("_animateTargets", 1)
		},
		_bindTargetDone: function(e) {
			var a = this, i = e[0];
			a._execAction("_bindTargetDone", 0, arguments), i.dataset.bound || (i.dataset.bound=!0, a._targetsBound++, e.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(n) {
				(n.originalEvent.propertyName.indexOf("transform")>-1 || n.originalEvent.propertyName.indexOf("opacity")>-1) && t(n.originalEvent.target).is(a.selectors.target) && (e.off(".mixItUp"), delete i.dataset.bound, a._targetDone())
			})), a._execAction("_bindTargetDone", 1, arguments)
		},
		_targetDone: function() {
			var t = this;
			t._execAction("_targetDone", 0), t._targetsDone++, t._targetsDone === t._targetsBound && t._cleanUp(), t._execAction("_targetDone", 1)
		},
		_cleanUp: function() {
			var e = this, a = e.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right": "transform opacity";
			unBrake = function() {
				e._$targets.removeStyle("transition", e._prefix)
			}, e._execAction("_cleanUp", 0), e._changingLayout ? e._$show.css("display", e._newDisplay) : e._$show.css("display", e.layout.display), e._$targets.css(e._brake), e._$targets.removeStyle(a, e._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"), e._$hide.removeStyle("display"), e._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", e._prefix), e._sorting && (e._printSort(), e._activeSort = e._newSortString, e._sorting=!1), e._changingLayout && (e._changingDisplay && (e.layout.display = e._newDisplay, e._changingDisplay=!1), e._changingClass && (e._$parent.removeClass(e.layout.containerClass).addClass(e._newClass), e.layout.containerClass = e._newClass, e._changingClass=!1), e._changingLayout=!1), e._refresh(), e._buildState(), e._state.fail && e._$container.addClass(e.layout.containerClassFail), e._$show = t(), e._$hide = t(), window.requestAnimationFrame && requestAnimationFrame(unBrake), e._mixing=!1, "function" == typeof e.callbacks._user && e.callbacks._user.call(e._domNode, e._state, e), "function" == typeof e.callbacks.onMixEnd && e.callbacks.onMixEnd.call(e._domNode, e._state, e), e._$container.trigger("mixEnd", [e._state, e]), e._state.fail && ("function" == typeof e.callbacks.onMixFail && e.callbacks.onMixFail.call(e._domNode, e._state, e), e._$container.trigger("mixFail", [e._state, e])), e._loading && ("function" == typeof e.callbacks.onMixLoad && e.callbacks.onMixLoad.call(e._domNode, e._state, e), e._$container.trigger("mixLoad", [e._state, e])), e._queue.length && (e._execAction("_queue", 0), e.multiMix(e._queue[0][0], e._queue[0][1], e._queue[0][2]), e._queue.splice(0, 1)), e._execAction("_cleanUp", 1), e._loading=!1
		},
		_getPrefixedCSS: function(t, e, a) {
			var n = this, r = {};
			for (i = 0; 2 > i; i++) {
				var o = 0 === i ? n._prefix: "";
				r[o + t] = a ? o + e : e
			}
			return n._execFilter("_getPrefixedCSS", r, arguments)
		},
		_getDelay: function(t) {
			var e = this, a = "function" == typeof e.animation.staggerSequence ? e.animation.staggerSequence.call(e._domNode, t, e._state): t, i = e.animation.stagger ? a * e.animation.staggerDuration: 0;
			return e._execFilter("_getDelay", i, arguments)
		},
		_parseMultiMixArgs: function(t) {
			for (var e = this, a = {
				command: null,
				animate: e.animation.enable,
				callback: null
			}, i = 0; i < t.length; i++) {
				var n = t[i];
				null !== n && ("object" == typeof n || "string" == typeof n ? a.command = n : "boolean" == typeof n ? a.animate = n : "function" == typeof n && (a.callback = n))
			}
			return e._execFilter("_parseMultiMixArgs", a, arguments)
		},
		_parseInsertArgs: function(e) {
			for (var a = this, i = {
				index: 0,
				$object: t(),
				multiMix: {
					filter: a._state.activeFilter
				},
				callback: null
			}, n = 0; n < e.length; n++) {
				var r = e[n];
				"number" == typeof r ? i.index = r : "object" == typeof r && r instanceof t ? i.$object = r : "object" == typeof r && a._helpers._isElement(r) ? i.$object = t(r) : "object" == typeof r && null !== r ? i.multiMix = r : "boolean" != typeof r || r ? "function" == typeof r && (i.callback = r) : i.multiMix=!1
			}
			return a._execFilter("_parseInsertArgs", i, arguments)
		},
		_execAction: function(t, e, a) {
			var i = this, n = e ? "post": "pre";
			if (!i._actions.isEmptyObject && i._actions.hasOwnProperty(t))
				for (var r in i._actions[t][n])
					i._actions[t][n][r].call(i, a)
		},
		_execFilter: function(t, e, a) {
			var i = this;
			if (i._filters.isEmptyObject ||!i._filters.hasOwnProperty(t))
				return e;
			for (var n in i._filters[t])
				return i._filters[t][n].call(i, a)
		},
		_helpers: {
			_camelCase: function(t) {
				return t.replace(/-([a-z])/g, function(t) {
					return t[1].toUpperCase()
				})
			},
			_isElement: function(t) {
				return window.HTMLElement ? t instanceof HTMLElement : null !== t && 1 === t.nodeType && "string" === t.nodeName
			}
		},
		isMixing: function() {
			var t = this;
			return t._execFilter("isMixing", t._mixing)
		},
		filter: function() {
			var t = this, e = t._parseMultiMixArgs(arguments);
			t._clicking && (t._toggleString = ""), t.multiMix({
				filter: e.command
			}, e.animate, e.callback)
		},
		sort: function() {
			var t = this, e = t._parseMultiMixArgs(arguments);
			t.multiMix({
				sort: e.command
			}, e.animate, e.callback)
		},
		changeLayout: function() {
			var t = this, e = t._parseMultiMixArgs(arguments);
			t.multiMix({
				changeLayout: e.command
			}, e.animate, e.callback)
		},
		multiMix: function() {
			var t = this, a = t._parseMultiMixArgs(arguments);
			if (t._execAction("multiMix", 0, arguments), t._mixing)
				t.animation.queue && t._queue.length < t.animation.queueLimit ? (t._queue.push(arguments), t.controls.enable&&!t._clicking && t._updateControls(a.command), t._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof t.callbacks.onMixBusy && t.callbacks.onMixBusy.call(t._domNode, t._state, t), t._$container.trigger("mixBusy", [t._state, t]), t._execAction("multiMixBusy", 1, arguments));
			else {
				t.controls.enable&&!t._clicking && (t.controls.toggleFilterButtons && t._buildToggleArray(), t._updateControls(a.command, t.controls.toggleFilterButtons)), t._queue.length < 2 && (t._clicking=!1), delete t.callbacks._user, a.callback && (t.callbacks._user = a.callback);
				var i = a.command.sort, n = a.command.filter, r = a.command.changeLayout;
				t._refresh(), i && (t._newSort = t._parseSort(i), t._newSortString = i, t._sorting=!0, t._sort()), n !== e && (n = "all" === n ? t.selectors.target : n, t._activeFilter = n), t._filter(), r && (t._newDisplay = "string" == typeof r ? r : r.display || t.layout.display, t._newClass = r.containerClass || "", (t._newDisplay !== t.layout.display || t._newClass !== t.layout.containerClass) && (t._changingLayout=!0, t._changingClass = t._newClass !== t.layout.containerClass, t._changingDisplay = t._newDisplay !== t.layout.display)), t._$targets.css(t._brake), t._goMix(a.animate^t.animation.enable ? a.animate : t.animation.enable), t._execAction("multiMix", 1, arguments)
			}
		},
		insert: function() {
			var t = this, e = t._parseInsertArgs(arguments), a = "function" == typeof e.callback ? e.callback: null, i = document.createDocumentFragment(), n = function() {
				return t._refresh(), t._$targets.length ? e.index < t._$targets.length ||!t._$targets.length ? t._$targets[e.index] : t._$targets[t._$targets.length - 1].nextElementSibling : t._$parent[0].children[0]
			}();
			if (t._execAction("insert", 0, arguments), e.$object) {
				for (var r = 0; r < e.$object.length; r++) {
					var o = e.$object[r];
					i.appendChild(o), i.appendChild(document.createTextNode(" "))
				}
				t._$parent[0].insertBefore(i, n)
			}
			t._execAction("insert", 1, arguments), "object" == typeof e.multiMix && t.multiMix(e.multiMix, a)
		},
		prepend: function() {
			var t = this, e = t._parseInsertArgs(arguments);
			t.insert(0, e.$object, e.multiMix, e.callback)
		},
		append: function() {
			var t = this, e = t._parseInsertArgs(arguments);
			t.insert(t._state.totalTargets, e.$object, e.multiMix, e.callback)
		},
		getOption: function(t) {
			var a = this, i = function(t, a) {
				for (var i = a.split("."), n = i.pop(), r = i.length, o = 1, s = i[0] || a; (t = t[s]) && r > o;)
					s = i[o], o++;
				return t !== e ? t[n] !== e ? t[n] : t : void 0
			};
			return t ? a._execFilter("getOption", i(a, t), arguments) : a
		},
		setOptions: function(e) {
			var a = this;
			a._execAction("setOptions", 0, arguments), "object" == typeof e && t.extend(!0, a, e), a._execAction("setOptions", 1, arguments)
		},
		getState: function() {
			var t = this;
			return t._execFilter("getState", t._state, t)
		},
		forceRefresh: function() {
			var t = this;
			t._refresh(!1, !0)
		},
		destroy: function(e) {
			var a = this;
			a._execAction("destroy", 0, arguments), a._$body.add(t(a.selectors.sort)).add(t(a.selectors.filter)).off(".mixItUp");
			for (var i = 0; i < a._$targets.length; i++) {
				var n = a._$targets[i];
				e && (n.style.display = ""), delete n.mixParent
			}
			a._execAction("destroy", 1, arguments), delete t.MixItUp.prototype._instances[a._id]
		}
	}, t.fn.mixItUp = function() {
		var a, i = arguments, n = [], r = function(e, a) {
			var i = new t.MixItUp, n = function() {
				return ("00000" + (16777216 * Math.random()<<0).toString(16)).substr( - 6).toUpperCase()
			};
			i._execAction("_instantiate", 0, arguments), e.id = e.id ? e.id : "MixItUp" + n(), i._instances[e.id] || (i._instances[e.id] = i, i._init(e, a)), i._execAction("_instantiate", 1, arguments)
		};
		return a = this.each(function() {
			if (i && "string" == typeof i[0]) {
				var a = t.MixItUp.prototype._instances[this.id];
				if ("isLoaded" === i[0])
					n.push(a?!0 : !1);
				else {
					var o = a[i[0]](i[1], i[2], i[3]);
					o !== e && n.push(o)
				}
			} else 
				r(this, i[0])
		}), n.length ? n.length > 1 ? n : n[0] : a
	}, t.fn.removeStyle = function(a, i) {
		return i = i ? i : "", this.each(function() {
			for (var n = this, r = a.split(" "), o = 0; o < r.length; o++)
				for (var s = 0; 4 > s; s++) {
					switch (s) {
					case 0:
						var l = r[o];
						break;
					case 1:
						var l = t.MixItUp.prototype._helpers._camelCase(l);
						break;
					case 2:
						var l = i + r[o];
						break;
					case 3:
						var l = t.MixItUp.prototype._helpers._camelCase(i + r[o])
					}
					if (n.style[l] !== e && "unknown" != typeof n.style[l] && n.style[l].length > 0 && (n.style[l] = ""), !i && 1 === s)
						break
				}
			n.attributes && n.attributes.style && n.attributes.style !== e && "" === n.attributes.style.value && n.attributes.removeNamedItem("style")
		})
	}
}(jQuery),

// MixItUp

function($, t) {
	$.MixItUp.prototype.addAction("_constructor", "pagination", function() {
		var t = this;
		t.pagination = {
			limit: 0,
			loop: !1,
			generatePagers: !0,
			maxPagers: 5,
			pagerClass: "",
			prevButtonHTML: "&laquo;",
			nextButtonHTML: "&raquo;"
		}, $.extend(t.selectors, {
			pagersWrapper: ".pager-list",
			pager: ".pager"
		}), $.extend(t.load, {
			page: 1
		}), t._activePage = null, t._totalPages = null, t._$pagersWrapper = $()
	}, 1), $.MixItUp.prototype.addAction("_init", "pagination", function() {
		var t = this;
		t._activePage = 1 * t.load.page, t.pagination.maxPagers = "number" == typeof t.pagination.maxPagers && t.pagination.maxPagers < 5 ? 5 : t.pagination.maxPagers
	}, 1), $.MixItUp.prototype.addAction("_bindHandlers", "pagination", function() {
		var t = this;
		t.pagination.generatePagers && (t._$pagersWrapper = $(t.selectors.pagersWrapper)), t.controls.live ? t._$body.on("click.mixItUp." + t._id, t.selectors.pager, function() {
			t._processClick($(this), "page")
		}) : t._$pagersWrapper.on("click.mixItUp." + t._id, t.selectors.pager, function() {
			t._processClick($(this), "page")
		})
	}, 1), $.MixItUp.prototype.addAction("_processClick", "pagination", function(t) {
		var e = this, a = null, i = t[0], n = t[1];
		if ("page" === n) {
			if (a = i.attr("data-page") ||!1, "prev" === a)
				a = e._getPrevPage();
			else if ("next" === a)
				a = e._getNextPage();
			else {
				if (!a)
					return !1;
				a = 1 * a
			}
			i.hasClass(e.controls.activeClass) || e.paginate(a)
		}
	}, 1), $.MixItUp.prototype.addAction("_buildState", "pagination", function() {
		var t = this;
		$.extend(t._state, {
			limit: t.pagination.limit,
			activePage: t._activePage,
			totalPages: t._totalPages
		})
	}, 1), $.MixItUp.prototype.addAction("_sort", "pagination", function() {
		var t = this;
		t.pagination.limit > 0 && t._printSort()
	}, 1), $.MixItUp.prototype.addAction("_filter", "pagination", function() {
		var t = this, e = t.pagination.limit * (t.load.page - 1), a = t.pagination.limit * t.load.page - 1, i = null, n = null;
		t._activePage = t.load.page, t._totalPages = t.pagination.limit ? Math.ceil(t._$show.length / t.pagination.limit) : 1, t.pagination.limit > 0 && (i = t._$show.filter(function(t) {
			return t >= e && a >= t
		}), n = t._$show.filter(function(t) {
			return e > t || t > a
		}), t._$show = i, t._$hide = t._$hide.add(n), t._sorting && t._printSort(!0)), t.pagination.generatePagers && t._$pagersWrapper.length && t._generatePagers()
	}, 1), $.MixItUp.prototype.addAction("multiMix", "pagination", function(e) {
		var a = this, e = a._parseMultiMixArgs(e);
		e.command.paginate !== t ? "object" == typeof e.command.paginate ? $.extend(a.pagination, e.command.paginate) : a.load.page = e.command.paginate : (e.command.filter !== t || e.command.sort !== t) && (a.load.page = 1)
	}, 0), $.MixItUp.prototype.addAction("destroy", "pagination", function() {
		var t = this;
		t._$pagersWrapper.off(".mixItUp").html("")
	}, 1), $.MixItUp.prototype.extend({
		_getNextPage: function() {
			var t = this, e = t._activePage + 1, e = t._activePage < t._totalPages ? e: t.pagination.loop ? 1: t._activePage;
			return t._execFilter("_getNextPage", 1 * e)
		},
		_getPrevPage: function() {
			var t = this, e = t._activePage - 1, e = t._activePage > 1 ? e: t.pagination.loop ? t._totalPages: t._activePage;
			return t._execFilter("_getPrevPage", 1 * e)
		},
		_generatePagers: function() {
			var t = this, e = "UL" === t._$pagersWrapper[0].nodeName ? "li": "span", a = t.pagination.pagerClass ? t.pagination.pagerClass + " ": "", i = "<" + e + ' class="' + a + 'pager page-prev" data-page="prev"><span>' + t.pagination.prevButtonHTML + "</span></" + e + ">", i = t._activePage > 1 ? i: t.pagination.loop ? i: "<" + e + ' class="' + a + 'pager page-prev disabled"><span>' + t.pagination.prevButtonHTML + "</span></" + e + ">";
			nextButtonHTML = "<" + e + ' class="' + a + 'pager page-next" data-page="next"><span>' + t.pagination.nextButtonHTML + "</span></" + e + ">", nextButtonHTML = t._activePage < t._totalPages ? nextButtonHTML : t.pagination.loop ? nextButtonHTML : "<" + e + ' class="' + a + 'pager page-next disabled"><span>' + t.pagination.nextButtonHTML + "</span></" + e + ">", totalButtons = t.pagination.maxPagers!==!1 && t._totalPages > t.pagination.maxPagers ? t.pagination.maxPagers : t._totalPages, pagerButtonsHTML = "", pagersHTML = "", wrapperClass = "", t._execAction("_generatePagers", 0);
			for (var n = 0; n < totalButtons; n++) {
				var r = null, o = "";
				0 === n ? (r = 1, t.pagination.maxPagers!==!1 && t._activePage > t.pagination.maxPagers - 2 && t._totalPages > t.pagination.maxPagers && (o = " page-first")) : t.pagination.maxPagers===!1 || totalButtons < t.pagination.maxPagers ? r = n + 1 : n === t.pagination.maxPagers - 1 ? (r = t._totalPages, t._activePage < t._totalPages - 2 && t._totalPages > t.pagination.maxPagers && (o = " page-last")) : t._activePage > t.pagination.maxPagers - 2 && t._activePage < t._totalPages - 2 ? r = t._activePage - (2 - n) : t._activePage < t.pagination.maxPagers - 1 ? r = n + 1 : t._activePage >= t._totalPages - 2 && (r = t._totalPages - (t.pagination.maxPagers - 1 - n)), o = r == t._activePage ? o + " " + t.controls.activeClass : o, pagerButtonsHTML += "<" + e + ' class="' + a + "pager page-number" + o + '" data-page="' + r + '"><span>' + r + "</span></" + e + "> "
			}
			pagersHTML = t._totalPages > 1 ? i + " " + pagerButtonsHTML + " " + nextButtonHTML : "", wrapperClass = t._totalPages > 1 ? "" : "no-pagers", t._$pagersWrapper.html(pagersHTML).removeClass("no-pagers").addClass(wrapperClass), t._execAction("_generatePagers", 1)
		},
		_parsePaginateArgs: function(t) {
			for (var e = this, a = {
				command: null,
				animate: e.animation.enable,
				callback: null
			}, i = 0; i < t.length; i++) {
				var n = t[i];
				null !== n && ("object" == typeof n || "number" == typeof n ? a.command = n : "boolean" == typeof n ? a.animate = n : "function" == typeof n && (a.callback = n))
			}
			return e._execFilter("_parsePaginateArgs", a, arguments)
		}
	}), $.MixItUp.prototype.extend({
		paginate: function() {
			var t = this, e = t._parsePaginateArgs(arguments);
			t.multiMix({
				paginate: e.command
			}, e.animate, e.callback)
		},
		nextPage: function() {
			var t = this, e = t._parsePaginateArgs(arguments);
			t.multiMix({
				paginate: t._getNextPage()
			}, e.animate, e.callback)
		},
		prevPage: function() {
			var t = this, e = t._parsePaginateArgs(arguments);
			t.multiMix({
				paginate: t._getPrevPage()
			}, e.animate, e.callback)
		}
	})
}(jQuery), $(function() {
	var t = $("#archive"), e = $("#sort-buttons a"), a = $(".ri-archive"), i = 18;
	t.mixItUp({
		load: {
			filter: "all",
			sort: "default"
		},
		animation: {
			duration: 500,
			easing: "ease"
		}
	}), t.on("mixLoad", function(t) {
		elixir({
			".ri-archive": {
				widths: [200, 300, 400, 600, 800],
				heights: [300, 400, 500, 600, 800, 1e3],
				lazy_tag: "data-src"
			}
		}), a.unveil(0, function() {
			$(this).load(function() {
				$(this).addClass("unveiled")
			})
		})
	}), t.on("mixEnd", function(t) {
		a.unveil(0, function() {
			$(this).load(function() {
				$(this).addClass("unveiled")
			})
		}), $(".pager-list .pager-button").not(".disabled, .active").on("click", function() {
			document.getElementById("archive").scrollIntoView()
		})
	}), t.mixItUp("paginate", {
		//limit: i,
		limit: 3,
		pagerClass: "pager-button",
		prevButtonHTML: "Previous",
		nextButtonHTML: "Next"
	}), $("#archive-filter").fancySelect().on("change.fs", function(e) {
		t.mixItUp("filter", e.currentTarget.value)
	}), e.on("click", function(a) {
		a.preventDefault(), e.removeClass("active"), t.mixItUp("sort", $(this).data("value")), $(this).addClass("active")
	})
});

/* Tablesaw 2.0.3 */

if( typeof Tablesaw === "undefined" ) {
	Tablesaw = {
		i18n: {
			modes: [ 'Stack', 'Swipe', 'Toggle' ],
			columns: 'Col<span class=\"a11y-sm\">umn</span>s',
			columnBtnText: 'Columns',
			columnsDialogError: 'No eligible columns.',
			sort: 'Sort'
		},
		// cut the mustard
		mustard: 'querySelector' in document &&
			( !window.blackberry || window.WebKitPoint ) &&
			!window.operamini
	};
}
if( !Tablesaw.config ) {
	Tablesaw.config = {};
}
if( Tablesaw.mustard ) {
	jQuery( document.documentElement ).addClass( 'tablesaw-enhanced' );
}

;(function( $ ) {
	var pluginName = "table",
		classes = {
			toolbar: "tablesaw-bar"
		},
		events = {
			create: "tablesawcreate",
			destroy: "tablesawdestroy",
			refresh: "tablesawrefresh"
		},
		defaultMode = "stack",
		initSelector = "table[data-tablesaw-mode],table[data-tablesaw-sortable]";

	var Table = function( element ) {
		if( !element ) {
			throw new Error( "Tablesaw requires an element." );
		}

		this.table = element;
		this.$table = $( element );

		this.mode = this.$table.attr( "data-tablesaw-mode" ) || defaultMode;

		this.init();
	};

	Table.prototype.init = function() {
		// assign an id if there is none
		if ( !this.$table.attr( "id" ) ) {
			this.$table.attr( "id", pluginName + "-" + Math.round( Math.random() * 10000 ) );
		}

		this.createToolbar();

		var colstart = this._initCells();

		this.$table.trigger( events.create, [ this, colstart ] );
	};

	Table.prototype._initCells = function() {
		var colstart,
			thrs = this.table.querySelectorAll( "thead tr" ),
			self = this;

		$( thrs ).each( function(){
			var coltally = 0;

			$( this ).children().each( function(){
				var span = parseInt( this.getAttribute( "colspan" ), 10 ),
					sel = ":nth-child(" + ( coltally + 1 ) + ")";

				colstart = coltally + 1;

				if( span ){
					for( var k = 0; k < span - 1; k++ ){
						coltally++;
						sel += ", :nth-child(" + ( coltally + 1 ) + ")";
					}
				}

				// Store "cells" data on header as a reference to all cells in the same column as this TH
				this.cells = self.$table.find("tr").not( thrs[0] ).not( this ).children().filter( sel );
				coltally++;
			});
		});

		return colstart;
	};

	Table.prototype.refresh = function() {
		this._initCells();

		this.$table.trigger( events.refresh );
	};

	Table.prototype.createToolbar = function() {
		// Insert the toolbar
		// TODO move this into a separate component
		var $toolbar = this.$table.prev().filter( '.' + classes.toolbar );
		if( !$toolbar.length ) {
			$toolbar = $( '<div>' )
				.addClass( classes.toolbar )
				.insertBefore( this.$table );
		}
		this.$toolbar = $toolbar;

		if( this.mode ) {
			this.$toolbar.addClass( 'mode-' + this.mode );
		}
	};

	Table.prototype.destroy = function() {
		// Don’t remove the toolbar. Some of the table features are not yet destroy-friendly.
		this.$table.prev().filter( '.' + classes.toolbar ).each(function() {
			this.className = this.className.replace( /\bmode\-\w*\b/gi, '' );
		});

		var tableId = this.$table.attr( 'id' );
		$( document ).unbind( "." + tableId );
		$( window ).unbind( "." + tableId );

		// other plugins
		this.$table.trigger( events.destroy, [ this ] );

		this.$table.removeData( pluginName );
	};

	// Collection method.
	$.fn[ pluginName ] = function() {
		return this.each( function() {
			var $t = $( this );

			if( $t.data( pluginName ) ){
				return;
			}

			var table = new Table( this );
			$t.data( pluginName, table );
		});
	};

	$( document ).on( "enhance.tablesaw", function( e ) {
		// Cut the mustard
		if( Tablesaw.mustard ) {
			$( e.target ).find( initSelector )[ pluginName ]();
		}
	});

}( jQuery ));

;(function( win, $, undefined ){

	var classes = {
		stackTable: 'tablesaw-stack',
		cellLabels: 'tablesaw-cell-label',
		cellContentLabels: 'tablesaw-cell-content'
	};

	var data = {
		obj: 'tablesaw-stack'
	};

	var attrs = {
		labelless: 'data-tablesaw-no-labels',
		hideempty: 'data-tablesaw-hide-empty'
	};

	var Stack = function( element ) {

		this.$table = $( element );

		this.labelless = this.$table.is( '[' + attrs.labelless + ']' );
		this.hideempty = this.$table.is( '[' + attrs.hideempty + ']' );

		if( !this.labelless ) {
			// allHeaders references headers, plus all THs in the thead, which may include several rows, or not
			this.allHeaders = this.$table.find( "th" );
		}

		this.$table.data( data.obj, this );
	};

	Stack.prototype.init = function( colstart ) {
		this.$table.addClass( classes.stackTable );

		if( this.labelless ) {
			return;
		}

		// get headers in reverse order so that top-level headers are appended last
		var reverseHeaders = $( this.allHeaders );
		var hideempty = this.hideempty;
		
		// create the hide/show toggles
		reverseHeaders.each(function(){
			var $t = $( this ),
				$cells = $( this.cells ).filter(function() {
					return !$( this ).parent().is( "[" + attrs.labelless + "]" ) && ( !hideempty || !$( this ).is( ":empty" ) );
				}),
				hierarchyClass = $cells.not( this ).filter( "thead th" ).length && " tablesaw-cell-label-top",
				// TODO reduce coupling with sortable
				$sortableButton = $t.find( ".tablesaw-sortable-btn" ),
				html = $sortableButton.length ? $sortableButton.html() : $t.html();

			if( html !== "" ){
				if( hierarchyClass ){
					var iteration = parseInt( $( this ).attr( "colspan" ), 10 ),
						filter = "";

					if( iteration ){
						filter = "td:nth-child("+ iteration +"n + " + ( colstart ) +")";
					}
					$cells.filter( filter ).prepend( "<b class='" + classes.cellLabels + hierarchyClass + "'>" + html + "</b>"  );
				} else {
					$cells.wrapInner( "<span class='" + classes.cellContentLabels + "'></span>" );
					$cells.prepend( "<b class='" + classes.cellLabels + "'>" + html + "</b>"  );
				}
			}
		});
	};

	Stack.prototype.destroy = function() {
		this.$table.removeClass( classes.stackTable );
		this.$table.find( '.' + classes.cellLabels ).remove();
		this.$table.find( '.' + classes.cellContentLabels ).each(function() {
			$( this ).replaceWith( this.childNodes );
		});
	};

	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw, colstart ){
		if( Tablesaw.mode === 'stack' ){
			var table = new Stack( Tablesaw.table );
			table.init( colstart );
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){

		if( Tablesaw.mode === 'stack' ){
			$( Tablesaw.table ).data( data.obj ).destroy();
		}

	} );

}( this, jQuery ));