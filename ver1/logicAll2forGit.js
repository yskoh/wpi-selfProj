//제일 첫번째 시도
//2015 2월에...
var choicesMe =[
	[],
	[],
	[]
]

document.getElementById('buttonOne').addEventListener('click', function(){
	if(choicesMe[0].length>0){
		alert("you cannot push submit twice. Please refresh and start again");
	}
	choicesMe[0].push(document.getElementById('oneChoice1').value);
	choicesMe[0].push(document.getElementById('oneChoice2').value);
	choicesMe[0].push(document.getElementById('oneChoice3').value);
	for(var i=0; i<choicesMe[0].length; i++){
		if(choicesMe[0][i] >30){
			alert("input again, bigger than 30");
		}
	}
	
});


document.getElementById('buttonTwo').addEventListener('click', function(){
	if(choicesMe[1].length>0){
		alert("you cannot push submit twice. Please refresh and start again");
	}
	var twoChoice1 = document.getElementById('twoChoice1').value;
	var twoChoice2 = document.getElementById('twoChoice2').value;
	var twoChoice3 = document.getElementById('twoChoice3').value;
	var twoChoice4 = document.getElementById('twoChoice4').value;

	choicesMe[1].push(twoChoice1);
	choicesMe[1].push(twoChoice2);
	choicesMe[1].push(twoChoice3);
	choicesMe[1].push(twoChoice4);
	for(var i=0; i<choicesMe[1].length; i++){
		if(choicesMe[1][i] >30){
			alert("input again, bigger than 30");
		}
	}
});

//몰라서 우선 밖으로 빼놨다..
var chartjsData1 = [];
// var yourType;

document.getElementById('buttonThree').addEventListener('click', function(){
	if(choicesMe[2].length>0){
		alert("you cannot push submit twice. Please refresh and start again");
	}
	var threeChoice1 = document.getElementById('threeChoice1').value;
	var threeChoice2 = document.getElementById('threeChoice2').value;
	var threeChoice3 = document.getElementById('threeChoice3').value;
	var threeChoice4 = document.getElementById('threeChoice4').value;
	var threeChoice5 = document.getElementById('threeChoice5').value;

	choicesMe[2].push(threeChoice1);
	choicesMe[2].push(threeChoice2);
	choicesMe[2].push(threeChoice3);
	choicesMe[2].push(threeChoice4);
	choicesMe[2].push(threeChoice5);
	for(var i=0; i<choicesMe[2].length; i++){
		if(choicesMe[2][i] >30){
			alert("input again, bigger than 30");
		}
	}

	var checkNum=[];
	for(var i=0; i<choicesMe.length; i++){
		for( var j=0; j< choicesMe[i].length; j++){
			// debugger;
			checkNum.push(choicesMe[i][j]);
			// console.log(checkNum);
		}
	}
	for(var k= 1; k<checkNum.length; k++){
		for(var l=0; l<k; l++){
			if(checkNum[k] === checkNum[l]){
				alert("only one number can be chosen");
				//배열을 비운다-- 결과가 나오지 않게..
			}
		}    
	}
	console.log(choicesMe);
	///************요기요기요기
	var finalResult = testMe(choicesMe);
	var largest=0;

	for (var key in finalResult) {
	  if (finalResult.hasOwnProperty(key)) {
	  	chartjsData1.push(finalResult[key]);  
	  }
	  // debugger;
	  if(largest < finalResult[key]){
	  	largest = finalResult[key];
	  }
	}
	for (var key in finalResult) {
		if(finalResult[key]==largest){
			var yourType = key;
			console.log(yourType);
			console.log(typeof(yourType)); 
			document.getElementById("yourType").innerHTML = yourType;
		}
	}
	// debugger;
	// chartGraph(chartjsData1);
	console.log(finalResult);
});


var choices =[
	[],
	[],
	[]
]

document.getElementById('button1').addEventListener('click', function(){
	if(choices[0].length>0){
		alert("you cannot push submit twice. Please refresh and start again");
	}
	choices[0].push(document.getElementById('firstChoice1').value);
	choices[0].push(document.getElementById('firstChoice2').value);
	choices[0].push(document.getElementById('firstChoice3').value);
	for(var i=0; i<choices[0].length; i++){
		if(choices[0][i] >30){
			console.log("input again, bigger than 30");
		}
	}
});


