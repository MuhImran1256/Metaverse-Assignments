var arrPlacesOri = ["SWAT VALLEY", "HUNZA VALLEY", "YARKHUN VALLEY", "PHANDER LAKE", "BROGHIL VALLEY"]
console.log(arrPlacesOri) 								//Print your array in its original order.  
var arrPlacesDup = arrPlacesOri.slice(); 	
console.log(arrPlacesDup.sort());    			// Store the locations in a array. Make sure the array is not in alphabetical order. Print your array in alphabetical order without modifying the actual list.                                                          
console.log(arrPlacesDup.reverse());			//Show that your array is still in its original order by printing it.                                                                
console.log(arrPlacesOri);								//Print your array in reverse alphabetical order without changing the order of the original list.                                    
console.log(arrPlacesDup.reverse());			//Show that your array is still in its original order by printing it again.                                                          
var arrPlaces3 = arrPlacesOri;//                                                         
console.log(arrPlaces3.reverse())					//Reverse the order of your list. Print the array to show that its order has changed.                                                                                                                                                                                                                                        
console.log(arrPlaces3.reverse())					//Reverse the order of your list again. Print the list to show it’s back to its original order.                                      
console.log(arrPlaces3.sort())            //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.                     
console.log(arrPlaces3.reverse())         //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.        
                                          