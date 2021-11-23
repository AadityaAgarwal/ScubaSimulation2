//the "" are given so that values are filled replacing them by looking at the output.

AFRAME.registerComponent("background",{
    schema:{speed:{type:"number",default:0}},
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key=="ArrowRight"){
                if(this.data.speed<""){
                    this.data.speed+=0.01
                }
            }
            if(e.key==="ArrowLeft"){
                if(this.data.speed>""){
                    this.data.speed-=0.1
                }
            }
        })
    },
    tick:function(){
        var mapRotation=this.el.getAttribute("rotation")
        mapRotation.y+=this.data.speed
        this.el.setAttribute("rotation",{mapRotation})
    }
}
)


AFRAME.registerComponent("scuba",{
    schema:{
        speed_of_rotation:{type:"number",default:0},
        speed_of_ascend:{type:"number",default:0},
    },
    init:function(){
        window.addEventListener("keydown",e=>{
            this.data.speed_of_rotation=this.el.getAttribute("rotation")
            this.data.speed_of_ascend=this.el.getAttribute("position")
            var scuba_rotation=this.data.speed_of_rotation
            var scuba_position=this.data.speed_of_ascend

            if(e.key==="ArrowRight"){
                if(scuba_rotation.x<""){
                    scuba_rotation.x+=0.5
                    this.el.setAttribute("rotation",scuba_rotation)
                }
            }
            if(e.key==="ArrowLeft"){
                if(scuba_rotation.x>""){
                    scuba_rotation.x-=0.5
                    this.el.setAttribute("rotation",scuba_rotation)
                }
            }
            if(e.key==="ArrowUp"){
                if(scuba_rotation.z<""){
                    scuba_rotation.z+=0.5
                    this.el.setAttribute("rotation",scuba_rotation)
                }
                if(scuba_position.y<""){
                    scuba_position.y+=0.01
                    this.el.setAttribute("position",{x:scuba_position.x,y:scuba_position.y,z:scuba_position.z})
                }
            }
            if(e.key==="ArrowDown"){
                if(scuba_rotation.z>-10){
                    scuba_rotation.z-=0.5
                    this.el.setAttribute("rotation",scuba_rotation)
                }
                if(scuba_position.y>-2){
                    scuba_position.y-=0.01
                    this.el.setAttribute("position",scuba_position)
                }
            }
        })
    },
})
