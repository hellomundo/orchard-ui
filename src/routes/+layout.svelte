<script>
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Orchard</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm btn-ghost-surface" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">Hours</a>
				<a class="btn btn-sm btn-ghost-surface" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">Profile</a>
				<a class="btn btn-sm btn-ghost-surface" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">Admin</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<strong class="text-xl uppercase">Test</strong>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
