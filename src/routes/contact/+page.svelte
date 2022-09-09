<script lang="ts">
	import { site } from '$lib/config';
	const { phone, email } = site.author;
</script>

<div class="m-12 w-8/12 mx-auto">
	<h1 class="text-4xl font-bold my-8">Contact</h1>
	<div class="flex flex-col">
		<div>
			<span class="font-bold"> E-mail address:</span>
			{email}
		</div>
		<div>
			<span class="font-bold"> Phone number:</span>
			{phone}
		</div>
	</div>

	<form
		id="form"
		class="flex flex-col w-full gap-4 py-4"
		name="contacto"
		method="POST"
		data-netlify="true"
	>
		<span class="font-bold">Leave me a message:</span>
		<div class="flex leading-8">
			<label class="w-1/4" for="name">Contact name</label>
			<input
				class="border-b-2 grow bg-transparent focus:outline-none focus:ring-0"
				type="text"
				id="name"
				name="nombre"
				placeholder="Juanito Alimaña"
			/>
		</div>
		<div class="flex leading-8">
			<label class="w-1/4" for="mail">Contact email</label>
			<input
				class="border-b-2 grow bg-transparent focus:outline-none focus:ring-0"
				type="email"
				id="mail"
				name="correo"
				placeholder="elmalo@gmail.com"
			/>
		</div>
		<div class="flex leading-8">
			<label class="w-1/4" for="form-subject">Message</label>
			<textarea
				class="border-b-2 grow bg-transparent focus:outline-none focus:ring-0"
				id="form-subject"
				name="mensaje"
				placeholder="Hello!"
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
