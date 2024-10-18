class AppletCard {
    constructor(title, description, link, image) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
    }

    createCard() {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card applet-card';
        cardDiv.innerHTML = `
            <img src="${this.image}" class="card-img-top" alt="${this.title}">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description}</p>
                <a href="${this.link}" class="btn btn-primary">Go to Applet</a>
            </div>
        `;
        return cardDiv;
    }
}

class AppletRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.appletData = [];
    }

    fetchAppletData(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.appletData = data;
                this.renderApplets(this.appletData);
            })
            .catch(error => console.error('Error loading applet data:', error));
    }

    renderApplets(data) {
        this.container.innerHTML = '';
        data.forEach(applet => {
            const appletCard = new AppletCard(applet.title, applet.description, applet.link, applet.image);
            const cardElement = appletCard.createCard();
            this.container.appendChild(cardElement);
        });
    }
}

const appletRenderer = new AppletRenderer('applet-container');
appletRenderer.fetchAppletData('appgallery.json');
