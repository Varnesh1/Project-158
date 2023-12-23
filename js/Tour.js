AFRAME.registerComponent("tour", {
  schema:{
    state:{type:'string', default:'places-list'},
    selectedCard:{type:'string', default:'#card1'}
  },
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "ironman",
        title: "Iron Man",
        url: "./assets/thumbnails/ironman.jpg",
      },
      {
        id: "marvel",
        title: "Marvel",
        url: "./assets/thumbnails/marvel.jpg",
      },

      {
        id: "speed",
        title: "Speed",
        url: "./assets/thumbnails/speed.jpg",
      },
      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/thumbnails/spiderman.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });
    entityEl.setAttribute("cursor-listener", {});

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
});