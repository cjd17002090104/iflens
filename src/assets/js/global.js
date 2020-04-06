<!--//
var async = true;
var def_country = 'US';  // Default Country
var alt_country = 'CA'; // Alternate Country
var ALERT_TITLE = "Attention!";
var ALERT_BUTTON_TEXT = "Ok";
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById);
var form;
var i;
var payment_showing;
var loading_shipping = false;

if (navigator.appVersion.indexOf("MSIE")!=-1) {
	var bName = 'MSIE';
	var temp = navigator.appVersion.split("MSIE");
	var bVer = parseFloat(temp[1]);
} else {
	var bName = navigator.appName;
	var bVer = parseFloat(navigator.appVersion);
}

function getstamp()	{
	date = new Date();
	return date.getTime();
}

function tab_toggle (div) {
	$( document ).ready(function() { jQuery('a[href=\''+div+'\']').trigger('click'); });
}

function goToByScroll (id) {
    $('html,body').animate({ scrollTop: $(id).offset().top}, 'slow');
}

function tab_toggle_click (div) {
	$( document ).ready(function() { jQuery(div).trigger('click'); goToByScroll(div) });
}

function loadDoc(url, postdata, cb_func) {
	var req;
	req = false;
    if (window.XMLHttpRequest) {
    	try { req = new XMLHttpRequest(); } catch(e) { req = false; }
    } else if (window.ActiveXObject) {
       	try { req = new ActiveXObject("Msxml2.XMLHTTP"); } 
		catch(e) { 
			try { req = new ActiveXObject("Microsoft.XMLHTTP"); }
			catch(e) { req = false; }
		}
    }
	if(req) {
		req.open("POST", url, async);
		req.onreadystatechange = function() { 
			if (req.readyState == 4 && req.status == 200 && cb_func != "") {
				eval("cb_"+cb_func+"(req.responseText);");
			}
		}
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.send(postdata);
	}
}

function fillDIV (inner_cont, inner_layer, append) {
	if (w3)
		var e = document.getElementById(inner_layer);
	else if (ie)
		var e = document.all[inner_layer];
	else if (ns)
		var e = document.layers[inner_layer];
		
	if (append == 1) {
		e.innerHTML += inner_cont;
	} else {
		e.innerHTML = inner_cont;
	}
}

function selectAll (frm, item) {
	var e = frm.elements;
	var re = new RegExp("^"+item);
	for (i=0;i<e.length;i++) {
		if (e[i].id != '' && e[i].id.match(re)) {
			e[i].checked = true;
		}
	}
}

function del_event (id) {
	if (jsconfirm()) location.href = 'index.php?l=account&d=deletereg&id='+id+'&tab=6';
}

function jsconfirm (note) {
	if (note == undefined) note = 'Are you sure you want to complete this action?';
	if (confirm(note)) {
		return true;
	} else {
		return false;
	}
}

function cb_updatePrice (txt) {
	var result = txt.split("||");
	if (document.getElementById("product_price")) document.getElementById("product_price").innerHTML = result[0];
	if (document.getElementById("list_price")) document.getElementById("list_price").innerHTML = result[1];
	if (document.getElementById("sale_price")) document.getElementById("sale_price").innerHTML = result[2];
	if (document.getElementById("product_price"+result[3])) document.getElementById("product_price"+result[3]).innerHTML = result[0];
	if (document.getElementById("sale_price"+result[3])) document.getElementById("sale_price"+result[3]).innerHTML = result[2];
}

function cb_getResult (txt) {
	fillDIV(txt, 'message');
}

function cb_revResult (txt) {
	eval(txt);
}

function cb_payResult (txt) {
	var txt_comp =  txt;
	txt_comp = txt_comp.replace(/\n/g, '');
	txt_comp = txt_comp.replace(/\r/g, '');
	txt_comp = txt_comp.replace(/(^\s+)(\s+$)/, '');
	if (txt != "ok") fillDIV(txt, 'message');
	else document.forms['payment'].submit();
}

