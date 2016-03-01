function createElement(elem) {
	var e = document.createElement(elem);
	return e;
}

function createInput(type) {
	var i = createElement('input');
	i.setAttribute('type', type);
	return i;
}

function createCheckbox() {
	var c = createInput('checkbox');
	return c;
}

function createDiv(content) {
	var d = createElement('div');
	d.innerHTML = content;
	return d;
}

function createButton(content) {
	var b = createElement('button');
	b.innerHTML = content;
	return b;
}

function nestElements(parent, child) {
	parent.appendChild(child);
	return parent;
}

function TodoItem(name, element, checked) {
	if(checked == null) {
		checked = false;
	}
	Object.defineProperties(this, {
		'name': {
			enumerable: true,
			writable: false,
        	value: name
		},
		'element': {
			get: function() { return element; },
        	set: function(value) { element = value; },
			enumerable: true
		},
		'checked': {
			get: function() { return checked; },
        	set: function(value) { checked = value; },
			enumerable: true
		}
	});
}

function TodoList(name) {
	this.TodoItems = [];

	this.addItem = function (content, todoItem) {
		if(todoItem != null) {
			this.TodoItems.push(todoItem);
			return "Success";
		}
		else {
			var d = createDiv('');
			var c = createInput('checkbox');
			nestElements(d, c);
			
			var d2 = createDiv(content)
			d2.setAttribute('style', 'display: inline');

			var b = createButton('X');
			b.setAttribute('style', 'display: none');
			
			var todoItem = new TodoItem(content, d);

			c.addEventListener("click", function(evt) {
				if(this.checked)
				{
					d.classList.add("red");
					d2.classList.add("done");
					b.setAttribute('style', 'display: visible');
					todoItem.checked = true;
				} else {
					d.classList.remove("red");
					d2.classList.remove("done");
					b.setAttribute('style', 'display: none');
					todoItem.checked = false;
				}
			});

			b.addEventListener("click", function(evt) {
				this.parentElement.remove();
			});
			
			nestElements(d, d2);
			nestElements(d, b);
			
			this.TodoItems.push(todoItem);

			return "Success";
		}
	};

	this.removeFinishedItems = function () {
		this.TodoItems = this.TodoItems.filter(function(value) {
			var e = value.element;
			if(value.checked)
				e.remove();
			return value.checked;
		});
	};

	this.removeItem = function(content, todoItem) {
		if(todoItem != null) {
			if(this.TodoItems.contains(todoItem))
			{
				var index = this.TodoItems.indexOf(todoItem);
				var elem = this.TodoItems[index].element;
				this.TodoItems.splice(index, 1);
				elem.remove();
			}
		} else {
			var item = this.TodoItems.filter(function(value) {
				return value.name == content;
			});
			var index = this.TodoItems.indexOf(item);
			this.TodoItems.splice(index, 1);
			item.element.remove();
		}
	};
}

function addToDoItem(parent, child, input) {
	tdlist.addItem(input.value);
	var lastIndex = tdlist.TodoItems.length - 1;
	parent.insertBefore(tdlist.TodoItems[lastIndex].element, child);
	input.value = "";
}

var parent = document.querySelector('span');
var tdlist = new TodoList('Todo');

var inputCtrl = createInput('text');
inputCtrl.addEventListener('keypress', function(evt) {
	var key = evt.which || evt.keyCode;
	if(key === 13) {
		addToDoItem(parent, this, this);
	}
});
nestElements(parent, inputCtrl);

var b = createButton('Add Todo');
b.classList.add('addBtn');
b.addEventListener('click', function(evt) {
	addToDoItem(parent, inputCtrl, inputCtrl);
});
nestElements(parent, b);

var f = createButton('Remove Finished');
f.classList.add('remBtn');
f.addEventListener('click', function(evt) {
	tdlist.removeFinishedItems();
});
nestElements(parent, f);