document.getElementById('button2').addEventListener('click', function(){
	if(choices[1].length>0){
		alert("you cannot push submit twice. Please refresh and start again");
	}
	var secChoice1 = document.getElementById('secChoice1').value;
	var secChoice2 = document.getElementById('secChoice2').value;
	var secChoice3 = document.getElementById('secChoice3').value;
	var secChoice4 = document.getElementById('secChoice4').value;

	choices[1].push(secChoice1);
	choices[1].push(secChoice2);
	choices[1].push(secChoice3);
	choices[1].push(secChoice4);
	for(var i=0; i<choices[1].length; i++){
		if(choices[1][i] >30){
			console.log("input again, bigger than 30");
		}
	}
});


var chartjsData2 = [];

document.getElementById('button3').addEventListener('click', function(){
	if(choices[2].length>0){
		alert("you cannot push submit twice. Please refresh and start again");
	}
	var thirdChoice1 = document.getElementById('thirdChoice1').value;
	var thirdChoice2 = document.getElementById('thirdChoice2').value;
	var thirdChoice3 = document.getElementById('thirdChoice3').value;
	var thirdChoice4 = document.getElementById('thirdChoice4').value;
	var thirdChoice5 = document.getElementById('thirdChoice5').value;

	choices[2].push(thirdChoice1);
	choices[2].push(thirdChoice2);
	choices[2].push(thirdChoice3);
	choices[2].push(thirdChoice4);
	choices[2].push(thirdChoice5);
	for(var i=0; i<choices[2].length; i++){
		if(choices[2][i] >30){
			console.log("input again, bigger than 30");
		}
	}

	var checkNum=[];
	for(var i=0; i<choices.length; i++){
		for( var j=0; j< choices[i].length; j++){
			// debugger;
			checkNum.push(choices[i][j]);
			// console.log(checkNum);
		}
	}
	for(var k= 1; k<checkNum.length; k++){
		for(var l=0; l<k; l++){
			if(checkNum[k] === checkNum[l]){
				console.log("only one number can be chosen");
				//배열을 비운다-- 결과가 나오지 않게..
			}
		}    
	}
	console.log(choices);
	///************요기요기요기
	var finalResult2 = test(choices);

	for (var key in finalResult2) {
	  if (finalResult2.hasOwnProperty(key)) {
	  	chartjsData2.push(finalResult2[key]);  
	  }
	}
	// debugger;
	console.log(finalResult2);
});

document.getElementById('finalBtn').addEventListener('click', function(){
	//innerHTML
	chartGraph(chartjsData1,chartjsData2);
	document.getElementById("yourType").style.display= 'block';
});

function test(choices){
	var types =['relation', 'trust', 'manual', 'self', 'culture'];
	var result ={};
	for(var i=0; i<types.length; i++){
		// debugger;
		var list = sortByTypeOther(choices, types[i]);
		var value = calculate(list);
		result[types[i]] = value;
	}
	return result;
}
/////////////////////다시 해보
function sortByTypeOther(choices, type){
	var superlist = [];

	for(var order=0; order<choices.length; order++){
		var sublist = [];
		var orderList = choices[order];
		for(var i=0; i<orderList.length; i++){
			var num= orderList[i];
			if(findTypeOther(num) === type){
				sublist.push(num);
			}
		}
		superlist.push(sublist);
	}

	return superlist;

 }

function testMe(choicesMe) {
	var types = ['realist', 'romantist', 'humanist', 'idealist', 'agent'];
	var result = {};
	for (var i = 0; i < types.length; i++) {
		// debugger;
		var list = sortByType(choicesMe, types[i]);
		var value = calculate(list);
		// console.log(value);

		result[types[i]] = value;
	}
	return result;
}
//for personality
function assignValue(num){
	var weight = null;

	if(num==1){
		// confidential
	}
	else if(num==2){
		// confidential
	}
	else if(num==3){
		// confidential
	}

	return weight;
};

//importance
function assignValueO(num){
	var weight = null;
	// confidential
	return weight;
};

//array받아
function sortByType(choicesMe, type){
	//for(var i = 0; i < 5; i++){
	var superlist = [];
	for(var order = 0; order < choicesMe.length; order++){
		
		var sublist = [];
		var orderList = choicesMe[order];
		for(var i = 0; i < orderList.length; i++){
			var num = orderList[i];

			if (findType(num) === type) {
				sublist.push(num);
			}
			// if(type == i){
			// 	sublist[j] = array[k].value;
			// }
		}
		superlist.push(sublist);
		// [i] = sublist[j];
	}

	//}
	return superlist;
}

