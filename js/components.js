/**
 * Created by cabbage on 2017/4/19.
 */
var Header=React.createClass({
    getInitialState:function () {
      return {
          tit:"曾燚",
          interest:"音乐",
          msg:"人外有人，天外有天",
          canvasblock:""

      }
    },
    render:function () {
        return(<div className="inner">
            <table className="shortintroduction">
                <tbody>
                    <tr>
                        <td>姓名：</td>
                        <td>{this.state.tit}</td>
                    </tr>
                    <tr>
                        <td>爱好：</td>
                        <td>{this.state.interest}</td>
                    </tr>
                    <tr>
                        <td>信条：</td>
                        <td>{this.state.msg}</td>
                    </tr>

                </tbody>
            </table>
            <img src="img/photo.jpg"className="photo_top" alt=""/>
        </div>)
    },
    componentDidMount:function () {
        console.log("componentDidMount")
        var photodirection
        if(!photodirection){photodirection="r";}
        $(".photo_top").click(function () {
           if(photodirection=="r"){console.log(photodirection)
                $(".photo_top").css({transform:"translate(-"+$(window).width()*0.3+"px,0px)"});
           $(".shortintroduction").css({opacity:"1"})
                photodirection="l";
            }else{console.log(2)
                $(".photo_top").css({transform:"translate(0,0)"});
               $(".shortintroduction").css({opacity:"0"})

               photodirection="r";}
            }
        )
    }
})
ReactDOM.render(<Header/>,document.getElementById("top"))

