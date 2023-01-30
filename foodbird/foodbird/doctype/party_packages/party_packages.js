// Copyright (c) 2023, bizmap technologies pvt ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('Party Packages', {
      
	food_package_template(frm) {
	if(frm.doc.food_package_template !=""){
        frappe.model.with_doc("Package Template", frm.doc.food_package_template, function() {
            var itemschild_data = frappe.model.get_doc("Package Template", frm.doc.food_package_template)

            if (itemschild_data.package_menu) {
                frm.clear_table('food_package');
                $.each(itemschild_data.package_menu,
                    function(index, row) {
                        var d = frm.add_child('food_package');
                        d.food = row.food
                        frm.refresh_field("food_package")

                    })

            }

        })

    }
  }
	
})



    
