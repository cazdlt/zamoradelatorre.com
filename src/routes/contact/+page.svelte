<script lang="ts">
	import PageTitle from '#lib/components/pageTitle.svelte';
	import Socials from '#lib/components/socials.svelte';
	import { site, cvLinks } from '#lib/data/site.ts';
	import { ui } from '#lib/data/i18n.ts';
	import { lang } from '#lib/stores/lang.ts';
	import Fa from 'svelte-fa';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import { faFileLines, faCopy } from '@fortawesome/free-regular-svg-icons';
	import { faEnvelope, faPhone, faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons';

	const { phone, whatsapp, email, location } = site.author;
	let copy = $derived(ui[$lang].contact);

	let copied = $state(false);
	let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const copyEmail = async () => {
		await navigator.clipboard.writeText(email);
		copied = true;
		window.setTimeout(() => {
			copied = false;
		}, 2000);
	};

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		formStatus = 'submitting';

		const formData = new FormData(form);
		const body = Array.from(formData.entries())
			.filter((entry): entry is [string, string] => typeof entry[1] === 'string')
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
			.join('&');

		try {
			const response = await fetch('/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body
			});

			if (!response.ok) {
				formStatus = 'error';
				return;
			}

			form.reset();
			formStatus = 'success';
		} catch {
			formStatus = 'error';
		}
	};
</script>

<div class="max-w-4xl mx-auto my-8 md:my-12 px-2">
	<header class="space-y-3 mb-10">
		<PageTitle title={ui[$lang].pages.contact} />
		<p class="text-base md:text-lg text-dark/75 max-w-2xl">
			{copy.intro}
		</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
		<div class="md:col-span-2 space-y-8">
			<dl class="space-y-4 text-sm md:text-base">
				<div class="space-y-0.5">
					<dt class="text-xs text-dark/55">
						{copy.email}
					</dt>
					<dd class="flex items-center gap-2.5 flex-wrap">
						<Fa icon={faEnvelope} class="text-primary text-sm shrink-0" />
						<a href="mailto:{email}" class="text-secondary hover:underline">
							{email}
						</a>
						<button
							type="button"
							onclick={copyEmail}
							class="inline-flex items-center gap-1 border border-dark/15 px-2 py-0.5 text-xs text-dark/70 transition-colors hover:border-secondary hover:text-secondary cursor-pointer"
							aria-label={copied ? copy.copied : copy.copy}
						>
							<Fa icon={copied ? faCheck : faCopy} class="text-[11px]" />
							<span>{copied ? copy.copied : copy.copy}</span>
						</button>
					</dd>
				</div>

				{#if phone}
					<div class="space-y-0.5">
						<dt class="text-xs text-dark/55">
							{copy.phone}
						</dt>
						<dd class="flex items-center gap-2.5">
							<Fa icon={faPhone} class="text-primary text-sm shrink-0" />
							<a
								href="tel:+{whatsapp ?? phone.replace(/\D/g, '')}"
								class="text-secondary hover:underline"
							>
								{phone}
							</a>
						</dd>
					</div>
				{/if}

				{#if whatsapp}
					<div class="space-y-0.5">
						<dt class="text-xs text-dark/55">
							{copy.whatsapp}
						</dt>
						<dd class="flex items-center gap-2.5">
							<Fa icon={faWhatsapp} class="text-primary text-base shrink-0" />
							<a
								href="https://wa.me/{whatsapp}"
								target="_blank"
								rel="noreferrer"
								class="text-secondary hover:underline"
							>
								{copy.whatsappCta}
							</a>
						</dd>
					</div>
				{/if}

				{#if location}
					<div class="space-y-0.5">
						<dt class="text-xs text-dark/55">
							{copy.location}
						</dt>
						<dd class="flex items-center gap-2.5 text-dark/85">
							<Fa icon={faLocationDot} class="text-primary text-sm shrink-0" />
							<span>{location}</span>
						</dd>
					</div>
				{/if}
			</dl>

			<div class="space-y-2.5 pt-3 border-t border-dark/10">
				<h2 class="text-xs text-dark/55">
					{copy.socials}
				</h2>
				<div class="text-lg flex flex-row items-center gap-5 text-dark">
					<Socials exclude={['mail']} />
				</div>
			</div>

			<div class="space-y-2.5 pt-3 border-t border-dark/10">
				<h2 class="text-xs text-dark/55">
					{copy.cv}
				</h2>
				<div class="flex flex-wrap gap-2">
					{#each cvLinks as cv (cv.href)}
						<a
							href={cv.href}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center gap-1.5 border border-dark/15 bg-light/50 px-3 py-1 text-xs text-dark transition-colors hover:border-secondary hover:text-secondary"
						>
							<Fa icon={faFileLines} class="text-[11px] text-primary" />
							<span>{cv.label}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="md:col-span-3 border border-dark/10 bg-light/45 p-6 md:p-8">
			<h2 class="text-xl font-semibold text-dark mb-6">{copy.formTitle}</h2>

			{#if formStatus === 'success'}
				<div class="space-y-4 py-6">
					<p class="text-lg font-bold text-secondary">{copy.successTitle}</p>
					<p class="text-dark/80">{copy.successBody}</p>
					<button
						type="button"
						onclick={() => {
							formStatus = 'idle';
						}}
						class="text-sm font-semibold text-primary hover:underline cursor-pointer"
					>
						{copy.sendAnother}
					</button>
				</div>
			{:else}
				<form
					class="flex flex-col gap-5"
					name="contact"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onsubmit={handleSubmit}
				>
					<input type="hidden" name="form-name" value="contact" />
					<p class="hidden">
						<label>
							Do not fill this out: <input name="bot-field" />
						</label>
					</p>

					<div class="flex flex-col gap-1.5">
						<label class="text-sm text-dark/70" for="name">
							{copy.nameLabel}
						</label>
						<input
							class="border-b border-dark/25 bg-transparent py-1.5 text-dark placeholder:text-dark/35 transition-colors focus:border-secondary focus:outline-none"
							type="text"
							id="name"
							name="nombre"
							required
							placeholder={copy.namePlaceholder}
						/>
					</div>

					<div class="flex flex-col gap-1.5">
						<label class="text-sm text-dark/70" for="mail">
							{copy.emailLabel}
						</label>
						<input
							class="border-b border-dark/25 bg-transparent py-1.5 text-dark placeholder:text-dark/35 transition-colors focus:border-secondary focus:outline-none"
							type="email"
							id="mail"
							name="correo"
							required
							placeholder={copy.emailPlaceholder}
						/>
					</div>

					<div class="flex flex-col gap-1.5">
						<label class="text-sm text-dark/70" for="form-subject">
							{copy.messageLabel}
						</label>
						<textarea
							class="border-b border-dark/25 bg-transparent py-1.5 text-dark placeholder:text-dark/35 transition-colors focus:border-secondary focus:outline-none min-h-36 resize-y"
							id="form-subject"
							name="mensaje"
							required
							placeholder={copy.messagePlaceholder}></textarea>
					</div>

					{#if formStatus === 'error'}
						<p class="text-sm text-primary" role="alert">
							{copy.errorBody}
						</p>
					{/if}

					<div class="flex justify-end pt-2">
						<button
							class="bg-secondary px-6 py-2 text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer"
							type="submit"
							disabled={formStatus === 'submitting'}
						>
							{formStatus === 'submitting' ? copy.sending : copy.send}
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</div>
