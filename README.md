# WORK IN PROGRESS - Please Visit Soon for the Completed Code

[![Build Status](https://travis-ci.org/IBM/casis-satellite-tracker.svg?branch=master)](https://travis-ci.org/IBM/casis-satellite-tracker)
# CASIS Satellite Tracker

In this Code Pattern, we will build a satellite tracker using  Node-RED and IBM Watson.
A flow will be created for connecting a Watson Assistant Chatbot with a node-red-contrib-satellites node, as well as a web UI and worldmap node.

When the reader has completed this Code Pattern, they will understand how to:

* Build a complex flow and web UI using simple Node-RED tools.
* Implement a chatbot with Watson Assistant and embed it on a web page with Node-RED.
* Get satellite information for the International Space Station (ISS) and use it in a web app.

![](doc/source/images/architecture.png)

## Flow

1. Step 1.
2. Step 2.
3. Step 3.
4. Step 4.
5. Step 5.

## Included components

* [Watson Assistant](https://www.ibm.com/watson/developercloud/conversation.html): Create a chatbot with a program that conducts a conversation via auditory or textual methods.

## Featured technologies

* [Artificial Intelligence](https://medium.com/ibm-data-science-experience): Artificial intelligence can be applied to disparate solution spaces to deliver disruptive technologies.
* [Node.js](https://nodejs.org/): An open-source JavaScript run-time environment for executing server-side JavaScript code.

<!--
# Watch the Video
-->

# Steps

## Run locally

1. [Clone the repo](#1-clone-the-repo)
1. [Create Watson services with IBM Cloud](#2-create-watson-services-with-ibm-cloud)
1. [Import the Watson Assistant workspace](#3-import-the-watson-assistant-workspace)
1. [Get the Watson Assistant credentials](#4-get-the-watson-assistant-credentials)
1. [Create a Node-RED Workspace](#5-create-a-node-red-workspace)
1. [Install additional nodes and Perform either 6a or 6b](#6-install-additional-nodes)

    6a. [Build the Node-RED flow manually](doc/CreateFlow.md)

    6b. [Import the completed flow](#6b-import-the-completed-flow)

### 1. Clone the repo

Clone the `casis-satellite-tracker` locally. In a terminal, run:

```
$ git clone https://github.com/IBM/casis-satellite-tracker
```

### 2. Create Watson services with IBM Cloud

Create the [*Watson Assistant*](https://console.ng.bluemix.net/catalog/services/conversation) service by providing a name of your choice and clicking `Create`.

Once created, you'll see the credentials for *username* and *password* that you should copy down to be used later. (Click `Show` to expose them).

![](https://github.com/IBM/pattern-images/blob/master/watson-assistant/WatsonAssistantCredentials.png)

### 3. Import the Watson Assistant workspace

Once you have created your instance of Watson Assistant, click `Launch Tool`, then click the `Workspaces` tab. Import the workspace by clicking the upload icon:

![](https://github.com/IBM/pattern-images/blob/master/watson-assistant/UploadWorkspaceJson.png)

Click `Choose a file` and navigate to [`data/workspaces/SatTrackWorkspace.json`](data/workspaces/SatTrackWorkspace.json) in this repo. Click `Import`.

Get the Workspace ID by clicking the 3 vertical dots on the `Workspaces` tab. Save this for later.

<p align="center">
  <img width="200" height="300" src="https://github.com/IBM/pattern-images/blob/master/watson-assistant/GetAssistantDetails.png">
</p>

### 4. Get the Watson Assistant credentials

The credentials for IBM Cloud Watson Assistant service can be found
by selecting the ``Service Credentials`` option for the service. You
saved these in [step #2](#2-create-watson-services-with-ibm-cloud).

The `WORKSPACE_ID` for the Watson Assistant workspace was saved in
[step #3](#3-import-the-watson-assistant-workspace).

### 5. Create a Node-RED Workspace

From the the [IBM Cloud Catalog](https://console.bluemix.net/catalog/) navigate to `Platform` -> `Boilerplates` and choose [Node-RED Starter](https://console.bluemix.net/catalog/starters/node-red-starter). Choose a name and click `Create`.

Once the App has deployed, click on `Visit App URL`

![](https://github.com/IBM/pattern-images/blob/master/node-red/NodeRedVisitAppURL.png)

Follow the instructions to `Secure your Node-RED editor` and `Browse available IBM Cloud nodes`. Click `Finish` and then click `Go to your Node-RED flow editor`.

### 6 Install additional nodes

You will need to install the following additional nodes:

* [node-red-contrib-credentials](https://flows.nodered.org/node/node-red-contrib-credentials)
* [node-red-contrib-web-worldmap](https://flows.nodered.org/node/node-red-contrib-web-worldmap)
* [node-red-contrib-satellites](https://flows.nodered.org/node/node-red-contrib-satellites)

### 6.b Import the completed Flow

We will walk through the steps to build the Node-RED flow, but you can import the completed Flow. Copy the flow to your machine's clipboard by navigating to `data/Node/`.

A flow can be moved to a Mac OS clipboard with:
```
$ pbcopy < ISS_flow.json
```

On Windows use:
```
$ cat ISS_flow.json | clip
```

On Linux use:
```
$ cat ISS_flow.json | xclip
```

Once the `ISS_flow.json` is on your clipboard, Click the upper-right menu icon and choose `Import` -> `Clipboard`. Paste the contents of your clipboard and click `Import`.

![](https://github.com/IBM/pattern-images/blob/master/node-red/ImportNodeREDflowToClipboard.png)

# Sample output

![](doc/source/images/sample_output.png)

# Troubleshooting

# Links

* [Demo on Youtube]()

# Learn more

* **Artificial Intelligence Code Patterns**: Enjoyed this Code Pattern? Check out our other [AI Code Patterns](https://developer.ibm.com/code/technologies/artificial-intelligence/).
* **AI and Data Code Pattern Playlist**: Bookmark our [playlist](https://www.youtube.com/playlist?list=PLzUbsvIyrNfknNewObx5N7uGZ5FKH0Fde) with all of our Code Pattern videos
* **With Watson**: Want to take your Watson app to the next level? Looking to utilize Watson Brand assets? [Join the With Watson program](https://www.ibm.com/watson/with-watson/) to leverage exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.

# License
[Apache 2.0](LICENSE)
