function BFS(graph, nodes) {
    var path = [];
    var cost = 0;
    var queue = [];
    var hasSolution = false;

    nodes[0].data.visited = true;
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
