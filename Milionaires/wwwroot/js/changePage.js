class ChangePage {
    Change() {
            window.addEventListener('beforeunload', function (e) {
            var currentPage = window.location.pathname.toLowerCase();

            if (currentPage === '/') {
                var result = confirm("Changes you made may not be saved. Are you sure you want to leave?");
            if (!result) {
                e.preventDefault();
            e.returnValue = '';
                }
            }
        });
    }
}
const changePage = new ChangePage();
changePage.Change();