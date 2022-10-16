// Copyright (c) 2022, Hotel Nova and contributors
// For license information, please see license.txt

frappe.ui.form.on('Check Out HN', {
	// refresh: function(frm) {

	// }
});
frappe.ui.form.on('Check Out Item HN', {
	qty(frm,cdt,cdn){
		var item = locals[cdt][cdn];
		let amt = item.qty * item.rate;
		frappe.model.set_value(cdt, cdn, "amount", amt);
	}
	
})
frappe.ui.form.on("Check Out HN", {
  setup: function(frm) {
    // setting query for rooms to be visible in list
    frm.set_query("room", function(doc) {
      return {
        filters: {
          room_status: "Checked In"
        }
      };
    });
    }
});
