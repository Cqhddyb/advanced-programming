# 2 类和对象提高

## 静态成员变量



## 成员对象与封闭类

## 常成员函数

我们可以把类中的成员函数分成两类：

* 获取对象状态（不改变数据成员的值）

* 改变对象状态（改变数据成员的值）
例如：

        class Date
        {	
        public:
            void set(int y, int m, int d); //改变对象状态
            int get_day(); //获取对象状态
            int get_month(); //获取对象状态
            int get_year(); //获取对象状态
            ......
        }; 

为了防止在一个获取对象状态的成员函数中无意中修改对象的数据成员，可以把它说明成常成员函数。例如，

    class Date
    {	public:
            void set(int y, int m, int d); 
        int get_day() const; //常成员函数
        int get_month() const; //常成员函数
        int get_year() const; //常成员函数
    ......
    }; 

编译器一旦发现在常成员函数中修改数据成员的值，将会报错，但有些修改对象状态的方式不会被指出错误。

例如：

    class A
    {	
        int x;
        char *p;
        public:
            ......
            void f() const 
            { x = 10; //Error
            p = new char[20]; //Error 
            strcpy(p,"ABCD"); //因为没有改变p的值，编译程序认为OK！
            }
    };

另外，因为对常量对象只能调用常成员函数，所以常成员函数还可以被用来规范常量对象可以进行的操作。

例如：

    void f(const Date &d) //d是个常量对象！
    { ... d.get_day() ... //OK
    ... d.get_month() ... //OK
    ... d.get_year() ... //OK
    d.set (2011,3,23); //Error
    }     


## 友元

## 类作为模块