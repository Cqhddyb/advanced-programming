# 2 类和对象提高

## 静态成员变量

先思考一个问题，同类的对象如何共享一个数据？比如同一个俱乐部的球员如何共享俱乐部开销这个数据？同一个班的学生如何共享班级人数这个数据？

按照我们之前所学的知识，可能会想到用全局变量来维护共享的数据。然而这样做有很大的问题，首先，全部变量并不和某个特定类绑定，与对象之间缺少显式的联系，比如1班的班级人数，2班也能访问甚至修改，这也表现出另一个问题，数据缺少保护！

采用静态数据成员可以更好地实现同一个类的不同对象之间的数据共享，类的静态数据成员对该类的所有对象只有一个拷贝。例如

    class A
    { 
    int y;
    ......
    static int x; //静态数据成员声明
    void f()   { y = x; x++; ......   }
    };

    int A::x=0; //静态数据成员定义及初始化
    ......
    A a,b;
    a.f();
    b.f();
    //上述操作对同一个x进行
    x++; //Error，不通过A类对象不能访问x！

再例如：

    class A
    {	  int x,y;
        static int shared; 
        public:
        A() { x = y = 0; }
        void increase_all() { x++; y++; shared++; }
        int sum_all() const { return x+y+shared; }
        ......
    };
    int A::shared=0; 
    a1.increase_all();
    cout << a2.sum_all() << endl;  //输出：1

成员函数也可以声明成静态的（静态成员函数）。静态成员函数只能访问类的静态成员，且没有隐藏的this参数！静态成员除了通过对象来访问外，也可以直接通过类来访问。

例如：

    class A 
    {      static int obj_count;
            …...
    public:
        A()  //在所有构造函数中增加：obj_count++;
        { obj_count++; ...... }
        ~A()  //在析构函数中增加：obj_count--;
        { obj_count--; ...... }
        static int get_num_of_objects() 
        { return obj_count; }
        ···
    };
    int A::obj_count=0;
    ...... //其中创建了一系列A类对象
    cout << A::get_num_of_objects(); //输出A类对象的个数


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