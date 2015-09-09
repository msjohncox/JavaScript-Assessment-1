//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'haircolor': 'brown'
};

me.name = "Marty Johncox",
me.age = 50,
me.haircolor = "gray";

//2. Iterate the property and key names over the object to console.log. Notice this won't list any of the values (hair color, for example). Instead, it will just show the name of the property (name, age, haircolor)

var text = "";
for (var i in me) {
	console.log(me[i]);
}




