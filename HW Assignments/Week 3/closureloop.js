function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
		var item = function(x, i){
			return function(){
				console.log('item' + i + ' ' + x);
			}
		}(list[i], i)
        result.push(item);
    }
    return result;
}
 
function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}
testList();
