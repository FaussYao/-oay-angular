请检查您报错的editComponent 文件 [ **** - > Router] ， 一般这里 *** 是什么， 就是这个文件中 用了router 的写法 ，
但是， 你的appModule中没有配置路由 或 配置了但没有与 此处 *** 这个文件 相关的路由配置；
另一个重点在这里： No provider for Router?
注：没有配置路由 html 中 写routerLink="." 会报错
ts文件中构造函数注入了Router等，并使用，但并没有路由， 会报错