var Main=React.createClass({
    getInitialState:function () {
        return{
            kotoba:"我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。我感觉我需要一个UI。",
            name:"曾燚",
            gender:"男",
            age:"24",
            hometown:"河南",
            skills:"HTML5 CSS3 JQUERY VUE HYBIRD PHOTOSHOP PREMIERE……"
        }
    },
    render:function () {
        return(
            <div className="inner">
                <div className="zhuangbshijian">
                    <div className="cases"></div>
                    <div className="chartblock"><canvas id="radarchart" width={550}height={550}></canvas></div>

                    <div className="slideblock">
                        <div className="kotoba">{this.state.kotoba}</div>
                        <div className="circlebkg">
                        </div>
                        <div className="surface">
                            <div className="shell"></div>
                            <div className="shellin"></div>
                        </div>

                        <div className="topbar">═</div>
                    </div>
                </div>
                <div className="detaildata">
                    <table>
                        <tbody>
                        <tr>
                            <td>姓名：</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td>性别：</td>
                            <td>{this.state.gender}</td>
                        </tr>
                        <tr>
                            <td>年龄：</td>
                            <td>{this.state.age}</td>
                        </tr>
                        <tr>
                            <td>故乡：</td>
                            <td>{this.state.hometown}</td>
                        </tr>
                        <tr>
                            <td>技术：</td>
                            <td>{this.state.skills}</td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td><input type="text"placeholder="您的称呼"/></td>
                                <td><input type="text"placeholder="您的单位"/></td>
                            </tr>
                            <tr>
                                <td><input type="text"placeholder="您的电话"/></td>
                                <td><input type="text"placeholder="您的邮箱"/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><input type="text"placeholder="您的留言"/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><button>给我留言</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    },
    componentDidMount:function () {
        var slidedirection
        var sb=$(".zhuangbshijian .slideblock")
        $(".zhuangbshijian .slideblock .topbar").click(function () {if(!slidedirection||slidedirection=="top"){slidedirection="bottom";sb.css({top:"100%",marginTop:"-30px"});}else{slidedirection="top";sb.css({top:"0%",marginTop:"0px"})}

        })


        for (var i=0;i<2;i++){
            $(".surface").append("<div class='rollx'></div>")
            $(".surface").append("<div class='rolly'></div>")
            $(".surface").append("<div class='rollxin'></div>")
            $(".surface").append("<div class='rollyin'></div>")
        };
        console.log($(".surface"))
        $("body").on("selfedit",function () {
            var rotatecount=0
            setInterval(function () {
                for(var i=0;i<3;i++){
                    $(".rollx").eq(i).css({transform:"rotatex("+rotatecount*(i+1)+"deg) rotatey("+rotatecount*(i+1)+"deg)"})
                    $(".rollxin").eq(i).css({transform:"rotatex("+rotatecount*(i+1)+"deg) rotatey("+rotatecount*(i+1)+"deg)"})
                    $(".rolly").eq(i).css({transform:"rotatey("+rotatecount*(i+1)+"deg) rotatex("+rotatecount*(i+1)+"deg)"})
                    $(".rollyin").eq(i).css({transform:"rotatey("+rotatecount*(i+1)+"deg) rotatex("+rotatecount*(i+1)+"deg)"})


                }
                $(".surface").children().css({borderColor:"hsla("+rotatecount+",100%,30%,0.8)",boxShadow:"0 0 10px 0px "+"hsla("+rotatecount+",100%,50%,0.8) "})

                $(".rollxin").css({boxShadow:"0 0 10px 0px "+"hsla("+rotatecount+",100%,50%,0.8) inset"})
                $(".rollyin").css({boxShadow:"0 0 10px 0px "+"hsla("+rotatecount+",100%,50%,0.8) inset"})

                $(".surface").css({transform:"rotatex("+rotatecount+"deg) rotatey("+rotatecount+"deg)"})
                rotatecount++
                if(rotatecount==360){
                    rotatecount=0
                }
            },50)

            var logolist=["img/html.jpg","img/css3_logo.jpg","img/jquery_logo.jpg","img/photoshop_logo.jpg","img/vue_logo.jpg"]
            for(var radius=0;radius<5;radius++){
                $(".circlebkg").append("<div><img src='' alt=''></div>")
                $(".circlebkg div").eq(radius).css({transform:"rotate("+(-90+30+30*radius)+"deg)"})
                $(".circlebkg img").eq(radius).attr("src",logolist[radius]).css({transform:"rotate("+(-90+30+30*radius)*-1+"deg)"})
            }

            var cases=[{img:"img/cases.png",name:"title"},{img:"img/cases.png",name:"title"},{img:"img/cases.png",name:"title"},{img:"img/cases.png",name:"title"}]
            for (var caseprev=0;caseprev<4;caseprev++ ){
                $(".zhuangbshijian .cases").append("<a><img/><p class='casename'></p></a>")
                $(".zhuangbshijian .cases a img").eq(caseprev).attr("src",cases[caseprev].img)
                $(".zhuangbshijian .cases a .casename").eq(caseprev).text(cases[caseprev].name)
            }
        })
        $('body').trigger("selfedit");


        //radar chart
        var radarChartData = {
            labels : ["HTML","CSS","JQUERY","VUE","HYBIRD","PHOTOSHOP","PREMIERE"],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [0,0,0,0,0,0,0]
                },
                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : [90,100,85,75,75,70,65]
                }
            ]

        }

        var myRadar = new Chart(document.getElementById("radarchart").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 15});

    }
})
ReactDOM.render(<Main/>,document.getElementById("middle"))

var Bottom=React.createClass({
    getInitialState:function () {
        return{
            sites:[{title:"",adress:""},{title:"",adress:""},{title:"",adress:""},,{title:"",adress:""},{title:"",adress:""},{title:"",adress:""},{title:"",adress:""},{title:"",adress:""}]
        }
    },
    render:function () {
        return(
            <ul></ul>
        )
    },
    componentDidMount:function () {
        var that=this
        $("body").on("selfedit2",function () {
            for (var i=0;i<=that.state.sites.length;i++){
                $("#bottom").append("<li><a href='http://github.com'>github</a></li>")
/*
                $("#bottom a").eq(i).attr("href",that.state.sites[i].adress)
                $("#bottom a").html(that.state.sites[i].title)
*/

            }
        })
        $('body').trigger("selfedit2");

    }
})

ReactDOM.render(<Bottom/>,document.getElementById("bottom"))