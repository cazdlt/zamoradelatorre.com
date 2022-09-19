<script lang="ts">
	import PageTitle from '$lib/components/pageTitle.svelte';
	import Socials from '$lib/components/socials.svelte';
	import { site } from '$lib/data/site';
	const { phone, email, location } = site.author;
</script>

<div class="m-12 w-8/12 mx-auto">
	<PageTitle title="Contact" />
	<div class="text-md flex flex-row justify-start space-x-6 my-2">
		<Socials />
	</div>
	<div>
		<div>
			<span class="font-bold"> E-mail address:</span>
			{email}
		</div>
		<div>
			<span class="font-bold"> Phone number:</span>
			{phone}
		</div>
		<div>
			<span class="font-bold"> Location:</span>
			{location}
		</div>
	</div>

	<form
		class="flex flex-col w-full gap-4 py-4"
		name="contact"
		method="POST"
		netlify
	>
		<input type="hidden" name="form-name" value="contact" />
		<span class="font-bold">Leave me a message:</span>
		<div class="flex leading-8">
			<label class="w-1/4" for="name">Your name</label>
			<input
				class="border-b-2 grow bg-transparent focus:outline-none focus:ring-0"
				type="text"
				id="name"
				name="nombre"
				placeholder="Juanito Alimaña"
			/>
		</div>
		<div class="flex leading-8">
			<label class="w-1/4" for="mail">Your email</label>
			<input
				class="border-b-2 grow bg-transparent focus:outline-none focus:ring-0"
				type="email"
				id="mail"
				name="correo"
				placeholder="elmalo@gmail.com"
			/>
		</div>
		<div class="flex leading-8">
			<label class="w-1/4" for="form-subject">Your message</label>
			<textarea
				class="border-b-2 grow bg-transparent focus:outline-none focus:ring-0 h-40"
				id="form-subject"
				name="mensaje"
				placeholder="La calle es una selva de cemento"
			/>
		</div>
		<div class="flex leading-8 justify-end">
			<button
				class="w-1/4 bg-secondary text-white border-b-2 grow focus:outline-none focus:ring-0 hover:brightness-150 rounded"
				type="submit"
				value="Send">Send</button
			>
		</div>
	</form>
</div>
