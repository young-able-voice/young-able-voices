export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BTmLmN6i.js",app:"_app/immutable/entry/app.bk3uK-LF.js",imports:["_app/immutable/entry/start.BTmLmN6i.js","_app/immutable/chunks/DPzo69rr.js","_app/immutable/chunks/CDoyrOs-.js","_app/immutable/chunks/D-0vmhX1.js","_app/immutable/entry/app.bk3uK-LF.js","_app/immutable/chunks/CDoyrOs-.js","_app/immutable/chunks/gcAqdv9B.js","_app/immutable/chunks/lsryPQS4.js","_app/immutable/chunks/D-0vmhX1.js","_app/immutable/chunks/Be0XpEma.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/contact","/media","/programs","/programs/one-on-one","/programs/specialized","/programs/specialized/apraxia","/programs/specialized/dyslexia","/programs/specialized/pots","/programs/weekly-chats","/resources","/resources/speech-journey"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
