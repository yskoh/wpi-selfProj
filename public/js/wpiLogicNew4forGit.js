//with index3.html
//the one with bootstrap

var selections = [];
var selections2 = [];
var Item = function(num, type, weight, page) {
	this.num= num;
	this.type = type;
	this.weight= weight;
	this.choice= false;
	this.order = -1;
	this.page = page;
}

Item.prototype.setChoice = function(value) {
	this.choice = value;
}
Item.prototype.setOrder = function(value) {
	this.order = value;
}
Item.prototype.getChoice = function() {
	return this.choice;
}
Item.prototype.getType = function(){
	return this.type;
}
Item.prototype.getOrder = function(){
	return this.order;
}
Item.prototype.getWeight = function(){
	return this.weight;
}
Item.prototype.getNum = function(){
	return this.num;
}

var questions = [];

var weights = confidential
for( var i=1; i<=30; i++){
	questions[i] = new Item(i, i%5, weights[i-1], 1);
}
var weights2 = confidential
for( var i=31; i<=60; i++){
	questions[i] = new Item( i-30, (i-30)%5, weights2[i-29], 2);
}

var lists = document.querySelectorAll('li');


for(var i=0;i<lists.length;i++){
	lists[i].addEventListener('click', function(e){
		var elementIndex = Array.prototype.indexOf.call(lists, e.target)+1;
		if(questions[elementIndex].page == 1){
			if (questions[elementIndex].getChoice() === false){
				selections.push(questions[elementIndex]);
				questions[elementIndex].setChoice(true);
				questions[elementIndex].setOrder(selections.length);
				if(selections.length > 12){
					alert("you've already selected your picks");
					return;
				}
				e.target.className = "selected";
			}
			else{
				e.target.classList.remove("selected");
				e.target.lastChild.innerHTML="";
				questions[elementIndex].setChoice(false);
				var index = selections.indexOf(questions[elementIndex]);
				if(index > -1){
					selections.splice(index, 1);
				}
			}
			
			document.getElementById('selectionsBox').innerHTML="";

			for(var i=0; i<selections.length;i++){
				document.getElementById('selectionsBox').innerHTML+= selections[i].getNum() +".";
			}
			document.getElementById('selectionsCopy').value = document.getElementById('selectionsBox').innerHTML;

		}
		else if(questions[elementIndex].page == 2){
			if (questions[elementIndex].getChoice() === false){
				selections2.push(questions[elementIndex]);
				questions[elementIndex].setChoice(true);
				questions[elementIndex].setOrder(selections2.length);
				if(selections2.length > 12){
					alert("you've already selected your picks");
					return;
				}
				e.target.className = "selected";
			}
			else{
				e.target.classList.remove("selected");
				e.target.lastChild.innerHTML="";
				questions[elementIndex].setChoice(false);
				var index = selections2.indexOf(questions[elementIndex]);
				if(index > -1){
					selections2.splice(index, 1);
				}
			}
			
			document.getElementById('selectionsBox2').innerHTML="";

			for(var i=0; i<selections2.length;i++){
				document.getElementById('selectionsBox2').innerHTML+= selections2[i].getNum() +".";
			}
			document.getElementById('selectionsCopy2').value = document.getElementById('selectionsBox2').innerHTML;
		}
	});
}
//***calculating part ***//
var sums =[];
var sums2 =[];

document.getElementById('submitBtn').addEventListener('click', function(e){
	e.preventDefault();

	var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    if(name == "" || email ==""){
        alert('Please input name and email');
        // e.preventDefault();
    }
    else{
    	// ajax request
    	var request = new XMLHttpRequest();
    	var url = "/api/v1/user/click";
    	request.open("POST", url, true);
    	//request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    	//여기서 보내는 데이터는 json타입이니깐~
    	request.setRequestHeader("Content-type", "application/json");

		request.onreadystatechange = function() {
			//Call a function when the state changes.
			//데이터를 보내고, 브라우저에서 보낸 데이터가 처리과정, 서버로 보내는 과정, 돌아오는 과정 등 중 어디에 있는지 계속 확인한다.
		    if(this.readyState == 4 && this.status == 200) {
		        console.log("success");
		    }
		}

		//email의 값 확인하는 로
		var data = {
			'name': document.getElementById('name').value,
			'email': document.getElementById('email').value,
			'selectionsCopy': document.getElementById('selectionsCopy').value,
			'selectionsCopy2': document.getElementById('selectionsCopy2').value
		}
    	request.send(JSON.stringify(data));


    	// draw graph
		for( var type =1; type<5;type++){
			////여기서 타입이 0이면 에이전트로...?
			sums[type-1] = sortAndCalculateByType(selections, type);
			sums2[type-1] = sortAndCalculateByType(selections2, type);
		}
		var type=0;
		sums[4] = sortAndCalculateByType(selections, 0);
		sums2[4] = sortAndCalculateByType(selections2, 0);

		document.querySelector('#graphContainer').style.display="block";
		
		chartGraph(sums, sums2);
    }
});


var sortAndCalculateByType = function(sentArray, type){
		var picked =[];
	for( var i=0; i < sentArray.length; i++){
		if(sentArray[i].getType() === type){
			picked.push(sentArray[i]);
		}
	}
	return calculateSum(picked);
}

var calculateSum = function(picked){
	var total1 =0;
	var total2=0;
	var total3=0;
	var sum=0;

	for(var i=0; i < picked.length; i++){
		if( picked[i].getOrder() <= 3){
			total1 += picked[i].getWeight() *7;
		}
		else if(picked[i].getOrder() <= 7){
			total2 += picked[i].getWeight() *5;
		}else if( picked[i].getOrder() <= 12){
			total3 += picked[i].getWeight() *3;
		}
	}
		sum = total1+total2+total3;	
	return sum;
}

function chartGraph(sums, sums2){
        var data = {
          labels : ["Realist","Romantist","Humanist","Idealist", "Agent"],
          datasets : [
            {
              label: "personality type",
              fillColor : "#3662B7",
              strokeColor : "#3662B7",
              pointColor : "#3662B7",
              pointStrokeColor : "#3662B7",
              data : sums
            }
            ,
            {
              label:"what's important for me",
              fillColor : "#C0D5EA",
              strokeColor : "#C0D5EA",
              pointColor : "#C0D5EA",
              pointStrokeColor : "#C0D5EA",
              data :sums2
            }
          ]
        }

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

document.querySelector("#nextBtn").addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector("#test").classList.toggle('flipped');
});