---
title: 'Deploying a Next.js app with AWS Amplify'
date: '2021-05-21T22:37:19Z'
author:
  twitter: 'botdev_'
  name: 'Ely Alamillo'
og:
  image: '/images/next-amplify/deploying-next.png'
---

---
# Deploying a Next.js app with AWS Amplify
This week AWS amplify announced support for deploying Next.js SSR apps, which has been a long awaited feature. You can read the announcement [here](https://aws.amazon.com/about-aws/whats-new/2021/05/aws-amplify-hosting-announces-server-side-rendering-support-for-next-js-web-apps/).

### Next app
For the purposes of this guide we will deploy the basic app scaffold provided by [create-next-app](https://www.npmjs.com/package/create-next-app)

### Deployment
Since we will be using Amplify, we first need to go through the installation and setup process. We can figure out how to do that by following the [official docs](https://docs.amplify.aws/cli/start/install).

#### Creating an Amplify Project
Once we have Amplify configured we can go ahead and create a project. We can achieve that by running `amplify init`

![Domain List](/images/next-amplify/amplifyinit.png)
We will need to create a name for our project and a profile to use and amplify will spin up all the resources we will need.

#### Zero config deploy
Amplify provides a zero config deploy similar to vercel, which allows us to connect a git provider to use for our deployments. To get started we can go the the [Amplify console](https://console.aws.amazon.com/amplify/home) and select Host web app.

![Host web app](/images/next-amplify/web_app.png)
##### Select git provider
We can now select our preffered git provider such as Github for this example.
![Select a git provider](/images/next-amplify/select_git.png)
##### Add repo branch
After selecting our desired git provider we can select which branch we would like to deploy from.
![Select repo branch to deploy from](/images/next-amplify/select_repo.png)
##### Configure build settings
After selecting a branch we can now configure our build settings, for the most part we won't need to modify this config as Amplify will take care of that for us.
![Configure build setting for deployment](/images/next-amplify/build_settings.png)
##### Review
Now we can review everything looks correct before triggering a deploy.
![Review configuration](/images/next-amplify/review.png)
##### Verify deployment
Finally we can see the deployment starting and in a few minutes our site will be live!
![Verify deployment](/images/next-amplify/success.png)

### Conclusion
Thanks to Amplify we can now deploy Next.js SSR app on AWS with a relatively low effort. Let me know what you think about this new feature!