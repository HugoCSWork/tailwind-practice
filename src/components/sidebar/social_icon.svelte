<script lang="ts">
	export let data: string;
</script>

<div
	class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-social transition duration-300 ease-in-out hover:bg-social_hover"
>
	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
		><path fill="#ffffff" d={data} />
	</svg>
</div>
