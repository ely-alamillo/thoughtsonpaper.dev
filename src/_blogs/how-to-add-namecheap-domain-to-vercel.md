---
title: 'How to add Namecheap domain to Vercel'
date: '2021-04-02T22:37:19Z'
author:
  twitter: '_elyalamillo'
  name: 'Ely Alamillo'
og:
  image: '/images/namecheap.png'
---

---

In the quest to publishing this site I soon hit a roadblock. I had to add a custom domain to [Vercel](https://vercel.com/) to get a nice looking domain rather then the generic `app-name.vercel.app` that is automatically assigned to each deployment.

Adding a domain is something I've done plenty of times before, yet everytime I seem to have to look around on how to do it. Since this is a blog I decided to document the process of adding a [Namecheap](https://namecheap.com/) domain to [Vercel](https://vercel.com/) in the hopes that it helps other enduring the same path.

# Configuring Vercel

**1)** Login in to your [Vercel](https://vercel.com/) dashboard and go to the `Domains` tab. Here you will see the options to buy, add, and transfer a domain. In this case since we already own a domain over at [Namecheap](https://namecheap.com/) will go ahead and select the `add` option.
![Domain List](/images/domains.png)

**2)** A modal will now prompt you to select a project for which the domain will be bound to. After you select a project you will be able to click `continue`.
![Domains](/images/select-site.png)

**3)** On to another modal that will prompt to enter the domain that we would like to add to our project.
![Select site](/images/select-site.png)

**4)** Once you input a valid domain you will be taken to the domains page and you will see you newly added domain. Most likely you will also see an error stating `Invalid Configuration`. This is because we still need set up [Namecheap](https://namecheap.com/) to point to [Vercel's](https://vercel.com/) Nameservers.
![Invalid config](/images/invalid-config.png)

**5)** You will also see a tab named `Nameservers`, click on it and you will see the nameservers we will need to configure [Namecheap](https://namecheap.com/).
![Select site](/images/nameservers.png)

# Configuring Namecheap

Now that we have configured [Vercel](https://vercel.com/) we need to configure [Namecheap](https://namecheap.com/) to complete the process.

**1)** Once you are logged in to your [Namecheap](https://namecheap.com/) account go to `Domain Lists` on the sidebar , select the domain you wish to configure and click on `Manage`.
![Domain List](/images/domain-list.png)

**2)** Now find the `NAMESERVERS` sections, click on the dropdown and select `Custom DNS`. This will reveal an input where you can input the `[Vercel's](https://vercel.com/) Nameserver addresses. Once that is done you can click on the green checkmark and you are all done.
![Select site](/images/nc-ns-config.png)

## Conclusion

Setting up a [Namecheap](https://namecheap.com/) domain on [Vercel](https://vercel.com/) is a relatively easy task to accomplish. Hope this guide was useful!