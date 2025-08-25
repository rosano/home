---
date: 2024-03-18T22:28:50.777Z
tags: ["notes"]
categories: ["code"]
---
Finally managed to install a custom app via Cloudron by following the [tutorial documentation](https://docs.cloudron.io/packaging/tutorial/), and without installing Docker.

## 1. Install the Cloudron CLI locally

```bash
sudo npm install -g cloudron
cloudron login my.example.com
```

## 2. Setup build tools

One-click install the [Docker Registry App](https://docs.cloudron.io/apps/docker-registry/) (replace `alfa.bravo` below with this app domain) and [Build Service App](https://docs.cloudron.io/apps/build-service/) (replace `charlie.delta` below with this app domain) via your Cloudron App Store. Configure the latter's credentials in `/app/data/docker.json` via the File Manager

```json
{
  "alfa.bravo": {
    "username": "CLOUDRON_USERNAME",
    "password": "CLOUDRON_PASSWORD"
  }
}
```

and restart the app.

## 3. Install the pre-packaged custom app

Replace the [simple tutorial app](https://git.cloudron.io/cloudron/tutorial-nodejs-app) with yours:

```bash
git clone https://git.cloudron.io/cloudron/tutorial-nodejs-app
cd tutorial-nodejs-app
cloudron build --set-build-service https://charlie.delta --set-repository alfa.bravo/echo/foxtrot --tag golf
cloudron install --image alfa.bravo/echo/foxtrot:golf
```

If you want to update, run `cloudron build` again, then call `cloudron update` like so:

```bash
cloudron build --set-build-service https://charlie.delta --set-repository alfa.bravo/echo/foxtrot --tag golf
cloudron update --image alfa.bravo/echo/foxtrot:golf
```

### Resources

Aside from the [tutorial documentation](https://docs.cloudron.io/packaging/tutorial/), I found some hints in these forum topics:

- [How to build (custom) apps using the docker-registry](https://forum.cloudron.io/topic/4412/how-to-build-custom-apps-using-the-docker-registry)
- [How do I do this??](https://forum.cloudron.io/topic/6717/how-do-i-do-this)
- [UI not working](https://forum.cloudron.io/topic/9957/ui-not-working)
