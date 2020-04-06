function ebj_update_availability(frmSelect,json_avail,start_stock){

	var avail_span = document.getElementById('ebj_available');
	var avail_arr = JSON.parse(json_avail);
	var add_button = document.getElementById('ebj_add_cart_btn');
	var pre_span = document.getElementById('ebj_pre_text');
	var stock_color;
	var stock_text;
	var display_date;
	
	var pre_block = document.getElementById('ebj_preorder_v3');
	var pre_date_contain = document.getElementById('ebj_eta');	
	
	if(avail_arr[frmSelect.value]){
		
		pre_span.style.display = 'none';
	
		if(avail_arr[frmSelect.value] == 'in'){
			stock_color = '#1f9316';
			stock_text = 'In Stock';
			pre_block.style.display = 'none';
			add_button.style.display = 'block';
		}
		else if(avail_arr[frmSelect.value] != 'out'){
			stock_color = '#f15a23';
			stock_text = 'Pre-Order Only';
			pre_block.style.display = 'block';
			add_button.style.display = 'block';
			
			if(avail_arr[frmSelect.value])
				display_date = avail_arr[frmSelect.value] + '*';
			else
				display_date = 'Select switch type';
			
			if('textContent' in pre_date_contain)
				pre_date_contain.textContent = display_date;
			else
				pre_date_contain.innerText = display_date;
		}
		else{
			stock_color = '#f92400';
			stock_text = 'Out of Stock';
			pre_block.style.display = 'none';
			add_button.style.display = 'none';
		}
	}
	else{
		pre_span.style.display = 'block';
		pre_block.style.display = 'none';
		stock_color = start_stock[0];
		stock_text = start_stock[1];
	}
	
	avail_span.style.backgroundColor = stock_color;
	
	if('textContent' in avail_span)
		avail_span.textContent = stock_text;
	else
		avail_span.innerText = stock_text;
}