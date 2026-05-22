---
title: Other free deployment offerings
weight: 5
emoji: 🖥️
---

# Free deployment offerings

In this section, we will showcase some free options that allow you to deploy your application stack. We will also take note of any limitations each of the providers have.

{{<note type="note" title="TL;DR">}}
If you're a current CYF trainee or recent graduate, you should use the [CYF Hosted Environment](../cyf). Otherwise, see below.

If you are not eligible for the CYF hosted environment, the CYF Curriculum team suggests [Netlify](../netlify) as a free provider to use for both your frontend and backend applications, with Supabase as a free database layer for persistence. This is because among the free tier offerings they have the least amount of limitations. You will need to check these however to make sure they are still suitable for your use case.

If the limitations of Netlify and/or Supabase are not suitable, a good alternative is Fly.io. Do note its free tier is limited to two computers, either one backend and one database, or two backends. If you have multiple projects that you want to deploy you'll need to either use a different provider or need to pay for those.
{{</note>}}

## Frontend

| Provider         | Type                              | Deployment            | Snasphots               | Limitations                                                        |
| ---------------- | --------------------------------- | --------------------- | ----------------------- | ------------------------------------------------------------------ |
| Netlify          | CDN                               | Automatic from GitHub | Supported, PRs          | -                                                                  |
| Cloudflare Pages | CDN                               | Automatic from GitHub | Supported, All branches | -                                                                  |
| Render           | CDN or Frontend served by backend | Automatic from GitHub | Supported, PRs          | Backend is stopped after inactivity, startup time is slow          |
| Fly.io           | Frontend served by backend        | Manual                | None                    | Free tier limited to two backends, or one backend and one database |
| GitHub Pages     | Frontend                          | Automatic from GitHub | None                    | Only deploys HTML already present in the repository                |

## Backend

| Provider         | Type       | Deployment            | Snasphots               | Limitations                                                                                                            |
| ---------------- | ---------- | --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Netlify          | Serverless | Automatic from GitHub | Supported, PRs          | Requires Express.JS serverless wrapper, does not support all Express.JS features                                       |
| Render           | Persistent | Automatic from GitHub | Supported, PRs          | Backend is stopped after inactivity, startup time is slow                                                              |
| Fly.io           | Persistent | Manual                | None                    | Free tier limited to two backends, or one backend and one database.                                                    |
| Glitch           | Persistent | Manual                | None                    | Backend is stopped after inactivity, startup time is slow. Not designed for production system                          |
| Cloudflare Pages | Serverless | Automatic from GitHub | Supported, All branches | Does not support Express.JS serverless wrapper at all, backend needs to be written in a different framework, like Hono |

## Database

| Provider      | Type                   | Integration                                         | Limitations                                                                                            |
| ------------- | ---------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Supabase      | Relational, PostgreSQL | None                                                | Stops after one week of inactivity                                                                     |
| Render        | Relational, PostgreSQL | Integrates with Render based backends automatically | Gets deleted after 3 months without payment                                                            |
| Fly.io        | Relational, PostgreSQL | Integrates with fly.io based backends automatically | Free tier limited to one backend and one database. Database can only be accessed from Fly.io backends. |
| Cloudflare D1 | Relational, SQLite     | Integrates with Cloudflare Pages automatically      | Not following the Postgres SQL standard                                                                |
