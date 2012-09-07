/* Color Converter
 * Rizzonet.com
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2012-8-23 | Updated: 2012-8-23
*/

(function ($) {
	"use strict";

	function convert(color, convertTo) {
		function cutHex(h) {
			return (h.charAt(0) === "#") ? h.substring(1, 7) : h;
		}
		function hexToR(h) {
			return parseInt((cutHex(h)).substring(0, 2), 16);
		}
		function hexToG(h) {
			return parseInt((cutHex(h)).substring(2, 4), 16);
		}
		function hexToB(h) {
			return parseInt((cutHex(h)).substring(4, 6), 16);
		}


		function rgbToHsl(r, g, b) {
			r /= 255;
			g /= 255;
			b /= 255;
			var max = Math.max(r, g, b), min = Math.min(r, g, b), h, s, l = (max + min) / 2, d;

			if (max === min) {
				h = s = 0;
			} else {
				d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch (max) {
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
			}

			return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
		}

		var r = [];
		if (convertTo === 'RGB') {
			r.push(hexToR(color));
			r.push(hexToG(color));
			r.push(hexToB(color));
		} else if (convertTo === 'HSL') {
			r = rgbToHsl(hexToR(color), hexToG(color), hexToB(color));
		}

		return r;

    }

	$.fn.HEXtoRGB = function (color) {
		return convert(color, 'RGB');
	};

	$.fn.HEXtoHSL = function (color) {
		return convert(color, 'HSL');
    };

})(jQuery);