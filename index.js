App.controller('home', function (page) {

//從local storage抓資料存到 choice_list 變數裡。若無，產生2個。

	let choice_list = ['1', '2'];

	//先清除所有
	$(page)
	.find('#choice_section').empty();

	for(let i=0;i<choice_list.length; i++){
		$(page)
		.find('#choice_section')
		.append('選項' + (i+1) + '：<input class="app-input" id="choice' + i + '" value="'+ choice_list[i] + '">');
	}

	$(page)
		.find('#start_button')
		.on('click', function () {


			let i = 0;
			let c_id = '';

			c_id = setInterval(startRandom, 10);

			function startRandom(){

				random_value = getRandomArbitrary(0, choice_list.length-1);
				id = 'choice' + random_value;

				if( document.getElementById(id)!== null){
					result = document.getElementById(id).value;
				}else{
					console.log('找不到元素其id為:', id)
				}

				//顯示結果
				document.getElementById('result').innerHTML = result;


				i++;
				if(i==100){
					clearInterval(c_id);
					document.getElementById('result').innerHTML = '<h1>' + result + '</h1>';
				}


			}



		});

	$(page)
		.find("#add_item")
		.on('click', function(){
			let newChoiceNumber = choice_list.length;

			choice_list.push('');
			console.log('新的choice_list:', choice_list);

			//先清除所有
			$(page)
			.find('#choice_section').empty();

			for(let i=0;i<choice_list.length; i++){
				$(page)
				.find('#choice_section')
				.append('選項' + (i+1) + '：<input class="app-input" id="choice' + i + '" value="'+ choice_list[i] + '">');
			}

		});

	$(page)
		.find("#minus_item")
		.on('click', function(){
			// alert('minus')

			//移除陣列最後一個元素
			choice_list.splice(-1,1);

			//先清除所有
			$(page)
			.find('#choice_section').empty();

			for(let i=0;i<choice_list.length; i++){
				$(page)
				.find('#choice_section')
				.append('選項' + (i+1) + '：<input class="app-input" id="choice' + i + '" value="'+ choice_list[i] + '">');
			}


		});
});


App.controller('page2', function (page) {
	// put stuff here
});


try {
	App.restore();
} catch (err) {
	App.load('home');
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function refreshChoice(){

}