AFRAME.registerComponent("fish",{
    fishs:(id,position)=>{
        var terrain_element=document.querySelector("#fish")
        var fish=document.createElement("a-entity")
        fish.setAttribute("scale",{x:0.1,y:0.1,z:0.1})
        fish.setAttribute("gltf-model","./fish/scene.gltf")
        fish.setAttribute("animation-mixer",{})
        fish.setAttribute("id",id)
        fish.setAttribute("position",position)
        terrain_element.appendChild(fish)
    },
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`fishid${i}`
            const posX=Math.random()*100+-50
            const posY=Math.random()*5+5
            const posZ=Math.random()*60+(-40)
            var position={x:posX,y:posY,z:posZ}
            this.fishs(id,position)
        }
    },
})