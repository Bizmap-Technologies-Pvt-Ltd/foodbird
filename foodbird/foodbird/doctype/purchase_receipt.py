import frappe


def Attachment_validation(doc,method):
    if frappe.db.exists("File", {"attached_to_name":doc.name}):
       pass
    else:
        frappe.throw("Attachment is mandatory please Attach your file")   
