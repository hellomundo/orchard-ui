<script>
    import { PlusCircle } from 'svelte-heros-v2';
    export let data
    export let errors
    console.log(data.families)
</script>
<div class="container mx-auto flex justify-center">
	<div class="space-y-4 my-10 text-center">
		<h2 class="font-bold">Families.</h2>
        <form method="POST" action="?/create">
            <div class="text-left">
                <label for="name">
                    <span>Family Name</span>
                </label>	
                <div class="flex justify-center space-x-2">
                    <PlusCircle size="40" variation="solid"/>
                    <input name="name" type="text" id="name" minlength="2" required>
                    <button class="btn btn-filled-primary btn-base">Submit</button>
                </div>
                <div>
                </div>
            </div>
        </form>
        <div>
                <ul>
                    {#each data.families as family }
                    <li>{family.name}</li>
                    {/each}
                </ul>
        </div>
	</div>

	<style lang="postcss">
	</style>
</div>
