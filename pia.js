(function () {
  try {
    let displayTextUrl = "Piabet";
    let realUrl = "https://t2m.io/abtmb";
    let lastChecked = "5 dakika önce";

    // Utility function to add styles to the document head
    function injectStyles() {
      const style = document.createElement("style");
      style.textContent = `
          .cta-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 20px 0 20px;
            height: 100vh; /* Full screen height */
            background-color: #1a1f2e;
            color: #FFF;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            z-index: 9999;
            box-shadow: 0px 4px 6px rgba(0, 180, 255, 0.3);
            font-family: 'Arial', sans-serif;
            transition: background-color 0.3s, color 0.3s;
            text-decoration: none;
            box-sizing: border-box;
          }
  
          .cta-image {
            width: 100%;
            max-width: 240px;
            height: auto;
            max-height: 200px;
          }
  
          .cta-article-title {
            color: #00b4ff;
          }
  
          .cta-link-text {
            color: #00b4ff;
            font-size: 28px;
            font-weight: bold;
            margin: 20px 0;
            padding: 0 10px;
          }
  
          .cta-link-desc {
            font-size: 12px;
            margin: 5px 0 0;
            padding: 0 10px;
          }
  
          .cta-close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #00b4ff;
            color: #fff;
            border: none;
            font-size: 8px;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s;
          }
  
          .cta-close-button:hover {
            background-color: #0090cc;
          }
  
  
  .cta-big-button {
    display: inline-block;
    background-color: #00b4ff;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 20px 40px;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
    width: 50%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 4px 6px rgba(0, 180, 255, 0.3);
    transition: background-color 0.3s;
  }
  
  .cta-big-button:hover {
    background-color: #0090cc;
  }
        `;
      document.head.appendChild(style);
    }

    // Function to create and render the popup
    function createPopup(displayTextUrl, realUrl, lastChecked) {
      const ctaContainer = document.createElement("a");
      ctaContainer.href = realUrl;
      ctaContainer.target = "_blank";
      ctaContainer.rel = "noopener noreferrer";
      ctaContainer.classList.add("cta-popup");

      const ctaImage = document.createElement("img");
      ctaImage.src = "https://hoodiepepe.github.io/analytics/logo-pia.png";
      ctaImage.alt = "Piabet Logo";
      ctaImage.classList.add("cta-image");

      const ctaLinkText = document.createElement("p");
      ctaLinkText.textContent = `${displayTextUrl}`;
      ctaLinkText.classList.add("cta-link-text");

      const ctaLinkDesc = document.createElement("p");
      ctaLinkDesc.textContent = `Son kontrol ${lastChecked} yapıldı.`;
      ctaLinkDesc.classList.add("cta-link-desc");

      const closeButton = document.createElement("button");
      closeButton.textContent = "X";
      closeButton.classList.add("cta-close-button");

      // Create Articles Section
      const articlesContainer = document.createElement("div");
      articlesContainer.classList.add("cta-articles-container");

      const articles = [
        {
          title: "Piabet Giriş - Anında Erişim!",
          description:
            "Piabet'in güncel giriş adresine anında erişim sağlayın! En yüksek oranlar, canlı bahis seçenekleri ve kazandıran casino oyunları için hemen tıklayın.",
        },
        {
          title: "Neden Piabet Tercih Etmelisiniz?",
          description:
            "Lisanslı ve güvenilir platform, 7/24 canlı destek, anında ödeme ve %100 hoşgeldin bonusu. Piabet ile kazanmaya başlamak için hemen üye olun!",
        },
      ];

      articles.forEach((article) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("cta-article");

        const articleTitle = document.createElement("h3");
        articleTitle.textContent = article.title;
        articleTitle.classList.add("cta-article-title");

        const articleDescription = document.createElement("p");
        articleDescription.textContent = article.description;
        articleDescription.classList.add("cta-article-desc");

        articleElement.appendChild(articleTitle);
        articleElement.appendChild(articleDescription);
        articlesContainer.appendChild(articleElement);
      });

      // Create the big CTA button (visual only, whole container is clickable)
      const ctaButton = document.createElement("div");
      ctaButton.textContent = "Şimdi Giriş Yap!";
      ctaButton.classList.add("cta-big-button");

      ctaContainer.appendChild(closeButton);
      ctaContainer.appendChild(ctaImage);
      ctaContainer.appendChild(ctaLinkText);
      ctaContainer.appendChild(ctaLinkDesc);
      ctaContainer.appendChild(articlesContainer);
      ctaContainer.appendChild(ctaButton);

      document.body.appendChild(ctaContainer);
    }

    // Main execution logic
    (async function () {
      injectStyles();
      createPopup(displayTextUrl, realUrl, lastChecked);
    })();
  } catch (error) {
    console.error("Error fetching geolocation data or displaying CTA:", error);
  }
})();
