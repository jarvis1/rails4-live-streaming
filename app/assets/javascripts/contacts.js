$(function() {
  if ($('#live_updates').length) {
    var contactSource = new EventSource('/contacts/live_updates');
    contactSource.addEventListener('contacts.create', function(event) {
      var contact = $.parseJSON(event.data);
      $("body").append("New Contact: " + contact.id + ": " + contact.name + "<br>");
    });
  }
});