// Copyright (c) 2023, bizmap technologies pvt ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on('Party Packages', {
      food_package_template(frm){
      frappe.call({
        method: "frappe.client.get_list",    
        args:{
           doctype: "Package Template",
           filters: [
               ["name",'=',frm.doc.food_package_template]
            ],
       fields: ['food']
      },
      callback:function(r){
           cur_frm.clear_table("food_package")
           cur_frm.refresh_fields("food_package")
           for (let i = 0; i < r.message.length; i++) {
                var childTable = cur_frm.add_child("food_package")
                childTable.food=r.message[i].food
                cur_frm.refresh_fields("food_package")
                
           }
      } 
   }) 
	    
	}
	
})



    
