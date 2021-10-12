const rateNum = localStorage.getItem('rate');
const rateText = localStorage.getItem('rateText');

class Rate {
	rate: string;
	rateMessage: string;
	parent: string;
	item: string;
	textareaBlock: HTMLElement;
	btn: HTMLButtonElement;
	textarea: HTMLTextAreaElement;
	constructor(selector: string, rate: string, rateMessage: string) {
		this.rate = rate;
		this.rateMessage = rateMessage;
		this.parent = selector;
		this.item = selector + '-item';
		this.textareaBlock = document.querySelector(selector + '-comment-block');
		this.btn = document.querySelector(selector + '-comment-btn');
		this.textarea = document.querySelector(selector + '-comment');
		if (document.querySelector(this.parent)) {
			this.initRate();
			this.getComment();
		}
	}
	initRate() {
		document.querySelectorAll(this.item).forEach((star) => {
			if (this.rate != null) {
				this.getActiveRate(this.rate);
				this.checkRate(+this.rate);
			} else {
				star.addEventListener('click', () => {
					if (star instanceof HTMLElement) {
						const starRate = this.getStarRate(star);
						localStorage.setItem('rate', starRate);
						this.checkRate(+starRate);
						this.getActiveRate(starRate);
					}
				});
			}
		});
	}
	getStarRate(element: HTMLElement): string {
		return element.dataset.rate;
	}
	getActiveRate(rate: string) {
		document.querySelectorAll(this.item).forEach((star) => {
			let starRate = null;
			if (star instanceof HTMLElement) {
				starRate = +star.dataset.rate;
			}
			if (starRate != +rate) {
				star.classList.add('article__rate-item-disabled');
			} else {
				star.classList.add('article__rate-item-active');
			}
		});
	}
	checkRate(rate: number) {
		if (rate <= 3) {
			this.textareaBlock.style.display = 'block';
		}
	}
	getComment() {
		if (this.rateMessage) {
			this.textarea.value = this.rateMessage;
			this.textareaComment();
		} else {
			this.getCommentByClick();
		}
	}
	getCommentByClick() {
		this.btn.addEventListener('click', () => {
			if (this.textarea.value) {
				this.textareaComment();
				localStorage.setItem('rateText', this.textarea.value);
			} else {
				this.textarea.classList.add('error');
			}
		});
	}
	textareaComment() {
		this.textarea.classList.remove('error');
		this.btn.disabled = true;
		this.btn.textContent = 'Отправлено';
		this.textarea.disabled = true;
	}
}

new Rate('.article__rate', rateNum, rateText);
