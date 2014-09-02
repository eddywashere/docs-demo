$(function() {
    // TOC Stuff
    $("#markdown-toc").appendTo(".sidebar #active-menu");

    // Sidenav affixing
        setTimeout(function () {
          var $sideBar = $('.bs-docs-sidebar')

          $sideBar.affix({
            offset: {
              top: function () {
                var offsetTop      = $sideBar.offset().top
                var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
                var navOuterHeight = $('.navbar').height()

                return (this.top = offsetTop - navOuterHeight - sideBarMargin)
              },
              bottom: function () {
                return (this.bottom = $('.bs-docs-footer').outerHeight(true))
              }
            }
          })
        }, 100)
});
