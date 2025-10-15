<svelte:head>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  </style>
</svelte:head>

<marquee behavior="scroll" direction="left" scrollamount="6" class="heart-marquee">
  MUERTE | DOLOR | VIOLENCIA | MARGINALIDAD
</marquee>

<slot></slot>

<style>

:global(.heart-marquee) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #000;
  color: #fff;
  font-size: 2em;
  font-weight: 900;
  padding: 0.3em 0;
  margin: 0;
  border: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: var(--headerfont);
}

  :global(:root){
    --stroke: black; /* Font color */
    --fill: #ffffff; /* Background color */
    --accent1: #ffffff; /* Main color */
    --accent2: #000000; /* Higlights color */
    --mainfont: "Helvetica", sans-serif;
    --headerfont: "Helvetica", sans-serif;
    font-family: var(--mainfont);
  }

:global(body) {
  padding: 0;
  margin-top: 6%;
  margin-right: 20%;
  margin-left: 20%;
  margin-bottom: 3%;
  background: var(--fill);
  color: var(--stroke);
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text y='24' font-size='24'>🔥</text></svg>") 16 16, auto;
}

  :global(button, select, input) {
    font-family: var(--mainfont);
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--headerfont);
    color: var(--accent2);
  }

  :global(h1) {
    font-size: 1em;
  }

  :global(p, li) {
    font-size: 1em;
  }

  :global(table) {
    border-collapse: collapse;
    max-width: 100%;
  }

  :global(a) {
    color: var(--accent2); 
  }

  :global(.silent-link) {
    text-decoration: none;
    font-weight: bold;
    color: var(--stroke); 
  }

  :global(.default-button) {
    padding: 0 em;
    margin: 0 em 0;
    border: solid 1px var(--accent2);
    color: var(--fill);
    font-size: 1em;
    background: var(--accent2);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text y='24' font-size='24'>🔥</text></svg>") 16 16, auto;
  }

  :global(.default-button:hover) {
    color: var(--accent2);
    background: var(--fill);
  }

  :global(.default-button:active) {
    background: var(--accent1);
  }

  :global(th, td) {
    border: 1px solid rgba(0,0,0,0.2);
    padding: 0.5em;
    text-align: left;
  }

  :global(.silent-link:hover) {
    color: var(--accent2);
  }

  :global(.no-select)  {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :global(.noevents) {
    pointer-events: none;
  }

  :global(.reset-button) {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text y='24' font-size='24'>🔥</text></svg>") 16 16, auto;
    padding: 0px;
    margin: 0px;
    border: none;
    background: none;
  }

  :global(.reset-button:active) {
    filter: invert(1);
  }

  :global(.reset-button:hover) {
    filter: invert(0.5);
  }

  :global(.reset-button img) {
    height: 1.2rem;
  }
</style>