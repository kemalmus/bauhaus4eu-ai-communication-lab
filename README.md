# BAUHAUS4EU AI Communication Lab

A lightweight participant portal for the in-person workshop. It is a static site made with HTML, CSS, and vanilla JavaScript. It has no build step, backend, database, sign-in, or trainer-provided files.

## Run locally

From the project folder, start a small local web server:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/> in a browser. Stop the server with `Ctrl+C`.

## Publish with GitHub Pages

1. Create a GitHub repository for the site and add these project files to the repository root.
2. Commit and push the files to the `main` branch.
3. In the repository on GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Set the branch to **main** and the folder to **/(root)**, then select **Save**.
6. Wait for the Pages deployment to finish. GitHub will show the published address in the Pages settings. For a project repository it will normally be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

There is no build command and no framework to install. The relative stylesheet, script, and page links support the repository subdirectory in the GitHub Pages address.

## Files to edit

- `assets/app.js` contains the workshop page content, all prompts, stage flow, case facts, and external tool URLs.
- `assets/styles.css` contains the shared visual system and responsive layout.
- `index.html` and each stage folder contain small page shells that select the relevant workshop stage, including the final post-training survey page.

Workshop content is grouped in the `pages` object in `assets/app.js`. The confirmed case information used on the concept, build, and home pages is in `caseFacts`. The new information for the Adapt stage is in `updateInfo()` and its impact-analysis prompt is under `pages.update`.

## External tool links

At the top of `assets/app.js`, edit the `tools` object. The visible links are generated from this configuration. Change these before the workshop if a destination moves or you want to use a different tool.

The final `/survey/` page thanks participants and shows the Mentimeter QR code and entry code from the supplied evaluation slide.

The Hugging Face Spaces used by the Media Lab are:

- `hfImage1`
- `hfImage2`
- `hfTTS1`

The Media Lab displays these three destinations separately: FLUX.1 Schnell for image generation, Background Removal for image editing, and Kokoro TTS for text-to-speech. Tool links are suggestions; participants can use a free chat interface they already have access to. Google AI Studio is optional. The workshop does not require a paid account or AI agent.

## Change the Future Campus Challenge facts

Edit `caseFacts` near the top of `assets/app.js`, then update the facts copied into the relevant prompts (`pages.concept`, `pages.build`, and `pages.update`) so they remain consistent. The later project update intentionally changes the deadline to 8 October and adds new confirmed information.

Do not add travel funding or academic credits unless those claims are confirmed. The portal does not include Gemini Music or require participants to upload files from the trainer.

## Keep the Adapt page for the trainer

The Adapt page exists at:

```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/update/
```

It is not linked from the home page, page headers, public stage links, or footers. Share that address with participants only when it is time to reveal the project update. The page is a static public URL, so anyone who already knows the address can open it.

Optional trainer notes appear only when a stage URL has `?trainer=1`, for example `.../concept/?trainer=1`.
