function processInbox() {
  var threads = GmailApp.getInboxThreads(0, 25);
  var globalLabels = GmailApp.getUserLabels();

  threads.forEach(function (thread) {
    if(thread.getFirstMessageSubject() === "Log in to Monzo") {
      if(!thread.isUnread()) {
        // archive it
        thread.moveToArchive();
      }
    }
  });
}
