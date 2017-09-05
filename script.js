function showSnackBar(message){
    var snackbarContainer = document.querySelector('#demo-snackbar');
    var data = {
        message: message,
        timeout: 5000
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}