(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.OLSKDOM = global.OLSKDOM || {})));
}(this, (function(exports) { 'use strict';

	const mod = {

		OLSKDOMMetadata (inputData, debug = {}) {
			if (typeof inputData !== 'string') {
				throw new Error('OLSKErrorInputNotValid');
			}

			const doc = debug.JSDOM ? debug.JSDOM(inputData) : new DOMParser().parseFromString(inputData, 'text/html');

			const _OLSKDOMMetadataFunding = Array.from(doc.querySelectorAll('a')).reduce(function (coll, item) {
				const href = (item.getAttribute('href') || '').trim();
				return href && href.match(/^http/) && mod.OLSKDOMMetadataFundingDomains().filter(function (e) {
					return (new URL(href)).pathname.slice((new URL('https://' + e)).pathname.length).length > 1 && href.match(e);
				}).length ? coll.concat(href) : coll;
			}, []);

			return Array.from(doc.querySelectorAll('[name],[property],[itemprop],[rel]')).reduce(function (coll, item) {
				const key = item.getAttribute('name') || item.getAttribute('property') || item.getAttribute('itemprop') || item.getAttribute('rel');

				if (!key) {
					return coll;
				}

				return Object.assign(coll, {
					[key]: item.getAttribute('content') || item.getAttribute('href'),
				})
			}, [].concat.apply([], [doc.querySelector('title') ? {
				title: doc.querySelector('title').text,
			} : {}, (function() {
				try {
					return JSON.parse(doc.querySelector('script[type="application/ld+json"]').innerHTML);
				} catch {
					return [];
				};
			})()]).reduce(function (coll, item) {
				return Object.assign(coll, item)
			}, _OLSKDOMMetadataFunding.length ? {
				_OLSKDOMMetadataFunding,
			} : {}));
		},

		OLSKDOMMetadataFundingDomains () {
			return [
				'opencollective.com',
				'github.com/sponsors',
				'patreon.com',
				'liberapay.com',
			];
		},
		
	};

	Object.assign(exports, mod);

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

})));
