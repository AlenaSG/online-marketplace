$(document).ready(function() {
  $("#user-info").submit(function() {
    var nameInput = $("input#full-name").val();
    var itemInput = $("input#store-item").val();
    var addressInput = $("input#address").val();

    $(".name").text(nameInput);
    $(".item").text(itemInput);
    $(".address").text(addressInput);

     $("#receipt").show();

     event.preventDefault();
  });
});
