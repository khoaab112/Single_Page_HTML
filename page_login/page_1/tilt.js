(function() {
    'use strict';
    const tiltElements = document.querySelectorAll('.js-tilt');
    tiltElements.forEach((element) => {
        element.style.transform = 'scale(1.1)';
    });

    // Hàm Tilt
    function Tilt(element, options) {
        this.element = element;
        this.settings = Object.assign({
                maxTilt: 20,
                perspective: 300,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                scale: '1',
                speed: 400,
                transition: true,
                disableAxis: null,
                reset: true,
                glare: false,
                maxGlare: 1
            },
            options
        );
        this.ticking = false;
        this.updateBind = this.update.bind(this);

        this.init();
    }

    Tilt.prototype.init = function() {
        this.updateElementPosition();
        this.addEventListeners();
    };

    Tilt.prototype.addEventListeners = function() {
        this.element.addEventListener('mousemove', this.updateBind);
        if (this.settings.reset) {
            this.element.addEventListener('mouseleave', this.reset.bind(this));
        }
        window.addEventListener('resize', this.onWindowResize.bind(this));
    };

    Tilt.prototype.updateElementPosition = function() {
        var rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
    };

    Tilt.prototype.getValues = function(event) {
        var x, y;
        if (this.fullPageListening) {
            x = event.gamma;
            y = event.beta;
        } else {
            x = (event.clientX - this.left) / this.width;
            y = (event.clientY - this.top) / this.height;
        }
        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
        var tiltX = (this.settings.maxTilt / 2 - x * this.settings.maxTilt).toFixed(2);
        var tiltY = (y * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2);
        var percentageX = x * 100;
        var percentageY = y * 100;
        var angle = Math.atan2(event.clientX - (this.left + this.width / 2), -(event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
        return {
            tiltX: tiltX,
            tiltY: tiltY,
            percentageX: percentageX,
            percentageY: percentageY,
            angle: angle
        };
    };

    Tilt.prototype.update = function(event) {
        if (!this.ticking) {
            requestAnimationFrame(this.updateBind);
            this.ticking = true;

            var values = this.getValues(event);

            if (this.settings.glare) {
                var glareSize = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
                this.glareElement.style.transform = 'rotate(' + values.angle + 'deg) translate(-50%, -50%)';
                this.glareElement.style.opacity = (values.percentageY * this.settings.maxGlare) / 100;
            }

            this.element.style.transform = 'perspective(' + this.settings.perspective + 'px) rotateX(' + (this.settings.disableAxis === 'x' ? 0 : values.tiltY) + 'deg) rotateY(' + (this.settings.disableAxis === 'y' ? 0 : values.tiltX) + 'deg) scale3d(' + this.settings.scale + ', ' + this.settings.scale + ', ' + this.settings.scale + ')';

            if (this.settings.transition && !this.transitionTimeout) {
                this.setTransition();
            }

            this.ticking = false;
        }
    };

    Tilt.prototype.reset = function() {
        this.element.style.transition = 'transform ' + this.settings.speed + 'ms ' + this.settings.easing;
        this.element.style.transform = 'perspective(' + this.settings.perspective + 'px) rotateX(0deg) rotateY(0deg) scale3d(' + this.settings.scale + ', ' + this.settings.scale + ', ' + this.settings.scale + ')';

        if (this.settings.glare) {
            this.glareElement.style.transition = 'opacity ' + this.settings.speed + 'ms ' + this.settings.easing;
            this.glareElement.style.opacity = '0';
        }

        clearTimeout(this.transitionTimeout);
        this.transitionTimeout = setTimeout(function() {
            this.element.style.transition = '';
            if (this.settings.glare) {
                this.glareElement.style.transition = '';
            }
            this.transitionTimeout = null;
        }.bind(this), this.settings.speed);
    };

    Tilt.prototype.setTransition = function() {
        this.element.style.transition = 'transform ' + this.settings.speed + 'ms ' + this.settings.easing;
        if (this.settings.glare) {
            this.glareElement.style.transition = 'opacity ' + this.settings.speed + 'ms ' + this.settings.easing;
        }
    };

    Tilt.prototype.onWindowResize = function() {
        this.updateElementPosition();
    };

    // Khởi tạo hiệu ứng Tilt trên các phần tử có thuộc tính "data-tilt"
    var elements = document.querySelectorAll('[data-tilt]');
    for (var i = 0; i < elements.length; i++) {
        new Tilt(elements[i]);
    }

})();