'use strict';
var error_report = new Ger({
	url:'xxxxx',
	failTime : 3,
	tryPeep: true,
	peepSystem: true,
	repeat:10000,
	peepConsole: true
});

//error_report.info('111111111');

//error_report.on();
/*error_report.on('error',function(){
	console.log(234546576879)
});*/

localStorage.setItem('a', '123245678');
/*setTimeout(function(){
	console.log(1111)
},1000);
*/
console.log(1)