
(function($){
    var Renderer = function(canvas){
        var canvas = $(canvas).get(0);
        var ctx = canvas.getContext("2d");
        var gfx = arbor.Graphics(canvas);
        var particleSystem;

        var that = {
            init:function(system){
                //
                // the particle system will call the init function once, right before the
                // first frame is to be drawn. it's a good place to set up the canvas and
                // to pass the canvas size to the particle system
                //
                // save a reference to the particle system for use in the .redraw() loop
                particleSystem = system

                // inform the system of the screen dimensions so it can map coords for us.
                // if the canvas is ever resized, screenSize should be called again with
                // the new dimensions
                particleSystem.screenSize(canvas.width, canvas.height)
                particleSystem.screenPadding(80) // leave an extra 80px of whitespace per side

                // set up some event handlers to allow for node-dragging
                that.initMouseHandling()
            },

            redraw:function(){
                //
                // redraw will be called repeatedly during the run whenever the node positions
                // change. the new positions for the nodes can be accessed by looking at the
                // .p attribute of a given node. however the p.x & p.y values are in the coordinates
                // of the particle system rather than the screen. you can either map them to
                // the screen yourself, or use the convenience iterators .eachNode (and .eachEdge)
                // which allow you to step through the actual node objects but also pass an
                // x,y point in the screen's coordinate system
                //
                ctx.fillStyle = "white"
                ctx.fillRect(0,0, canvas.width, canvas.height)

                particleSystem.eachEdge(function(edge, pt1, pt2){
                    // edge: {source:Node, target:Node, length:#, data:{}}
                    // pt1:  {x:#, y:#}  source position in screen coords
                    // pt2:  {x:#, y:#}  target position in screen coords

                    // draw a line from pt1 to pt2
                    ctx.strokeStyle = "rgba(0,0,0, .333)"
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(pt1.x, pt1.y)
                    ctx.lineTo(pt2.x, pt2.y)
                    ctx.stroke()
                })

                particleSystem.eachNode(function(node, pt){
                    // node: {mass:#, p:{x,y}, name:"", data:{}}
                    // pt:   {x:#, y:#}  node position in screen coords

                    var w = ctx.measureText(node.name||"").width + 10;

                    var label = node.name;
                    if (!(label||"").match(/^[ \t]*$/)){
                        pt.x = Math.floor(pt.x)
                        pt.y = Math.floor(pt.y)
                    }else{
                        label = null
                    }

                    // clear any edges below the text label
                    // ctx.fillStyle = 'rgba(255,255,255,.6)'
                    // ctx.fillRect(pt.x-w/2, pt.y-7, w,14)


                    ctx.clearRect(pt.x-w/2, pt.y-7, w,14);



                    // draw the text
                    if (label){
                        ctx.font = "bold 11px Arial"
                        ctx.textAlign = "center"

                        // if (node.data.region) ctx.fillStyle = palette[node.data.region]
                        // else ctx.fillStyle = "#888888"
                        ctx.fillStyle = "#111111";

                        // ctx.fillText(label||"", pt.x, pt.y+4)
                        ctx.fillText(label||"", pt.x, pt.y+4)
                    }


                    // draw a rectangle centered at pt
/*
                    var h = 15;
                    ctx.fillStyle = (node.data.alone) ? "orange" : "black";
                    console.log(w, h)
                    ctx.fillRect(pt.x-w/2, pt.y-w/2, w,h)
                    gfx.rect(pt.x-w, pt.y-w, w, h, {fill:node.data.color, alpha:node.data.alpha})
                    gfx.text(node.name, pt.x, h, {color:"white", align:"center", font:"Arial", size:10})*/
                })
            },

            initMouseHandling:function(){
                // no-nonsense drag and drop (thanks springy.js)
                var dragged = null;

                // set up a handler object that will initially listen for mousedowns then
                // for moves and mouseups while dragging
                var handler = {
                    clicked:function(e){
                        var pos = $(canvas).offset();
                        _mouseP = arbor.Point(e.pageX-pos.left, e.pageY-pos.top)
                        dragged = particleSystem.nearest(_mouseP);

                        if (dragged && dragged.node !== null){
                            // while we're dragging, don't let physics move the node
                            dragged.node.fixed = true
                        }

                        $(canvas).bind('mousemove', handler.dragged)
                        $(window).bind('mouseup', handler.dropped)

                        return false
                    },
                    dragged:function(e){
                        var pos = $(canvas).offset();
                        var s = arbor.Point(e.pageX-pos.left, e.pageY-pos.top)

                        if (dragged && dragged.node !== null){
                            var p = particleSystem.fromScreen(s)
                            dragged.node.p = p
                        }

                        return false
                    },

                    dropped:function(e){
                        if (dragged===null || dragged.node===undefined) return
                        if (dragged.node !== null) dragged.node.fixed = false
                        dragged.node.tempMass = 1000
                        dragged = null
                        $(canvas).unbind('mousemove', handler.dragged)
                        $(window).unbind('mouseup', handler.dropped)
                        _mouseP = null
                        return false
                    }
                }

                // start listening
                $(canvas).mousedown(handler.clicked);

            },

        }
        return that
    }

    $(document).ready(function(){

        var sys = arbor.ParticleSystem(1300, 200, 0.5) // create the system with sensible repulsion/stiffness/friction
        sys.parameters({gravity:false}) // use center-gravity to make the graph settle nicely (ymmv)
        sys.renderer = Renderer("#viewport") // our newly created renderer will have its .init() method called shortly by sys...

        // add some nodes to the graph and watch it go...
        n1 = sys.addNode("Aracaju", {shape:"rect", alpha:1, state:"se", visited: false});
        n2 = sys.addNode("Belém", {shape:"rect", alpha:1, state:"pa", visited: false});
        n3 = sys.addNode("Belo Horizonte", {shape:"rect", alpha:1, state:"mg", visited: false});
        n4 = sys.addNode("Boa Vista", {shape:"rect", alpha:1, state:"rr", visited: false});
        n5 = sys.addNode("Brasília", {shape:"rect", alpha:1, state:"df", visited: false});
        n6 = sys.addNode("Campo Grande", {shape:"rect", alpha:1, state:"ms", visited: false});
        n7 = sys.addNode("Cuiabá", {shape:"rect", alpha:1, state:"mt", visited: false});
        n8 = sys.addNode("Curitiba", {shape:"rect", alpha:1, state:"pr", visited: false});
        n9 = sys.addNode("Florianópolis", {shape:"rect", alpha:1, state:"sc", visited: false});
        n10 = sys.addNode("Fortaleza", {shape:"rect", alpha:1, state:"ce", visited: false});
        n11 = sys.addNode("Goiânia", {shape:"rect", alpha:1, state:"go", visited: false});
        n12 = sys.addNode("João Pessoa", {shape:"rect", alpha:1, state:"pb", visited: false});
        n13 = sys.addNode("Macapá", {shape:"rect", alpha:1, state:"ap", visited: false});
        n14 = sys.addNode("Maceió", {shape:"rect", alpha:1, state:"al", visited: false});
        n15 = sys.addNode("Manaus", {shape:"rect", alpha:1, state:"am", visited: false});
        n16 = sys.addNode("Natal", {shape:"rect", alpha:1, state:"rn", visited: false});
        n17 = sys.addNode("Palmas", {shape:"rect", alpha:1, state:"to", visited: false});
        n18 = sys.addNode("Porto Alegre", {shape:"rect", alpha:1, state:"rs", visited: false});
        n19 = sys.addNode("Porto Velho", {shape:"rect", alpha:1, state:"ro", visited: false});
        n20 = sys.addNode("Recife", {shape:"rect", alpha:1, state:"pe", visited: false});
        n21 = sys.addNode("Rio Branco", {shape:"rect", alpha:1, state:"ac", visited: false});
        n22 = sys.addNode("Rio de Janeiro", {shape:"rect", alpha:1, state:"rj", visited: false});
        n23 = sys.addNode("Salvador", {shape:"rect", alpha:1, state:"ba", visited: false});
        n24 = sys.addNode("São Luís", {shape:"rect", alpha:1, state:"ma", visited: false});
        n25 = sys.addNode("São Paulo", {shape:"rect", alpha:1, state:"sp", visited: false});
        n26 = sys.addNode("Teresina", {shape:"rect", alpha:1, state:"pi", visited: false});
        n27 = sys.addNode("Vitória", {shape:"rect", alpha:1, state:"es", visited: false});

        createHeuristics();

        //Addind edges between nodes
        //N1
        sys.addEdge(n1,n14, {cost: 294, flightCost: 201});
        sys.addEdge(n1,n23, {cost: 356, flightCost: 277});
        sys.addEdge(n2,n4, {cost: 6083, flightCost: 1432});
        sys.addEdge(n2,n7, {cost: 2942, flightCost: 1778});
        sys.addEdge(n2,n15, {cost: 5298, flightCost: 1292});
        sys.addEdge(n2,n17, {cost: 1283, flightCost: 973});
        sys.addEdge(n2,n24, {cost: 806, flightCost: 974});
        sys.addEdge(n3,n6, {cost: 1453, flightCost: 1118});
        sys.addEdge(n3,n11, {cost: 906, flightCost: 666});
        sys.addEdge(n3,n22, {cost: 434, flightCost: 339});
        sys.addEdge(n3,n23, {cost: 1372, flightCost: 964});
        sys.addEdge(n3,n25, {cost: 586, flightCost: 489});
        sys.addEdge(n3,n27, {cost: 524, flightCost: 378});
        sys.addEdge(n4,n2, {cost: 6083, flightCost: 1432});
        sys.addEdge(n4,n15, {cost: 785, flightCost: 661});
        sys.addEdge(n5,n11, {cost: 209, flightCost: 173});
        sys.addEdge(n6,n3, {cost: 1453, flightCost: 1118});
        sys.addEdge(n6,n7, {cost: 694, flightCost: 559});
        sys.addEdge(n6,n8, {cost: 991, flightCost: 780});
        sys.addEdge(n6,n11, {cost: 935, flightCost: 705});
        sys.addEdge(n6,n25, {cost: 1014, flightCost: 894});
        sys.addEdge(n7,n2, {cost: 2942, flightCost: 1778});
        sys.addEdge(n7,n6, {cost: 694, flightCost: 559});
        sys.addEdge(n7,n11, {cost: 1453, flightCost: 740});
        sys.addEdge(n7,n15, {cost: 2357, flightCost: 1453});
        sys.addEdge(n7,n17, {cost: 1784, flightCost: 1029});
        sys.addEdge(n7,n19, {cost: 1456, flightCost: 1137});
        sys.addEdge(n8,n6, {cost: 991, flightCost: 780});
        sys.addEdge(n8,n9, {cost: 300, flightCost: 251});
        sys.addEdge(n8,n25, {cost: 408, flightCost: 338});
        sys.addEdge(n9,n8, {cost: 300, flightCost: 251});
        sys.addEdge(n9,n18, {cost: 476, flightCost: 378});
        sys.addEdge(n10,n12, {cost: 688, flightCost: 555});
        sys.addEdge(n10,n16, {cost: 537, flightCost: 434});
        sys.addEdge(n10,n20, {cost: 800, flightCost: 629});
        sys.addEdge(n10,n26, {cost: 634, flightCost: 495});
        sys.addEdge(n11,n3, {cost: 906, flightCost: 666});
        sys.addEdge(n11,n5, {cost: 209, flightCost: 173});
        sys.addEdge(n11,n6, {cost: 935, flightCost: 705});
        sys.addEdge(n11,n7, {cost: 1453, flightCost: 740});
        sys.addEdge(n11,n17, {cost: 874, flightCost: 724});
        sys.addEdge(n11,n23, {cost: 1643, flightCost: 1225});
        sys.addEdge(n12,n10, {cost: 688, flightCost: 555});
        sys.addEdge(n12,n16, {cost: 185, flightCost: 151});
        sys.addEdge(n12,n20, {cost: 120, flightCost: 104});
        sys.addEdge(n14,n1, {cost: 294, flightCost: 201});
        sys.addEdge(n14,n20, {cost: 285, flightCost: 202});
        sys.addEdge(n14,n23, {cost: 632, flightCost: 475});
        sys.addEdge(n15,n2, {cost: 5298, flightCost: 1292});
        sys.addEdge(n15,n4, {cost: 6083, flightCost: 661});
        sys.addEdge(n15,n7, {cost: 2357, flightCost: 1453});
        sys.addEdge(n15,n19, {cost: 901, flightCost: 761});
        sys.addEdge(n15,n21, {cost: 1445, flightCost: 1149});
        sys.addEdge(n16,n10, {cost: 537, flightCost: 434});
        sys.addEdge(n16,n12, {cost: 185, flightCost: 151});
        sys.addEdge(n17,n2, {cost: 1283, flightCost: 973});
        sys.addEdge(n17,n7, {cost: 1784, flightCost: 1029});
        sys.addEdge(n17,n11, {cost: 874, flightCost: 724});
        sys.addEdge(n17,n23, {cost: 1454, flightCost: 1114});
        sys.addEdge(n17,n24, {cost: 1386, flightCost: 964});
        sys.addEdge(n17,n26, {cost: 1401, flightCost: 835});
        sys.addEdge(n18,n9, {cost: 476, flightCost: 378});
        sys.addEdge(n19,n7, {cost: 1456, flightCost: 1137});
        sys.addEdge(n19,n15, {cost: 901, flightCost: 761});
        sys.addEdge(n19,n21, {cost: 544, flightCost: 449});
        sys.addEdge(n20,n10, {cost: 800, flightCost: 629});
        sys.addEdge(n20,n12, {cost: 120, flightCost: 104});
        sys.addEdge(n20,n14, {cost: 285, flightCost: 202});
        sys.addEdge(n20,n23, {cost: 839, flightCost: 675});
        sys.addEdge(n20,n26, {cost: 1137, flightCost: 934});
        sys.addEdge(n21,n15, {cost: 1445, flightCost: 1149});
        sys.addEdge(n21,n19, {cost: 544, flightCost: 449});
        sys.addEdge(n22,n3, {cost: 434, flightCost: 339});
        sys.addEdge(n22,n25, {cost: 429, flightCost: 357});
        sys.addEdge(n22,n27, {cost: 521, flightCost: 412});
        sys.addEdge(n23,n1, {cost: 356, flightCost: 277});
        sys.addEdge(n23,n3, {cost: 1372, flightCost: 964});
        sys.addEdge(n23,n11, {cost: 1643, flightCost: 1225});
        sys.addEdge(n23,n14, {cost: 632, flightCost: 475});
        sys.addEdge(n23,n17, {cost: 1454, flightCost: 1114});
        sys.addEdge(n23,n20, {cost: 839, flightCost: 675});
        sys.addEdge(n23,n26, {cost: 1163, flightCost: 994});
        sys.addEdge(n23,n27, {cost: 1202, flightCost: 839});
        sys.addEdge(n24,n2, {cost: 806, flightCost: 974});
        sys.addEdge(n24,n17, {cost: 1386, flightCost: 964});
        sys.addEdge(n24,n26, {cost: 446, flightCost: 329});
        sys.addEdge(n25,n3, {cost: 586, flightCost: 489});
        sys.addEdge(n25,n6, {cost: 1014, flightCost: 894});
        sys.addEdge(n25,n8, {cost: 408, flightCost: 338});
        sys.addEdge(n25,n22, {cost: 429, flightCost: 357});
        sys.addEdge(n26,n10, {cost: 634, flightCost: 495});
        sys.addEdge(n26,n17, {cost: 1401, flightCost: 835});
        sys.addEdge(n26,n20, {cost: 1137, flightCost: 934});
        sys.addEdge(n26,n23, {cost: 1163, flightCost: 994});
        sys.addEdge(n26,n24, {cost: 446, flightCost: 329});
        sys.addEdge(n27,n3, {cost: 524, flightCost: 378});
        sys.addEdge(n27,n22, {cost: 521, flightCost: 412});
        sys.addEdge(n27,n23, {cost: 1202, flightCost: 839});




        // or, equivalently:
        //
        // sys.graft({
        //   nodes:{
        //     f:{alone:true, mass:.25}
        //   },
        //   edges:{
        //     a:{ b:{},
        //         c:{},
        //         d:{},
        //         e:{}
        //     }
        //   }
        // })

        $("#option-bfs").on("click", function () {
            var selectedStates = getSelectedStates();
            if(selectedStates.length == 2) {
                selectedStates.sort(function (state1, state2){
                    return state1.order > state2.order;
                });
                var nodes = [];
                sys.eachNode(function(node){
                    if(node.data.state.toLowerCase().localeCompare(selectedStates[0].id.toLowerCase()) == 0){
                        nodes[0] = node;
                    } else if(node.data.state.toLowerCase().localeCompare(selectedStates[1].id.toLowerCase()) == 0){
                        nodes[1] = node;
                    }
                });

                var result = BFS(sys, nodes);

                if(result.path.length){
                    result.searchMethod = 'Breadth-First Search Method';
                    buildModalInfo([result]);
                    result.path.shift();
                    result.path.pop();
                    result.path.forEach(function (node) {
                        var area = map.getObjectById(node.data.state.toUpperCase());
                        area.color = '#000000';
                        area.colorReal = area.color;
                        area.validate();
                        setTimeout(function(){
                            area.color = '#67B7DC';
                            area.colorReal = area.color;
                            area.validate();
                        }, 5000);

                    })
                }

            } else {
                showSnackBar("Nós não selecionados");
            }

        });

        $("#option-dfs").on("click", function () {
            var selectedStates = getSelectedStates();
            if(selectedStates.length == 2) {
                selectedStates.sort(function (state1, state2){
                    return state1.order > state2.order;
                });
                var nodes = [];
                sys.eachNode(function(node){
                    if(node.data.state.toLowerCase().localeCompare(selectedStates[0].id.toLowerCase()) == 0){
                        nodes[0] = node;
                    } else if(node.data.state.toLowerCase().localeCompare(selectedStates[1].id.toLowerCase()) == 0){
                        nodes[1] = node;
                    }
                });

                var result = DFS(sys, nodes);

                if(result.path.length){
                    result.searchMethod = 'Depth First Search Method';
                    buildModalInfo([result]);
                    result.path.shift();
                    result.path.pop();
                    result.path.forEach(function (node) {
                        var area = map.getObjectById(node.data.state.toUpperCase());
                        area.color = '#000000';
                        area.colorReal = area.color;
                        area.validate();
                        setTimeout(function(){
                            area.color = '#67B7DC';
                            area.colorReal = area.color;
                            area.validate();
                        }, 5000);

                    })
                }

            } else {
                showSnackBar("Please select 2 nodes to search first!");
            }
        });

        $("#option-gbfs").on("click", function () {
            var selectedStates = getSelectedStates();
            if(selectedStates.length == 2) {

                selectedStates.sort(function (state1, state2){
                    return state1.order > state2.order;
                });
                var nodes = [];
                sys.eachNode(function(node){
                    if(node.data.state.toLowerCase().localeCompare(selectedStates[0].id.toLowerCase()) == 0){
                        nodes[0] = node;
                    } else if(node.data.state.toLowerCase().localeCompare(selectedStates[1].id.toLowerCase()) == 0){
                        nodes[1] = node;
                    }
                });

                var result = GBFS(sys, nodes);

                if(result.path.length){
                    result.searchMethod = 'Greedy Best-First Search Method';
                    buildModalInfo([result]);
                    result.path.shift();
                    result.path.pop();
                    result.path.forEach(function (node) {
                        var area = map.getObjectById(node.data.state.toUpperCase());
                        area.color = '#000000';
                        area.colorReal = area.color;
                        area.validate();
                        setTimeout(function(){
                            area.color = '#67B7DC';
                            area.colorReal = area.color;
                            area.validate();
                        }, 5000);

                    })
                }

            } else {
                showSnackBar("Please select 2 nodes to search first!");
            }
        });

        $("#option-astar").on("click", function () {
            var selectedStates = getSelectedStates();
            if(selectedStates.length == 2) {
                selectedStates.sort(function (state1, state2){
                    return state1.order > state2.order;
                });
                var nodes = [];
                sys.eachNode(function(node){
                    if(node.data.state.toLowerCase().localeCompare(selectedStates[0].id.toLowerCase()) == 0){
                        nodes[0] = node;
                    } else if(node.data.state.toLowerCase().localeCompare(selectedStates[1].id.toLowerCase()) == 0){
                        nodes[1] = node;
                    }
                });

                var result = AStar(sys, nodes);

                if(result.path.length){
                    result.searchMethod = 'A* Method';
                    buildModalInfo([result]);
                    result.path.shift();
                    result.path.pop();
                    result.path.forEach(function (node) {
                        var area = map.getObjectById(node.data.state.toUpperCase());
                        area.color = '#000000';
                        area.colorReal = area.color;
                        area.validate();
                        setTimeout(function(){
                            area.color = '#67B7DC';
                            area.colorReal = area.color;
                            area.validate();
                        }, 5000);

                    })
                }

            } else {
                showSnackBar("Please select 2 nodes to search first!");
            }
        });

        $("#compare-methods").on("click", function () {
            var selectedStates = getSelectedStates();
            if(selectedStates.length == 2) {
                selectedStates.sort(function (state1, state2){
                    return state1.order > state2.order;
                });
                var nodes = [];
                sys.eachNode(function(node){
                    if(node.data.state.toLowerCase().localeCompare(selectedStates[0].id.toLowerCase()) == 0){
                        nodes[0] = node;
                    } else if(node.data.state.toLowerCase().localeCompare(selectedStates[1].id.toLowerCase()) == 0){
                        nodes[1] = node;
                    }
                });

                var results = [];

                var resultAStar = AStar(sys, nodes);
                var resultGBFS = GBFS(sys, nodes);
                var resultBFS = BFS(sys, nodes);
                var resultDFS = DFS(sys, nodes);

                if(resultBFS.path.length){
                    resultBFS.searchMethod = 'Breadth-First Search Method';
                    results.push(resultBFS);
                }
                if(resultDFS.path.length){
                    resultDFS.searchMethod = 'Depth First Search Method';
                    results.push(resultDFS);
                }
                if(resultGBFS.path.length){
                    resultGBFS.searchMethod = 'Greedy Best-First Search Method';
                    results.push(resultGBFS);
                }
                if(resultAStar.path.length){
                    resultAStar.searchMethod = 'A* Method';
                    results.push(resultAStar);
                }


                buildModalCompareInfo(results);

            } else {
                showSnackBar("Please select 2 nodes to search first!");
            }
        });

});



})(this.jQuery);
