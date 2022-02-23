<script lang="ts">
	export let data: string;
	export let text: string;
</script>

<li class="group flex cursor-pointer items-center gap-2  gap-y-3">
	<svg
		class="fill-nav_text transition duration-300 ease-in-out  group-hover:fill-nav_active"
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="14"
		viewBox="0 0 24 24"
		><path d={data} />
	</svg>
	<p class="text-xs text-nav_text  transition duration-300 ease-in-out group-hover:text-white">
		{text}
	</p>
</li>
