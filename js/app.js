// Search on the datatable on the current page
function dt_search(input, append=false) {
  if (append) {
    input = $('#main_table_filter input')[0].value + input
  }
  $('#main_table_filter input')[0].value = input;
  $('#main_table').dataTable().fnFilter(input);
   return false;
}

