Hi again,

I built a small demo to clearly show the issue and make it easier to understand. I spent a lot of time debugging because I initially thought the problem was in my own code, but after narrowing it down, I created a minimal proof of concept you can check here:
👉 [https://github.com/escobadio/mbega](https://github.com/escobadio/mbega)

It’s a super simple project that demonstrates how bundling everything into a single executable currently doesn’t work or produce the expected results.
I also took several screenshots to explain what’s happening.

The project follows your own documentation:

**Fullstack dev server:**
[https://bun.sh/docs/bundler/fullstack](https://bun.sh/docs/bundler/fullstack)

**Full-stack executables:**
[https://bun.com/docs/bundler/executables#full-stack-executables](https://bun.com/docs/bundler/executables#full-stack-executables)

The setup includes HTML, CSS, JS, a small server, and two images.
There are two frontend routes (theoretically infinite):

* Home: `/`
* Some Where: `/some/where`

And one backend endpoint:

* `GET /api/hello`

There are also two environment files: `dev.env` and `exe.env`.

Inside the JS, I use `process.env.ACME_PUBLIC` to inject a small label into the `<h1>` element to show which environment is currently active (dev or exe).
This is configured through `bunfig.toml` and three commands in `package.json`.

Based on standard practice and common sense, the CSS, JS, and images should be embeddable and accessible from any route in the app (like `/` or `/some/where`).

The three commands in the project are:

1. `bun run dev` – starts the app in dev mode and loads `dev.env`
2. `bun run build` – bundles and creates the executable
3. `bun run exe` – runs the built executable with the env for exe

When running `bun run dev`, everything works perfectly:
I see “dev” in the headline, the favicon and image load correctly, CSS and JS are applied, and even when navigating to `/some/where`, everything still works fine.

But after creating and running the executable:

* On the homepage, the image is missing, the favicon is gone, and the environment label doesn’t appear (though CSS and JS still load).
* Once I navigate away from `/`, e.g. to `/some/where`, even CSS and JS stop loading — basically, **nothing works anymore.**

A quick test in the inspector shows that simply removing the leading `./` in front of the CSS and JS paths fixes them — but the image still won’t load even after that.

I’m a big fan of Bun and all the progress made so far, so please don’t take this as just another complaint. I’ve put real effort into pinpointing the issue and I’m happy to dig deeper if that helps.

If there’s anything specific I can do — tests, examples, PRs — please just tell me. I’m in UTC+8 (Bangkok, Thailand) and will respond quickly.
I’m sure others are running into the same issue, and considering how many developers are now trying Bun, this could be one of those pain points that pushes people back to Node or Deno.

Let’s not make it that easy for them.
Let’s make Bun great.

@alii @Jarred-Sumner 
--------------------------------------------------

### Dev Mode

<img width="1159" height="847" alt="Image" src="https://github.com/user-attachments/assets/4869c8cd-3105-431b-accc-7eaedefd3e56" />
<img width="1163" height="853" alt="Image" src="https://github.com/user-attachments/assets/cd3fb488-7da0-44c1-8027-27ef98a94f8b" />

--------------------------------------------------

### Exe Mode

<img width="1157" height="846" alt="Image" src="https://github.com/user-attachments/assets/08ca4ac6-f57d-4122-89b4-5b89db81f3dd" />

<img width="1155" height="850" alt="Image" src="https://github.com/user-attachments/assets/281d6fcb-220e-4d9e-be58-7ed269783e63" />
<img width="1165" height="853" alt="Image" src="https://github.com/user-attachments/assets/f3125d3b-ee15-4a6a-8b03-eed831baf8c4" />