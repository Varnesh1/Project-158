AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      this.handleClickEvents();
    },
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["ironman", "marvel", "speed", "spiderman"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
    handleClickEvents : function(){
      const id = this.el.getAttribute("id");
      this.el.addEventListener('click',(e)=>{
        const placesContainer = document.querySelector('#places-container')
        const {state} = placesContainer.getAttribute('tour')
        if (state === 'places-list'){
          const itemId = this.el.getAttribute(id)
          const placesId = [
            'ironman',
            'marvel',
            'speed',
            'spiderman',
          ]
        if (placesId.includes(id)){
          placesContainer.setAttribute('tour', {state:'view', selectedCard:id})
        }
        }
      })
    },
  });