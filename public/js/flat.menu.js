class FlatMenu {
	constructor(options) {
		this.wrap = options.wrap;
		this.visible = options.visible;
		this.hidden = options.hidden;
		this.button = options.button;
		this.toStartTransform = options.toStartTransform;
		this.toEndTransform = options.toEndTransform;

		this.visibleItems = Array.prototype.slice.call(this.visible.children, 0);
		this.more = this.visibleItems.pop();
		this.hiddenItems = [];

		this.update();
	}

	update() {
		console.log(this.wrap.clientWidth, this.availableSpace, this.sumVisibleItems())
		if(this.availableSpace < this.sumVisibleItems() && this.visibleItems.length > 2) {
			this.toEnd();			
		} else if(this.hiddenItems.length > 0) {
			this.toStart();
		}
	}

	toStart() {
		let item = this.hiddenItems.shift();

		if(this.hiddenItems.length == 0) {
			this.more.classList.add('hidden');
		}

		this.visibleItems.push(item);

		this.visible.insertBefore(item, this.visible.children[this.visible.children.length - 1]);

		this.toStartTransform(item);

		if(this.availableSpace < this.sumVisibleItems()) {
			this.toEnd();
		}
	}

	toEnd() {
		let item = this.visibleItems.pop();
		if(this.hiddenItems.length == 0) {
			this.more.classList.remove('hidden');
		}

		this.hiddenItems.unshift(item);
		this.hidden.insertBefore(item, this.hidden.children.firstChild);

		this.toEndTransform(item);

		if(this.availableSpace < this.sumVisibleItems() && this.visibleItems.length > 2) {
			this.toEnd();
		}
	}

	sumVisibleItems() {
		return this.visibleItems.reduce(function (prev, curr) {
			return prev + curr.clientWidth
		}, 0);
	}

	get availableSpace() {
		return this.wrap.clientWidth - this.more.clientWidth
	}
}