function findType(num) {
	
	switch(num % 5) {
		case 0: return 'agent';
		case 1: return 'realist';
		case 2: return 'romantist';
		case 3: return 'humanist';
		case 4: return 'idealist';
	}
}

function findTypeOther(num) {
	
	switch(num % 5) {
		case 0: return 'culture';
		case 1: return 'relation';
		case 2: return 'trust';
		case 3: return 'manual';
		case 4: return 'self';
	}
}

function calculate(superlist){
	var sum1=0, sum2=0, sum3 = 0;
	// var weight = [7,5,3];
	var i=0;
	// for(var i=0; i < superlist.length; i++){
	while(i < superlist.length){
		// debugger;
		if(i==0){
			for(var j=0; j< superlist[i].length; j++){
				var add1 = 7 * assignValue(superlist[i][j]);
				sum1 +=add1; 
				console.log("1:"+sum1);
			}
		}
		else if(i==1){
			for(var j=0; j< superlist[i].length; j++){
				// console.log(superlist[i][j]);
				// console.log(typeof(superlist[i][j]));
				var add2 = 5 * assignValue(superlist[i][j]);
				sum2 +=add2; 
				console.log("2:"+sum2);
			}
		}
		else if(i==2){
			for(var j=0; j< superlist[i].length; j++){
				var add3 = 3 * assignValue(superlist[i][j]);
				sum3 +=add3;
				console.log("3:"+sum3); 
			}
		}
		i++;
	}
	var total = sum1 + sum2 + sum3;
	console.log(total);
	return total;
}
function chartGraph(chartjsData1, chartjsData2){
        var data = {
          labels : ["Agent","Realist","Romantist","Humanist","Idealist"],
          datasets : [
            {
              label: "personality type",
              fillColor : "#3662B7",
              strokeColor : "#3662B7",
              pointColor : "#3662B7",
              pointStrokeColor : "#3662B7",
              data : chartjsData1
            },
            {
              label:"what's important for me",
              fillColor : "#C0D5EA",
              strokeColor : "#C0D5EA",
              pointColor : "#C0D5EA",
              pointStrokeColor : "#C0D5EA",
              data : chartjsData2
            }
          ]
        };

        var options={
          datasetFill:false,
          bezierCurve: false,
          scaleOverride: true,
          scaleSteps: 10,
          scaleStepWidth: 10,
          scaleStartValue: 0,
          scaleEndValue: 100
        }
        var graph = document.getElementById('graph').getContext('2d');
        new Chart(graph).Line(data, options);    
      }

function calculate(superlist){
	var sum1=0, sum2=0, sum3 = 0;
	// var weight = [7,5,3];
	var i=0;
	// for(var i=0; i < superlist.length; i++){
	while(i < superlist.length){
		// debugger;
		if(i==0){
			for(var j=0; j< superlist[i].length; j++){
				var add1 = 7 * assignValueO(superlist[i][j]);
				sum1 +=add1; 
				console.log("1:"+sum1);
			}
		}
		else if(i==1){
			for(var j=0; j< superlist[i].length; j++){
				// console.log(superlist[i][j]);
				// console.log(typeof(superlist[i][j]));
				var add2 = 5 * assignValueO(superlist[i][j]);
				sum2 +=add2; 
				console.log("2:"+sum2);
			}
		}
		else if(i==2){
			for(var j=0; j< superlist[i].length; j++){
				var add3 = 3 * assignValueO(superlist[i][j]);
				sum3 +=add3;
				console.log("3:"+sum3); 
			}
		}
		i++;
	}
	var total = sum1 + sum2 + sum3;
	console.log(total);
	return total;
}
function chartGraph(chartjsData1, chartjsData2){
        var data = {
          labels : ["Realist","Romantist","Humanist","Idealist", "Agent"],
          datasets : [
            {
              label: "personality type",
              fillColor : "#3662B7",
              strokeColor : "#3662B7",
              pointColor : "#3662B7",
              pointStrokeColor : "#3662B7",
              data : chartjsData1
            },
            {
              label:"what's important for me",
              fillColor : "#C0D5EA",
              strokeColor : "#C0D5EA",
              pointColor : "#C0D5EA",
              pointStrokeColor : "#C0D5EA",
              data : chartjsData2
            }
          ]
        };

        var options={
          datasetFill:false,
          bezierCurve: false,
          scaleOverride: true,
          scaleSteps: 5,
          scaleStepWidth: 20,
          scaleStartValue: 0,
          scaleEndValue: 100
        }
        var graph = document.getElementById('graph').getContext('2d');
        new Chart(graph).Line(data, options);    
      }