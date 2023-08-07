class YouTubePlayer extends HTMLElement {
  constructor() {
    super();
    this.src = this.getAttribute("data-src");
    // Extract video ID, playlist ID, and start index from the passed in src
    const url = new URL(this.src);
    this.videoId =
      url.hostname === "youtu.be"
        ? url.pathname.slice(1)
        : new URLSearchParams(url.search).get("v");
    this.playlistId = new URLSearchParams(url.search).get("list");
    this.startAt = new URLSearchParams(url.search).get("index");
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
     <style>
.container {
    border-radius: var(--theme-border-radius);
    box-shadow: var(--theme-box-shadow);
    background-color: black; //always black in this case for Youtube
    overflow: hidden;
   }
  .container, .thumbnail {
    width:100%;
    max-width:100%;
    aspect-ratio: 16/9;
    display:grid;
    grid-template: "thumbnail" auto / 1fr;
    place-items: center;
  }

  .thumbnail img {
    grid-area: thumbnail;
    object-fit: cover;
    max-width: 100%;
  }

  .play-button {
    cursor: pointer;
    transition: transform 0.2s;
    grid-area: thumbnail;
    font-size:72px;
    filter : drop-shadow(var(--theme-drop-shadow));
  }

  .play-button:hover, .play-button:focus {
    transform: scale(1.2);
  }
  iframe {
    grid-area: thumbnail;
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
  }
  .has-video iframe {
   animation: fade-in .3s ease-in-out;
  }
  @keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
      <div class="container">
      <div class="thumbnail">
        <img src="//i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg" alt="Video thumbnail">
        <div class="play-button" role="button" title="play video">📼</div>
      </div>
      </div>
    `;

    this.shadowRoot
      .querySelector(".play-button")
      .addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        const iframeSrc =
          `https://www.youtube.com/embed/${this.videoId}?autoplay=1` +
          (this.playlistId ? `&list=${this.playlistId}` : "") +
          (this.startAt ? `&index=${this.startAt}` : "");
        iframe.setAttribute("src", iframeSrc);
        iframe.setAttribute("title", "Youtube Video");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        );

        const container = this.shadowRoot.querySelector(".container");
        container.classList.add("has-video");
        container.removeChild(this.shadowRoot.querySelector(".thumbnail"));
        container.appendChild(iframe);
      });
  }
}

customElements.define("youtube-player", YouTubePlayer);
