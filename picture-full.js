class ImageFull extends HTMLElement {

  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        <ha-card>
          <div class="card-content"></div>
        </ha-card>
      `;
      this.content = this.querySelector('div');
    }

    this.content.innerHTML = `
      <img src="http://homeassistant.local:8123/local/bau-clash-royale-700x367.jpg">
    `;
  }

  setConfig(config) {
    if (!config.image) {
      throw new Error('You need to define an image');
    }
    this.config = config;
  }

  getCardSize() {
    return 3;
  }
}

customElements.define('image-full', ImageFull);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'image-full',
  name: 'Image Full',
  preview: false,
  description: 'A simple card to display a full image.'
});