function rowVisibility (strVisibility, intRowIndex, id) {
	if (navigator.product == "Gecko" && navigator.productSub && navigator.productSub > "20041010" && (navigator.userAgent.indexOf("rv:1.8") != -1 || navigator.userAgent.indexOf("rv:1.9") != -1)) {
		document.getElementById(id).rows[intRowIndex].style.visibility = strVisibility;
	} else if (strVisibility == "visible") {
		if (document.all && document.compatMode && document.compatMode == "CSS1Compat" && !window.opera) {
			document.getElementById(id).rows[intRowIndex].style.display = "block";
		} else if (document.getElementById && document.getElementById(id).rows) {
			document.getElementById(id).rows[intRowIndex].style.display = "table-row";
		}
	} else if (strVisibility == "collapse") {
		document.getElementById(id).rows[intRowIndex].style.display = "none";
	}
}

function cc_type (val, start, div) {
	if (!start) start = 5;
	if (!div) div = 'cc_table';
	if (val == 'Solo' || val == 'Switch') {
		rowVisibility('visible', start, div);
		rowVisibility('visible', start+1, div);
	} else {
		rowVisibility('collapse', start, div);
		rowVisibility('collapse', start+1, div);
	}
}

function clearMessages () {
	fillDIV('', 'message');
}

function updatePrice (frm, url) {
	var e = frm.elements;
	var opts = [];
	var post;
	for (i=0; i<e.length; i++) {
		if (e[i].type == 'select-one') {
			opts.push(e[i].name+"="+escape(e[i].value));
		}
		if ((e[i].type == 'radio' || e[i].type == 'checkbox') && e[i].checked) {
			opts.push(e[i].name+"="+escape(e[i].value));
		}
	}
	post = opts.join("&");
	loadDoc(url, post, 'updatePrice');
}

function check_payment (url) {
	var e = document.forms['payment'].elements;
	var data = [];
	var post;
	for (i=0; i<e.length; i++) {
		if ((e[i].type == 'radio' || e[i].type == 'checkbox') && e[i].checked) {
			data.push(e[i].name+"="+escape(e[i].value));
		}
		if (e[i].type != 'radio' && e[i].type != 'checkbox') data.push(e[i].name+"="+escape(e[i].value));
	}
	post = data.join("&");
	loadDoc(url, post, 'payResult');
}

function check_quickcheckout (url) {
		var e = document.forms['customer_info'].elements;
		var data = [];
		var post;
		for (i=0; i<e.length; i++) {
			if ((e[i].type == 'radio' || e[i].type == 'checkbox') && e[i].checked) {
				data.push(e[i].name+"="+escape(e[i].value));
			}
			if (e[i].type != 'radio' && e[i].type != 'checkbox') data.push(e[i].name+"="+escape(e[i].value));
		}
		post = data.join("&");
		loadDoc(url, post, 'revResult');
}

function edit_event (id) {
	loadDoc('index.php?l=edit_registry', 'id='+id, 'revResult');
}

function hold_order () {
	loadDoc('checkout.php?l=hold_order', '', 'revResult');
}

function ajaxPost (frm, url, result) {
	if (!result) result = 'getResult';
	var e = frm.elements;
	var data = [];
	var i;
	var post;
	for (i=0; i<e.length; i++) {
		if ((e[i].type == 'radio' || e[i].type == 'checkbox') && e[i].checked) {
			data.push(e[i].name+"="+escape(e[i].value));
		}
		if (e[i].type != 'radio' && e[i].type != 'checkbox') data.push(e[i].name+"="+escape(e[i].value));
	}
	post = data.join("&");
	loadDoc(url, post, result);
}

function pause (form_name, perform, message) {
	form = document.forms[form_name];
	if (message != null) var mess = '&mess='+escape(message);
	else var mess = '';
	ajaxPost(form, 'index.php?l=loading'+mess, 'revResult');
	setTimeout("ajaxPost(form, '"+perform+"', 'revResult')", 2000);
}

function update_shipping (form_name, perform, message) {
	form = document.forms[form_name];
	loading_shipping = true;
	if (message != null) {
		var mess = '&mess='+escape(message);
		ajaxPost(form, 'index.php?l=loading'+mess+'&nofocus=1', 'revResult');
	}
	setTimeout("ajaxPost(form, '"+perform+"', 'revResult')", 1000);
}

function cb_shipping (txt) {
	loading_shipping = false;
	eval(txt);
}

