function SUBSclicked(root, node){
	for(var cust in cust_subscriptions_ids){
		for(var i=0;i<cust_subscriptions_ids[cust].length;i++){
			if(node.id==cust_subscriptions_ids[cust][i]){
				//if(!(node.children || node._children)){
					console.log("subs"+cust+node.id);
					onClick_Business("customers/customer/"+cust+"/service-subscriptions/service-subscription/"+node.id);
					var new_response_json=response;	
					var check=0;
					for(var key in new_response_json){
						if(key=="service-instances"){
							check=1;
						}
					}
					if(check==1){
						for(var i=0;i<(new_response_json["service-instances"]["service-instance"]).length;i++){
							inst_cust_subs_ids[(new_response_json["service-instances"]["service-instance"][i]["service-instance-id"])]=[cust,node.id];
						}	
						specific_subscription_graph(node, new_response_json);
						    specific_subscription_table(new_response_json);
					}
				//}
				return 1;
			}
		}	
		
	}
	return 0;
	

}