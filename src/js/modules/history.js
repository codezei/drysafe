export default function () {
  let video = document.querySelector(".video");
  let play = document.querySelector(".video__play");
  let videoId = video.dataset.id

  play.addEventListener("click", (e) => {
    video.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      loading="lazy"
    ></iframe>
  `;
  });
}
