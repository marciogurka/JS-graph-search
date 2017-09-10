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
            var lowest;
            if(edges[0].target != node){
                lowest = edges[0];
            } else {
                lowest = {
                    data: {
                        flightCost: 10000000000
                    }
                };
            }

            for(var edge of edges){
                if (!edge.target.data.visited && (edge.data.flightCost < lowest.data.flightCost)) {
                    edge.target.data.cost = edge.data.cost;
                    heuristicsCost = heuristicsCost + edge.data.flightCost;
                    lowest = edge;
                }
            }
            queue.push(lowest.target);
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