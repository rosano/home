(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.OLSKEmbed = global.OLSKEmbed || {})));
}(this, (function(exports) { 'use strict';

	const mod = {

		_OLSKEmbedCanonicalURL () {
			return 'https://youtube.com/watch?v=oUFJJNQGwhk';
		},

		_OLSKEmbedPatterns () {
			// https://github.com/oscarotero/Embed/blob/master/src/resources/oembed.php
			return {
				'http://www.23hq.com/23/oembed': [
					'https?://(www\\.)?23hq\\.com/.*/photo/.*',
				],
				'https://api.abraia.me/oembed': [
					'https?://store\\.abraia\\.me/.*',
				],
				'http://play.adpaths.com/oembed/*': [
					'https?://play\\.adpaths\\.com/experience/.*',
				],
				'https://alpha-api.app.net/oembed': [
					'https?://alpha\\.app\\.net/.*/post/.*',
					'https?://photos\\.app\\.net/.*/.*',
				],
				'https://api.altrulabs.com/api/v1/social/oembed': [
					'https?://app\\.altrulabs\\.com/.*/.*\\?answer_id\\=.*',
					'https?://app\\.altrulabs\\.com/player/.*',
				],
				'https://live.amcharts.com/oembed': [
					'https?://live\\.amcharts\\.com/.*',
				],
				'https://animatron.com/oembed/json': [
					'https?://(www\\.)?animatron\\.com/project/.*',
					'https?://animatron\\.com/project/.*',
				],
				'http://animoto.com/oembeds/create': [
					'https?://animoto\\.com/play/.*',
				],
				'https://display.apester.com/oembed': [
					'https?://renderer\\.apester\\.com/v2/.*\\?preview\\=true&iframe_preview\\=true',
				],
				'https://storymaps.arcgis.com/oembed': [
					'https?://storymaps\\.arcgis\\.com/stories/.*',
				],
				'https://app.archivos.digital/oembed/': [
					'https?://app\\.archivos\\.digital/app/view/.*',
				],
				'https://audioboom.com/publishing/oembed/v4.json': [
					'https?://audioboom\\.com/channels/.*',
					'https?://audioboom\\.com/channel/.*',
					'https?://audioboom\\.com/posts/.*',
				],
				'https://audioclip.naver.com/oembed': [
					'https?://audioclip\\.naver\\.com/channels/.*/clips/.*',
					'https?://audioclip\\.naver\\.com/audiobooks/.*',
				],
				'https://audiomack.com/oembed': [
					'https?://audiomack\\.com/.*/song/.*',
					'https?://audiomack\\.com/.*/album/.*',
					'https?://audiomack\\.com/.*/playlist/.*',
				],
				'http://audiosnaps.com/service/oembed': [
					'https?://audiosnaps\\.com/k/.*',
				],
				'https://stage-embed.avocode.com/api/oembed': [
					'https?://app\\.avocode\\.com/view/.*',
				],
				'http://axiom.ninja/oembed/': [
					'https?://axiom\\.ninja/.*',
				],
				'https://backtracks.fm/oembed': [
					'https?://backtracks\\.fm/.*/.*/e/.*',
					'https?://backtracks\\.fm/.*/s/.*/.*',
					'https?://backtracks\\.fm/.*/.*/.*/.*/e/.*/.*',
					'https?://backtracks\\.fm/.*',
				],
				'https://www.beautiful.ai/api/oembed': [
					'https?://(www\\.)?beautiful\\.ai/.*',
				],
				'https://blackfire.io/oembed': [
					'https?://blackfire\\.io/profiles/.*/graph',
					'https?://blackfire\\.io/profiles/compare/.*/graph',
				],
				'https://blogcast.host/oembed': [
					'https?://blogcast\\.host/embed/.*',
					'https?://blogcast\\.host/embedly/.*',
				],
				'http://boxofficebuz.com/oembed': [
					'https?://boxofficebuz\\.com.*',
				],
				'https://view.briovr.com/api/v1/worlds/oembed/': [
					'https?://view\\.briovr\\.com/api/v1/worlds/oembed/.*',
				],
				'https://buttondown.email/embed': [
					'https?://buttondown\\.email/.*',
				],
				'https://cmc.byzart.eu/oembed/': [
					'https?://cmc\\.byzart\\.eu/files/.*',
				],
				'http://cacoo.com/oembed.json': [
					'https?://cacoo\\.com/diagrams/.*',
				],
				'http://carbonhealth.com/oembed': [
					'https?://carbonhealth\\.com/practice/.*',
				],
				'http://img.catbo.at/oembed.json': [
					'https?://img\\.catbo\\.at/.*',
				],
				'http://view.ceros.com/oembed': [
					'https?://view\\.ceros\\.com/.*',
				],
				'http://embed.chartblocks.com/1.0/oembed': [
					'https?://public\\.chartblocks\\.com/c/.*',
				],
				'http://chirb.it/oembed.json': [
					'https?://chirb\\.it/.*',
				],
				'https://www.circuitlab.com/circuit/oembed/': [
					'https?://(www\\.)?circuitlab\\.com/circuit/.*',
				],
				'https://www.clipland.com/api/oembed': [
					'https?://(www\\.)?clipland\\.com/v/.*',
				],
				'http://api.clyp.it/oembed/': [
					'https?://clyp\\.it/.*',
					'https?://clyp\\.it/playlist/.*',
				],
				'https://app.ilovecoco.video/api/oembed.json': [
					'https?://app\\.ilovecoco\\.video/.*/embed',
				],
				'https://codehs.com/api/sharedprogram/*/oembed/': [
					'https?://codehs\\.com/editor/share_abacus/.*',
				],
				'http://codepen.io/api/oembed': [
					'https?://codepen\\.io/.*',
				],
				'https://codepoints.net/api/v1/oembed': [
					'https?://codepoints\\.net/.*',
					'https?://(www\\.)?codepoints\\.net/.*',
				],
				'https://codesandbox.io/oembed': [
					'https?://codesandbox\\.io/s/.*',
					'https?://codesandbox\\.io/embed/.*',
				],
				'http://www.collegehumor.com/oembed.json': [
					'https?://(www\\.)?collegehumor\\.com/video/.*',
				],
				'https://commaful.com/api/oembed/': [
					'https?://commaful\\.com/play/.*',
				],
				'http://coub.com/api/oembed.json': [
					'https?://coub\\.com/view/.*',
					'https?://coub\\.com/embed/.*',
				],
				'http://crowdranking.com/api/oembed.json': [
					'https?://crowdranking\\.com/.*/.*',
				],
				'https://staging.cyranosystems.com/oembed': [
					'https?://staging\\.cyranosystems\\.com/msg/.*',
					'https?://app\\.cyranosystems\\.com/msg/.*',
				],
				'http://api.dailymile.com/oembed?format=json': [
					'https?://(www\\.)?dailymile\\.com/people/.*/entries/.*',
				],
				'https://www.dailymotion.com/services/oembed': [
					'https?://(www\\.)?dailymotion\\.com/video/.*',
				],
				'https://api.datawrapper.de/v3/oembed/': [
					'https?://datawrapper\\.dwcdn\\.net/.*',
				],
				'https://embed.deseret.com/': [
					'https?://(.*\\.)?deseret\\.com/.*',
				],
				'http://backend.deviantart.com/oembed': [
					'https?://(.*\\.)?deviantart\\.com/art/.*',
					'https?://(.*\\.)?deviantart\\.com/.*\\#/d.*',
					'https?://fav\\.me/.*',
					'https?://sta\\.sh/.*',
					'https?://(.*\\.)?deviantart\\.com/.*/art/.*',
					'https?://sta\\.sh/.*",',
					'https?://(.*\\.)?deviantart\\.com/.*\\#/d.*"',
				],
				'https://*.didacte.com/cards/oembed\'': [
					'https?://(.*\\.)?didacte\\.com/a/course/.*',
				],
				'https://www.ultimedia.com/api/search/oembed': [
					'https?://(www\\.)?ultimedia\\.com/central/video/edit/id/.*/topic_id/.*/',
					'https?://(www\\.)?ultimedia\\.com/default/index/videogeneric/id/.*/showtitle/1/viewnc/1',
					'https?://(www\\.)?ultimedia\\.com/default/index/videogeneric/id/.*',
				],
				'http://www.dipity.com/oembed/timeline/': [
					'https?://(www\\.)?dipity\\.com/.*/.*/',
				],
				'https://www.docdroid.net/api/oembed': [
					'https?://(.*\\.)?docdroid\\.net/.*',
					'https?://docdro\\.id/.*',
					'https?://(.*\\.)?docdroid\\.com/.*',
				],
				'http://dotsub.com/services/oembed': [
					'https?://dotsub\\.com/view/.*',
				],
				'https://api.d.tube/oembed': [
					'https?://d\\.tube/v/.*',
				],
				'http://edocr.com/api/oembed': [
					'https?://edocr\\.com/docs/.*',
				],
				'https://www.edumedia-sciences.com/oembed.json': [
					'https?://(www\\.)?edumedia\\-sciences\\.com/.*',
				],
				'https://www.edumedia-sciences.com/oembed.xml': [
					'https?://(www\\.)?edumedia\\-sciences\\.com/.*',
				],
				'http://egliseinfo.catholique.fr/api/oembed': [
					'https?://egliseinfo\\.catholique\\.fr/.*',
				],
				'http://embedarticles.com/oembed/': [
					'https?://embedarticles\\.com/.*',
				],
				'https://embedery.com/api/oembed': [
					'https?://embedery\\.com/widget/.*',
				],
				'http://api.embed.ly/1/oembed': [
					'https?://api\\.embed\\.ly/.*',
				],
				'https://ethfiddle.com/services/oembed/': [
					'https?://ethfiddle\\.com/.*',
				],
				'https://eyrie.io/v1/oembed': [
					'https?://eyrie\\.io/board/.*',
					'https?://eyrie\\.io/sparkfun/.*',
				],
				'https://www.facebook.com/plugins/post/oembed.json': [
					'https?://(www\\.)?facebook\\.com/.*/posts/.*',
					'https?://(www\\.)?facebook\\.com/photos/.*',
					'https?://(www\\.)?facebook\\.com/.*/photos/.*',
					'https?://(www\\.)?facebook\\.com/photo\\.php.*',
					'https?://(www\\.)?facebook\\.com/photo\\.php',
					'https?://(www\\.)?facebook\\.com/.*/activity/.*',
					'https?://(www\\.)?facebook\\.com/permalink\\.php',
					'https?://(www\\.)?facebook\\.com/media/set\\?set\\=.*',
					'https?://(www\\.)?facebook\\.com/questions/.*',
					'https?://(www\\.)?facebook\\.com/notes/.*/.*/.*',
				],
				'https://www.facebook.com/plugins/video/oembed.json': [
					'https?://(www\\.)?facebook\\.com/.*/videos/.*',
					'https?://(www\\.)?facebook\\.com/video\\.php',
				],
				'https://app.getfader.com/api/oembed': [
					'https?://app\\.getfader\\.com/projects/.*/publish',
				],
				'https://faithlifetv.com/api/oembed': [
					'https?://faithlifetv\\.com/items/.*',
					'https?://faithlifetv\\.com/items/resource/.*/.*',
					'https?://faithlifetv\\.com/media/.*',
					'https?://faithlifetv\\.com/media/assets/.*',
					'https?://faithlifetv\\.com/media/resource/.*/.*',
				],
				'https://www.fireworktv.com/oembed': [
					'https?://(.*\\.)?fireworktv\\.com/.*',
					'https?://(.*\\.)?fireworktv\\.com/embed/.*/v/.*',
				],
				'https://www.fite.tv/oembed': [
					'https?://(www\\.)?fite\\.tv/watch/.*',
				],
				'https://flat.io/services/oembed': [
					'https?://flat\\.io/score/.*',
					'https?://(.*\\.)?flat\\.io/score/.*',
				],
				'https://www.flickr.com/services/oembed/': [
					'https?://(.*\\.)?flickr\\.com/photos/.*',
					'https?://flic\\.kr/p/.*',
				],
				'https://app.flourish.studio/api/v1/oembed': [
					'https?://public\\.flourish\\.studio/visualisation/.*',
					'https?://public\\.flourish\\.studio/story/.*',
				],
				'https://oembed.fontself.com/': [
					'https?://catapult\\.fontself\\.com/.*',
				],
				'https://fiso.foxsports.com.au/oembed': [
					'https?://fiso\\.foxsports\\.com\\.au/isomorphic\\-widget/.*',
				],
				'https://framebuzz.com/oembed/': [
					'https?://framebuzz\\.com/v/.*',
				],
				'http://www.funnyordie.com/oembed.json': [
					'https?://(www\\.)?funnyordie\\.com/videos/.*',
				],
				'http://api.geograph.org.uk/api/oembed': [
					'https?://(.*\\.)?geograph\\.org\\.uk/.*',
					'https?://(.*\\.)?geograph\\.co\\.uk/.*',
					'https?://(.*\\.)?geograph\\.ie/.*',
					'https?://(.*\\.)?wikimedia\\.org/.*_geograph\\.org\\.uk_.*',
				],
				'http://www.geograph.org.gg/api/oembed': [
					'https?://(.*\\.)?geograph\\.org\\.gg/.*',
					'https?://(.*\\.)?geograph\\.org\\.je/.*',
					'https?://channel\\-islands\\.geograph\\.org/.*',
					'https?://channel\\-islands\\.geographs\\.org/.*',
					'https?://(.*\\.)?channel\\.geographs\\.org/.*',
				],
				'http://geo.hlipp.de/restapi.php/api/oembed': [
					'https?://geo\\-en\\.hlipp\\.de/.*',
					'https?://geo\\.hlipp\\.de/.*',
					'https?://germany\\.geograph\\.org/.*',
				],
				'http://embed.gettyimages.com/oembed': [
					'https?://gty\\.im/.*',
				],
				'https://api.gfycat.com/v1/oembed': [
					'https?://gfycat\\.com/.*',
					'https?://(www\\.)?gfycat\\.com/.*',
				],
				'https://www.gifnote.com/services/oembed': [
					'https?://(www\\.)?gifnote\\.com/play/.*',
				],
				'https://giphy.com/services/oembed': [
					'https?://giphy\\.com/gifs/.*',
					'https?://gph\\.is/.*',
					'https?://media\\.giphy\\.com/media/.*/giphy\\.gif',
				],
				'https://gloria.tv/oembed/': [
					'https?://gloria\\.tv/.*',
				],
				'https://api.luminery.com/oembed': [
					'https?://gtchannel\\.com/watch/.*',
				],
				'https://api.gyazo.com/api/oembed': [
					'https?://gyazo\\.com/.*',
				],
				'https://hearthis.at/oembed/?format=json': [
					'https?://hearthis\\.at/.*/.*/',
					'https?://hearthis\\.at/.*/set/.*/',
				],
				'https://player.hihaho.com/services/oembed/*': [
					'https?://player\\.hihaho\\.com/.*',
				],
				'https://homey.app/api/oembed/flow': [
					'https?://homey\\.app/f/.*',
					'https?://homey\\.app/.*/flow/.*',
				],
				'http://huffduffer.com/oembed': [
					'https?://huffduffer\\.com/.*/.*',
				],
				'http://www.hulu.com/api/oembed.json': [
					'https?://(www\\.)?hulu\\.com/watch/.*',
				],
				'http://www.ifixit.com/Embed': [
					'https?://(www\\.)?ifixit\\.com/Guide/View/.*',
				],
				'http://www.ifttt.com/oembed/': [
					'https?://ifttt\\.com/recipes/.*',
				],
				'https://www.iheart.com/oembed': [
					'https?://(www\\.)?iheart\\.com/podcast/.*/.*',
				],
				'https://player.indacolive.com/services/oembed': [
					'https?://player\\.indacolive\\.com/player/jwp/clients/.*',
				],
				'https://infogram.com/oembed': [
					'https?://infogram\\.com/.*',
				],
				'https://infoveave.net/services/oembed/': [
					'https?://(.*\\.)?infoveave\\.net/E/.*',
					'https?://(.*\\.)?infoveave\\.net/P/.*',
				],
				'https://www.injurymap.com/services/oembed': [
					'https?://(www\\.)?injurymap\\.com/exercises/.*',
				],
				'https://www.inoreader.com/oembed/api/': [
					'https?://(www\\.)?inoreader\\.com/oembed/',
				],
				'http://api.inphood.com/oembed': [
					'https?://(.*\\.)?inphood\\.com/.*',
				],
				'https://api.instagram.com/oembed': [
					'https?://instagram\\.com/.*/p/.*,',
					'https?://(www\\.)?instagram\\.com/.*/p/.*,',
					'https?://instagram\\.com/p/.*',
					'https?://instagr\\.am/p/.*',
					'https?://(www\\.)?instagram\\.com/p/.*',
					'https?://(www\\.)?instagr\\.am/p/.*',
					'https?://instagram\\.com/tv/.*',
					'https?://instagr\\.am/tv/.*',
					'https?://(www\\.)?instagram\\.com/tv/.*',
					'https?://(www\\.)?instagr\\.am/tv/.*',
				],
				'https://www.isnare.com/oembed/': [
					'https?://(www\\.)?isnare\\.com/.*',
				],
				'https://issuu.com/oembed': [
					'https?://issuu\\.com/.*/docs/.*',
				],
				'https://music.ivlis.kr/oembed': [
					'https?://music\\.ivlis\\.kr/.*',
				],
				'https://api.jovian.ai/oembed.json': [
					'https?://jovian\\.ml/.*',
					'https?://jovian\\.ml/viewer.*',
					'https?://(.*\\.)?jovian\\.ml/.*',
				],
				'https://tv.kakao.com/oembed': [
					'https?://tv\\.kakao\\.com/channel/.*/cliplink/.*',
					'https?://tv\\.kakao\\.com/channel/v/.*',
					'https?://tv\\.kakao\\.com/channel/.*/livelink/.*',
					'https?://tv\\.kakao\\.com/channel/l/.*',
				],
				'http://www.kickstarter.com/services/oembed': [
					'https?://(www\\.)?kickstarter\\.com/projects/.*',
				],
				'https://www.kidoju.com/api/oembed': [
					'https?://(www\\.)?kidoju\\.com/en/x/.*/.*',
					'https?://(www\\.)?kidoju\\.com/fr/x/.*/.*',
				],
				'https://halaman.email/service/oembed': [
					'https?://halaman\\.email/form/.*',
					'https?://aplikasi\\.kirim\\.email/form/.*',
				],
				'https://embed.kit.co/oembed': [
					'https?://kit\\.co/.*/.*',
				],
				'http://www.kitchenbowl.com/oembed': [
					'https?://(www\\.)?kitchenbowl\\.com/recipe/.*',
				],
				'https://jdr.knacki.info/oembed': [
					'https?://jdr\\.knacki\\.info/meuh/.*',
				],
				'https://api.spoonacular.com/knowledge/oembed': [
					'https?://knowledgepad\\.co/\\#/knowledge/.*',
				],
				'http://learningapps.org/oembed.php': [
					'https?://learningapps\\.org/.*',
				],
				'https://pod.univ-lille.fr/oembed': [
					'https?://pod\\.univ\\-lille\\.fr/video/.*',
				],
				'https://livestream.com/oembed': [
					'https?://livestream\\.com/accounts/.*/events/.*',
					'https?://livestream\\.com/accounts/.*/events/.*/videos/.*',
					'https?://livestream\\.com/.*/events/.*',
					'https?://livestream\\.com/.*/events/.*/videos/.*',
					'https?://livestream\\.com/.*/.*',
					'https?://livestream\\.com/.*/.*/videos/.*',
				],
				'https://app.ludus.one/oembed': [
					'https?://app\\.ludus\\.one/.*',
				],
				'http://mathembed.com/oembed': [
					'https?://mathembed\\.com/latex\\?inputText\\=.*',
				],
				'https://my.matterport.com/api/v1/models/oembed/': [
					'https?://matterport\\.com/.*',
				],
				'https://me.me/oembed': [
					'https?://me\\.me/i/.*',
				],
				'https://*.medialab.(co|app)/api/oembed/': [
					'https?://(.*\\.)?medialab\\.app/share/watch/.*',
					'https?://(.*\\.)?medialab\\.co/share/watch/.*',
					'https?://(.*\\.)?medialab\\.app/share/social/.*',
					'https?://(.*\\.)?medialab\\.co/share/social/.*',
					'https?://(.*\\.)?medialab\\.app/share/embed/.*',
					'https?://(.*\\.)?medialab\\.co/share/embed/.*',
				],
				'https://medienarchiv.zhdk.ch/oembed.json': [
					'https?://medienarchiv\\.zhdk\\.ch/entries/.*',
				],
				'https://api.meetup.com/oembed': [
					'https?://meetup\\.com/.*',
					'https?://(www\\.)?meetup\\.com/.*',
					'https?://meetu\\.ps/.*',
				],
				'https://mermaid.ink/services/oembed': [
					'https?://mermaid\\.ink/img/.*',
					'https?://mermaid\\.ink/svg/.*',
				],
				'https://api.microlink.io': [
					'https?://api\\.microlink\\.io.*',
				],
				'https://web.microsoftstream.com/oembed': [
					'https?://(.*\\.)?microsoftstream\\.com/video/.*',
					'https?://(.*\\.)?microsoftstream\\.com/channel/.*',
				],
				'https://www.mixcloud.com/oembed/': [
					'https?://(www\\.)?mixcloud\\.com/.*/.*/',
				],
				'http://api.mobypicture.com/oEmbed': [
					'https?://(www\\.)?mobypicture\\.com/user/.*/view/.*',
					'https?://moby\\.to/.*',
				],
				'https://portal.modelo.io/oembed': [
					'https?://beta\\.modelo\\.io/embedded/.*',
				],
				'https://m-roll.morphcast.com/service/oembed': [
					'https?://m\\-roll\\.morphcast\\.com/mroll/.*',
				],
				'https://musicboxmaniacs.com/embed/': [
					'https?://musicboxmaniacs\\.com/explore/melody/.*',
				],
				'https://mybeweeg.com/services/oembed': [
					'https?://mybeweeg\\.com/w/.*',
				],
				'https://namchey.com/api/oembed': [
					'https?://namchey\\.com/embeds/.*',
				],
				'https://www.nanoo.tv/services/oembed': [
					'https?://(.*\\.)?nanoo\\.tv/link/.*',
					'https?://nanoo\\.tv/link/.*',
					'https?://(.*\\.)?nanoo\\.pro/link/.*',
					'https?://nanoo\\.pro/link/.*',
					'https?://media\\.zhdk\\.ch/signatur/.*',
					'https?://new\\.media\\.zhdk\\.ch/signatur/.*',
				],
				'https://api.nb.no/catalog/v1/oembed': [
					'https?://(www\\.)?nb\\.no/items/.*',
				],
				'https://naturalatlas.com/oembed.json': [
					'https?://naturalatlas\\.com/.*',
					'https?://naturalatlas\\.com/.*/.*',
					'https?://naturalatlas\\.com/.*/.*/.*',
					'https?://naturalatlas\\.com/.*/.*/.*/.*',
				],
				'http://www.nfb.ca/remote/services/oembed/': [
					'https?://(.*\\.)?nfb\\.ca/film/.*',
				],
				'https://www.odds.com.au/api/oembed/': [
					'https?://(www\\.)?odds\\.com\\.au/.*',
					'https?://odds\\.com\\.au/.*',
				],
				'https://song.link/oembed': [
					'https?://song\\.link/.*',
					'https?://album\\.link/.*',
					'https?://artist\\.link/.*',
					'https?://playlist\\.link/.*',
					'https?://pods\\.link/.*',
					'https?://mylink\\.page/.*',
					'https?://odesli\\.co/.*',
				],
				'http://official.fm/services/oembed.json': [
					'https?://official\\.fm/tracks/.*',
					'https?://official\\.fm/playlists/.*',
				],
				'https://omniscope.me/_global_/oembed/json': [
					'https?://omniscope\\.me/.*',
				],
				'http://on.aol.com/api': [
					'https?://on\\.aol\\.com/video/.*',
				],
				'https://www.ora.tv/oembed/*?format=json': [
					'https?://(www\\.)?ora\\.tv/.*',
				],
				'http://orbitvu.co/service/oembed': [
					'https?://orbitvu\\.co/001/.*/ov3601/view',
					'https?://orbitvu\\.co/001/.*/ov3601/.*/view',
					'https?://orbitvu\\.co/001/.*/ov3602/.*/view',
					'https?://orbitvu\\.co/001/.*/2/orbittour/.*/view',
					'https?://orbitvu\\.co/001/.*/1/2/orbittour/.*/view',
				],
				'https://www.oumy.com/oembed': [
					'https?://(www\\.)?oumy\\.com/v/.*',
				],
				'https://outplayed.tv/oembed': [
					'https?://outplayed\\.tv/media/.*',
				],
				'https://overflow.io/services/oembed': [
					'https?://overflow\\.io/s/.*',
					'https?://overflow\\.io/embed/.*',
				],
				'https://core.oz.com/oembed': [
					'https?://(www\\.)?oz\\.com/.*/video/.*',
				],
				'https://padlet.com/oembed/': [
					'https?://padlet\\.com/.*',
				],
				'https://www.pastery.net/oembed': [
					'https?://pastery\\.net/.*',
					'https?://(www\\.)?pastery\\.net/.*',
				],
				'https://beta.pingvp.com.kpnis.nl/p/oembed.php': [
					'https?://(www\\.)?pingvp\\.com/.*',
				],
				'https://tools.pinpoll.com/oembed': [
					'https?://tools\\.pinpoll\\.com/.*',
				],
				'https://store.pixdor.com/oembed': [
					'https?://store\\.pixdor\\.com/place\\-marker\\-widget/.*/show',
					'https?://store\\.pixdor\\.com/map/.*/show',
				],
				'https://api.podbean.com/v1/oembed': [
					'https?://(.*\\.)?podbean\\.com/e/.*',
				],
				'https://api.polarishare.com/rest/api/oembed': [
					'https?://(www\\.)?polarishare\\.com/.*/.*',
				],
				'http://polldaddy.com/oembed/': [
					'https?://(.*\\.)?polldaddy\\.com/s/.*',
					'https?://(.*\\.)?polldaddy\\.com/poll/.*',
					'https?://(.*\\.)?polldaddy\\.com/ratings/.*',
				],
				'https://api.sellwithport.com/v1.0/buyer/oembed': [
					'https?://app\\.sellwithport\\.com/\\#/buyer/.*',
				],
				'https://api.portfolium.com/oembed': [
					'https?://portfolium\\.com/entry/.*',
				],
				'http://posixion.com/services/oembed/': [
					'https?://posixion\\.com/question/.*',
					'https?://posixion\\.com/.*/question/.*',
				],
				'https://oembed.qualifio.com/': [
					'https?://qualifio\\.com/.*',
				],
				'http://www.quiz.biz/api/oembed': [
					'https?://(www\\.)?quiz\\.biz/quizz\\-.*\\.html',
				],
				'http://www.quizz.biz/api/oembed': [
					'https?://(www\\.)?quizz\\.biz/quizz\\-.*\\.html',
				],
				'https://oembed.radiopublic.com/oembed': [
					'https?://play\\.radiopublic\\.com/.*',
					'https?://radiopublic\\.com/.*',
					'https?://(www\\.)?radiopublic\\.com/.*',
					'https?://(.*\\.)?radiopublic\\.com/.*\'',
				],
				'https://rapidengage.com/api/oembed': [
					'https?://rapidengage\\.com/s/.*',
				],
				'https://www.reddit.com/oembed': [
					'https?://reddit\\.com/r/.*/comments/.*/.*',
					'https?://(www\\.)?reddit\\.com/r/.*/comments/.*/.*',
				],
				'http://publisher.releasewire.com/oembed/': [
					'https?://rwire\\.com/.*',
				],
				'https://repl.it/data/oembed': [
					'https?://repl\\.it/@.*/.*',
				],
				'http://repubhub.icopyright.net/oembed.act': [
					'https?://repubhub\\.icopyright\\.net/freePost\\.act\\?.*',
				],
				'https://www.reverbnation.com/oembed': [
					'https?://(www\\.)?reverbnation\\.com/.*',
					'https?://(www\\.)?reverbnation\\.com/.*/songs/.*',
				],
				'https://www.riffreporter.de/service/oembed': [
					'https?://(www\\.)?riffreporter\\.de/.*',
				],
				'http://roomshare.jp/en/oembed.json': [
					'https?://roomshare\\.jp/post/.*',
					'https?://roomshare\\.jp/en/post/.*',
				],
				'https://roosterteeth.com/oembed': [
					'https?://roosterteeth\\.com/.*',
				],
				'https://rumble.com/api/Media/oembed.json': [
					'https?://rumble\\.com/.*',
				],
				'https://embed.runkit.com/oembed': [
					'https?://embed\\.runkit\\.com/.*,',
				],
				'http://videos.sapo.pt/oembed': [
					'https?://videos\\.sapo\\.pt/.*',
				],
				'https://api.screen9.com/oembed': [
					'https?://console\\.screen9\\.com/.*',
					'https?://(.*\\.)?screen9\\.tv/.*',
				],
				'https://api.screencast.com/external/oembed': [
					'https?://(www\\.)?screencast\\.com/.*',
				],
				'http://www.screenr.com/api/oembed.json': [
					'https?://(www\\.)?screenr\\.com/.*/',
				],
				'https://scribblemaps.com/api/services/oembed.json': [
					'https?://(www\\.)?scribblemaps\\.com/maps/view/.*',
					'https?://scribblemaps\\.com/maps/view/.*',
				],
				'http://www.scribd.com/services/oembed/': [
					'https?://(www\\.)?scribd\\.com/doc/.*',
					'https?://(www\\.)?scribd\\.com/document/.*',
				],
				'https://embed.sendtonews.com/services/oembed': [
					'https?://embed\\.sendtonews\\.com/oembed/.*',
				],
				'https://www.shortnote.jp/oembed/': [
					'https?://(www\\.)?shortnote\\.jp/view/notes/.*',
				],
				'http://shoudio.com/api/oembed': [
					'https?://shoudio\\.com/.*',
					'https?://shoud\\.io/.*',
				],
				'https://showtheway.io/oembed': [
					'https?://showtheway\\.io/to/.*',
				],
				'https://simplecast.com/oembed': [
					'https?://simplecast\\.com/s/.*',
				],
				'https://onsizzle.com/oembed': [
					'https?://onsizzle\\.com/i/.*',
				],
				'http://sketchfab.com/oembed': [
					'https?://sketchfab\\.com/models/.*',
					'https?://sketchfab\\.com/.*/folders/.*',
				],
				'http://www.slideshare.net/api/oembed/2': [
					'https?://(www\\.)?slideshare\\.net/.*/.*',
					'https?://fr\\.slideshare\\.net/.*/.*',
					'https?://de\\.slideshare\\.net/.*/.*',
					'https?://es\\.slideshare\\.net/.*/.*',
					'https?://pt\\.slideshare\\.net/.*/.*',
				],
				'https://smashnotes.com/services/oembed': [
					'https?://smashnotes\\.com/p/.*',
					'https?://smashnotes\\.com/p/.*/e/.* \\- smashnotes\\.com/p/.*/e/.*/s/.*',
				],
				'https://api.smugmug.com/services/oembed/': [
					'https?://(.*\\.)?smugmug\\.com/.*',
				],
				'https://www.socialexplorer.com/services/oembed/': [
					'https?://(www\\.)?socialexplorer\\.com/.*/explore',
					'https?://(www\\.)?socialexplorer\\.com/.*/view',
					'https?://(www\\.)?socialexplorer\\.com/.*/edit',
					'https?://(www\\.)?socialexplorer\\.com/.*/embed',
				],
				'https://soundcloud.com/oembed': [
					'https?://soundcloud\\.com/.*',
				],
				'https://play.soundsgood.co/oembed': [
					'https?://play\\.soundsgood\\.co/playlist/.*',
					'https?://soundsgood\\.co/playlist/.*',
				],
				'https://speakerdeck.com/oembed.json': [
					'https?://speakerdeck\\.com/.*/.*',
				],
				'https://api.bespotful.com/oembed': [
					'https?://play\\.bespotful\\.com/.*',
				],
				'https://embed.spotify.com/oembed/': [
					'https?://(.*\\.)?spotify\\.com/.*',
					'https?://spotify\\:.*',
				],
				'https://api.spreaker.com/oembed': [
					'https?://(.*\\.)?spreaker\\.com/.*',
				],
				'https://purl.stanford.edu/embed.json': [
					'https?://purl\\.stanford\\.edu/.*',
				],
				'https://api.streamable.com/oembed.json': [
					'https?://streamable\\.com/.*',
				],
				'https://content.streamonecloud.net/oembed': [
					'https?://content\\.streamonecloud\\.net/embed/.*',
				],
				'https://www.sutori.com/api/oembed': [
					'https?://(www\\.)?sutori\\.com/story/.*',
				],
				'https://sway.com/api/v1.0/oembed': [
					'https?://sway\\.com/.*',
					'https?://(www\\.)?sway\\.com/.*',
				],
				'https://www.ted.com/services/v1/oembed.json': [
					'https?://ted\\.com/talks/.*',
					'https?://(www\\.)?ted\\.com/talks/.*',
				],
				'https://www.nytimes.com/svc/oembed/json/': [
					'https?://(www\\.)?nytimes\\.com/svc/oembed',
					'https?://nytimes\\.com/.*',
					'https?://(.*\\.)?nytimes\\.com/.*',
				],
				'https://theysaidso.com/extensions/oembed/': [
					'https?://theysaidso\\.com/image/.*',
				],
				'https://www.tickcounter.com/oembed': [
					'https?://(www\\.)?tickcounter\\.com/countdown/.*',
					'https?://(www\\.)?tickcounter\\.com/countup/.*',
					'https?://(www\\.)?tickcounter\\.com/ticker/.*',
					'https?://(www\\.)?tickcounter\\.com/worldclock/.*',
				],
				'https://www.tiktok.com/oembed': [
					'https?://(www\\.)?tiktok\\.com/.*/video/.*',
					'https?://(.*\\.)?tiktok\\.com/.*',
				],
				'https://widget.toornament.com/oembed': [
					'https?://(www\\.)?toornament\\.com/tournaments/.*/information',
					'https?://(www\\.)?toornament\\.com/tournaments/.*/registration/',
					'https?://(www\\.)?toornament\\.com/tournaments/.*/matches/schedule',
					'https?://(www\\.)?toornament\\.com/tournaments/.*/stages/.*/',
				],
				'http://www.topy.se/oembed/': [
					'https?://(www\\.)?topy\\.se/image/.*',
				],
				'https://www.tuxx.be/services/oembed': [
					'https?://(www\\.)?tuxx\\.be/.*',
				],
				'https://play.tvcf.co.kr/rest/oembed': [
					'https?://play\\.tvcf\\.co\\.kr/.*',
					'https?://(.*\\.)?tvcf\\.co\\.kr/.*',
				],
				'https://api.twitch.tv/v5/oembed': [
					'https?://clips\\.twitch\\.tv/.*',
					'https?://(www\\.)?twitch\\.tv/.*',
					'https?://twitch\\.tv/.*',
				],
				'https://publish.twitter.com/oembed': [
					'https?://twitter\\.com/.*/status/.*',
					'https?://(.*\\.)?twitter\\.com/.*/status/.*',
				],
				'https://play.typecast.ai/oembed': [
					'https?://play\\.typecast\\.ai/s/.*',
					'https?://play\\.typecast\\.ai/e/.*',
					'https?://play\\.typecast\\.ai/.*',
				],
				'https://typlog.com/oembed': [
					'https?://typlog\\.com.*',
				],
				'https://player.ubideo.com/api/oembed.json': [
					'https?://player\\.ubideo\\.com/.*',
				],
				'https://map.cam.ac.uk/oembed/': [
					'https?://map\\.cam\\.ac\\.uk/.*',
				],
				'https://mediatheque.univ-paris1.fr/oembed': [
					'https?://mediatheque\\.univ\\-paris1\\.fr/video/.*',
				],
				'https://mais.uol.com.br/apiuol/v3/oembed/view': [
					'https?://(.*\\.)?uol\\.com\\.br/view/.*',
					'https?://(.*\\.)?uol\\.com\\.br/video/.*',
				],
				'http://www.ustream.tv/oembed': [
					'https?://(.*\\.)?ustream\\.tv/.*',
					'https?://(.*\\.)?ustream\\.com/.*',
				],
				'https://app.ustudio.com/api/v2/oembed': [
					'https?://(.*\\.)?ustudio\\.com/embed/.*',
					'https?://(.*\\.)?ustudio\\.com/embed/.*/.*',
				],
				'https://www.utposts.com/api/oembed': [
					'https?://(www\\.)?utposts\\.com/products/.*',
					'https?://utposts\\.com/products/.*',
				],
				'http://uttles.com/api/reply/oembed': [
					'https?://uttles\\.com/uttle/.*',
				],
				'https://api.veer.tv/oembed': [
					'https?://veer\\.tv/videos/.*',
				],
				'https://api.veervr.tv/oembed': [
					'https?://veervr\\.tv/videos/.*',
				],
				'http://verse.com/services/oembed/': [
					'https?://verse\\.com/.*',
				],
				'https://www.vevo.com/oembed': [
					'https?://(www\\.)?vevo\\.com/.*',
				],
				'http://www.videojug.com/oembed.json': [
					'https?://(www\\.)?videojug\\.com/film/.*',
					'https?://(www\\.)?videojug\\.com/interview/.*',
				],
				'https://api.vidl.it/oembed': [
					'https?://vidl\\.it/.*',
				],
				'https://app-v2.vidmizer.com/api/oembed': [
					'https?://players\\-cdn\\-v2\\.vidmizer\\.com/.*',
				],
				'https://api.vidyard.com/dashboard/v1.1/oembed': [
					'https?://(.*\\.)?vidyard\\.com/.*',
					'https?://(.*\\.)?hubs\\.vidyard\\.com/.*',
				],
				'https://vimeo.com/api/oembed.json': [
					'https?://vimeo\\.com/.*',
					'https?://vimeo\\.com/album/.*/video/.*',
					'https?://vimeo\\.com/channels/.*/.*',
					'https?://vimeo\\.com/groups/.*/videos/.*',
					'https?://vimeo\\.com/ondemand/.*/.*',
					'https?://player\\.vimeo\\.com/video/.*',
				],
				'https://www.viously.com/oembed': [
					'https?://(www\\.)?viously\\.com/.*/.*',
				],
				'http://viziosphere.com/services/oembed/': [
					'https?://viziosphere\\.com/3dphoto.*',
				],
				'https://vizydrop.com/oembed': [
					'https?://vizydrop\\.com/shared/.*',
				],
				'https://vlipsy.com/oembed': [
					'https?://vlipsy\\.com/.*',
				],
				'https://www.vlive.tv/oembed': [
					'https?://(www\\.)?vlive\\.tv/video/.*',
				],
				'https://vlurb.co/oembed.json': [
					'https?://vlurb\\.co/video/.*',
				],
				'https://data.voxsnap.com/oembed': [
					'https?://article\\.voxsnap\\.com/.*/.*',
				],
				'https://embed.wave.video/oembed': [
					'https?://watch\\.wave\\.video/.*',
					'https?://embed\\.wave\\.video/.*',
				],
				'http://play.wecandeo.com/oembed': [
					'https?://(www\\.)?wecandeo\\.com/.*',
				],
				'http://*.wiredrive.com/present-oembed/': [
					'https?://(.*\\.)?wiredrive\\.com/.*',
				],
				'https://fast.wistia.com/oembed.json': [
					'https?://fast\\.wistia\\.com/embed/iframe/.*',
					'https?://fast\\.wistia\\.com/embed/playlists/.*',
					'https?://(.*\\.)?wistia\\.com/medias/.*',
				],
				'http://app.wizer.me/api/oembed.json': [
					'https?://(.*\\.)?wizer\\.me/learn/.*',
					'https?://(.*\\.)?wizer\\.me/preview/.*',
				],
				'https://wokwi.com/api/oembed': [
					'https?://wokwi\\.com/share/.*',
				],
				'http://www.wootled.com/oembed': [
					'https?://(www\\.)?wootled\\.com/.*',
				],
				'http://public-api.wordpress.com/oembed/': [
					'https?://wordpress\\.com/.*',
				],
				'https://web.xpression.jp/api/oembed': [
					'https?://web\\.xpression\\.jp/video/.*',
				],
				'http://yesik.it/s/oembed': [
					'https?://yesik\\.it/.*',
					'https?://(www\\.)?yesik\\.it/.*',
				],
				'http://www.yfrog.com/api/oembed': [
					'https?://(.*\\.)?yfrog\\.com/.*',
					'https?://yfrog\\.us/.*',
				],
				'https://www.youtube.com/oembed': [
					'https?://(.*\\.)?youtube\\.com/watch.*',
					'https?://(.*\\.)?youtube\\.com/v/.*',
					'https?://youtu\\.be/.*',
					'https?://(.*\\.)?youtube\\.com/playlist\\?.*',
				],
				'https://app.zeplin.io/embed': [
					'https?://app\\.zeplin\\.io/project/.*/screen/.*',
					'https?://app\\.zeplin\\.io/project/.*/screen/.*/version/.*',
					'https?://app\\.zeplin\\.io/project/.*/styleguide/components\\?coid\\=.*',
					'https?://app\\.zeplin\\.io/styleguide/.*/components\\?coid\\=.*',
				],
				'https://app.zingsoft.com/oembed': [
					'https?://app\\.zingsoft\\.com/embed/.*',
					'https?://app\\.zingsoft\\.com/view/.*',
				],
				'https://api.znipe.tv/v3/oembed/': [
					'https?://(.*\\.)?znipe\\.tv/.*',
				],
				'https://srv2.zoomable.ca/oembed': [
					'https?://srv2\\.zoomable\\.ca/viewer\\.php.*',
				],
				'http://jsbin.com/oembed': [
					'https?://output\\.jsbin\\.com/.*',
				],
				'https://api.crowdsignal.com/oembed': [
					'https?://polldaddy\\.com/poll/.*',
					'https?://poll\\.fm/.*',
				],
				'https://api.imgur.com/oembed': [
					'https?://imgur\\.com/.*',
					'https?://i\\.imgur\\.com/.*',
				],

				'https://bandcamp.com/oembed': [
					'https?://(.*\\.)?bandcamp\\.com/.*',
				],
			};
		},

		OLSKEmbedEndpointURL (inputData) {
			if (typeof inputData !== 'string') {
				throw new Error('OLSKErrorInputNotValid');
			}

			return (Object.entries(mod._OLSKEmbedPatterns()).filter(function ([api, patterns]) {
				return patterns.filter(function (e) {
					return inputData.match(e);
				}).length;
			}).shift() || []).shift();
		},

		OLSKEmbedFetchURL (param1, param2) {
			if (typeof param1 !== 'string') {
				throw new Error('OLSKErrorInputNotValid');
			}

			if (typeof param2 !== 'string') {
				throw new Error('OLSKErrorInputNotValid');
			}

			return param1 + '?url=' + encodeURIComponent(param2)
		},

		OLSKEmbedGenerateProperties (inputData) {
			const match = inputData.html.match(/src=\u0022(\S*)\u0022/);
			if (match) {
				inputData.OLSKEmbedFrameURL = match[1];
			}

			if (inputData.provider_name === 'TikTok') {
				inputData.OLSKEmbedFrameURL = 'https://www.tiktok.com/embed/v2/' + inputData.embed_product_id;
				inputData.OLSKEmbedHeight = 500;
			}

			if (inputData.provider_name === 'YouTube') {
				inputData.OLSKEmbedFrameURL = inputData.OLSKEmbedFrameURL.replace('youtube.com', 'youtube-nocookie.com');
				inputData.OLSKEmbedHeight = 200;
			}

			return inputData;
		},

	};

	Object.assign(exports, mod);

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

})));