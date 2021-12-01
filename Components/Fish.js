AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
  
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;
        const position = { x: posX, y: posY, z: posZ };
        this.create_fish(id, position);
      }
    },
    create_fish: function (id, position) {
      const fishEntity = document.querySelector("#fishModels");
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("rotation", { x: 0, y: 180, z: 0 });
  
      fishEl.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
  
    
  
      
      fishEl.setAttribute("animation", {
        property: "position",
        to: "100 10 -20",
        loop: "true",
        dur: 20000
      });
  
      fishEl.setAttribute("animation-mixer", {});
  
      fishEntity.appendChild(fishEl);
    }
  })