<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Orchard</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm btn-filled-surface" href="/families" target="_blank" rel="noreferrer">Families</a>
				<a class="btn btn-sm btn-filled-surface" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">Hours</a>
				<a class="btn btn-sm btn-filled-surface" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">Profile</a>
				<a class="btn btn-sm btn-filled-surface" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">Admin</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
