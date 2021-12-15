AFRAME.registerComponent("scuba", {
    schema: {
        speed_of_rotation: { type: "number", default: 0 },
        speed_of_ascend: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", e => {
            this.data.speed_of_rotation = this.el.getAttribute("rotation")
            this.data.speed_of_ascend = this.el.getAttribute("position")

            var scuba_rotation = this.data.speed_of_rotation
            var scuba_position = this.data.speed_of_ascend

            if (e.key === "ArrowRight") {
                if (scuba_rotation.y > -360) {
                    scuba_rotation.y -= 0.5;
                    this.el.setAttribute("rotation", scuba_rotation);
                }
                if (scuba_position.x <20) {
                    scuba_position.x += 0.05;
                    this.el.setAttribute("position", scuba_position);
                }
            }
            if (e.key === "ArrowLeft") {
                if (scuba_rotation.y < 360) {
                    scuba_rotation.y += 0.5;
                    this.el.setAttribute("rotation", scuba_rotation);
                }
                if (scuba_position.x> -20) {
                    scuba_position.x-= 0.05;
                    this.el.setAttribute("position", scuba_position);
                }
            }
            if (e.key === "ArrowUp") {
                if (scuba_position.z > 10) {
                    scuba_position.z -= 0.1;
                    this.el.setAttribute("position", scuba_position);
                }
            }
            if (e.key === "ArrowDown") {
                if (scuba_position.z < 20) {
                    scuba_position.z += 0.1;
                    this.el.setAttribute("position", scuba_position);
                }


            }
        })
    },
})