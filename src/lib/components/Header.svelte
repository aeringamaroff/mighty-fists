<script lang="ts">
	import { browser } from '$app/environment';
	import { LogoutButton, Navigation } from '$components';
	import { page } from '$app/state';
	import { ChevronDown, ExternalLink } from 'lucide-svelte';
	import { tippy } from '$actions';

	$: user = page.data.user;
</script>

<div class="content">
	<div class="left">
		{#if browser}
			<Navigation desktop={false} />
		{/if}
	</div>
	<div class="right">
		<div id="profile-button">
			<button
				class="profile-button"
				use:tippy={{
					content: document.getElementById('profile-menu') || undefined,
					onMount: () => {
						const template = document.getElementById('profile-menu');
						if (template) {
							template.style.display = 'block';
						}
					},
					trigger: 'click',
					placement: 'bottom-end',
					interactive: true,
					theme: 'menu'
				}}
			>
				{#if user?.images && user?.images.length > 0}
					<img src={user?.images[0].url} alt="" />
				{/if}
				{user?.display_name}
				<span class="visually-hidden">profile menu</span>
				<ChevronDown class="profile-arrow" size={22} />
			</button>
		</div>
		<div id="profile-menu" style="display: none">
			<div class="profile-menu-content">
				<ul>
					<li>
						<a href={user?.external_urls.spotify} target="_blank" rel="noopener noreferrer"
							>View on Spotify
							<ExternalLink focusable="false" aria-hidden />
						</a>
					</li>
					<li><a href="/profile">View Profile</a></li>
					<li><LogoutButton /></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.profile-button {
		background: none;
		border: 1px solid var(--border);
		padding: 5px;
		border-radius: 25px;
		display: flex;
		align-items: center;
		cursor: pointer;
		color: var(--text-color);
		:global(.profile-arrow) {
			margin-left: 3px;
		}
		img {
			width: 28px;
			height: 28px;
			border-radius: 100%;
			margin-right: 10px;
		}
		&:hover {
			background-color: var(--accent-color);
		}
	}

	.profile-menu-content {
		padding: 5px 0;
		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			li {
				&:hover {
					background-image: linear-gradient(rgba(255, 255, 255, 0.07) 0 0);
				}
				a :global(svg) {
					vertical-align: middle;
					margin-left: 10px;
				}
				a,
				:global(button) {
					display: inline-block;
					padding: 10px 15px;
					background: none;
					border: none;
					text-decoration: none;
					cursor: pointer;
					color: var(--menu-text-color);
					width: 100%;
					text-align: left;
					font-size: functions.toRem(14);
				}
			}
		}
	}
</style>
