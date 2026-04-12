<script lang="ts">
	import { Hero, Container, Section, Heading, Button, FeatureCard } from '$lib/ui';
	import { Separator } from '$lib/components/ui/separator';
	import Newspaper from 'lucide-svelte/icons/newspaper';
	import Mic from 'lucide-svelte/icons/mic';
	import Video from 'lucide-svelte/icons/video';
	import mediaData from '$lib/data/media.json';
	import { base } from '$app/paths';

	const programs = [
		{
			title: 'Weekly Chats',
			description: 'Join weekly video chats with peers facing similar challenges. Share, listen, and connect.',
			href: `${base}/programs/weekly-chats`,
			icon: '📅'
		},
		{
			title: 'One-on-One Meetings',
			description: 'Personal support sessions for when you need individual attention.',
			href: `${base}/programs/one-on-one`,
			icon: '🤝'
		},
		{
			title: 'Specialized Chats',
			description: 'Focused groups for specific conditions like Apraxia, Dyslexia, and POTS.',
			href: `${base}/programs/specialized`,
			icon: '🎯'
		}
	];
</script>

<svelte:head>
	<title>Young Able Voices - A Safe Place for Kids with Hidden Disabilities</title>
	<meta name="description" content="Peer support for children with hidden disabilities through weekly chats, one-on-one meetings, and specialized programs." />
</svelte:head>

<Hero
 	image={`${base}/hero.jpg`}
 	imageAlt="Young Able Voices - A safe place for kids with hidden disabilities"
/> 

<Section>
    <Container size="sm">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
                src={`${base}/Pictures%20/IMG_4004.webp`}
                alt="Kids talking in a circle"
                class="hidden md:block md:w-48 md:h-48 object-cover rounded-lg shadow-md flex-shrink-0"
                loading="lazy"
            />

            <div class="text-center md:text-left">
                <Heading>What We Do</Heading>
                <div class="mt-6 space-y-4">
                    <p class="text-lg leading-relaxed text-foreground/80">
                        At Young Able Voices, children with hidden disabilities have the opportunity to join weekly chats to talk
                        with others facing similar challenges. Each week we post a specific video to get the chat rolling.
                    </p>
                    <p class="leading-relaxed text-foreground/80">
                        Please understand that this is a peer-to-peer support group. We are not therapists, but we're here to
                        share helpful suggestions, tips, and tricks in navigating daily life.
                    </p>
                </div>
                <Button href={`${base}/contact`} size="lg" class="mt-8">
                    Join!
                </Button>
            </div>

            <img
                src={`${base}/Pictures%20/IMG_9139.webp`}
                alt="Support group meeting outdoors"
                class="hidden lg:block lg:w-48 lg:h-48 object-cover rounded-lg shadow-md flex-shrink-0"
                loading="lazy"
            />
        </div>
    </Container>
</Section>

<Separator />

<Section>
    <Container>
        <div class="flex flex-col md:flex-row items-center md:items-start md:justify-center md:gap-6">
            <Heading class="mb-6 md:mb-0 text-center md:text-left">Our Programs</Heading>
            <img
                src={`${base}/Pictures%20/IMG_4009.webp`}
                alt="Program participants"
                class="hidden md:block md:w-36 md:h-36 object-cover rounded-lg shadow-sm flex-shrink-0"
                loading="lazy"
            />
        </div>

        <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {#each programs as program}
                <FeatureCard {...program} />
            {/each}
        </div>
    </Container>
</Section>

<Separator />

<Section>
    <Container size="sm">
        <div class="flex flex-col md:flex-row md:items-center md:justify-center gap-6">
            <img
                src={`${base}/Pictures%20/IMG_4055.webp`}
                alt="Featured event"
                class="hidden md:block md:w-40 md:h-40 object-cover rounded-lg shadow-md flex-shrink-0"
                loading="lazy"
            />

            <div class="text-center">
                <Heading>Featured In</Heading>
                <p class="mt-4 leading-relaxed text-muted-foreground">
                    Young Able Voices has been recognized by these organizations
                </p>
                <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {#each mediaData.featured as item}
                        <Button
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            size="sm"
                        >
                            {#if item.icon === 'video'}
                                <Video class="mr-2 h-4 w-4" />
                            {:else if item.icon === 'podcast'}
                                <Mic class="mr-2 h-4 w-4" />
                            {:else}
                                <Newspaper class="mr-2 h-4 w-4" />
                            {/if}
                            {item.name}
                        </Button>
                    {/each}
                </div>
                <Button href={`${base}/media`} variant="outline" class="mt-8">
                    See More!
                </Button>
            </div>
        </div>
    </Container>
</Section>

<Separator />

<Section>
    <Container size="sm">
        <div class="flex flex-col md:flex-row items-center md:items-center gap-6">
            <div class="text-center md:text-left">
                <Heading>Ready to Connect?</Heading>
                <p class="mt-4 leading-relaxed text-foreground/80">
                    Hey Moms, Dads, and all you awesome adults - feel free to join your kiddos and tune in! Got questions or
                    topic ideas? We'd love to hear from you!
                </p>
                <Button href={`${base}/contact`} size="lg" class="mt-8">
                    Get in Touch
                </Button>
            </div>

            <img
                src={`${base}/Pictures%20/IMG_9537.webp`}
                alt="Get in touch with us"
                class="hidden md:block md:w-44 md:h-44 object-cover rounded-lg shadow-md flex-shrink-0"
                loading="lazy"
            />
        </div>
    </Container>
</Section>
