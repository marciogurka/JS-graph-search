function showSnackBar(message) {
    var snackbarContainer = document.querySelector('#demo-snackbar');
    var data = {
        message: message,
        timeout: 5000
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

function resetGraph(graph) {
    graph.eachNode(function (node) {
        node.data.visited = false;
    });
}

var map = AmCharts.makeChart("brazil-map", {
    "type": "map",
    "theme": "light",
    "dataProvider": {
        "map": "brazilHigh",
        "getAreasFromMap": true
    },
    "areasSettings": {
        "autoZoom": false,
        "selectedColor": "#CC0000",
        "selectable": true
    },
    "listeners": [{
        "event": "clickMapObject",
        "method": function (event) {
            var area = event.mapObject;
            var selectedStates = getSelectedStates();

            if(selectedStates.length < 2){
                if(selectedStates.length == 1)
                    area.order = 2;
                else
                    area.order = 1;
                area.showAsSelected = !area.showAsSelected;
                map.returnInitialColor( area );
            } else {
                selectedStates[0].showAsSelected = false;
                selectedStates[1].showAsSelected = false;
                delete selectedStates[0].order;
                delete selectedStates[1].order;
                map.returnInitialColor( selectedStates[0] );
                map.returnInitialColor( selectedStates[1] );
                area.showAsSelected = true;
                area.order = 1;
            }
        }
    }]
});

function getSelectedStates() {
    var selected = [];
    for(var i = 0; i < map.dataProvider.areas.length; i++) {
        if(map.dataProvider.areas[i].showAsSelected)
            selected.push(map.dataProvider.areas[i]);
    }
    return selected;
}