var tabsA = document.getElementById("tabA").getElementsByTagName("li");
	var divsA = document.getElementById("tabAContent").getElementsByTagName("div");
	var tabsB = document.getElementById("tabB").getElementsByTagName("li");
	var divsB = document.getElementById("tabBContent").children;
	for (var i = 0;i < tabsA.length;i++) {
		tabsA[i].onclick = function() {
			changeA(this);
		}
	}
	for (var i = 0;i < tabsB.length;i++) {
		tabsB[i].onclick = function() {
			changeB(this);
		}
	}
	function changeA(obj) {
		for (var i = 0;i < tabsA.length;i++) {
			if (tabsA[i] == obj) {
				tabsA[i].className = "ali";
				divsA[i].className = "adiv";
			} else {
				tabsA[i].className = "";
				divsA[i].className = "";
			}
		}
	}
	function changeB(obj) {
		for (var i = 0;i < tabsB.length;i++) {
			if (tabsB[i] == obj) {
				tabsB[i].className = "bli";
				divsB[i].className = "bdiv";
			} else {
				tabsB[i].className = "";
				divsB[i].className = "";
			}
		}
	}