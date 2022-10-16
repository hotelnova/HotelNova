// Copyright (c) 2022, Hotel Nova and contributors
// For license information, please see license.txt

frappe.ui.form.on('Check In HN', {
	// refresh: function(frm) {

	// }
});
frappe.ui.form.on("Check In Room HN", {
  setup: function(frm) {
    // setting query for rooms to be visible in list
    frm.set_query("rooms", function(doc) {
      return {
        filters: {
          room_status: "Available"
        }
      };
    });
    }
});
