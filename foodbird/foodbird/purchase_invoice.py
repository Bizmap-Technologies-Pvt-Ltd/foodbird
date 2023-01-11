import frappe
from foodbird.foodbird.purchase_receipt import check_attachement

def on_submit(doc,method):
    check_attachement(doc)
