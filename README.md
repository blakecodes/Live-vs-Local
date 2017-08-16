# LvL - Live vs. Local

LvL is a project based on making deployments faster for small projects. This was created when I faced the problem of being forced to develop on my local machine with local assets, then having to change all of the asset URLs as soon as I moved it to live. For example, our project used local assets then had to swap to our assets located on AWS, making sure we deployed with the rights assets set was a major pain.

The push times to get from local to server wasn't something I wanted to accept or do every 5 minutes. Therefore LvL was created. 

With LvL you can assign a local file and production file to assets so when you're ready to move to the live versions, you set the environment variable to production or local and you're done. 

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

### Coming Soon Features

  - Fetch all lvl elements with a method
  - Remove necessity of using the lvl-target tag for src and links
  - Improve accessibility for other elements
  - Implement useage inside of other JS files. 


#### Basic Setup: 
This also requires basic element assignment.
```sh
var lvl = new LiveVsLocal();
lvl.run();
```

#### Change Environments
Production environment fetchs data-lvl-prod, local fetched data-lvl-local.
```sh
lvl.environment = 'production' //also can be local;
```

#### Element Assignment
Set the local, production and target attributes.
```sh
<link rel="stylesheet" href="" data-lvl-local="localurl.html" data-lvl-prod="productionurl.html" data-lvl-target="href">
```