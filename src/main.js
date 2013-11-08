define(
    function (require) {
        /**
         * main模块，没啥用
         */
        var main = {
            version: '3.3.0',

            /**
             * 启动ER框架
             */
            start: function () {
                require('./controller').start();
                require('./router').start();
                require('./locator').start();
            }
        };
        
        return main;
    }
);
