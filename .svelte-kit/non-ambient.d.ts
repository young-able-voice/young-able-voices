
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/media" | "/programs" | "/programs/one-on-one" | "/programs/specialized" | "/programs/specialized/apraxia" | "/programs/specialized/dyslexia" | "/programs/specialized/pots" | "/programs/weekly-chats" | "/resources" | "/resources/speech-journey";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/media": Record<string, never>;
			"/programs": Record<string, never>;
			"/programs/one-on-one": Record<string, never>;
			"/programs/specialized": Record<string, never>;
			"/programs/specialized/apraxia": Record<string, never>;
			"/programs/specialized/dyslexia": Record<string, never>;
			"/programs/specialized/pots": Record<string, never>;
			"/programs/weekly-chats": Record<string, never>;
			"/resources": Record<string, never>;
			"/resources/speech-journey": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/contact" | "/media" | "/programs" | "/programs/one-on-one" | "/programs/specialized" | "/programs/specialized/apraxia" | "/programs/specialized/dyslexia" | "/programs/specialized/pots" | "/programs/weekly-chats" | "/resources" | "/resources/speech-journey";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}