function main() {
var example_array = [5, 1, 3, 2, 4, 6, 8, 7, 10, 9];

function bubble_sorter(arr) {
	function fuck(array) {
		yeet = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				yeet = true
				var temp = array[i + 1];
				array[i + 1] = array[i];
				array[i] = temp;
			}
		}
	}
	do { fuck(arr); } while (yeet);
}

//sorts
bubble_sorter(example_array);
//prints sorted
console.log(example_array);

}