function toggle_country (value, type) {
	if (value == '') { value = document.forms['customer_info'].elements['userinfo['+type+'_country]'].value; }
	if (value != def_country && value != alt_country && value != "") {
		document.getElementById(type+'_other').style.display = 'inline';
		document.getElementById(type+'_state').style.display = 'none';
		document.forms['customer_info'].elements['userinfo['+type+'_oset]'].value = '1';
	} else {
		document.getElementById(type+'_other').style.display = 'none';
		document.getElementById(type+'_state').style.display = 'inline';
		document.forms['customer_info'].elements['userinfo['+type+'_oset]'].value = '0';
	}
}

function toggle_country_address (value) {
	if (value == '') { value = document.forms['address_info'].elements['address[country]'].value; }
	if (value != def_country && value != alt_country && value != "") {
		document.getElementById('other').style.display = 'inline';
		document.getElementById('state').style.display = 'none';
		document.forms['address_info'].elements['address[oset]'].value = '1';
	} else {
		document.getElementById('other').style.display = 'none';
		document.getElementById('state').style.display = 'inline';
		document.forms['address_info'].elements['address[oset]'].value = '0';
	}
}

function pop_address (id, type) {
	loadDoc('index.php?l=loading&mess=Please+Wait...', '', 'revResult');
	var post = 'type='+type+'&id='+id;
	setTimeout("loadDoc('index.php?l=pop_address', '"+post+"', 'revResult')", 2000);
}

function toggle_payment (name) {
	if (document.getElementById(name).style.display != 'inline' && document.getElementById(name).style.display != 'block') {
		document.getElementById(name).style.display = 'inline';
		if (payment_showing != null) document.getElementById(payment_showing).style.display = 'none';
		payment_showing = name;
	}
}

function reset_forms (items, form) {
	for (x in items) {
		var titem = items[x];
		var fitem = document.forms[form].elements[titem];
		if (fitem.selectedIndex != null)
			fitem.selectedIndex = 0;
		else
			fitem.value = '';
	}
}

function bill_to_ship (form) {
	if (form.elements['userinfo[same]'].checked) {
		form.elements['userinfo[ship_first_name]'].value		= form.elements['userinfo[bill_first_name]'].value;
		form.elements['userinfo[ship_last_name]'].value			= form.elements['userinfo[bill_last_name]'].value;
		form.elements['userinfo[ship_company_name]'].value		= form.elements['userinfo[bill_company_name]'].value;
		form.elements['userinfo[ship_address1]'].value			= form.elements['userinfo[bill_address1]'].value;
		form.elements['userinfo[ship_address2]'].value			= form.elements['userinfo[bill_address2]'].value;
		form.elements['userinfo[ship_city]'].value				= form.elements['userinfo[bill_city]'].value;
		form.elements['userinfo[ship_state]'].selectedIndex		= form.elements['userinfo[bill_state]'].selectedIndex;
		form.elements['userinfo[ship_other]'].value				= form.elements['userinfo[bill_other]'].value;
		form.elements['userinfo[ship_zip]'].value				= form.elements['userinfo[bill_zip]'].value;
		form.elements['userinfo[ship_country]'].selectedIndex	= form.elements['userinfo[bill_country]'].selectedIndex;
		toggle_country(form.elements['userinfo[ship_country]'].value, 'ship');
		try { update_shipping('customer_info', 'index.php?l=qcshipping&silent=1'); } 
		catch(err) { }
	}
}

function popupImage (full_url, url) {
	 window.open(full_url+'index.php?l=product_images&'+url,'popupImage','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=100,height=100,screenX=150,screenY=150,top=150,left=150');
}

function reload_image (prefix, num) {
	var stamp = getstamp();
	document.images['verify_image'+num].src = prefix+'include/classes/class.iverify.php?'+stamp;
	if (bName == "MSIE" && bVer == 6) {
		alert('Image Reloaded Successfully!');
	}
}

function toggle_div (fname) {
	if (document.getElementById(fname).style.display == 'block')
		document.getElementById(fname).style.display = 'none';
	else 
		document.getElementById(fname).style.display = 'block';
}

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {	
	$('.product-detail-bar li').css("font-family","inherit");
}

//-->
