$(function() {
  if ($('#live_updates').length) {
    var contactSource = new EventSource('/contacts/live_updates');
    contactSource.addEventListener('contacts.create', function(event) {
      var contact = $.parseJSON(event.data);
      $("body").append("New Contact: " + contact.id + ": " + contact.name + "<br>");
    });
  }

  // Connect to node.js server
  if ($('#live_updates_from_node').length) {
    var eventSource = new EventSource('http://localhost:8000/update-stream');
    eventSource.addEventListener('contacts.create', function(event) {
      var contact = $.parseJSON(event.data);
      $("body").append("New Contact: " + contact.id + ": " + contact.name + "<br>");
    });
  }
});