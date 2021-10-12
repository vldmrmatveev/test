var rateNum = localStorage.getItem('rate');
var rateText = localStorage.getItem('rateText');
var Rate = /** @class */ (function () {
    function Rate(selector, rate, rateMessage) {
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
    Rate.prototype.initRate = function () {
        var _this = this;
        document.querySelectorAll(this.item).forEach(function (star) {
            if (_this.rate != null) {
                _this.getActiveRate(_this.rate);
                _this.checkRate(+_this.rate);
            }
            else {
                star.addEventListener('click', function () {
                    if (star instanceof HTMLElement) {
                        var starRate = _this.getStarRate(star);
                        localStorage.setItem('rate', starRate);
                        _this.checkRate(+starRate);
                        _this.getActiveRate(starRate);
                    }
                });
            }
        });
    };
    Rate.prototype.getStarRate = function (element) {
        return element.dataset.rate;
    };
    Rate.prototype.getActiveRate = function (rate) {
        document.querySelectorAll(this.item).forEach(function (star) {
            var starRate = null;
            if (star instanceof HTMLElement) {
                starRate = +star.dataset.rate;
            }
            if (starRate != rate) {
                star.classList.add('article__rate-item-disabled');
            }
            else {
                star.classList.add('article__rate-item-active');
            }
        });
    };
    Rate.prototype.checkRate = function (rate) {
        if (rate <= 3) {
            this.textareaBlock.style.display = 'block';
        }
    };
    Rate.prototype.getComment = function () {
        if (this.rateMessage) {
            this.textarea.value = this.rateMessage;
            this.textareaComment();
        }
        else {
            this.getCommentByClick();
        }
    };
    Rate.prototype.getCommentByClick = function () {
        var _this = this;
        this.btn.addEventListener('click', function () {
            if (_this.textarea.value) {
                _this.textareaComment();
                localStorage.setItem('rateText', _this.textarea.value);
            }
            else {
                _this.textarea.classList.add('error');
            }
        });
    };
    Rate.prototype.textareaComment = function () {
        this.textarea.classList.remove('error');
        this.btn.disabled = true;
        this.btn.textContent = 'Отправлено';
        this.textarea.disabled = true;
    };
    return Rate;
}());
new Rate('.article__rate', rateNum, rateText);
