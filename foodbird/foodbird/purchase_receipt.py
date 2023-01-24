import frappe

def on_submit(doc,method):
    check_attachement(doc)

def check_attachement(doc):
    attached_file = frappe.db.get_value('File', {'attached_to_doctype':doc.doctype, 'attached_to_name':doc.name}, 'name')
    if not attached_file:
        frappe.throw("Please attach file before submit")
