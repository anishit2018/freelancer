(function($){"use strict";$('.input-group-btn').unbind("click");$('.input-group-btn').click(function(e){e.preventDefault();var input_group=$(this).closest('.input-group');var fieldName=$(this).attr('data-field');var type=$(this).attr('data-type');var input=$("input[name='"+fieldName+"']",input_group);var currentVal=parseInt(input.val());if(!isNaN(currentVal)){if(type=='minus'){if(currentVal>input.attr('min')){input.val(currentVal-1).change();}if(parseInt(input.val())==input.attr('min')){$(this,input_group).attr('disabled',true);}}else if(type=='plus'){if(currentVal<input.attr('max')){input.val(currentVal+1).change();}if(parseInt(input.val())==input.attr('max')){$(this,input_group).attr('disabled',true);}}}else{input.val(0);}});$('.tb-input.count').focusin(function(){$(this).data('oldValue',$(this).val());});$('.tb-input.count').change(function(){var minValue=parseInt($(this).attr('min'));var maxValue=parseInt($(this).attr('max'));var valueCurrent=parseInt($(this).val());var name=$(this).attr('name');if(valueCurrent>=minValue){$(".input-group-btn[data-type='minus'][data-field='"+name+"']").removeAttr('disabled');}else{alert('Sorry, the minimum value was reached');$(this).val($(this).data('oldValue'));}if(valueCurrent<=maxValue){$(".input-group-btn[data-type='plus'][data-field='"+name+"']").removeAttr('disabled');}else{alert('Sorry, the maximum value was reached');$(this).val($(this).data('oldValue'));}});$(".tb-input.count").keydown(function(e){if($.inArray(e.keyCode,[46,8,9,27,13,190])!==-1||(e.keyCode==65&&e.ctrlKey===true)||(e.keyCode>=35&&e.keyCode<=39)){return;}if((e.shiftKey||(e.keyCode<48||e.keyCode>57))&&(e.keyCode<96||e.keyCode>105)){e.preventDefault();}});})(jQuery);