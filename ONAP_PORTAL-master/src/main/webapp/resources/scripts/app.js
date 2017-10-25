


var app = angular.module('App',[]);

var stateView = ['listRouters'];
var stateUrl = ['/listRouters'];
var stateTemplateUrl = ['resources/WEB-INF/listRouters.jsp'];
var stateCtrl = ['routerConfigCtrl'];
var stateTitle = ['List Routers'];


		app.controller('mainCtrl',function($scope,$http){
			$scope.label = "Show Json Data Comparison";

			//$scope.dispalyKeys1 = [];
			function getJson(){
				
				$http.get('/resources/scripts/copysample.json')
			       .then(function(res){
			          $scope.sample1 = res.data;
			          angular.forEach($scope.sample1,function(value,key){
			        	  $scope[key] = [];
			        	  $scope[key] = tryJson(value);
			        	  console.log(key + '-'+ JSON.stringify($scope['jsonArray'+ key]));
			          });
			    });
			};
			getJson();
			function isJson(item) {
	            item = typeof item !== "string"
	                ? JSON.stringify(item)
	                : item;

	            try {
	                item = JSON.parse(item);
	            } catch (e) {
	                return false;
	            }

	            if (typeof item === "object" && item !== null) {
	                return true;
	            }
	            return false;
	        }
			
			
			
			function tryJson(data){
				var keyArray1=[];
				var valArray1 = [];
				angular.forEach(data,function(value1,key1){
					if(isNaN(key1)){
						var obj = {};
						if(!isJson(value1)){
							obj[key1] = value1;
							keyArray1.push(obj);
						}else{
							obj[key1] = 'Parent';
							keyArray1.push(obj);
							angular.forEach(value1,function(value2,key2){
								if(isNaN(key2)){
									var obj = {};
									if(!isJson(value2)){
										obj[key2] = value2;
										keyArray1.push(obj);
									}else{
										obj[key2] = 'Child1';
										keyArray1.push(obj);
										angular.forEach(value2,function(value3,key3){
											if(isNaN(key3)){
												var obj = {};
												if(!isJson(value3)){
													obj[key3] = value3;
													keyArray1.push(obj);
												}else{
													obj[key3] = 'Child2';
													keyArray1.push(obj);
													angular.forEach(value3,function(value6,key6){
														if(isNaN(key6)){
															var obj = {};
															if(!isJson(value6)){
																obj[key6] = value6;
																keyArray1.push(obj);
															}else{
																obj[key6] = 'Child3';
																keyArray1.push(obj);
																/*angular.forEach(value3,function(value6,key6){
																
																});*/
															}
														}else{
															//Zero index
															angular.forEach(value6,function(value7,key7){
																if(isNaN(key7)){
																	var obj = {};
																	if(!isJson(value7)){
																		obj[key7] = value7;
																		keyArray1.push(obj);
																	}else{
																		obj[key7] = 'Child3';
																		keyArray1.push(obj);
//																		angular.forEach(value5,function(value6,key6){
//																			
//																		});
																	}
																}
															});
														}
													});
												}
											}else{
												//Zero index
												angular.forEach(value3,function(value5,key5){
													if(isNaN(key5)){
														var obj = {};
														if(!isJson(value5)){
															obj[key5] = value5;
															keyArray1.push(obj);
														}else{
															obj[key5] = 'Child1';
															keyArray1.push(obj);
//															angular.forEach(value5,function(value6,key6){
//																
//															});
														}
													}
												});
											}
										});
									}
								}else{
									//Zero index
									angular.forEach(value2,function(value4,key4){
										if(isNaN(key4)){
											var obj = {};
											if(!isJson(value4)){
												obj[key4] = value4;
												keyArray1.push(obj);
											}else{
												obj[key4] = 'Child1';
												keyArray1.push(obj);
//												angular.forEach(value4,function(value7,key7){
//													
//												});
											}
										}
									});
								}
							});
						}
					}
				});
				$scope.dispalyKeys = angular.copy(keyArray1);
				return keyArray1;
				console.log('DATA :: '+ JSON.stringify($scope.dispalyKeys));
			}
			
			/*function displayValue(data){
				var tempArray1 = [];
				if(keyArray1.length > 0 || valArray1.length > 0){
					angular.forEach(valArray1,function(value,key){
						if(!isNaN(key)){
							angular.forEach(value,function(value1,key1){
								console.log('VAL --  '+JSON.stringify(value1));
								if(isNaN(key1)){
									var obj = {};
									if(!isJson(value1)){
										obj[key1] = value1;
										keyArray1.push(obj);
									}else{
										obj[key1] = 'Child';
										keyArray1.push(obj);
									}
									if(isJson(value1)){
										tempArray1.push(value1)
									}
								}else{
									if(isJson(value1)){ // check string is JSON or not
										angular.forEach(value1,function(value2,key2){
											console.log('VAL 2 --  '+JSON.stringify(value2));
											if(isNaN(key2)){
												var obj = {};
												if(!isJson(value2)){
													obj[key2] = value2;
													keyArray1.push(obj);
												}else{
													obj[key2] = 'Child';
													keyArray1.push(obj);
												}
											}
										});	
									}
								}
							});
						}
					});
					valArray1=[];
					if(tempArray1.length > 0){
						valArray1= angular.copy(tempArray1);
						displayValue(valArray1);
					}
				}else{
					angular.forEach(data,function(value,key){
						if(isNaN(key)){
							var obj = {};
							if(!isJson(value)){
								obj[key] = 'parent';
								keyArray1.push(obj);
							}else{
								obj[key] = 'parent';;
								keyArray1.push(obj);
							}
							valArray1.push(value);
						}else{
							valArray1.push(value);
						}
					});
					displayValue(valArray1);
				}
				$scope.dispalyKeys = angular.copy(keyArray1);
				console.log(JSON.stringify($scope.dispalyKeys));
			}*/
			
		});