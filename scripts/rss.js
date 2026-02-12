async function cargarRSS() {
        const rssUrl = "https://rss.app/feeds/xw0qz70XVonBMSGf.xml";
        const api = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

        const container = document.getElementById("rss-container");

        try {
          const response = await fetch(api);
          const data = await response.json();

          container.innerHTML = "";

          data.items.slice(0, 5).forEach((item) => {
            const noticia = document.createElement("div");
            noticia.classList.add("rss-item");

            noticia.innerHTML = `
        <a href="${item.link}" target="_blank">${item.title}</a>
        <span>${new Date(item.pubDate).toLocaleDateString()}</span>
      `;

            container.appendChild(noticia);
          });
        } catch (error) {
          container.innerHTML = "<p>Error cargando noticias.</p>";
          console.error(error);
        }
      }

      cargarRSS();