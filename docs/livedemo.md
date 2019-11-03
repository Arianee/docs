---
id: livedemo
title: Live Demo
sidebar_label: Live Demo
---

This live demo is provided to test arianeeJS with Arianee Protocol.

Few use-cases are showcased and are fully functional to illustrate the Arianee Protocol

To fully enjoy this demo, you need to install Arianee Wallet on your smartphone.




<div style="width:50%; float: left; text-align:center">
<a href="https://apps.apple.com/ch/app/arianee-wallet/id1435782507" target="_blank"><img src="../img/appstore.svg" alt="drawing" width="200"/></a>
</div>

<div style="width:50%; float: left;text-align:center">
<a href="https://play.google.com/store/apps/details?id=com.arianee.wallet&hl=ln" target="_blank"><img src="../img/googleplay.svg" alt="drawing" width="200"/></a>
</div>


<br/><br/><br/><br/>

## Create an Arianee certificate on testnet
This demo initializes the environment and creates a basic certificate based on this <a href="https://cert.arianee.org/cert/sampleCert.json" target="_blank">JSON file</a>

The issuer is unknown (wallet is a random one), so the authenticity of the issuer cannot be verified.

<p class="codepen" data-height="465" data-theme-id="0" data-default-tab="js,result" data-user="gnarco" data-slug-hash="OJJVvQm" style="height: 379px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="My first Arianee Certificate">
  <span>See the Pen <a href="https://codepen.io/gnarco/pen/OJJVvQm">
  My first Arianee Certificate</a> by alexandre cognard (<a href="https://codepen.io/gnarco">@gnarco</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Create a certificate and request it with a second wallet

This demo initializes the environment and creates a basic certificate based on this <a href="https://cert.arianee.org/cert/sampleCert.json" target="_blank">JSON file</a>
It transfers it to another wallet. And give you a request ownership link to read and get ownership.

The issuer is unknown (wallet is a random one), so the authenticity of the issuer cannot be verified.

<p class="codepen" data-height="465" data-theme-id="0" data-default-tab="js,result" data-user="gnarco" data-slug-hash="mddJzWv" style="height: 379px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Create and Transfer">
  <span>See the Pen <a href="https://codepen.io/gnarco/pen/mddJzWv">
  Create and Transfer</a> by alexandre cognard (<a href="https://codepen.io/gnarco">@gnarco</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

</iframe>



## Create a custom certificate with a verified identity

This demo initializes the environment and creates a custom certificate based on this <a href="https://cert.arianee.org/cert/sampleCert.json" target="_blank">JSON file</a> but with a custom title

The issuer is a verified wallet, so the authenticity of the issuer is verified and the certificate is genuine (but on testnet !).

Also, because the wallet already exists, it's already loaded with certificate credits, so the process is clearly faster !



<p class="codepen" data-height="465" data-theme-id="0" data-default-tab="js,result" data-user="gnarco" data-slug-hash="dyyprpR" style="height: 379px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Create a custom &amp;amp; authentic certificate">
  <span>See the Pen <a href="https://codepen.io/gnarco/pen/dyyprpR">
  Create a custom &amp; authentic certificate</a> by alexandre cognard (<a href="https://codepen.io/gnarco">@gnarco</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


