function BFS(graph, nodes) {
    var path = [];
    var cost = 0;
    var queue = [];
    var hasSolution = false;

    queue.push(nodes[0]);

    // While the queue is not empty, get all the edges of the node and keep
    // checking if it's the node that we're searching
    while (queue.length > 0) {
        var node = queue.shift();
        node.data.visited = true;
        if(node.data.cost){
            cost = cost + node.data.cost;
            delete node.data.cost;
        }
        path.push(node);
        if(node._id === nodes[1]._id){
            hasSolution = true;
            queue = [];
        } else {
            var edges = graph.getEdgesFrom(node);
            for(var edge of edges){
                if (!edge.target.data.visited) {
                    edge.target.data.cost = edge.data.cost;
                    queue.push(edge.target);
                }
            }
        }
    }

    resetGraph(graph);

    if(!hasSolution)
        path = [];

    var result = {
        path: path,
        cost: cost
    };

    return result;
}


function DFS(graph, nodes) {
    var path = [];
    var cost = 0;
    var stack = [];
    var hasSolution = false;

    stack.push(nodes[0]);

    // While the queue is not empty, get all the edges of the node and keep
    // checking if it's the node that we're searching
    while (stack.length > 0) {
        var node = stack.pop();
        node.data.visited = true;
        if(node.data.cost){
            cost = cost + node.data.cost;
            delete node.data.cost;
        }
        path.push(node);
        if(node._id === nodes[1]._id){
            hasSolution = true;
            stack = [];
        } else {
            var edges = graph.getEdgesFrom(node);
            for(var edge of edges){
                if (!edge.target.data.visited) {
                    edge.target.data.cost = edge.data.cost;
                    stack.push(edge.target);
                }
            }
        }
    }

    resetGraph(graph);

    if(!hasSolution)
        path = [];

    var result = {
        path: path,
        cost: cost
    };

    return result;

}

function GBFS(graph, nodes) {
    var path = [];
    var cost = 0;
    var heuristicsCost = 0;
    var queue = [];
    var hasSolution = false;

    queue.push(nodes[0]);

    // While the queue is not empty, get all the edges of the node and keep
    // checking if it's the node that we're searching
    while (queue.length > 0) {
        var node = queue.pop();
        node.data.visited = true;
        if(node.data.cost){
            cost = cost + node.data.cost;
            delete node.data.cost;
        }
        if(node.data.flightCost){
            heuristicsCost = heuristicsCost + node.data.flightCost;
            delete node.data.flightCost;
        }
        path.push(node);
        var edges = graph.getEdgesFrom(node);
        edges.sort(function (edgeA, edgeB) {
            return edgeA.data.flightCost < edgeB.data.flightCost;
        });

        var hasFinal = edges.filter(function( edge ) {
            return edge.target._id == nodes[1]._id;
        });

        if(hasFinal.length){
            path.push(hasFinal[0].target);
            cost = cost + hasFinal[0].data.cost;
            heuristicsCost = heuristicsCost + hasFinal[0].data.flightCost;
            hasSolution = true;
            queue = [];
        } else {
            for(var edge of edges){
                if(!edge.target.data.visited){
                    edge.target.data.cost = edge.data.cost;
                    edge.target.data.flightCost = edge.data.flightCost;
                    queue.push(edge.target);
                }
            }
        }
    }

    resetGraph(graph);

    if(!hasSolution)
        path = [];

    var result = {
        path: path,
        cost: cost,
        heuristicsCost: heuristicsCost
    };

    return result;
}

function AStar(graph, nodes) {
    var path = [];
    var cost = 0;
    var queue = [];
    var hasSolution = false;

    queue.push(nodes[0]);

    // While the queue is not empty, get all the edges of the node and keep
    // checking if it's the node that we're searching
    while (queue.length > 0) {
        var node = queue.pop();
        node.data.visited = true;
        if(node.data.cost){
            cost = cost + node.data.cost;
            delete node.data.cost;
        }
        path.push(node);
        var edges = graph.getEdgesFrom(node);

        edges.sort(function (edgeA, edgeB) {
            return (edgeA.data.flightCost + edgeA.data.cost) < (edgeB.data.flightCost + edgeB.data.cost);
        });

        var hasFinal = edges.filter(function( edge ) {
            return edge.target._id == nodes[1]._id;
        });

        if(hasFinal.length){
            path.push(hasFinal[0].target);
            cost = cost + hasFinal[0].data.flightCost + hasFinal[0].data.cost;
            hasSolution = true;
            queue = [];
        } else {
            for(var edge of edges){
                if(!edge.target.data.visited){
                    var edge_total_cost = edge.data.flightCost + edge.data.cost;
                    edge.target.data.cost = edge_total_cost;
                    queue.push(edge.target);
                }
            }
        }
    }

    if(!hasSolution)
        path = [];

    resetGraph(graph);

    var result = {
        path: path,
        cost: cost
    };

    return result;
}