$(function () {
   $('svg[data-src]').each(function(index, svg) {
       let src = $(svg).data('src');

       $.ajax({
           url: src,
           dataType: 'xml',
           success: function (svgDocument) {
               let $doc = $(svgDocument.documentElement);
               $doc.attr({
                   width: $(svg).attr('width'),
                   height: $(svg).attr('height')
               })
               $(svg).after($doc).remove();
           }
       })
   })
});