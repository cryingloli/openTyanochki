
function Slider() {

    this.imgUrls = [];
    this.imgUrlsRetrofit = [];
    this.btnPrev = null;
    this.btnNext = null;
    this.slideImg = null;
    this.currentImgIndex = 0;
    this.retrofitFlag = true;

    this.init = function (elId, importedUrls, importedUrlsRetrofit) {
        var that = this;

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.btnPrev = el.querySelector('.prev');
        this.btnNext = el.querySelector('.next');
        this.slideImg = el.querySelector('.slider-img');

        //sub to events
        this.slideImg.addEventListener('click', function () {
            that.onRetrofitClick();
        });

        this.btnNext.addEventListener('click', function () {
            that.onBtnNextClick();
        });

        this.btnPrev.addEventListener('click', function () {
            that.onBtnPrevClick();
        });

        //img array

        this.imgUrls = importedUrls;
        this.imgUrlsRetrofit = importedUrlsRetrofit;

        this.slideImg.src = this.imgUrls[this.currentImgIndex];

        //describe defs

        this.onBtnPrevClick = function () {
            if (this.currentImgIndex === 0) {
                this.currentImgIndex = this.imgUrls.length - 1;
                this.slideImg.src = this.imgUrls[this.currentImgIndex];
            }
            else {
                this.currentImgIndex--;
                this.slideImg.src = this.imgUrls[this.currentImgIndex];
            }
        };

        this.onBtnNextClick = function () {
            if (this.currentImgIndex === this.imgUrls.length - 1) {
                this.currentImgIndex = 0;
                this.slideImg.src = this.imgUrls[this.currentImgIndex];
            }
            else {
                this.currentImgIndex++;
                this.slideImg.src = this.imgUrls[this.currentImgIndex];
            }
        };

        this.onRetrofitClick = function () {
            if (this.retrofitFlag) {
                this.slideImg.src = this.imgUrls[this.currentImgIndex];
                this.retrofitFlag = false; 
            }
            else {
                this.slideImg.src = this.imgUrlsRetrofit[this.currentImgIndex];
                this.retrofitFlag = true;
            }
            console.log(this.slideImg.width)
        }



        

    };
}